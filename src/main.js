import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import User from "./components/User";
import UserDetail from "./components/UserDetail";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/user/:id",
      component: UserDetail
    },
    {
      path: "/user",
      component: User
    }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
