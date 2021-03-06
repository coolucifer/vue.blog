<template>
 <div id="blog" class="shadowbox">
  <ul class="pager">
    <li class="previous">
        <router-link to="/2017-11-29">上一篇
          <span aria-hidden="true">&larr;</span>
        </router-link>
      </li>
      <li class="next">
        <router-link to="/2017-12-12">下一篇
          <span aria-hidden="true">&rarr;</span>
        </router-link>
      </li>
  </ul>
  <h1>Vue.js实战: 清单应用</h1>
    <time datetime="2017-12-06">2017-12-06</time>
    <div class="blog-content">
      <p>今天我们来做一个Vue.js的清单应用,作为学习Vue.js的一个小练习,这里是<a href="https://coolucifer.github.io/vue-list/index.html">成品地址</a>.</p>
      <h3 id="chapt1">一.确定页面的基础结构及数据存储</h3>
      <p>做一个应用首先要确定页面的基础结构和样式,确定好各部件的上下级关系,比如标题,输入框,以及待办事项,已完成事项的位置.这里先用html建立一个大致的框架.</p>
      <img class="img-responsive center-block" :src="Img" alt="页面框架">
      
    <h3 id="chapt2">二.任务的添加,删除与更新</h3>
    <p>清单应用的主要功能,就是任务的添加,删除与更新(传说中的增删改<del>没有查</del>).</p>
    <p>这是一个基于Vue.js的应用,当然要新建一个vue组件.组件中包含了<code>data:{}</code>用来存放数据,和<code>methods:{}</code>用来设置方法.</p>
    <p>这里的数据分为两种类型: 输入框中正在输入的数据以及任务列表中的数据.正在输入的数据存储在data中的对象<code>current:{}</code>里,任务列表存放在数组<code>list:[]</code>里.</p>
    <p>方法存放在<code>methods:{}</code>中,主要的功能有添加<code>add()</code>,删除<code>remove()</code>和更新<code>update()</code>.</p>
    <p>通常来说,我们会在用户在输入框中输入回车<kbd>Enter</kbd>或者点击提交按钮的时候调用添加<code>add()</code>,因此可以在form中绑定事件<code>@submit.prevent="add"</code>,在表单提交的时候add()就可以将表单内容添加到数组list[]中.</p>
<pre>
 methods: {
  add: function () {
    var title = this.current.title;
    if(!title && title !== 0) return;  //验证输入框内容是否为空

    var todo = Object.assign({},this.current);  //将数组合并
    this.list.push(todo)
  }
 }
</pre>
    <p>对条目进行修改,更新时我们可以调用update()方法,然而实际上更新和添加的实现过程大部分是一样的,因此可以将两个方法结合成一个<code>merge()</code>.</p>
    <p>为了确认在submit的时候是进行添加还是进行更新,我们可以给merge()传入一个独特的任务id,当传入任务id的时候为更新,无参数的时候为添加.当确认进行更新时,我们首先要找到即将更新的那项任务</p>
<pre>
 var is_update = this.current.id;
 if (is_update) {    //如果是添加
  //.find()返回满足条件的第一个元素,这里是"item.id==is_update"
  var index = this.find_index_by_id(id);
  //vue中修改数组的方式
  Vue.set(this.list,index,Object.assign({},this.current));
 }else{    //否则
  ...
 },

 find_index_by_id: function (id) {
  return this.list.findIndex(function (item) {  //返回符合要求的项的index
    return item.id == id;
  })
 },
</pre>
    <p>如果想删除数据,可以在用户点击按钮的时候调用<code>remove(todo.id)</code>,可以通过对数组进行.splice()来删除.</p>
<pre>
 remove: function (id) {
  var index = this.find_index_by_id(id);
  //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目
  //该方法会改变原始数组
  this.list.splice(index,1);
 },
