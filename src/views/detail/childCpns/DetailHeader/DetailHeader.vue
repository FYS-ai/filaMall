<template>
  <div id="DetailHeader">
    <div class="itemInfo-item">
      <div class="headerTitle">{{ itemInfo.title }}</div>
      <div class="POD">
        <span class="price">{{ itemInfo.price }}</span>
        <span class="oldPrice">{{ itemInfo.oldPrice }}</span>
        <span class="discountDesc">{{ itemInfo.discountDesc }}</span>
      </div>
    </div>
    <div class="header-columns">
      <div class="columns-item" v-for="(item, index) in columns" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="header-services">
      <div class="services-item" v-for="(item, index) in services" :key="index">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {};
  },
  props: {
    itemInfo: {
      type: Object
    },
    columns: {
      type: Array
    },
    services: {
      type: Array
    }
  }
};
</script>
<style scoped>
#DetailHeader{
border-bottom: 5px solid rgb(204, 201, 201);
  padding-bottom: 20px;
}
.itemInfo-item {
  font-size: 20px;
}
.itemInfo-item .headerTitle {
  font-size: 15px;
  margin: 10px 10px 0px 10px;
}
.itemInfo-item .POD {
  margin-top: 10px;
}
.POD .price {
  color: red;
  margin: 0px 10px 0px 10px;
}
.POD .oldPrice {
  text-decoration: line-through;
}
.POD .discountDesc {
  font-size: 13px;
  background: #ec6179;
  border-radius: 4px;
  padding: 3px;
  color: white;
  position: relative;
  top: -10px;
  left: 5px;
}

.header-columns {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 10px 5px 0 5px;
  border-bottom: 2px solid rgb(204, 201, 201);
      padding-bottom: 6px;
}

.header-services {
  font-size: 15px;
  margin: 10px 5px 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  flex-wrap: wrap;
}
.services-item img {
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
</style>
