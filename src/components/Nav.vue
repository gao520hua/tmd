<template>
	<div class="navigator">
		<div class="cont banxin">
			<div class="nav">
				<div class="logo" @click="goHome">
					<img src="../assets/logo.png" alt="">
				</div>
				<ul class="list">
					<li :class="['item', {active: item.path == current_path}]" v-for="item in nav_list">
						<router-link class="link" :to="item.path">{{item.name}}</router-link>
					</li>
				</ul>
			</div>
			<div class="right-wrap">
				<div class="yes" v-if="isLogin">
					<div class="name" @click.stop="clikcUserName">我是用户名称</div>
					<ul class="list" v-show="is_show_account_list">
						<li class="item" v-for="item in account_list" @click="selectAccountType(item.type)">{{item.name}}</li>
						<li class="item" @click="signOut">退出</li>
					</ul>
				</div>
				<div class="no" v-else>
					<div class="btn register" @click="goRegister">注册</div>
					<div class="btn login" @click="goLogin">登录</div>
				</div>
				<div class="switch">
					<span :class="['lan', {'active': 1 == language_id}]" @click="swicthLanguage(1)">English</span> /
					<span :class="['lan', {'active': 2 == language_id}]" @click="swicthLanguage(2)">中文</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				nav_list: [
					{name: "首页", path: "/"},
					{name: "矿机", path: "/product"},
					{name: "关于", path: "/about"}
				],
				current_path: "/",
				languages: [
					{name: 'English', id: 1},
					{name: '中文', id: 2}
				],
				language_id: 2, // 默认语言
				isLogin: true, // 登录成功
				account_list: [
					{
						type: "order_list",
						name: "我的订单",
						id: 1,
					},
					{
						type: "address",
						name: "收货地址",
						id: 2
					},
					{
						type: "message",
						name: "消息通知",
						id: 3
					},
					{
						type: "money",
						name: "资金管理",
						id: 4
					},
					{
						type: "account_set",
						name: "账号设置",
						id: 5
					},
					{
						type: "coupon",
						name: "优惠券",
						id: 6
					},
				],
				is_show_account_list: false
			}
		},
		mounted: function() {
			// 导航高亮样式：
			this.current_path = this.$route.path
			if (this.$route.path.indexOf("/product") != -1) {
				this.current_path = "/product"
			}
			// 关闭下拉账户列表：
			document.body.addEventListener("click", () => {
				this.is_show_account_list = false
			})
		},
		watch: {
			$route(to, from) {
				this.current_path = to.path
				if (to.path.indexOf("/product") != -1) {
					this.current_path = "/product"
				}
				// 判断是否登录
				let isLogin = window.localStorage.getItem("isLogin")
				if (isLogin) {
					this.isLogin = true
				} else {
					this.isLogin = false
				}
			}
		},
		methods: {
			goHome: function() {
				this.$router.push({
					path: "/"
				})
			},
			// 前往注册:
			goRegister: function() {
				this.$router.push({
					path: "/register"
				})
			},
			// 前往登录:
			goLogin: function() {
				this.$router.push({
					path: "/login"
				})
			},
			// 切换语言:
			swicthLanguage: function(id) {
				this.language_id = id
			},
			// 点击用户名称，出现下拉框
			clikcUserName: function() {
				this.is_show_account_list = !this.is_show_account_list
			},
			// 选择下拉框，进入到 账户页面：
			selectAccountType: function(type) {
				this.$router.push({
					path: "/account/"+type
				})
			},
			// 退出登录：
			signOut: function() {
				window.localStorage.removeItem("isLogin")
				window.sessionStorage.setItem("target_path", this.$route.fullPath) // 记录退出的页面
				// 回到登录页面：
				this.$router.push({
					path: "/login"
				})
			}
		}
		
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.navigator{
		background: #f9f9fa;
		font-size: 16px;
		.cont{
			display: flex;
			justify-content: space-between;
			height: 100px;
			line-height: 100px;
			.nav{
				display: flex;
				.logo{
					width: 215px;
					font-size: 0;
					margin-right: 100px;
					cursor: pointer;
				}
				.list{
					display: flex;
					.item{
						margin-right: 10px;
						&.active{
							.link{
								color: @highlight;
							}
						}
						.link{
							display: block;
							padding: 0 18px;
						}
					}
				}
			}
			.right-wrap{
				position: relative;
				display: flex;
				min-width: 120px;
				justify-content: center;
				align-items: center;
				.no{
					display: flex;
					align-items: center;
					.btn{
						height: 34px;
						line-height: 32px;
						padding: 0 20px;
						border: 1px solid #ccc;
						background: #fff;
						border-radius: 4px;
						cursor: pointer;
					}
					.register{
						margin-right: 10px;
						border-color: @highlight;
					}
				}
				.yes{
					height: 34px;
					line-height: 34px;
					position: relative;
					.name{
						cursor: pointer;
						text-align: center;
					}
					.list{
						position: absolute;
						left: 50%;
						top: 40px;
						transform: translateX(-50%);
						z-index: 10;
						width: 100px;
						padding: 10px 0;
						border: 1px solid #ebeef5;
						border-radius: 4px;
						line-height: 34px;
						font-size: 14px;
						background: #fff;
						&::before{
							content: "";
							position: absolute;
							left: 50px;
							top: -5px;
							height: 6px;
							width: 6px;
							transform: rotate(45deg);
							border-left: 1px solid #ebeef5;
							border-top: 1px solid #ebeef5;
							background: #fff;
						}
						&:hover{
							box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
						}
						.item{
							padding: 0 15px;
							cursor: pointer;
							&:hover{
								color: @highlight;
								background: #ecf5ff;
							}
						}
					}
				}
				.switch{
					position: absolute;
					right: 0;
					top: 4px;
					font-size: 12px;
					line-height: 24px;
					.lan{
						cursor: pointer;
						&.active{
							color: @highlight;
						}
					}
				}
			}
		}
	}
</style>
