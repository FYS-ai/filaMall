<template>
  <div id="tabControl">
      <div v-for="(item,index) in contorl" :key="index"
       @click="conClick(index)" 
      >
          <span  :class="controlNum == index ? 'conActive':''">
            {{item}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data () {
    return {
      controlNum:0,
    };
  },
  props:{
    contorl:{
      type:Array
    }
  },
  methods: {
    conClick(e){
      this.controlNum = e
      this.$emit('typeClick',e)
      // console.log(e)
    }
  },
}
</script>
<style scoped>
#tabControl{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  font-size: 18px;
  background-color: #fff;
}
#tabControl div{
  flex: 1;
  height:44px;
  line-height: 44px;
}
.conActive{
  border-bottom: 2px solid red;
  padding-bottom: 5px;
  color: red;
}
</style>