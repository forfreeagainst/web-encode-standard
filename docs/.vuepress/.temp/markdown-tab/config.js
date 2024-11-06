import { CodeTabs } from "D:/github-repo/web-encode-standard/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.58_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_h4aackqqubq7p6tsnz5tqkwcyq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/github-repo/web-encode-standard/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.58_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_h4aackqqubq7p6tsnz5tqkwcyq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/github-repo/web-encode-standard/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.58_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_h4aackqqubq7p6tsnz5tqkwcyq/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
