import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";

/* Layout */
import Layout from "@/layout"

Vue.use(Router)

const routes = [{
    path: '/',
    // component: () => import("../views/dashboard/index"),
    component: Layout,
    redirect: '/dashboard',
    children: [{
        path: "dashboard",
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
},
{
    path: '/example',
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "Example", icon: 'el-icon-s-help' },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
    }, {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
    }]
}]
const router = new VueRouter({
    routes
})
export default router;
