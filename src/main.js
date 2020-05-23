import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//事件总线，监听事件，全局都可以调用
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
