<template>
  <div class="nav-bar fix-height">
    <nav :class="{'navbar-fixed-top': isTop}" class="navbar shadowbox" id="anchor">
    <div class="container">
      <router-link class="nav-item" to="/">首页 </router-link>
      <router-link class="nav-item" to="/blog">&nbsp;blog </router-link>
      <router-link class="nav-item" to="/practices">&nbsp;小练习</router-link>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
      isTop: false
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
      return document.querySelector('.navbar').offsetTop
    }
  },
  methods: {
    checkTop () {
      if (this.isIndex) {
        let scrollTop = document.body.scrollTop
      // console.log('nav: ' + this.offsetTop)
      // console.log('offsetTop: ' + this.offsetTop)
        if (scrollTop > this.offsetTop) {
          this.isTop = true
        } else {
          this.isTop = false
        }
      } else {
        this.isTop = true
      }
      // console.log('topChecked!', this.isTop)
    },
    listen () {
      window.addEventListener('scroll', this.checkTop)
    }
  },
  mounted () {
    this.listen()
    console.log('isIndex: ' + this.isIndex)
  },
  watch: {
    '$route': function () {
      this.isTop = false
      // this.checkTop()
    }
  }
}
</script>

<style scoped>
.navbar {
    background-color: #fff;
    height: 65px;
    width: 100%;
    min-width: 1000px;
    padding: 12.5px 0;
    margin-bottom: 0;
    border: none;
    /* position: absolute; */
    /* bottom: 0; */
    z-index: 3;
}
.navbar .container {
    margin: 0 auto;
    width: 75%;
    padding: 0;
}
.nav-item {
    color: #999;
    font-family: 微软雅黑;
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
}
.nav-item:nth-child(2) {
    border-left: 2px solid #999;
    border-right: 2px solid #999;
}
.nav-item.active,
.nav-item:hover {
    color: #23527c;
}
.fix-height {
  height: 65px;
}
</style>
