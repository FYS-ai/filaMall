<template>

  <div class="wrapper" ref="aaa">
    <ul class="content">
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表1</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
    <li>列表</li>
  </ul>
  </div> 
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "category",
  data () {
    return {
      scroll:''
    };
  },
  mounted() {
   this.scroll = new BScroll(this.$refs.aaa,{

   })
  },
}
</script>
<style scoped>
.wrapper{
  height:300px;
  background-color: hotpink;
  overflow: hidden;
}
</style>
