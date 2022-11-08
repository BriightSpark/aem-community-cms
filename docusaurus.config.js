// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config()
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn Adobe Experience Manager',
  tagline: 'Powered by the AEM community',
  url: 'https://aem.community',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aether-llc', // Usually your GitHub org/user name.
  projectName: 'aem-community', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BriightSpark/aem-community-cms/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Home',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Powered by',
            items: [
              {
                html: `
                  <a href="https://www.aether.llc" target="_blank" rel="noreferrer noopener" aria-label="Powered by Aether">
                    <img src="/img/aether-logo.png" alt="Aether logo" style="height: auto; width: 150px;"  />
                  </a>
                `,
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aether LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: 'PROD_WEB',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
