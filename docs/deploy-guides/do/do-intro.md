---
id: do-intro
title: DigitalOcean Introduction
sidebar_label: Introduction
image: './img/strapi+ansible_terraform_digitalocean.png'
---

![DigitalOcean Logo](./img/strapi+ansible_terraform_digitalocean.png)

## About

This deploy template uses Terraform to configure and deploy two DigitalOcean instances, one for a MariaDB database and one for a Strapi application. It will automatically add an SSH key and create a few service users as well as register the new Strapi instance in Cloudflare. It will also register an SSL Certificate with Let's Encrypt for the subdomain and setup Nginx to reverse proxy Strapi.

:::caution
Please note that the DigitalOcean deploy template is still a work in progress!
:::

## Requirements

Below are some of the global requirements when using this deployment automation

- You are using DigitalOcean for your infrastructure (or plan to)
- You already own a domain
- You are using Cloudflare to manage your DNS and have your domain already configured
- You don't mind running two DigitalOcean Instances, one for each application (DB and Strapi)
- You want to run Strapi on a subdomain (Sub-folder is not supported)
- You understand both Terraform and Ansible and are willing to make modifications to suit your needs
- You already have a Strapi application located in a Git Repo
  - There is a link to a sample application but these script will not start one for you
- **You are not on Windows computer, sorry not sorry, use WSL**
- You are not trying to deploy on other operating systems besides Ubuntu LTS

## Sample Strapi Application

You can find a sample application [located here](https://github.com/derrickmehaffy/strapi-deploy-example), with some configurations applied to work with this template. Please note, it's quite likely I will not keep this project up to date with the latest Strapi version. Use it at your own risk, and always make sure to check the [Strapi Documentation](https://strapi.io/documentation) for the latest configuration settings.

## To-do / Nice to have Features

- [ ] Support Deployment without Cloudflare / SSL / Domain
- [ ] Support existing DigitalOcean SSH Key ID (WIP)
- [ ] Automatic testing of Deployed Strapi Application to ensure it's actually running, else rollback to previous version
- [ ] Support automatic database backup pre-deploy
- [ ] Support automatic database restore if new deploy fails and rollback is triggered
- [ ] Support for running SQL migration scripts to make Strapi version updates easier
- [ ] Clean up Ansible code to follow best-practices (I admit it's a bit messy)
- [ ] Support other Linux Distributions besides Ubuntu
- [ ] Support running Strapi in a Staging Environment (Optional 3rd instance)

## Get the template

You can grab the [strapi-digitalocean-deploy](https://github.com/derrickmehaffy/strapi-digitalocean-deploy) template and create your own version. It is suggested that you make your version private if you plan to upload your terraform state into the repo (it's ignore by default).

After you have your version of the template see the [variables](./do-variables.md) guide on how to configure both ansible and terraform.
