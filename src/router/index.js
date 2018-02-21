import Vue from 'vue'
import Router from 'vue-router'

// import IndexPage from '@/pages/IndexPage'
// import HelloWorld from '@/components/HelloWorld'

// 引入其他路由模块
import Test from './test'
import BlogList from './bloglist'
import BlogPages from './blogpages'

Vue.use(Router)

let routes = [{
  path: '/',
  name: 'IndexPage'
  // component: IndexPage
}]
// routes = routes.concat(IndexPage)
routes = routes.concat(Test)
routes = routes.concat(BlogList)
routes = routes.concat(BlogPages)

export default new Router({
  mode: 'history',
  routes: routes
})
