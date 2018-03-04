// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// smoothscroll
import vueSmoothScroll from 'vue-smoothscroll'

// 使用Boogstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// 使用highlight.js
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'

Vue.use(vueSmoothScroll)

// 定义highlightCode方法,将只执行一次的逻辑去掉
hljs.highlightCode = function () {
  let blocks = document.querySelectorAll('pre');
  [].forEach.call(blocks, hljs.highlightBlock)
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
