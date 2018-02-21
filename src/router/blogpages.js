// 所有组件都要异步加载
const _20180101 = resolve => require(['@/pages/BlogPages/2018-01-01.vue'], resolve)
const _20171121 = resolve => require(['@/pages/BlogPages/2017-11-21.vue'], resolve)
const _20171126 = resolve => require(['@/pages/BlogPages/2017-11-26.vue'], resolve)

const enter = [
  {
    path: '/2018-01-01',
    component: _20180101
  },
  {
    path: '/2017-11-21',
    component: _20171121
  },
  {
    path: '/2017-11-26',
    component: _20171126
  }
]

export default enter
