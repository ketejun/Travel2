<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">北京欢乐谷(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe663;</span>39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
  },
  data() {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_r_800x800_5cdd4127.jpg','http://img1.qunarzz.com/sight/p0/1508/ca/4b627c0f2d6c7834280a630101e02edb.water.jpg_r_800x800_f798b6ac.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position : relative
    overflow : hidden
    height : 0
    padding-bottom : 55%
    .banner-img
      width : 100%
    .banner-info
      display : flex
      position : absolute
      left : 0
      right : 0
      bottom : 0
      line-height : .6rem
      color : #fff
      background-image : linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex : 1
        font-size : .32rem
        padding : 0 .2rem
      .banner-number
        height  : .32rem
        line-height : .32rem
        margin-top : .14rem
        padding : 0 .4rem
        border-radius : .2rem
        background : rgba(0,0,0,.8)
        font-size : .24rem
        .banner-icon
          font-size : .24rem
          margin-right: 0.05rem
</style>