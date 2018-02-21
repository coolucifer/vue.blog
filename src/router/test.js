// 所有组件都要异步加载
const Test = resolve => require(['@/pages/test/test'], resolve)

const enter = [
  {
    path: '/test',
    component: Test
  }
]

export default enter
