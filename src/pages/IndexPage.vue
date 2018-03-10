<template>
 <div id="index-page">
    <header-box v-if="isIndex"></header-box>
    <nav-bar :isIndex="isIndex"></nav-bar>
    <main-panel :bloglists="bloglists" :isIndex="isIndex">
    </main-panel>
 </div>
</template>

<script>
import HeaderBox from '@/components/HeaderBox'
import NavBar from '@/components/NavBar'
import MainPanel from '@/components/MainPanel'
import $ from 'jquery'
import Bus from '@/Bus.js'

export default {
  name: 'IndexPage',

  data () {
    return {
      bloglists: [
        {title: 'test', date: 'test'},
        {title: '666', date: '2018-01-01'},
        {title: '666', date: '2018-01-01'},
        {title: '666', date: '2018-01-01'},
        {title: 'userAgent与浏览器伪装', date: '2017-12-12'},
        {title: 'Vue.js实战: 清单应用', date: '2017-12-06'},
        {title: 'jQuery实战: 表单验证(下)', date: '2017-11-29'},
        {title: 'jQuery实战: 表单验证(上)', date: '2017-11-26'},
        {title: '第一篇Blog', date: '2017-11-21'}
      ],
      isIndex: true
    }
  },
  computed: {
  },
  components: {
    HeaderBox,
    NavBar,
    MainPanel
  },
  methods: {
    smoothScroll (data) {
      let $target = $(data)
      let targetOffset = $target.offset().top
      $('html,body').animate({
        scrollTop: targetOffset
      },
      500)
      return false
    }
  },
  mounted () {
    Bus.bus.$on('isIndex', data => {
      this.isIndex = data
      console.log('isIndex: ' + this.isIndex)
    })
    // 平滑滚动
    Bus.bus.$on('smoothscroll', data => {
      this.smoothScroll(data)
    })
  },
  watch: {
    '$route': function () {
      if (this.$route.path !== '/' && this.$route.path !== '/blog' && this.$route.path !== '/practices') {
        // this.smoothScroll('#index-page')
        document.body.scrollTop = 0
      }
    }
  }
}
</script>

<style scoped>

</style>