</pre>
    <h3 id="chapt3">三.localStorage与对接</h3>
    <p>在设定好基础功能之后,下一个问题就是是数据的存储与交互.正常来说存储数据是需要数据库的支持的,由于这是纯前端项目不会涉及到数据库,我们可以使用前端的一种存储数据的方式<a href="https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage">localStorage</a>来存放数据.</p>
    <p>localStorage主要是两个方法: <code>setItem()</code>和<code>getItem()</code>,分别用来创建和取值.它和sessionStorage的区别在于sessionStorage在关闭页面之后数据就会清空,而localStorage的数据不会在关闭页面之后清空.</p>
    <blockquote>
      <p>localStorage.setItem('myCat','Tom');&nbsp;&nbsp;//添加数据</p>
      <p>localStorage.getItem("myCat");&nbsp;&nbsp;//读取数据</p>
      <p>localStorage.removeItem("myCat");&nbsp;&nbsp;//删除数据</p>
    </blockquote>
    <p>我们可以将localStorage封装到我们自己的js文件中,使其在项目中更方便的使用.</p>
<pre>
 function () {
 window.ms = {  //将方法暴露出去
  set: set,
  get: get,
 };

 function set(key,val) {  //set()
  localStorage.setItem(key,JSON.stringify(val));
 };

 function get(key) {  //get()
  var json = localStorage.getItem(key);
  if (json) {
    return JSON.parse(json);
  }
 }
 }</pre>
    <p>这样在其他文件里调用方法的时候可以直接使用<code>var task = ms.get('task');</code>来获取数据了.</p>
    <p>接着是与localStorage的对接.在挂载时(<code>mounted:</code>)我们要使用get()方法取出localStorage中的数据,并且在list[]有变动时,我们都要使用set()方法将它保存到localStorage里,我们可以通过Vue的侦听器(<code>watch:</code>)来监测list[]是否有变化.</p>
<pre>
 mounted: function () {
  this.list = ms.get('list') || this.list;
 },

 watch: {
  //每次list发生变化的时候自动执行handler
  list: {
    deep: true, //无论list嵌套得有多深
    handler: function (new_val,old_val) {
      if (new_val) {
        ms.set('list',new_val);
      } else {
        ms.set('list',[]);
      }
     }
  }
 }
</pre>
      <h3 id="chapt4">四.组件化与EventBus</h3>
      <p>我们可以考虑将任务列表组件化,在本例中我们将未完成任务列表转化为一个Vue组件:</p>
<pre>
 Vue.component('task',{
  template: '#task-tpl',
  props: ['todo'],
  methods: {
    action: function (name,params) {
      //https://cn.vuejs.org/v2/api/#vm-on 事件触发
      //this.$emit("自定义事件名",要传送的数据)
      //v-on:自定义事件名="在methods中的函数名"
      Event.$emit(name,params);
    }
  }
 })
</pre>
      <p>这里我们使用了Event作为一个事件的调度中心:<code>var Event = new Vue();</code>,用来进行子组件与父组件之间的通信.这时我们要在子组件里触发一个事件<code>Event.$emit(name,params);</code>,从而可以在父级组件中监控事件.</p>
<pre>
 mounted: function () {
   var me = this;
   Event.$on('remove',function (id) {
     if(id){
       me.remove(id);
     }
   })
 }
</pre>
      <p>同时在组件中的按钮绑定的点击事件也要改为<code>@click="action('remove',todo.id)"</code></p>
    </div>
 </div>
</template>

<script>
import hljs from 'highlight.js'
import Bus from '@/Bus.js'
import Img from '@/assets/images/blog-use/17-12-06-page-frame.png'

export default {
  name: 'DecSixth',

  data () {
    return {
      Img,
      isIndex: false,
      sidebarlists: [
        {name: '页面结构及数据存储',
          link: '#chapt1',
          src: './static/img/attach.png'
        },
        {name: '任务的添加,删除与更新',
          link: '#chapt2',
          src: './static/img/attach.png'
        },
        {name: '与localStorage对接',
          link: '#chapt3',
          src: './static/img/attach.png'
        },
        {name: '组件化与EventBus',
          link: '#chapt4',
          src: './static/img/attach.png'
        }
      ]
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
