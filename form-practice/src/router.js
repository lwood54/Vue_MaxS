import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("./views/Conatct.vue")
		},
		{
			path: "/insubuy",
			name: "insubuy",
			component: () => import("./views/Insubuy.vue")
            },
            {
                  path: "/insubuy2",
                  name: "insubuy2",
                  component: () => import("./views/Insubuy2.vue")
            },
            {
                  path: "/quotes-page",
                  name: "quotes-page",
                  component: () => import("./views/QuotesPage.vue")
            }
	]
});
