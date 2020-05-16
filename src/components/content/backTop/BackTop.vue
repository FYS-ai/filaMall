<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>
<script>
export default {
  name: "BackTop",
  data () {
    return {
    };
  }
}
</script>
<style scoped>
.backtop{
  position: fixed;
  bottom: 60px;
  right: 10px;
  z-index:2;
}
.backtop img{
  width:43px;
  height:43px;
}
</style>