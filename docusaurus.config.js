import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "راهنمای محصولات راست چین",
  tagline: "",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "facebook",
  projectName: "docusaurus",

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
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          showLastUpdateTime: true,
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
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "راهنمای محصولات",
        logo: {
          alt: "لوگو",
          src: "img/logo.png",
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: [
    // ... Your other themes.
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
