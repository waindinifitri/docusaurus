import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Prisma Enterprise Knowledge Base',
  tagline: 'Highest Level Business Specifications',
  favicon: 'img/favicon.ico',

  url: 'http://dev.prisma.lab1:3000',
  baseUrl: '/',

  organizationName: 'Integrity Asia',
  projectName: 'prisma-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } as Preset.Options,
    ],
  ],

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexDocs: true, 
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Prisma Enterprise',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-prisma-pyramid-red.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Technology',
        },
        { to: '/blog', label: 'Services', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Prisma',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Integration',
          items: [
            {
              label: 'Knowme',
              to: '/docs/intro',
            },
            {
              label: 'Minerva',
              to: '/docs/intro',
            },
            // {
            //   label: 'Aranea',
            //   to: '/docs/intro',
            // },
          ],
        },
        {
          title: 'Admin Gate Application',
          items: [
            {
              label: 'System Administrator',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Business Administartor',
              href: 'https://twitter.com/docusaurus',
            },
            
          ],
        },
        {
          title: 'Stakeholder Gate',
          items: [
            {
              label: 'Back-office',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Client Users',
              href: 'https://twitter.com/docusaurus',
            },
            // {
            //   label: 'Applicant/Vendor/Freelance',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Prisma Enterprise All Rights Reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } as Preset.ThemeConfig,
};

export default config;
