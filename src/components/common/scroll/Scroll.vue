<template>
  <div class="wrapper" ref="wrapper">
    <div class="wracon">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "scroll",
  data () {
    return {
      scroll:''
    };
  },
  props:{
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    PUL:{
      type:Boolean,
      default: false
    },
  },
  //组件被挂载触发
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:true,
      pullUpLoad:this.PUL
    })
     
     //监听页面实时滚动
    this.scroll.on('scroll',(options)=>{
      this.$emit('scroll',options)
    })
    //上拉加载更多
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods: {
    comScroll(x,y,time=300){
     this.scroll && this.scroll.scrollTo(x,y,time)
    },
    //解决上拉加载更多只执行一次
    finish(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
      
  },
}
</script>
<style scoped>
</style>