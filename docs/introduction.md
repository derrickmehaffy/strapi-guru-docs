---
id: introduction
title: Welcome to the Strapi Guru's Docs
sidebar_label: Introduction
slug: /
---

## What is this?

:::note
This Documentation is under active development, expect many pages to be empty or incomplete
:::

This documentation is a miscellaneous combination of guides for templates, packages, ect for things I build and write blog posts about. Most of the docs are dedicated for the Strapi-Deploy templates I created to deploy Strapi in an automated way on various providers.

## Why write documentation?

Simply because I'm working on so many different packages that it's just easier to maintain it all in a central location instead of each package's README.md files.

## What documentation software are you using?

This documentation is using [Facebook's Docusaurus v2](https://v2.docusaurus.io/). I decided to use this as testing and a prototype in case the Strapi team decides to switch from Vuepress to Docusaurus. ;)

## Can I buy you a coffee?

Currently no, but I might open up donations at some point. Right now I'm simply doing this because I find it interesting and fun (yeah I'm crazy). If you like what you see, feel free to tweet me on Twitter!

https://twitter.com/derrickmehaffy

## What packages/scripts/templates have you built or contribute to?

You can find a list below, or just visit my [GitHub page](https://github.com/derrickmehaffy?tab=repositories)

- Strapi-Deploy
  - [strapi-vultr-deploy](https://github.com/derrickmehaffy/strapi-vultr-deploy) => Template
  - [strapi-digitalocean-deploy](https://github.com/derrickmehaffy/strapi-digitalocean-deploy) => Template
  - [strapi-linode-deploy](https://github.com/derrickmehaffy/strapi-linode-deploy) => Template
  - strapi-aws-deploy => Template (Coming soon)
  - strapi-gcp-deploy => Template (Coming soon)
- [This documentation](https://github.com/derrickmehaffy/strapi-guru-docs)
- Strapi Community packages
  - [strapi-middleware-cache](https://github.com/patrixr/strapi-middleware-cache#readme) => Contributor

## Why aren't any of your guides about serverless?

Short answer, I'm not a fan of serverless and prefer bare-metal where I can or virtual machines where I can't. There are various personal reasons, but the easiest one is I prefer security and control over convenience. Serverless can make deployments easier, but at the cost of control and putting your faith into the provider to maintain proper security.

There is some implied security risk when using a public cloud, but far less when using a virtual machine than serverless.
