 import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      {
        text: '首页',
        link: '../README.md',
      },
      {
        text: '编程规范',
        prefix: '/encode/',
        children: ['variable.md', 'code.md'],
      }
    ],
    sidebar: [
      {
        text: '编程规范',
        prefix: '/encode/',
        children: ['variable.md', 'code.md'],
      }
    ],
  }),
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点'
})
