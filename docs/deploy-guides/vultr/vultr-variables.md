---
id: vultr-variables
title: Vultr Variables
sidebar_label: Variables
---

## Variables Guide

It is recommended that you review both the [Terraform Documentation](https://www.terraform.io/docs/language/values/variables.html) and the [Ansible Documentation](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html) regarding variables and how best to secure them. Terraform has multiple methods to pull and store variables such as Vault and Consul, while ansible has it's own local Vault system to encrypt variables and files. The Strapi Guru documentation does not cover these topics (except for the local Ansible Vault).

:::warning
It is up to you, the user, to secure your variables!
:::

### Terraform Variables

Variables are set in the `./terraform/terraform.tfvars`, there is an [example file](https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/terraform/example.tfvars) that you can copy and modify.

```bash title="From template root"
cp terraform/examples.tfvars terraform/terraform.tfvars
```

:::caution
Do not go below `vc2-1c-2gb` for the Strapi instance or the Admin panel will not build!
:::

:::info
The Database instance can be dropped to `vc2-1c-2gb` to decrease cost, but it's not recommended.
:::

:::caution
Backups cost an extra 20% of the hourly cost (can basically be calculated as 20% of monthly). Thus if you use the `vc2-1c-2gb` plan at $10, backups cost $2, making the total Strapi server cost $12 per month.
:::

| Var Name                | Type    | Default       | Required | Description                        |
| ----------------------- | ------- | ------------- | -------- | ---------------------------------- |
| vultr_api_key           | string  | null          | Y        | Vultr API Key                      |
| ssh_key                 | string  | null          | Y        | Your Public SSH Key                |
| region                  | string  | sea           | Y        | Vultr Region ID                    |
| cloudflare_enabled      | boolean | true          | Y        | Enable Cloudflare (required)       |
| cloudflare_email        | string  | null          | Y        | Email used with Cloudflare         |
| cloudflare_api_key      | string  | null          | Y        | Global API Key                     |
| cloudflare_zone_id      | string  | null          | Y        | Your Domain Zone ID                |
| strapi_srv_domain       | string  | null          | Y        | Subdomain prefix                   |
| instance_os             | string  | 387           | Y        | Operating System ID from Vultr API |
| instance_tag            | string  | strapi        | N        | Optional tag to apply to instances |
| strapi_plan             | string  | vc2-1c-2gb    | Y        | Vultr Plan for the Strapi Server   |
| strapi_label            | string  | my-strapi-srv | Y        | Label for the Strapi Server        |
| strapi_hostname         | string  | my-strapi-srv | Y        | Hostname for the Strapi Server     |
| strapi_ipv6             | boolean | false         | N        | Enable IPv6 for the Strapi Server  |
| strapi_server_backups   | boolean | false         | N        | Enable Strapi Server Backups       |
| database_plan           | string  | vc2-2c-4gb    | Y        | Vultr Plan for the Database Server |
| database_label          | string  | my-strapi-db  | Y        | Label for the Database Server      |
| database_hostname       | string  | my-strapi-db  | Y        | Hostname for the Database Server   |
| database_server_Backups | boolean | false         | N        | Enable Database Backups            |

There are certain variables that are pulled from Vultr Public APIs:

- `region` => https://api.vultr.com/v2/regions
- `instance_os` => https://api.vultr.com/v2/os
- `strapi_plan` / `database_plan` => https://api.vultr.com/v2/plans

### Ansible Variables

Alright off to the variables, there is a lot so good luck :)

:::info
You'll probably need to scroll the table, lots of info, sorry
:::

:::warning
By default the Ansible configs will use the staging Let's Encrypt Server. These certs are not considered valid, when you are ready to move to production you should disable the `acme_sh_default_staging` variable. You can force a new cert generation by setting `acme_sh_default_force_issue` to true.

**ONLY RUN THIS ONCE** as true!
:::

