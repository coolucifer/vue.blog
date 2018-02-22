<template>
 <div id="ers" class="shadowbox">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius tempore praesentium, error harum ab quae minima deserunt inventore iste officia aperiam reiciendis soluta eaque a nostrum obcaecati tenetur eos.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius tempore praesentium, error harum ab quae minima deserunt inventore iste officia aperiam reiciendis soluta eaque a nostrum obcaecati tenetur eos.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius tempore praesentium, error harum ab quae minima deserunt inventore iste officia aperiam reiciendis soluta eaque a nostrum obcaecati tenetur eos.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius tempore praesentium, error harum ab quae minima deserunt inventore iste officia aperiam reiciendis soluta eaque a nostrum obcaecati tenetur eos.
 </div>
</template>

<script>
import Bus from '@/Bus.js'
export default {
  name: 'JanFirst',

  data () {
    return {
      sidebarlists: [
        {name: 'GitHub',
          link: 'https://github.com/coolucifer',
          src: './static/img/github-logo-b.png'
        },
        {name: 'GitHub',
          link: 'https://github.com/coolucifer',
          src: './static/img/github-logo-b.png'
        },
        {name: 'GitHub',
          link: 'https://github.com/coolucifer',
          src: './static/img/github-logo-b.png'
        },
        {name: 'GitHub',
          link: 'https://github.com/coolucifer',
          src: './static/img/github-logo-b.png'
        }
      ],
      isIndex: false
    }
  },
  methods: {
    emitData () {
      Bus.bus.$emit('sidebarlists', this.sidebarlists)
      Bus.bus.$emit('isIndex', this.isIndex)
      console.log('emit: ')
    }
  },
  mounted () {
    this.emitData()
  },
  components: {

  }
}
</script>

<style scoped>

</style>
