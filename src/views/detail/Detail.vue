<template>
  <div id="detail">
    <detail-nav-bar />
    
    <detail-swipet :topImages="topImages"></detail-swipet>
    
    <detail-header :itemInfo="itemInfo"
    :columns="columns"
    :services="services"></detail-header>

    <detail-center :shopInfo="shopInfo"></detail-center>
    <ul>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
      <li>1*100</li>
    </ul>
  </div>
</template>
<script>
import { getDetail } from "network/detail.js";

import DetailNavBar from "./childCpns/DetailNavBar/DetailNavBar";
import DetailSwipet from './childCpns/DetailSwiper/DetailSwiper'
import DetailHeader from './childCpns/DetailHeader/DetailHeader'
import DetailCenter from './childCpns/DetailCentent/DetailCentent'
export default {
  name: "Detail",
  data() {
    return {
      id: "",
      topImages: [],//轮播图
      itemInfo:{},//标题价格
      columns:[],//销量、收藏
      services:[],//服务保障
      shopInfo:{},//商店信息
      cSells:'',//总销量
      cGoods:'',//全部宝贝
    };
  },
  created() {
    this.id = this.$route.params.iid;
    getDetail(this.id).then(res => {
      this.topImages = res.result.itemInfo.topImages;
      this.itemInfo = res.result.itemInfo;
      this.columns = res.result.columns
      this.services = res.result.shopInfo.services
      this.shopInfo = res.result.shopInfo
      this.cSells = res.result.shopInfo.cSells
      this.cGoods = res.result.shopInfo.cGoods
      console.log(res.result);
    });
  },
  components: {
    DetailNavBar,
    DetailSwipet,
    DetailHeader,
    DetailCenter
  }
};
</script>
<style scoped>

</style>
