// 所有组件都要异步加载
const _20180101 = resolve => require(['@/pages/BlogPages/2018-01-01.vue'], resolve)
const _20171121 = resolve => require(['@/pages/BlogPages/2017-11-21.vue'], resolve)
const _20171126 = resolve => require(['@/pages/BlogPages/2017-11-26.vue'], resolve)
const _20171129 = resolve => require(['@/pages/BlogPages/2017-11-29.vue'], resolve)
const _20171206 = resolve => require(['@/pages/BlogPages/2017-12-06.vue'], resolve)
const _20171212 = resolve => require(['@/pages/BlogPages/2017-12-12.vue'], resolve)
const _20171223 = resolve => require(['@/pages/BlogPages/2017-12-23.vue'], resolve)
const _20180128 = resolve => require(['@/pages/BlogPages/2018-01-28.vue'], resolve)

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
  },
  {
    path: '/2017-12-12',
    component: _20171212
  },
  {
    path: '/2017-12-23',
    component: _20171223
  },
  {
    path: '/2018-01-28',
    component: _20180128
  }
]

export default enter
