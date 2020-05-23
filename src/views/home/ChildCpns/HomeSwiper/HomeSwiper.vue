<template>
  <swiper>
    <swiper-item v-for="(item, index) in bannerList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: "homeSwiper",
  data() {
    return {
      isSwiper:false
    };
  },
  props:{
    bannerList:{
      type:Array
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      if(!this.isSwiper){
        //只会发送一次
        this.$emit('hImgLoad')
        this.isSwiper = true
      }
    }
  }

};
</script>
<style scoped></style>
