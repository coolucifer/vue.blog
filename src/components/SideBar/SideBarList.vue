<template>
  <div class="list-group">
    <slot>
      <a class="list-group-item" href="https://github.com/coolucifer" target="_blank">
        <img src="../../assets/images/github-logo-b.png" /> GitHub</a>
      <a class="list-group-item" href="mailto:1045606768@qq.com">
        <img src="../../assets/images/email.png" /> Mail-to</a>
      <a class="list-group-item" href="http://wpa.qq.com/msgrd?v=3&uin=1045606768&site=qq&menu=yes" target="_blank">
        <img src="../../assets/images/qq-penguin-shape.png" /> QQ</a>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SideBarList',
  data () {
    return {}
  },
  props: {
    sidebarlists: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
img {
    height: 20px;
    width: 20px;
}
</style>
