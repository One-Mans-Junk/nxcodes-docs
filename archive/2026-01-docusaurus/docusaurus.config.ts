import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NXCodes',
  tagline: 'Build Browser Games Without the Complexity',
  favicon: 'img/favicon.ico',
  url: 'http://192.168.1.240:3000',
  baseUrl: '/',
  organizationName: 'craigkoziarz',
  projectName: 'nxcodes-docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/craigkoziarz/nxcodes-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'NXCodes',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/craigkoziarz/nxcodes',
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
            {label: 'Getting Started', to: '/docs/intro'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: '#'},
            {label: 'GitHub', href: 'https://github.com/craigkoziarz/nxcodes'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NXCodes. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
