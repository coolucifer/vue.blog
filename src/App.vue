<template>
  <div id="app">
    <index-page></index-page>
  </div>
</template>

<script>
import IndexPage from '@/pages/IndexPage'

export default {
  name: 'app',
  components: {
    IndexPage
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: Consolas, 微软雅黑,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
img {
    user-select: none;
}
#index-page a:hover,
#index-page a:focus {
    text-decoration: none;
    cursor: pointer;
    color: #23527c;
}
.shadowbox {
    background-color: #fff;
    box-shadow: 0 2px 3px #e0e3e7;
    border-radius: 2px;
}

/* -------------------------blogframe.html------------------ */
#blog {
  padding: 20px;
}
.blog-content {
  padding-top: 15px;
  padding-bottom: 15px;
}

/* ---------------------------页面导航------------------------------- */

h3 {
  padding-top: 75px;
  margin-top: -70px;
}
</style>
