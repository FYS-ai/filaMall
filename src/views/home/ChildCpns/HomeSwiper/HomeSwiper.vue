<template>
  <swiper>
    <swiper-item v-for="(item, index) in bannerList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: "homeSwiper",
  data() {
    return {};
  },
  props:{
    bannerList:{
      type:Array
    }
  },
  components:{
    Swiper,
    SwiperItem
  }

};
</script>
<style></style>
