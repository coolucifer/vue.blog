<template>
  <div id="blog" class="shadowbox">
    <ul class="pager">
      <li class="previous">
        <router-link to="/2017-12-06">上一篇
          <span aria-hidden="true">&larr;</span>
        </router-link>
      </li>
      <li class="next">
        <router-link to="/2017-12-23">下一篇
          <span aria-hidden="true">&rarr;</span>
        </router-link>
      </li>
    </ul>
    <h1>userAgent与浏览器伪装</h1>
    <time datetime="2017-12-12">2017-12-12</time>
    <div class="blog-content">
      <p>腾讯最近有很多翻卡抽奖活动,里面经常有一项QQ浏览器任务,如果你在QQ浏览器中打开这个页面就会获得x次翻卡机会.但是有时候我们并不想下载<del>从来都不想下</del>QQ浏览器,这时我们可以通过修改userAgent(UA)字符串来"骗过"服务器,让它认为我们是通过QQ浏览器打开的网页.</p>
      <p>userAgent是HTML DOM的一条属性,它是一个只读的字符串,声明了浏览器用于HTTP请求的用户代理头的值.我们可以在控制台中通过
        <code>navigator.userAgent</code>调出,一般来讲它是这样的:</p>
      <pre>
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/62.0.3202.94 Safari/537.36"
</pre>
      <p>斜线前面是
        <code>navigator.appCodeName</code>,斜线后面的值是
        <code>navigator.appVersion</code>.在访问网站时,服务器就会通过这条字符串来判断你所使用的浏览器类型.</p>
      <p>那么,我们该如何通过修改userAgent来伪装浏览器呢? 针对不同的本地浏览器,需要不同的方法.</p>
      <h4>IE & Edge:</h4>
      <p>IE 11以及Microsoft Edge可以通过按
        <kbd>F12</kbd>开启控制台,切换到'仿真'选项卡,里面可以自定义用户代理字符串.</p>
      <img class="img-responsive center-block" :src="ImgIE" alt="IE">
      <h4>FireFox</h4>
      <p>火狐浏览器可以在地址栏中输入
        <code>about:config</code>后回车
        <kbd>Enter</kbd>,搜索
        <code>general.useragent.override</code>,如果不存在的话可以右键下面空白处-新建-字符串,在弹出的对话框先输入general.useragent.override,在接下来的对话框输入要修改的UA值.</p>
      <img class="img-responsive center-block" :src="ImgFireFox" alt="FireFox">
      <p>如果已经有general.useragent.override了可以右键-修改,在对话框中输入UA值.</p>
      <h4>Chrome</h4>
      <P>Chrome可以新建一个快捷方式或直接使用原快捷方式,右键-属性-快捷方式-目标,在输入框尾部加入
        <code>--user-agent=UA值</code>,确定后通过该快捷方式启动Chrome即可.</P>
      <img class="img-responsive center-block" :src="ImgChrome" alt="Chrome">
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import Bus from '@/Bus.js'
import ImgIE from '@/assets/images/blog-use/17-12-12-ie.png'
import ImgChrome from '@/assets/images/blog-use/17-12-12-chrome.png'
import ImgFireFox from '@/assets/images/blog-use/17-12-12-firefox.png'

export default {
  name: 'DecTwelve',
  data () {
    return {
      ImgIE,
      ImgChrome,
      ImgFireFox,
      isIndex: false,
      sidebarlists: []
    }
  },
  components: {
  },
  mounted () {
    hljs.highlightCode()
    Bus.bus.$emit('isIndex', this.isIndex)
    Bus.bus.$emit('sidebarlists', this.sidebarlists)
  }
}
</script>

<style scoped>

</style>
