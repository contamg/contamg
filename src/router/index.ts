import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import * as util from "../util";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home - Conta MG",
      metaTags: [
        { name: "description", content: "Conta MG the best ERP App" },
        { name: "og:description", content: "Conta MG the best ERP App" }
      ]
    },
    component: Home
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "About - Conta MG",
      metaTags: [
        { name: "description", content: "Conta MG about ERP App" },
        { name: "og:description", content: "Conta MG about ERP App" }
      ]
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.metaTags) {
    util.addMeta(to.meta.metaTags);
  }
  next();
});

export default router;
