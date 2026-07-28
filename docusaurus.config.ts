import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AIhub Docs',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://aihub-docs.skrepy.dpdns.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Skrepy0', // Usually your GitHub org/user name.
  projectName: 'aihub-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Skrepy0/aihub-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['zh', 'en'],
        indexDocs: true,
        indexPages: false,
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo.png',

    // 颜色模式配置（默认跟随系统）
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },

    // 公告栏（可选，展示版本信息或重要通知）
    announcementBar: {
      id: 'announcement',
      content: 'AIhub 仍在搭建中, AIhub Docs 主页仅为示例界面',
      backgroundColor: '#ffb300',
      textColor: '#fff',
      isCloseable: true,
    },

    // 导航栏
    navbar: {
      title: 'AIhub Docs',
      logo: {
        alt: 'AIhub Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/Skrepy0/aihub-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // 页脚
    footer: {
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/Skrepy0/aihub-docs/issues',
            },
          ],
        },
        {
          title: '更多',
          items: [
            // {
            //   label: '关于我们',
            //   to: '/about',
            // },
            // {
            //   label: '隐私政策',
            //   to: '/privacy',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AIhub. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
      defaultLanguage: 'javascript',
      additionalLanguages: ['bash', 'json', 'yaml', 'python', 'javascript', 'typescript', 'java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
