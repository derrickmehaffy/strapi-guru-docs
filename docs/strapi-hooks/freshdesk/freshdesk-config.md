---
id: freshdesk-config
title: Freshdesk Hook Configuration
sidebar_label: Configuration
---

## Strapi Hook configuration

To activate and configure the hook, you need to create or update the file `./config/hook.js` in your strapi app. For more information please see the [Strapi hooks documentation](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#hooks). For information about environmental configs and alternative config locations, see the [Strapi environment documentation](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#environment).

```js title="./config/hook.js"
module.exports = ({ env }) => ({
  settings: {
    // ...
    freshdesk: {
      enabled: true,
      // Doesn't work with custom domains, must be a freshdesk subdomain
      domain: env('FRESHDESK_DOMAIN', 'https://example.freshdesk.com'),
      apiKey: env('FRESHDESK_APIKEY', 'yourAPIKey'),
    },
  },
});
```

## Variables

| Name    | Type    | Default | Required | Description         |
| ------- | ------- | ------- | -------- | ------------------- |
| enabled | boolean | `true`  | No       | Enable/Disable Hook |
| domain  | string  | `''`    | Yes      | Freshdesk Domain    |
| apiKey  | string  | `''`    | Yes      | Freshdesk API Key   |

## Debug mode

To enable the debug mode for the upstream SDK `freshdesk-api` you will need to use the `DEBUG` Node.js environment variable with the value of `freshdesk-api`.

For example with yarn:

```bash
DEBUG=freshdesk-api yarn develop
```

Or with npm:

```bash
DEBUG=freshdesk-api npm run develop
```

Using this debug option will print log messages on requests made to Freshdesk, how long they took, and the response code.
