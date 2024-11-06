export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/1%E5%88%86%E9%92%9F%E5%85%A5%E9%97%A8markdown.html", { loader: () => import(/* webpackChunkName: "1分钟入门markdown.html" */"D:/github-repo/web-encode-standard/docs/.vuepress/.temp/pages/1分钟入门markdown.html.js"), meta: {"title":"Heading 1号标题（标题之间要循序渐进，不能从1到3）"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/github-repo/web-encode-standard/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"编码规范"} }],
  ["/encode/code.html", { loader: () => import(/* webpackChunkName: "encode_code.html" */"D:/github-repo/web-encode-standard/docs/.vuepress/.temp/pages/encode/code.html.js"), meta: {"title":"代码规范"} }],
  ["/encode/variable.html", { loader: () => import(/* webpackChunkName: "encode_variable.html" */"D:/github-repo/web-encode-standard/docs/.vuepress/.temp/pages/encode/variable.html.js"), meta: {"title":"变量命名规范"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/github-repo/web-encode-standard/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
