// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arc',
  tagline: 'Make your internal services accessible on the internet, securely',
  favicon: 'img/favicon.ico',

  //--------------------------------------------------------------------------------------//
  // THESE VALUES MUST BE CHANGED IF YOU WANT THE GITHUB PAGE TO DISPLAY IN YOUR OWN REPO //

  // Set the url of your site (Usually https://YOUR-GITHUB-USERNAME.github.io)
  url: 'https://jacterk.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served (Usually the repo name)
  baseUrl: '/arc-website-dev/',

  // Organization Name (If hosting personally, your GitHub username)
  organizationName: 'JACTERK',

  // Project Name (Usually the repo name)
  projectName: 'arc-website-dev', // Usually your repo name.

  //--------------------------------------------------------------------------------------//

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Image at top left
      image: 'img/arc-logo.png',
      navbar: {
        title: 'Arc',
        logo: {
          alt: 'Arc Logo',
          src: 'img/favicon.ico',
        },
        // Items in the navbar
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/d3b-center/Arc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/01-Getting Started',
              },
              {
                label: 'Advanced',
                to: '/docs/02-Advanced',
              },
              {
                label: 'Gateway',
                to: '/docs/03-Gateway'
              },
              {
                label: 'Agent',
                to: '/docs/04-Agent'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/d3b-center/Arc',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arc`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
