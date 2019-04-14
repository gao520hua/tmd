import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			meta: {
				title: "首页"
			},
			component: () => import("@/components/Home/index")
		},
		{
			path: "/product",
			name: "product",
			meta: {
				title: "矿机"
			},
			component: () => import("@/components/Product/index")
		}, 
		{
			path: "/product/detail/:id",
			name: "detail",
			meta: {
				title: "商品详情"
			}, 
			component: () => import("@/components/Product/Detail")
		},
		{
			path: "/about",
			name: "about",
			meta: {
				title: "关于我们"
			},
			component: () => import("@/components/About/index")
		},
		{
			path: "/account/:type",
			name: "account",
			meta: {
				title: "账户页面"
			}, 
			component: () => import("@/components/Account/index")
		},
		{
			path: "/login",
			name: "login",
			meta: {
				title: "登录"
			},
			component: () => import("@/components/Login/index")
		},
		{
			path: "/register",
			name: "register",
			meta: {
				title: "注册"
			},
			component: () => import("@/components/Login/register")
		},
		{
			path: "/blog",
			name: "blog",
			meta: {
				title: "博客"
			},
			component: () => import("@/components/blog")
		},
		{
			path: "*",
			name: "home",
			component: () => import("@/components/Home/index")
		}
	],
	// 发生路由时，滚动到顶部位置：
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {x: 0, y: 0}
		}
	}
})

