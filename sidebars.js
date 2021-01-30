module.exports = {
  docSidebar: {
    'Getting Started': ['introduction'],
    'Strapi-Deploy': [
      'deploy-guides/deploy-comparison',
      {
        'AWS EC2': [
          'deploy-guides/aws/aws-intro',
          'deploy-guides/aws/aws-variables',
          'deploy-guides/aws/aws-terraform',
          'deploy-guides/aws/aws-ansible',
        ],
      },
      {
        DigitalOcean: [
          'deploy-guides/do/do-intro',
          'deploy-guides/do/do-variables',
          'deploy-guides/do/do-terraform',
          'deploy-guides/do/do-ansible',
        ],
      },
      {
        'Google Cloud': [
          'deploy-guides/gcp/gcp-intro',
          'deploy-guides/gcp/gcp-variables',
          'deploy-guides/gcp/gcp-terraform',
          'deploy-guides/gcp/gcp-ansible',
        ],
      },
      {
        Linode: [
          'deploy-guides/linode/linode-intro',
          'deploy-guides/linode/linode-variables',
          'deploy-guides/linode/linode-terraform',
          'deploy-guides/linode/linode-ansible',
        ],
      },
      {
        Vultr: [
          'deploy-guides/vultr/vultr-intro',
          'deploy-guides/vultr/vultr-variables',
          'deploy-guides/vultr/vultr-terraform',
          'deploy-guides/vultr/vultr-ansible',
        ],
      },
    ],
  },
};
