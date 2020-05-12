<template>
  <div id="home">
    <!--展示导航栏-->
    <NavBar class="nav-home">
      <div slot="center">购物街</div>
    </NavBar>
    
    <!--展示轮播图-->
   <home-swiper :bannerList="bannerList"></home-swiper>
   <home-recommend :recommendList="recommendList"></home-recommend>

  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar.vue";
import {getRotationChart} from 'network/home.js'
import HomeSwiper from './ChildCpns/HomeSwiper/HomeSwiper'
import HomeRecommend from './ChildCpns/HomeSwiper/HomeRecommend'
export default {
  name: "home",
  data() {
    return {
      bannerList:[],
      recommendList:[]
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  created() {
    getRotationChart().then(res => {
      this.bannerList = res.data.banner.list
      this.recommendList = res.data.recommend.list
      console.log(res.data)
    })
  },
};
</script>
<style>
  .nav-home{
    background-color: pink;
    text-align: center;
  }
</style>
