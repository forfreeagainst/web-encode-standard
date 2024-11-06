import comp from "D:/github-repo/web-encode-standard/docs/.vuepress/.temp/pages/1分钟入门markdown.html.vue"
const data = JSON.parse("{\"path\":\"/1%E5%88%86%E9%92%9F%E5%85%A5%E9%97%A8markdown.html\",\"title\":\"Heading 1号标题（标题之间要循序渐进，不能从1到3）\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"2号标题还带分隔线\",\"slug\":\"_2号标题还带分隔线\",\"link\":\"#_2号标题还带分隔线\",\"children\":[{\"level\":3,\"title\":\"3号标题Bold加粗\",\"slug\":\"_3号标题bold加粗\",\"link\":\"#_3号标题bold加粗\",\"children\":[]}]}],\"git\":{\"updatedTime\":1730872440000,\"contributors\":[{\"name\":\"尘少\",\"email\":\"1982740368@qq.com\",\"commits\":1}]},\"filePathRelative\":\"1分钟入门markdown.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
