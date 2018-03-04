<template>
  <div id="blog" class="shadowbox">
    <ul class="pager">
      <li class="previous">
        <router-link to="/2017-11-26">上一篇
          <span aria-hidden="true">&larr;</span>
        </router-link>
      </li>
      <li class="next">
        <router-link to="/2017-12-06">下一篇
          <span aria-hidden="true">&rarr;</span>
        </router-link>
      </li>
    </ul>
    <h1>jQuery实战: 表单验证(下)</h1>
    <time datetime="2017-11-29">2017-11-29</time>
    <div class="blog-content">
      <p>上次我们讲到了如何为表单验证制定规则以及对规则的处理,之后就到了规则的验证阶段.</p>
      <p>表单验证的第二步就是规则验证,这里会使用构造器来创建一个构造函数<code>window.Validator()</code>,这样就可以使每一个input在blur的时候执行<code>this.validator.is_valid()</code>来验证内容了.</p>
      <pre>
 //传入input中的内容以及data-rule
 window.Validator = function (val,rule) {
 ... //验证
 }
</pre>
      <p>对于每个单独的规则,可以在validator中创建对应的验证函数.比如<code>data-rule="max:10"</code>,可以创建对应的<code>validate_max()</code>:</p>
      <pre>
 this.validate_max = function () {
  val = parseFloat(val);  //将传进来的val转换成数字类型
  return val <= rule.max;  //符合则返回true,否则返回false
 }
</pre>
      <p>当data-rule是正则表达式(<code>data-rule="pattern:^[a-z0-9]*$"</code>)时,对应的验证函数为:</p>
      <pre>
 this.validate_pattern = function () {
  var reg = new RegExp(rule.pattern);
  return reg.test(val);
 }
</pre>
      <p>有一个总的验证函数<code>is_valid()</code>来确定内容是否符合要求:</p>
      <pre>
 this.is_valid = function (new_val) {  //这里的new_val是用户输入的val
  if (new_val !== undefined) {
    val = new_val;
  }
  // if(new_val)
  // val = new_val;            
  var key; //key是rule{}里的'max'或'min'等            
  // 先验证是否为必填项,若不是必填项且用户未填写内容则直接判定为合法
  if (!rule.required && !val) {
    return true;
  }            
  for (key in rule) {  //对rule{}中的每一项进行检测
    // 防止重复检测
    if (key === 'required')
      continue;
    // 调用rule中相对应的方法
    var r = this['validate_' + key](); //this.validate_max()
    if (!r) return false;  //若验证不通过直接返回
  }
  return true;
 }
</pre>
      <p>这样表单验证的验证函数部分就完成了,下一步就是将每个input和validator绑定起来,这里设立一个监听函数<code>listen()</code>,当每一个input失去焦点(blur)的时候执行:</p>
      <pre>
 function listen() {
  $ele.on('blur',function () {
    var valid = me.validator.is_valid(me.get_val());  //获取输入框内的值
    if (valid)
      $error_ele.hide();  //错误提示
    else
      $error_ele.show();
  })
 }
</pre>
      <p>最后在整个表单提交的时候进行一个总的验证:</p>
      <pre>
 //在表单提交的时候进行验证
 $form.on('submit',function(event){
  event.preventDefault();  //防止刷新
  $inputs.trigger('blur');
  for(var i = 0; i < inputs.length; i ++){
    var item = inputs[i];
    var r = item.validator.is_valid();
    if(!r){
      alert('invalid');
      return;
    }
  }
  alert('valid!');
 })
</pre>
      <p>这样,表单验证就完成了.</p>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import Bus from '@/Bus.js'

export default {
  name: 'NovTwentiyNinth',

  data () {
    return {
      isIndex: false,
      sidebarlists: []
    }
  },
  components: {},
  mounted () {
    hljs.highlightCode()
    Bus.bus.$emit('isIndex', this.isIndex)
    Bus.bus.$emit('sidebarlists', this.sidebarlists)
  }
}
</script>

<style scoped>

</style>
