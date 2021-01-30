---
id: vultr-terraform
title: Vultr Terraform Guide
sidebar_label: Terraform Guide
---

## Terraform

Terraform within the [strapi-vultr-deploy](https://github.com/derrickmehaffy/strapi-vultr-deploy) template does the following:

1. Uses the `vultr/vultr` and `cloudflare/cloudflare` providers
2. Creates a DB Instance (Default type is `vc2-2c-4gb`) ~20$/month
3. Creates a Strapi Instance (Default type is `vc2-1c-2gb`) ~10$/month
4. Deploys a user provided SSH key to both instances
5. Registers an A record for the Strapi instance on a subdomain in Cloudflare
6. Automatically outputs an Ansible inventory file to the proper directory
7. Automatically outputs an Ansible vars file to the proper directory

### Terraform Requirements

:::info
You should have already configured Terraform, see the [variables](./vultr-variables.md) section before proceeding.
:::

- Vultr API Key
- Cloudflare email
- Cloudflare API Key
- Cloudflare Zone ID for Domain
- Have a subdomain in mind (example: `api-test`)
- Have an SSH public key (Doesn't currently support existing keys, yet)
- Terraform already installed

### Terraform Instructions

1. Ensure you have configured the `terraform.tfvars` file per the [variables guide](./vultr-variables.md#terraform-variables)
2. Navigate to the terraform directory and run `terraform init` (This will install the required providers
3. Run `terraform plan --out plan.txt` to get a summery of what terraform will do
4. If the plan looks good run `terraform apply plan.txt` and it will ask you to confirm, type `yes`
5. Let Terraform do it's thing, this might take a few minutes
6. Validate that Terraform created the `./ansible/inventory` file
7. Validate that Terraform created the `./ansible/tf_vars/tf_vars.yml` file

Congrats, you just spun up the infrastructure, move on to [Ansible](./vultr-ansible.md) to install the services and deploy your application.

## Optional Modifications

Below are some optional modifications you can make to your Terraform configuration for more secure storage.

### Remote tfstate storage

The `.tfstate` file is extremely important to Terraform as it maintains the state information of the deployed infrastructure. While it is possible to regenerate this file (not a fun task), **you must keep this file safe** as it contains sensitive information. Terraform has some great [backend provider](https://www.terraform.io/docs/language/settings/backends/index.html) documentation for things like:

- [Consul](https://www.terraform.io/docs/language/settings/backends/consul.html)
- [AWS S3](https://www.terraform.io/docs/language/settings/backends/s3.html)
- [REST](https://www.terraform.io/docs/language/settings/backends/http.html)

If you are interested in using Consul, they also currently have a free beta going on for their [Consul Cloud](https://www.hashicorp.com/cloud-platform).
