<template>
  <div id="home">
    <!--展示导航栏-->
    <NavBar class="nav-home">
      <div slot="center">购物街</div>
    </NavBar>
    <tab-control ref="tcontrol1" 
      :class="istabcontorl ? 'tct':''"
      v-show="istabcontorl"
      :contorl="contorl" @typeClick="typeClick"></tab-control> 
    <scroll class="beScroll" ref="scroll" 
      :probeType="3"  @scroll="backScroll"
      :PUL="true"
      @pullingUp="pullGoodsData">
      <!--展示轮播图-->
      <home-swiper :bannerList="bannerList"
       @hImgLoad="hImgLoad"></home-swiper>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <!-- 展示本周流行 -->
      <home-rage></home-rage>
      <tab-control ref="tcontrol2"
      :contorl="contorl"
      :class="istabcontorl ? 'tct':''"
      @typeClick="typeClick"></tab-control> 
      <!-- 展示商品 -->
      <goods-list :goods="goods[pageType].list"/>
    </scroll>
    <back-top @click.native="backClik"  
      v-show="isShow"/>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar.vue";
import { getRotationChart, getGoods } from "network/home.js";
import HomeSwiper from "./ChildCpns/HomeSwiper/HomeSwiper";
import HomeRecommend from "./ChildCpns/HomeSwiper/HomeRecommend";
import HomeRage from "./ChildCpns/HomeSwiper/HomeRage";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList"
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
export default {
  name: "home",
  data() {
    return {
      bannerList: [],
      recommendList: [],
      contorl: ["流行", "新款", "精选"],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      pageType:'pop',
      isShow:false,
      TabControlTop:100,
      istabcontorl:false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeRage,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //--------------获取轮播图
    this._getRotationChart()
    //-----------获取商品数据
    this._getGoods('pop')
    this._getGoods('new')
    this._getGoods('sell') 
  },
  mounted() {
    //1、监听图片加载完成
    let refresh = this.debounce(this.$refs.scroll.refresh, 200)
     //事件总线监听每一张图片加载完成
    this.$bus.$on('HomeImgLoad',() => {
      refresh()
    })
  },
  methods: {
    // ------------------事件监听
    //----------------------类型切换
    typeClick(e){
      // console.log(e)
      switch(e){
        case 0:
          this.pageType = 'pop'
          break;
        case 1:
          this.pageType = 'new'
          break
        case 2:
          this.pageType = 'sell'
      }
      this.$refs.tcontrol1.controlNum = e;
      this.$refs.tcontrol2.controlNum = e;
    },
    //---------------返回顶部
    backClik(){
      this.$refs.scroll.comScroll(0,0)
    },
    //-------------------隐藏和显示返回顶部的图标
    backScroll(options){
      this.isShow = (-options.y) > 1000
      this.istabcontorl = (-options.y) > this.TabControlTop
    },
    //-----------------------上拉加载更多
    pullGoodsData(){
      this._getGoods(this.pageType)
    },
    //------------防抖
    debounce(fun,delay){
      let time = null
      return function(...args){
         if(time) clearTimeout(time)
        time = setTimeout(()=>{
          fun.apply(this, args)
        },delay)
      }
    },
    //----监听轮播图是否加载完成
    hImgLoad(){
       // 1、监听tabContort与顶部的距离
       this.TabControlTop = this.$refs.tcontrol2.$el.offsetTop
    },
    //-------------------- 网络请求
    //--------------------轮播图
    _getRotationChart(){
      getRotationChart().then(res => {
      this.bannerList = res.data.banner.list;
      this.recommendList = res.data.recommend.list;
      // console.log(res.data);
      });
    },
    //------------------------------商品数据
    _getGoods(type){
      const page = this.goods[type].page + 1
      getGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1
        this.$refs.scroll.finish()
        // console.log(this.goods[type].list);
      });
    }
  }
};
</script>
<style>
#home{
  position: relative;
  height:100vh;
}
.nav-home {
  background-color: pink;
  text-align: center;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index:9;
}
.beScroll{
  position: absolute;
  background-color: #fff;
  top:44px;
  bottom: 54px;
  left: 0;
  right: 0;
}
.tct{
  position: fixed;
  top:44px;
  left:0;
  right: 0;
  z-index:9;
}
</style>
