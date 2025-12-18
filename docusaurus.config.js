import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "راهنمای محصولات راست چین",
  tagline: "",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://docs.designesia.ir/",
  baseUrl: "/",

  organizationName: "designesia",
  projectName: "rtl-theme-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          admonitions: {
            keywords: ["rtnote", "rtwarn", "rterror"],
            extendDefaults: true,
          },
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "مستندات",
        logo: {
          alt: "لوگو",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/chaveamin/rtl-theme-docs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        copyright: "طراحی و توسعه توسط امین چاوه پور",
        style: "dark",
      },
      prism: {
        theme: prismThemes.oneDark,
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["ar", "en"],
        docsRouteBasePath: "/",
        indexBlog: false,
        indexPages: true,
      }),
    ],
  ],
};

export default config;
