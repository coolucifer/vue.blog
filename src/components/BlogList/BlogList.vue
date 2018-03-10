<template>
 <div class="blog-list">
   <ul class="post-list list-unstyled">
     <template v-for="list in bloglists">
       <li class="post-list-item shadowbox" :key="list.index">
          <article class="article-card">
            <div class="post-meta">
              <time class="post-time" :title="list.date" :datedate="list.date">{{list.date}}</time>
            </div>
            <h3 class="post-title">
              <!-- <a :href="('/'+list.title)" class="post-title-link">{{list.title}}</a> -->
              <router-link :to="list.date" class="post-title-link">{{list.title}}</router-link>
            </h3>
          </article>
        </li>
     </template>
   </ul>
 </div>
</template>

<script>
import Bus from '@/Bus.js'

export default {
  name: 'BlogList',

  data () {
    return {
      isIndex: true
    }
  },
  props: {
    bloglists: {
      type: Array,
      default: function () {
        return []
      }
    },
    sidebarlists: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
  },
  mounted () {
    Bus.bus.$emit('sidebarlists', this.sidebarlists)
    Bus.bus.$emit('isIndex', this.isIndex)
  }
}
</script>

<style scoped>
.post-list-item {
    padding: 20px;
    margin-bottom: 10px;
}

.post-list-item time {
    font-size: 15px;
    font-weight: bold;
    flood-color: #999;
}
</style>
