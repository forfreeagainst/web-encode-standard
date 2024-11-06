import comp from "D:/github-repo/web-encode-standard/docs/.vuepress/.temp/pages/encode/code.html.vue"
const data = JSON.parse("{\"path\":\"/encode/code.html\",\"title\":\"代码规范\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1730872440000,\"contributors\":[{\"name\":\"尘少\",\"email\":\"1982740368@qq.com\",\"commits\":1}]},\"filePathRelative\":\"encode/code.md\"}")
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
