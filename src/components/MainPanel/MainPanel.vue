<template>
  <div class="main-panel" :style="{minHeight: setMainColumnHeight + 'px'}">
    <div class="contain clearfix">
      <div class="main-column">
        <router-view :bloglists="bloglists">66666</router-view>
      </div>
      <side-bar :isIndex="isIndex"></side-bar>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
  name: 'MainPanel',
  data () {
    return {}
  },
  props: {
    bloglists: {
      type: Array,
      default: function () {
        return []
      }
    },
    isIndex: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  computed: {
    setMainColumnHeight: function () {
      let height = document.documentElement.clientHeight || window.innerHeight
      if ((height - 65) < 537) {
        return 537
      } else {
        return height - 65
      }
    }
  },
  components: {
    SideBar
  }
}
</script>

<style scoped>
.main-panel{
  background-color: #f3f3f3;
  min-width: 800px;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
}
.contain {
  position: relative;
  width: 80%;
  /* margin-top: 10px; */
  margin-left: auto;
  margin-right: auto;
}
.main-column {
  width: 72%;
  float: left;
}
</style>
