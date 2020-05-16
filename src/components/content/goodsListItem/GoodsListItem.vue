<template>
  <div class="goods-list">
    <img :src="goodsList.show.img" alt="">
    <div class="goods-list-item">
      <p class="title">{{goodsList.title}}</p>
      <span class="price">{{goodsList.price}}</span>
      <span class="cfav">{{goodsList.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodslistitem",
  data () {
    return {
    };
  },
  props:{
    goodsList:{
      type:Object
    }
  }
}
</script>
<style scoped>
  .goods-list{
    width: 48%;
    font-size: 14px;
    padding-bottom: 40px;
    position: relative;
  }
  .goods-list img{
    width:100%;
    border-radius: 5px;
    margin-bottom: 3px;
  }
  .goods-list-item{
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-list-item .title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .goods-list-item .price{
    color:red;
    padding-right: 20px;
  }
  .goods-list-item .cfav{
     position: relative;
  }
   .goods-list-item .cfav::before{
      content: '';
      position: absolute;
      left: -15px;
      top: 0;
      width: 14px;
      height: 14px;
      background: url("~assets/img/common/collect.png") 0 0/14px 14px;
   }
</style>