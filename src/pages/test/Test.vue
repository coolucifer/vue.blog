<template>
 <div class="test">
   <!-- <blog-list :bloglists="BlogList"></blog-list> -->
   <six-six-six></six-six-six>
 </div>
</template>

<script>
// import BlogList from '@/components/BlogList'
import SixSixSix from '@/pages/BlogPages/2017-12-06'

export default {
  name: 'Test',

  data () {
    return {
      BlogList: [
        {
          title: '666',
          date: '777'
        }
      ]
    }
  },
  components: {
    // BlogList
    SixSixSix
  }
}
</script>

<style scoped>

</style>
