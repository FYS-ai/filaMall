<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.png" alt="" />
    </div>
    <div slot="center" class="centerItem">
      <span
        v-for="(item, index) in titles"
        @click="centerClcik(index)"
        :key="index"
        class="title-item"
        :class="titleIndex === index ? 'active' : ''"
        >{{ item }}</span
      >
    </div>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      titleIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    centerClcik(e) {
      this.titleIndex = e;
    }
  }
};
</script>
<style scoped>
.back {
  width: 35px;
  height: 35px;
  margin-top: 6px;
}
.back img {
  width: 100%;
  height: 100%;
}
.centerItem {
  display: flex;
  color: black;
  text-align: center;
}
.centerItem .title-item {
  flex: 1;
}
.active {
  color: red;
}
</style>
