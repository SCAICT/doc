/** @format */

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "中電會 SCAICT 說明文件",
    tagline: "中電會的大小專案",
    favicon: "https://scaict.org/src/img/favicon.ico",

    // Set the production url of your site here
    url: "https://scaict.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/doc/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "SCAICT", // Usually your GitHub org/user name.
    trailingSlash: false,
    projectName: "doc", // Usually your repo name.
    deploymentBranch:"gh-pages",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "zh-Hant",
        locales: ["zh-Hant"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/SCAICT/doc",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "SCAICT 說明文件",
                logo: {
                    alt: "SCAICT Logo",
                    src: "https://scaict.org/src/img/logo.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "說明文件",
                    },
                    { to: "/blog", label: "部落格", position: "left" },
                    {
                        href: "https://github.com/SCAICT/doc",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "說明文件",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "官網",
                                href: "https://scaict.org/",
                            },
                            {
                                label: "Discord",
                                href: "https://dc.scaict.org/",
                            },
                            {
                                label: "Instagram",
                                href: "https://www.instagram.com/scaict.tw/",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/SCAICT",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} SCAICT. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false, // Set to true to disable the theme switcher
                respectPrefersColorScheme: true,
            },
        }),
};

export default config;
