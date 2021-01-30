---
id: do-variables
title: DigitalOcean Variables
sidebar_label: Variables
---

## Variables Guide

It is recommended that you review both the [Terraform Documentation](https://www.terraform.io/docs/language/values/variables.html) and the [Ansible Documentation](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html) regarding variables and how best to secure them. Terraform has multiple methods to pull and store variables such as Vault and Consul, while ansible has it's own local Vault system to encrypt variables and files. The Strapi Guru documentation does not cover these topics (except for the local Ansible Vault).

:::warning
It is up to you, the user, to secure your variables!
:::

## Terraform Variables

Variables are set in the `./terraform/terraform.tfvars`, there is an [example file](https://github.com/derrickmehaffy/strapi-digitalocean-deploy/blob/main/terraform/example.tfvars) that you can copy and modify.

```bash title="From template root"
cp terraform/examples.tfvars terraform/terraform.tfvars
```

:::caution
Do not go below `s-1vcpu-2gb` for the Strapi instance or the Admin panel will not build!
:::

:::info
The Database instance can be dropped to `s-1vcpu-2gb` to decrease cost, but it's not recommended.
:::

:::caution
Backups cost an extra 20% of the hourly cost (can basically be calculated as 20% of monthly). Thus if you use the `s-1vcpu-2gb` plan at $10, backups cost $2, making the total Strapi server cost $12 per month.
:::

| Var Name           | Type    | Default       | Required | Description                        |
| ------------------ | ------- | ------------- | -------- | ---------------------------------- |
| do_api_key         | string  | null          | Y        | DO API Key                         |
| ssh_key            | string  | null          | Y        | Your Public SSH Key                |
| ssh_key_id         | string  | null          | Y        | Your Public SSH Key ID             |
| region             | string  | sfo2          | Y        | DO Region ID                       |
| cloudflare_enabled | boolean | true          | Y        | Enable Cloudflare (required)       |
| cloudflare_email   | string  | null          | Y        | Email used with Cloudflare         |
| cloudflare_api_key | string  | null          | Y        | Global API Key                     |
| cloudflare_zone_id | string  | null          | Y        | Your Domain Zone ID                |
| strapi_srv_domain  | string  | null          | Y        | Subdomain prefix                   |
| instance_os        | string  | 387           | Y        | Operating System ID from DO API    |
| instance_tag       | string  | strapi        | N        | Optional tag to apply to instances |
| strapi_size        | string  | s-1vcpu-2gb   | Y        | DO size for the Strapi Server      |
| strapi_label       | string  | my-strapi-srv | Y        | Label for the Strapi Server        |
| strapi_ipv6        | boolean | false         | N        | Enable IPv6 for the Strapi Server  |
| strapi_backups     | boolean | false         | N        | Enable Strapi Server Backups       |
| database_size      | string  | s-2vcpu-4gb   | Y        | DO size for the Database Server    |
| database_label     | string  | my-strapi-db  | Y        | Label for the Database Server      |
| database_backups   | boolean | false         | N        | Enable Database Backups            |

There are certain variables that are pulled from DO Public APIs:

- `region` => https://developers.digitalocean.com/documentation/v2/#list-all-regions
- `instance_os` => https://developers.digitalocean.com/documentation/v2/#list-all-distribution-images
- `strapi_plan` / `database_plan` => https://developers.digitalocean.com/documentation/v2/#list-all-sizes

## Ansible Variables

Alright off to the variables, there is a lot so good luck :)

:::warning
By default the Ansible configs will use the staging Let's Encrypt Server. These certs are not considered valid, when you are ready to move to production you should disable the `acme_sh_default_staging` variable. You can force a new cert generation by setting `acme_sh_default_force_issue` to true.

**ONLY RUN THIS ONCE** as true!
:::

### crypt_vars/all.yml

| Var Name                      | Type    | Default | Required | Automated |
| ----------------------------- | ------- | ------- | -------- | --------- |
| See `crypt_vars/all.yml` file | Various | Various | Various  | N         |

### crypt_vars/database.yml

| Var Name       | Type   | Default | Required | Automated |
| -------------- | ------ | ------- | -------- | --------- |
| strapi_db_pass | string | null    | Y        | N         |

### crypt_vars/strapi.yml

| Var Name                                       | Type   | Default | Required | Automated |
| ---------------------------------------------- | ------ | ------- | -------- | --------- |
| acme_sh_account_email                          | string | null    | Y        | N         |
| acme_sh_default_dns_provider_api_keys.CF_KEY   | string | null    | Y        | N         |
| acme_sh_default_dns_provider_api_keys.CF_Email | string | null    | Y        | N         |

### group_vars/all.yml

| Var Name         | Type    | Default | Required | Automated |
| ---------------- | ------- | ------- | -------- | --------- |
| apt_dependencies | array   | Various | Y        | Y         |
| apt_upgrade      | string  | dist    | Y        | Y         |
| apt_autoremove   | boolean | yes     | Y        | Y         |

### group_vars/database.yml

| Var Name           | Type   | Default        | Required | Automated |
| ------------------ | ------ | -------------- | -------- | --------- |
| mysql_packages     | array  | Various        | Y        | Y         |
| mysql_bind_address | string | 0.0.0.0        | Y        | Y         |
| mysql_databases    | object | strapi_db_name | Y        | Y         |
| mysql_users        | object | strapi_db_user | Y        | Y         |

### group_vars/strapi.yml

:::info
You may need to scroll the table
:::

| Var Name                         | Type    | Default                                    | Required | Automated |
| -------------------------------- | ------- | ------------------------------------------ | -------- | --------- |
| nodejs_version                   | int     | 14                                         | Y        | Y         |
| application_dir                  | string  | /srv/deploy/{{ application_name }}         | Y        | Y         |
| application_git                  | string  | null                                       | Y        | N         |
| acme_sh_become_user              | string  | root                                       | Y        | Y         |
| acme_sh_git_url                  | string  | https://github.com/acmesh-official/acme.sh | Y        | Y         |
| acme_sh_git_version              | string  | master                                     | Y        | Y         |
| acme_sh_upgrade                  | boolean | true                                       | Y        | Y         |
| acme_sh_list_domains             | boolean | true                                       | Y        | Y         |
| acme_sh_default_debug            | boolean | false                                      | Y        | Y         |
| acme_sh_default_dns_sleep        | int     | 120                                        | Y        | Y         |
| acme_sh_copy_certs_to_path       | string  | /etc/nginx/ssl                             | Y        | Y         |
| acme_sh_default_dns_provider     | string  | dns_cf                                     | Y        | Y         |
| acme_sh_default_issue_renew_hook | string  | sudo systemctl reload nginx                | Y        | Y         |
| acme_sh_domains                  | object  | application_url                            | Y        | Y         |
| acme_sh_default_staging          | boolean | true                                       | Y        | N         |
| acme_sh_default_force_issue      | boolean | false                                      | Y        | N         |
| nginx_remove_default_vhost       | boolean | true                                       | Y        | Y         |
| nginx_client_max_body_size       | string  | 256m                                       | Y        | N         |
| nginx_upstreams                  | object  | See file                                   | Y        | Y         |
| nginx_vhosts                     | object  | See file                                   | Y        | Y         |

### tf_vars/tf_vars.yml

:::info
These variables are automatically set by terraform and should not require any modification.
:::

| Var Name         | Type   | Default                   | Required | Automated |
| ---------------- | ------ | ------------------------- | -------- | --------- |
| root_ssh_key     | string | Based on Terraform Output | Y        | Y         |
| strapi_db_name   | string | Based on Terraform Output | Y        | Y         |
| strapi_db_user   | string | Based on Terraform Output | Y        | Y         |
| strapi_db_host   | string | Based on Terraform Output | Y        | Y         |
| application_name | string | Based on Terraform Output | Y        | Y         |
| application_url  | string | Based on Terraform Output | Y        | Y         |
