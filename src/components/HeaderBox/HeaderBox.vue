<template>
  <div class="headerbox" :style="{height: headerHeight + 'px'}">
    <div id="bgimg"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBox',
  data () {
    return {}
  },
  computed: {
    headerHeight: function () {
      let height = document.documentElement.clientHeight || window.innerHeight
      return height - 65
    }
  }
}
</script>

<style scoped>
#bgimg {
  z-index: -1;
  position: fixed;
  min-width: 800px;
  /* 自适应宽度100%浏览器innerWidth->CSS3 */
  width: 100vw; 
  height: 100%;
  background-image: url('../../assets/images/index.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
