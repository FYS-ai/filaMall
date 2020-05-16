<template>
  <div id="home-recomend">
    <div class="recomend-item" v-for="(item, index) in recommendList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "homeRecommend",
  data() {
    return {};
  },
  props: {
    recommendList: {
      type: Array
    }
  }
};
</script>
<style scoped>
#home-recomend{
   display: flex;
   justify-content: space-around;
   margin-top: 20px;
   border-bottom: 12px solid #eeeeee;
   padding-bottom: 29px;
}
.recomend-item{
  text-align: center;
  
}
.recomend-item img{
  width: 70px;
  height: 70px;
}
</style>
