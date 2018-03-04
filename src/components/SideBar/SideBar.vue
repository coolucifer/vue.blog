<template>
  <div class="side-bar outline" ref="outline">
    <div class="inner-side-bar shadowbox" :class="{'side-bar-fixed':isTop}" :style="{width: sideBarWidth}">
      <div class="avatar">
      </div>
      <div class="contact list-group">
        <side-bar-list :sidebarlists="sidebarlists">
          <a class="list-group-item"
            :sidebarlists="sidebarlists" 
            v-for="(list,index) in sidebarlists" :key="index"
            @click="smoothScroll(list.link)">
            <img :src="list.src" alt="">
            {{list.name}}
          </a>
        </side-bar-list>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Bus from '@/Bus.js'
import SideBarList from './SideBarList'
export default {
  name: 'SideBar',
  data () {
    return {
      sidebarlists: [],
      isTop: false,
      sideBarWidth: ''
    }
  },
  props: {
    isIndex: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  computed: {
    offsetTop: function () {
      return $('.inner-side-bar').offset().top
    }
  },
  methods: {
    smoothScroll (data) {
      Bus.bus.$emit('smoothscroll', data)
    },
    checkTop () {
      let scrollTop = document.body.scrollTop
      // console.log(this.offsetTop)
      // console.log('sidebarwidth: ' + this.sideBarWidth)
      // console.log($('.outline').width())
      // console.log(this.offsetTop)
      // console.log('scroll: ' + scrollTop)
      if (this.isIndex) {
        if (scrollTop > this.offsetTop - 75) {
          this.isTop = true
        } else {
          this.isTop = false
        }
      } else {
        this.isTop = true
      }
    },
    changeSideBarWidth () {
      this.sideBarWidth = String($('.outline').width() + 30) + 'px'
    },
    listen () {
      window.addEventListener('scroll', this.checkTop)
      window.addEventListener('resize', this.changeSideBarWidth)
    }
  },
  mounted () {
    this.changeSideBarWidth()
    this.listen()
    Bus.bus.$on('sidebarlists', data => {
      this.sidebarlists = data
    })
    console.log('on: ' + '666')
  },
  components: {
    SideBarList
  },
  watch: {
    '$route': function () {
      this.isTop = false
    }
  }
}
</script>

<style scoped>
.outline {
  width: 25%;
  height: 450px;
  float: right;
}
.inner-side-bar {
  min-width: 230px;
  padding: 15px;
  font-family: 微软雅黑;
  font-weight: bold;
}
.avatar {
  width: 100%;
  height: 0;
  padding-bottom: 105%;
  /* border: 10px solid white; */
  background-image: url(../../assets/images/Miku.gif);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.side-bar-fixed {
    position: fixed;
    top: 75px;
}
</style>
