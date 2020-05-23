<template>
  <div id="detailcenter">
    <div class="shopName">
      <img class="sImg" :src="'http:'+shopInfo.shopLogo" alt="">
      <div class="sName">{{shopInfo.name}}</div>
    </div>
    <div class="shopXX">
      <div class="SCC">
        <div>
          <div>{{shopInfo.cSells}}</div>
          <div>总销量</div>
        </div>
        <div>
          <div>{{shopInfo.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="SNSP">
        <div v-for="(item,index) in shopInfo.score"
        :key="index">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span>低</span>
        </div>
      </div>
      <div>
        <button>进店逛逛</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailCenter",
  data () {
    return {
    };
  },
  props:{
    shopInfo:{
      type:Object
    }
  },
  mounted() {
    
    this.shopInfo.score
  },
}
</script>
<style scoped>
.shopName{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.shopName .sImg{
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.shopName .sName{
  font-size: 20px;
  margin-left: 10px;
}
</style>