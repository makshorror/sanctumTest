import * as VueRouter from "vue-router";


const routes = [
    {
        path: "/home", component: () => import("./components/Get.vue"),
        name: "get.index",
    },
    {
        path: "/login", component: () => import("./components/Login.vue"),
        name: "user.login",
    },
    {
        path: "/registration", component: () => import("./components/Registration.vue"),
        name: "user.registration",
    },
    {
        path: "/personal", component: () => import("./components/Personal.vue"),
        name: "user.personal",
    },
    {
        path: "/pathMatch(.*)*", component: () => import("./components/Personal.vue"),
        name: "404",
    },

];


export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory("/"),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("x_xsrf_token");

    if (!token) {
        if (to.name === "user.login" || to.name === "user.registration") {
            return next();
        } else {
            return next({
                name: "user.login",
            });
        }
    }

    if (to.name === "user.login" || to.name === "user.registration" && token) {
        return next({
            name: "user.personal",
        });
    }

    next();
});
