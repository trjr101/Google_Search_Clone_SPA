// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Searchbox from './components/Searchbox'
import Insert from './components/Insert'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Searchbox },
  { path: '/insert', component: Insert}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
}).$mount('#app')
