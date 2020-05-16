<template>
  <div class="goods">
    <GoodsListItem v-for="(item,index) in goods" :goodsList="item" :key="index"/>
  </div>
</template>
<script>
import GoodsListItem from '../goodsListItem/GoodsListItem'
export default {
  name: "goodslist",
  data () {
    return {
    };
  },
  props:{
    goods:{
      type:Array
    }
  },
  components:{
    GoodsListItem
  }
}
</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>