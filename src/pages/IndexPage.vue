<template>
 <div id="index-page">
    <header-box v-if="isIndex"></header-box>
    <nav-bar></nav-bar>
    <main-panel :bloglists="bloglists">
    </main-panel>
 </div>
</template>

<script>
import HeaderBox from '@/components/HeaderBox'
import NavBar from '@/components/NavBar'
import MainPanel from '@/components/MainPanel'
import Bus from '@/Bus.js'

// import $ from 'jquery'

export default {
  name: 'IndexPage',

  data () {
    return {
      bloglists: [
        {title: 'test', date: 'test'},
        {title: '666', date: '2018-01-01'},
        {title: '666', date: '2018-01-01'},
        {title: '666', date: '2018-01-01'},
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
  },
  mounted () {
    Bus.bus.$on('isIndex', data => {
      this.isIndex = data
    })
    console.log(this.isIndex)
  }
}
</script>

<style scoped>

</style>
