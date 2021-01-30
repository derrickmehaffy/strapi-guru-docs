---
id: vultr-ansible
title: Vultr Ansible Guide
sidebar_label: Ansible Guide
---

## Ansible playbooks breakdown

For modules used from Ansible-Galaxy / GitHub see the [requirements file](https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/requirements.yml).

Ansible within this template does the following:

### main.yml

1. Loads encrypted Variables from `crypt_vars/all.yml`
2. Loads tf_vars from Terraform via `tf_vars/tf_vars.yml`
3. Runs the Apt role to install a handful of required/useful packages
4. Sets up 3 users: root, devops, and deploy
5. Triggers the `strapi_database.yml` playbook

User definitions are as such (They all have no password set, aka disabled password):

- Root user => initial connection for main.yml, using defined SSH key in Terraform
- Devops user => "Admin" sudo user you should regularly use to connect or allow team members to connect to (adjust to fit your needs) and also used for the database/strapi server setup (stop using root people)
- Deploy user => Strapi's service user, what Strapi runs as

:::warning
Deploy user does not have sudo perms, this is intended!
:::

Apt packages that are installed on both systems are:

- software-properties-common
- build-essential
- net-tools
- zip
- unzip

It will also automatically apply software updates using the `dist` upgrade and automatically remove packages that are no longer needed.

### playbooks/strapi_database.yml

1. Loads encrypted Variables from `crypt_vars/database.yml`
2. Loads tf_vars from Terraform via `tf_vars/tf_vars.yml`
3. Installs MariaDB v10.3
4. Creates a database for Strapi
5. Creates a user for Strapi
6. Sets user permissions on the database
7. Triggers the `strapi_server.yml` playbook

Database name and user are based on the labels you set for the Vultr instances in Terraform, thus the defaults are:

- DB Name: my-strapi-db
- DB User: my-strapi-admin

The password is stored in the `crypt_vars/database.yml` and this file should be encrypted (see instructions below on dealing with Ansible-Vault)

### playbooks/strapi_server.yml

1. Loads encrypted Variables from `crypt_vars/strapi.yml`
2. Loads encrypted Variables from `crypt_vars/database.yml`
3. Loads tf_vars from Terraform via `tf_vars/tf_vars.yml`
4. Installs Node via the version defined in `group_vars/strapi.yml` (default is v14)
5. Installs yarn
6. Installs the [Acme.sh client](https://github.com/acmesh-official/acme.sh) (way better than certbot)
7. Requests Let's Encrypt SSL Cert using Cloudflare DNS-01 Verification
8. Installs Nginx, configures upstream, deploys configs for HTTP => HTTPs
9. Creates the deploy directory and various child directories `/srv/deploy/*`
10. Installs [PM2](https://pm2.io/) globally
11. Sets up PM2 to be loaded on reboot and start previous services
12. Triggers the `strapi_dply.yml` playbook

### playbooks/strapi_dply.yml

First off don't ask why it's named this way, the Ansible linter I use throws errors if I use `deploy` and I'm lazy and don't feel like fixing it. `¯\_(ツ)_/¯`

1. Loads encrypted Variables from `crypt_vars/strapi.yml`
2. Loads encrypted Variables from `crypt_vars/database.yml`
3. Loads tf_vars from Terraform via `tf_vars/tf_vars.yml`
4. Uses the [ansistrano](https://github.com/ansistrano/deploy) deployment system to version deployments and make it easier to rollback if failures happen.
5. Pulls project from Git source
6. Pushes templated `.env` and `ecosystem.config.js` for Strapi and PM2
7. Installs node_modules (using yarn, fuck npm)
8. Builds the Strapi Admin **in production mode** (Stop deploying dev servers)
9. Starts/Reloads Strapi application

Eventually I want to add checking to ensure the Strapi project started correctly and do an automated DB backup. Should failures occur then it would run the rollback playbook and restore the DB from the backup.

### playbooks/strapi_rollback.yml

:::info
This feature is not developed yet
:::

## Ansible Requirements

First off, if you are not familiar with Ansible-Vault what are you doing with your life? Go do some research. There is a default Ansible config that sets some sane defaults located [here](https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/ansible.cfg). I suggest you read through it to understand how it's setup.

This template uses various roles from Ansible-Galaxy and misc GitHub repos, I suggest you look at the requirements file and review their documentation if you plan to make changes. There is also a [script](https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/install_requirements.sh) to automatically install them.

Next you need to make a `vault_password` file at the ansible folder root to encrypt/decrypt the `crypt_vars/*` files. See the [example folder](https://github.com/derrickmehaffy/strapi-vultr-deploy/tree/main/ansible/crypt_vars/example) and it's [README.md](https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/crypt_vars/example/README.md) for some templates and a sample encrypted file. There is a password generation script located [here](https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/scripts/gen_pwd.sh) for my fellow lazy folks. **Keep that password safe and handy, if you lose it, back to square one on configuring shit**
