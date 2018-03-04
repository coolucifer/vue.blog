// 所有组件都要异步加载
const _20180101 = resolve => require(['@/pages/BlogPages/2018-01-01.vue'], resolve)
const _20171121 = resolve => require(['@/pages/BlogPages/2017-11-21.vue'], resolve)
const _20171126 = resolve => require(['@/pages/BlogPages/2017-11-26.vue'], resolve)
const _20171129 = resolve => require(['@/pages/BlogPages/2017-11-29.vue'], resolve)
const _20171206 = resolve => require(['@/pages/BlogPages/2017-12-06.vue'], resolve)

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
  },
  {
    path: '/2017-11-29',
    component: _20171129
  },
  {
    path: '/2017-12-06',
    component: _20171206
  }
]

export default enter
