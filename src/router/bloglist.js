// 所有组件都要异步加载
const BlogList = resolve => require(['@/components/BlogList'], resolve)

const enter = [
  {
    path: '/blog',
    component: BlogList
  }
]

export default enter
