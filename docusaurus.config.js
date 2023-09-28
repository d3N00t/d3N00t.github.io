// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const oceanicNext = require('prism-react-renderer/themes/oceanicNext')
const duotoneLight = require('prism-react-renderer/themes/duotoneLight')
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'd3N00t Wiki',
  tagline: '这里是d3N00t的Wiki，欢迎访问~',
  url: 'https://d3N00t.github.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'd3N00t', // Usually your GitHub org/user name.
  projectName: "d3N00t.github.io", // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-K06FBEHD1R',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/home',

          // ... configuration object here
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
      algolia: {
        // The application ID provided by Algolia
        appId: 'L4NYMVDYG7',

        // Public API key: it is safe to commit it
        apiKey: '2dc197c65a9a3bc16515f64933bb50b5',

        indexName: 'wiki-404lab-top',

        // Optional: see doc section below
        // contextualSearch: true,
      },

      navbar: {
        title: 'd3N00t Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '📗Wiki',
          },
          { to: '/blog', label: '👨🏻‍💻Blog', position: 'right' },
          { to: '/home', label: '🏡Home', position: 'right' },

          {
            href: 'http://jayctf.com',
            label: 'JayCTF',
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
                label: 'Wiki',
                to: '/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Wechat Channel',
                href: 'https://mp.weixin.qq.com/s/ytNsiyIjCb-URVLY90uSMw',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'JayCTF',
                href: 'http://JayCTF.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} d3N00t Project, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: oceanicNext,
        // theme: duotoneLight,
        // darkTheme: oceanicNext,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
}

module.exports = config
