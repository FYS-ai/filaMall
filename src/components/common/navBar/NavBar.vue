<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data () {
    return {
    };
  }
}
</script>
<style>
  .nav-bar{
    display:flex;
    height:44px;
    line-height: 44px;
    color:white;
  }
  .left,.right{
    width:60px;
    /* background-color: red; */
  }
  .center{
    flex: 1;
    /* background-color: green; */
  }
</style>