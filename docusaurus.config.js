module.exports = {
	title: 'The Strapi Guru',
	tagline: 'Helping you deploy Strapi easier',
	url: 'https://docs.strapi.guru',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'derrickmehaffy', // Usually your GitHub org/user name.
	projectName: 'strapi-guru-docs', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'The Strapi Guru',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{
					href: 'https://github.com/derrickmehaffy/strapi-guru-docs',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Style Guide',
							to: 'docs/',
						},
						{
							label: 'Second Doc',
							to: 'docs/doc2/',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Strapi Slack',
							href: 'https://slack.strapi.io',
						},
						{
							label: 'Strapi Forum',
							href: 'https://forum.strapi.io',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/derrickmehaffy',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/derrickmehaffy/strapi-guru-docs',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} The Strapi Guru, Inc.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
