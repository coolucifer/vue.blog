<template>
 <div id="blog" class="shadowbox">
   <ul class="pager">
    <li class="previous">
      <router-link to="/2017-11-21">上一篇
        <span aria-hidden="true">&larr;</span>
      </router-link>
    </li>
    <li class="next">
      <router-link to="/2017-11-29">下一篇
        <span aria-hidden="true">&rarr;</span>
      </router-link>
    </li>
  </ul>
  <h1>jQuery实战: 表单验证(上)</h1>
  <time datetime="2017-11-26">2017-11-26</time>
  <div class="blog-content">
    <p>大家好,这里是我的第二篇博客! 今天来讲一下怎么用jQuery做一个表单验证,这里是<a href="https://coolucifer.github.io/jQuery-Form-Validation/index.html">成品地址</a>.</p>
    <p>表单验证的大致思路就是在input里添加一个按照一定语法写的自定义属性<code>data-rule</code>,在输入框blur的时候通过不同的data-rule来验证其中的内容符不符合要求,如果不符合则弹出错误信息.</p>
    <p>首先当然就是如何将data-rule解析成一个个规则,这里是将它由字符串变成一个对象<code>rule{}</code>.</p>
    <pre>
 function parse_rule() {
  // .data方法专门用于用于获取'data-'开头的属性字符串
  // data-rule="min:18|maxlength:10"
  var rule_string = $ele.data('rule');  //相当于获取'data-rule'"
  if (!rule_string) return;  //没有rule

  // .split()方法 分割
  var rule_arr = rule_string.split('|');  //返回一个数组
  // rule_arr['min:18','maxlength:10']
  for (var i = 0; i < rule_arr.length; i++) {
    var item_str = rule_arr[i];
    var item_arr = item_str.split(':');
    // item_arr['min','18']
    rule[item_arr[0]] = JSON.parse(item_arr[1]);  //通过JSON.parse()来确定返回值的类型
    // rule['min'] = '18'
    // rule{min:18}
  }
 }
</pre>
    <P>这样<code>data-rule="min:18|maxlength:10"</code>就变成了一个<code>rule{min:18,maxlength:10}</code>对象,可以在验证函数validator()中调用rule.xxx来验证是否符合要求了.</P>
    <p style="text-align:right">2017-11-26</p>
  </div>
 </div>
</template>

<script>
import hljs from 'highlight.js'
import Bus from '@/Bus.js'

export default {
  name: 'NovTwentySixth',

  data () {
    return {
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
