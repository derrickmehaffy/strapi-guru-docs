module.exports = {
	title: 'The Strapi Guru',
	tagline: 'Helping you deploy Strapi easier',
	url: 'https://docs.strapi.guru',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'derrickmehaffy',
	projectName: 'strapi-guru-docs',
	themeConfig: {
		navbar: {
			title: 'The Strapi Guru',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					href: 'https://strapi.guru',
					label: 'Blog',
					position: 'right',
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
					items: [],
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
							label: 'My Blog',
							href: 'https://strapi.guru',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/derrickmehaffy/strapi-guru-docs',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} The Strapi Guru`,
		},
	},
	plugins: [
		[
			require.resolve('@cmfcmf/docusaurus-search-local'),
			{
				indexDocs: true,
				docsRouteBasePath: '/',
				indexDocSidebarParentCategories: 3,
				indexPages: false,
				language: 'en',
			},
		],
	],
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/derrickmehaffy/strapi-guru-docs/edit/master/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
