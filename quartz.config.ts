import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "hiii ♡",
    pageTitleSuffix: " ♡",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "hiii.au",
    ignorePatterns: [".obsidian", "assets/*.md"],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "sans-serif",
        body: "sans-serif",
        code: "monospace",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#eaeaea",
          gray: "#7b7b7b",
          darkgray: "#000000",
          dark: "#000000",
          secondary: "#ff6b00",
          tertiary: "#ff3c00",
          highlight: "#ff6b0011",
          textHighlight: "#ff6b0011",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#333333",
          gray: "#cccccc",
          darkgray: "#ffffff",
          dark: "#ffffff",
          secondary: "#ff6b00",
          tertiary: "#ff3c00",
          highlight: "#ff6b0011",
          textHighlight: "#ff6b0011",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({minEntries: 2}),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        openLinksInNewTab: true,
        lazyLoad: false,
        prettyLinks: true,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssFullHtml: true,
        rssLimit: 2048,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
