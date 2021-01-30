---
id: deploy-comparison
title: Comparison of Hosting Providers
sidebar_label: Comparison
---

## Intro

This comparison is about features vs cost and does not include information about latency or performance. You should independently test and validate the hosting provider for your needs.

## Cost and Feature Comparison

### Notes

- All pricing is done based on Current US-West locations, prices may vary based on location and availability in certain data centers. All Prices are based on official pricing from the provider, rounded up to the nearest USD.
- Bandwidth limits are based on Min/Recommended.
- Storage costs are typically in excess to default storage provided (custom option).

You should calculate your costs with the provider themselves as these prices were pulled in Q1 2021.

### Table

|                          | AWS (EC2)  | DigitalOcean | GCP       | Linode | Vultr      |
| ------------------------ | ---------- | ------------ | --------- | ------ | ---------- |
| Min Strapi Specs         |            | 1C/2GB       |           |        | 1C/2GB     |
| Recommended Strapi Specs |            | 2C/4GB       |           |        | 2C/4GB     |
| Min Strapi Cost          | $17/m      | $10/m        |           |        | $10/m      |
| Recommended Strapi Cost  | $34/m      | $20/m        |           |        | $20/m      |
| Min DB Specs             |            | 2C/4GB       |           |        | 2C/4GB     |
| Recommended DB Specs     |            | 4C/8GB       |           |        | 4C/8GB     |
| Min DB Cost              | $34/m      | $20/m        |           |        | $20/m      |
| Recommended DB Cost      | $68/m      | $40/m        |           |        | $40/m      |
| Backup Cost              | $0.05/GB/m | 20%/hourly   |           |        | 20%/hourly |
| Strapi Bandwidth Limit   | ?          | 2TB/4TB      |           |        | 2TB/3TB    |
| DB Bandwidth Limit       | ?          | 4TB/5TB      |           |        | 3TB/4TB    |
| Bandwidth Cost           | ?          | $0.01/GB     |           |        | $0.01/GB   |
| Storage Cost             | Various    | $0.10/GB/m   |           |        | $0.10/GB/m |
| Extra Cost               | N/A        | N/A          |           |        | N/A        |
| Private Net              | True       | True         |           | True   | False      |
| Deploy Time              |            |              |           |        |            |
| Redeploy Time            |            |              |           |        |            |
| Upload Provider          | Official   | Community    | Community | N/A    | S3?        |
| Upload Cost (Storage)    |            |              |           |        | $0.02/GB   |
| Upload Cost (Transfer)   |            |              |           |        | $0.01/GB   |

### Strapi Instance

Minimum vs Recommended Strapi VPS Specs is defined as:

- CPU:
  - Min: 1 vCPU Core
  - Recommended: 2 vCPU Cores
- Memory (RAM):
  - Min: 2GB
  - Recommended: 4GB
- Bandwidth (Transfer in GB):
  - No Min/Recommended, based on use-case
- Storage (Disk)
  - No Upload Provider: Based on use-case
  - With Upload Provider: 32GB

### Database Instance

- CPU:
  - Min: 2 vCPU Core
  - Recommended: 4 vCPU Cores
- Memory (RAM):
  - Min: 4GB
  - Recommended: 8GB
- Bandwidth (Transfer in GB):
  - No Min/Recommended, based on use-case
- Storage (Disk)
  - Min: 32GB
  - Recommended: Based on use-case

These are arbitrary recommendations, you can easily go higher or opt to use a providers managed database service instead. In order to keep comparisons and performance testing similar we use an un-managed VPS to run the database. Managed databases are typically a higher cost but require less maintenance, you do however lose a degree of control.

Note that any testing notes provided are done on MariaDB LTS release with no performance tuning done, it is recommended you tune your database config to fit your instance and needs.
