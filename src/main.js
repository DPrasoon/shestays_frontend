import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false;

//setting base URL
// axios.defaults.baseURL='https://shestays.onrender.com/'
axios.defaults.baseURL='http://localhost:3000/'

//area manager login
var am_login_status = false;
router.beforeEach((to, from, next) => {
  if (to.meta.am_auth) {
    am_login_status = localStorage.getItem("am_token");
    if (am_login_status) {
      next();
    } else {
      next('/am_home');
    }
  } else {
    next();
  }
})

//user login
var user_login_status = false;
router.beforeEach((to, from, next) => {
  if (to.meta.user_auth) {
    user_login_status = localStorage.getItem("user_token");
    if (user_login_status) {
      next();
    } else {
      next('/user_home');
    }
  } else {
    next();
  }
})

//admin login
var admin_login_status = false;
router.beforeEach((to, from, next) => {
  if (to.meta.admin_auth) {
    admin_login_status = localStorage.getItem("admin_token");
    if (admin_login_status) {
      next();
    } else {
      next('/admin_home');
    }
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
