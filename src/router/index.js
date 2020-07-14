import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";

Vue.use(Router)

const routes = [{
    path: '/',
    name: "index",
    component: () => import("../views/dashboard/index")
}]
const router = new VueRouter({
    routes
})
export default router;
