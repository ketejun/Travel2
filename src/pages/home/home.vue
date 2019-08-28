<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper
    }
  }
</script>

<style scoped>
  
</style>