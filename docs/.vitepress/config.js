import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { SitemapStream } from "sitemap";
import { generateSidebar } from "vitepress-sidebar";

const links = [];

export default {
    lang: "en-US",
    title: "Droidian Documentation",
    base: '/docs.droidian.org/',
    description: "",
    cleanUrls: true,
    head: [
        ["meta", {name: "msapplication-TileColor", content: "#ffffff"}],
        ["meta", {name: "theme-color", content: "#000000"}],
        ["meta", {name: "twitter:card", content: "product"}],
        ["meta", {name: "og:url", content: "https://docs.droidian.org"}],
        ["meta", {name: "og:title", content: "Droidian Documentation"}],
        ["meta", {name: "og:description", content: ""}],
        ["meta", {name: "og:type", content: "article"}],
        ["link", {rel: "shortcut icon", type: "image/png", href: "/favicon.png"}],
    ],
    themeConfig: {
        logo: "/logo.png",
        nav: [
            {text: "Website", link: "https://droidian.org1"},
            {text: "GitHub", link: "https://github.com/droidian/droidian"}
        ],
        sidebar: generateSidebar({}),
    },
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id)) {
            links.push({
                url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
                lastmod: pageData.lastUpdated
            });
        }
    },
    buildEnd: async ({ outDir }) => {
        const sitemap = new SitemapStream({
            hostname: "https://docs.droidian.org/"
        })
        const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
        sitemap.pipe(writeStream);
        links.forEach((link) => sitemap.write(link));
        sitemap.end();
        await new Promise((r) => writeStream.on("finish", r));
    }
}
