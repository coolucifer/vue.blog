<template>
  <div id="blog" class="shadowbox">
    <ul class="pager">
      <li class="previous">
        <router-link to="/2017-12-23">上一篇
          <span aria-hidden="true">&larr;</span>
        </router-link>
      </li>
      <li class="next disabled">
        <router-link to="/2017-12-23">下一篇
          <span aria-hidden="true">&rarr;</span>
        </router-link>
      </li>
    </ul>
    <h1>ES6面向对象:绚丽小球</h1>
    <time datetime="2018-01-28">2018-01-28</time>
    <div class="blog-content">
      <p>有一段时间没有更新了,前几天学习ES6的时候跟着教程做了个绚丽小球,这里是<a href="https://github.com/coolucifer/colorful-balls">项目地址</a>以及效果:</p>
      <div id="show">
        <canvas id="canvas">当前浏览器不支持canvas</canvas>
      </div>
      <p>这个项目蛮简单的,主要思路就是创建一个小球类<code>class Ball{}</code>以及子类<code>class MoveBall{}</code>,通过监听鼠标移动在canvas上绘制随机颜色的小球,并向随机方向移动.</p>
      <h3 id="chapt1">一.创建小球类</h3>
      <p>在这里我们创建一个小球类<code>Ball</code>,拥有位置,颜色,半径三个属性以及一个绘制方法<code>render()</code>
      </p>
      <pre>
 //创建类
    class Ball {
      // 构造器
      constructor(posX, posY, color) {
        this.x = posX;
        this.y = posY;
        this.color = color;
        this.r = 40; //半径radius
      }
      // 绘制
      render() {
        ctx.save();
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }
</pre>
      <h3 id="chapt2">二.创建移动的小球</h3>
      <p>创建一个类<code>MoveBall{}</code>继承于<code>Ball{}</code>,这样它就拥有了小球的属性以及方法,接下来添加移动方向的属性使其可以随即方向移动以及方法<code>upDate()</code>用来更新属性.</p>
      <pre>
  class MoveBall extends Ball {
    constructor(posX, posY, color) {
      super(posX, posY, color); //调用父类属性

      //量的变化
      this.dX = Math.random() * 10 - 5 // dX:deltaX,x的增量
      this.dY = Math.random() * 10 - 5
      this.dR = Math.random() * 2 + 1
    }

    upDate() {
      this.x += this.dX;
      this.y += this.dY;
      this.r -= this.dR;
      if (this.r < 0) {
        this.r = 0;
      }
    }
  }
</pre>
      <h3 id="chapt3">三.监听事件及实例化</h3>
      <p>通过eventListener来监听鼠标移动事件<code>mousemove</code>,在鼠标移动时创建小球,通过一个数组<code>ballArr[]</code>存放小球的数据,以及在颜色数组<code>colorArr[]</code>中随机抽取颜色作为小球的颜色.</p>
      <pre>
  let ballArr = [];
  let colorArr = ['red', 'green', 'yellow', 'purple', 'blue', 'pink', 'orange'];
  //监听鼠标移动
  canvas.addEventListener('mousemove', function (e) {
    ballArr.push(
      new MoveBall(e.offsetX, e.offsetY, colorArr[Math.floor(Math.random() * (colorArr.length - 1))])
    );
  });
</pre>
      <h3 id="chapt4">四.刷新canvas及清理冗余</h3>
      <p>创建一个计数器来刷新画布以及绘制小球,否则所有生成的小球会黏在一起并且不会有动作.</p>
      <pre>
  setInterval(function () {
    //清屏
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //绘制
    for (let i = 0; i < ballArr.length; i++) {
      ballArr[i].render();  //渲染
      ballArr[i].upDate();  //更新
      if (ballArr[i].r === 0) {
        ballArr.splice(i, 1);
      }
    }
  },50);
</pre>
      <p>这里注意如果不进行冗余处理的话小球数组<code>ballArr[]</code>会越来越大,所以在这里我会删掉半径为0的项.</p>
      <p>这样,一个通过ES6面向对象的方式制作的绚丽小球就完成了.</p>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import $ from 'jquery'
import Bus from '@/Bus.js'

export default {
  name: 'JanTwentyEight',
  data () {
    return {
      isIndex: false,
      sidebarlists: []
    }
  },
  components: {
  },
  methods: {
    drawCanvas () {
      let contentWidth = $('.blog-content').width()
      // 1.获取&绘制画布
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = contentWidth
      canvas.height = 500
      canvas.style.backgroundColor = '#000'

      // 2.创建类
      class Ball {
        // 构造器
        constructor (posX, posY, color) {
          // console.log(this)
          this.x = posX
          this.y = posY
          this.color = color
          this.r = 40 // 半径radius
        }
        // 绘制
        render () {
          ctx.save()
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
          ctx.fillStyle = this.color
          ctx.fill()
          ctx.restore()
        }
      }

      // 3.移动的小球类
      class MoveBall extends Ball {
        constructor (posX, posY, color) {
          super(posX, posY, color) // 调用父类属性
          // console.log('color: ', color)

          // 量的变化
          this.dX = Math.random() * 10 - 5 // dX:deltaX,x的增量
          this.dY = Math.random() * 10 - 5
          this.dR = Math.random() * 2 + 1
        }
        upDate () {
          this.x += this.dX
          this.y += this.dY
          this.r -= this.dR
          if (this.r < 0) {
            this.r = 0
          }
        }
      }

      // 4.实例化
      let ballArr = []
      let colorArr = ['red', 'green', 'yellow', 'purple', 'blue', 'pink', 'orange']

      // 5.监听鼠标移动
      canvas.addEventListener('mousemove', function (e) {
        // console.log('colorArr: ', colorArr)
        ballArr.push(new MoveBall(e.offsetX, e.offsetY, colorArr[Math.floor(Math.random() * (colorArr.length - 1))]))
        // console.log(Math.floor(Math.random(0, colorArr.length - 1)))
        // console.log(colorArr)
      })

      // 6.开启定时器
      setInterval(function () {
        // 清屏
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // 绘制
        for (let i = 0; i < ballArr.length; i++) {
          ballArr[i].render()  // 渲染
          ballArr[i].upDate()  // 更新
          if (ballArr[i].r === 0) {
            ballArr.splice(i, 1)
          }
        }
      }, 50)
    }
  },
  mounted () {
    hljs.highlightCode()
    Bus.bus.$emit('isIndex', this.isIndex)
    Bus.bus.$emit('sidebarlists', this.sidebarlists)
    this.drawCanvas()
  }
}
</script>

<style scoped>
#canvas {
  box-shadow: 0 0 10px #000;
}
</style>