| Var Name                                       | Type    | Default                                                 | Required | File Path               | Automated |
| ---------------------------------------------- | ------- | ------------------------------------------------------- | -------- | ----------------------- | --------- |
| See `crypt_vars/all.yml` file                  | Various | Various                                                 | Various  | crypt_vars/all.yml      | N         |
| strapi_db_pass                                 | string  | null                                                    | Y        | crypt_vars/database.yml | N         |
| acme_sh_account_email                          | string  | null                                                    | Y        | crypt_vars/strapi.yml   | N         |
| acme_sh_default_dns_provider_api_keys.CF_KEY   | string  | null                                                    | Y        | crypt_vars/strapi.yml   | N         |
| acme_sh_default_dns_provider_api_keys.CF_Email | string  | null                                                    | Y        | crypt_vars/strapi.yml   | N         |
| apt_dependencies                               | array   | Various                                                 | Y        | group_vars/all.yml      | Y         |
| apt_upgrade                                    | string  | dist                                                    | Y        | group_vars/all.yml      | Y         |
| apt_autoremove                                 | boolean | yes                                                     | Y        | group_vars/all.yml      | Y         |
| mysql_packages                                 | array   | Various                                                 | Y        | group_vars/database.yml | Y         |
| mysql_bind_address                             | string  | 0.0.0.0                                                 | Y        | group_vars/database.yml | Y         |
| mysql_databases                                | object  | strapi_db_name                                          | Y        | group_vars/database.yml | Y         |
| mysql_users                                    | object  | strapi_db_user                                          | Y        | group_vars/database.yml | Y         |
| nodejs_version                                 | int     | 14                                                      | Y        | group_vars/strapi.yml   | Y         |
| application_dir                                | string  | /srv/deploy/{{ application_name }}                      | Y        | group_vars/strapi.yml   | Y         |
| application_git                                | string  | https://github.com/derrickmehaffy/strapi-deploy-example | Y        | group_vars/strapi.yml   | N         |
| acme_sh_become_user                            | string  | root                                                    | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_git_url                                | string  | https://github.com/acmesh-official/acme.sh              | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_git_version                            | string  | master                                                  | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_upgrade                                | boolean | true                                                    | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_list_domains                           | boolean | true                                                    | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_default_debug                          | boolean | false                                                   | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_default_dns_sleep                      | int     | 120                                                     | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_copy_certs_to_path                     | string  | /etc/nginx/ssl                                          | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_default_dns_provider                   | string  | dns_cf                                                  | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_default_issue_renew_hook               | string  | sudo systemctl reload nginx                             | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_domains                                | object  | application_url                                         | Y        | group_vars/strapi.yml   | Y         |
| acme_sh_default_staging                        | boolean | true                                                    | Y        | group_vars/strapi.yml   | N         |
| acme_sh_default_force_issue                    | boolean | false                                                   | Y        | group_vars/strapi.yml   | N         |
| nginx_remove_default_vhost                     | boolean | true                                                    | Y        | group_vars/strapi.yml   | Y         |
| nginx_client_max_body_size                     | string  | 256m                                                    | Y        | group_vars/strapi.yml   | N         |
| nginx_upstreams                                | object  | See file                                                | Y        | group_vars/strapi.yml   | Y         |
| nginx_vhosts                                   | object  | See file                                                | Y        | group_vars/strapi.yml   | Y         |
| root_ssh_key                                   | string  | Based on Terraform Output                               | Y        | tf_vars/tf_vars.yml     | Y         |
| strapi_db_name                                 | string  | Based on Terraform Output                               | Y        | tf_vars/tf_vars.yml     | Y         |
| strapi_db_user                                 | string  | Based on Terraform Output                               | Y        | tf_vars/tf_vars.yml     | Y         |
| strapi_db_host                                 | string  | Based on Terraform Output                               | Y        | tf_vars/tf_vars.yml     | Y         |
| application_name                               | string  | Based on Terraform Output                               | Y        | tf_vars/tf_vars.yml     | Y         |
| application_url                                | string  | Based on Terraform Output                               | Y        | tf_vars/tf_vars.yml     | Y         |
