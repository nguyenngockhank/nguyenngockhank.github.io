import { CodeTabs } from "/Volumes/KHANKSSD/PROJECTS/nguyenngockhank.github.io/tech/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.3.3_vuepress@2.0.0-rc.20/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Volumes/KHANKSSD/PROJECTS/nguyenngockhank.github.io/tech/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.3.3_vuepress@2.0.0-rc.20/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Volumes/KHANKSSD/PROJECTS/nguyenngockhank.github.io/tech/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.3.3_vuepress@2.0.0-rc.20/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
