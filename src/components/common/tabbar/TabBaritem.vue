<template>
  <div class="tabbarItem" @click="butn">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "tabbaritem",
  data() {
    return {
      // isActive:true
    };
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  methods: {
    butn(){
      this.$router.push(this.path)
    }
  },
};
</script>
<style>

.tabbarItem {
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-bottom: 3px;
}
.tabbarItem img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 3px;
}

</style>
