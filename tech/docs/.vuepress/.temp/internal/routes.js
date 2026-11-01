export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Volumes/KHANKSSD/PROJECTS/nguyenngockhank.github.io/tech/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/ai-knowledge.html", { loader: () => import(/* webpackChunkName: "ai-knowledge.html" */"/Volumes/KHANKSSD/PROJECTS/nguyenngockhank.github.io/tech/docs/.vuepress/.temp/pages/ai-knowledge.html.js"), meta: {"title":"AI Knowledge"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Volumes/KHANKSSD/PROJECTS/nguyenngockhank.github.io/tech/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
