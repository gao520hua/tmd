<template>
	<div class="footer">
		<div class="content banxin">
			<div class="cont-list" v-for="items in contList">
				<div class="title">{{items.title}}</div>
				<ul class="list">
					<li class="item" v-for="iten in items.list">
						<router-link :to="iten.path">{{iten.name}}</router-link>
					</li>
				</ul>
			</div>
			<div class="right-box">
				<div class="logo">
					<img src="../assets/logo.png" alt="" width="100%">
				</div>
				<p>© 2017 PandaMiner</p>
				<p> All Rights Reserved</p>
				<div class="erm">
					<img src="../assets/wecode.jpg" alt="">
				</div>
				<p>粤ICP备17158408号</p>
			</div>
		</div>
		<div class="bottom banxin">
			<div class="cont">
				友情链接：
				<span v-for="item in yqList">
					<a :href="item.href">
						{{item.name}}
					</a> |
				</span>
				<span>
					<a href="">打法但是</a>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contList: [{
						title: "About US",
						list: [{
							name: "关于",
							path: '/about'
						}]
					},
					{
						title: "Policey",
						list: [{
							name: "使用条款",
							path: "/"
						}]
					},
					{
						title: "Explore",
						list: [{
								name: '首页',
								path: "/"
							},
							{
								name: "矿机",
								path: "/product"
							},
							{
								name: "博客",
								path: "/blog"
							}
						]
					},
					{
						title: "Contact Us",
						list: [{
								name: "QQ",
								path: ""
							},
							{
								name: "微博",
								path: ""
							},
							{
								name: "邮箱",
								path: ""
							}
						]
					}
				],
				yqList: [{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
					{
						name: "大事发生",
						href: ""
					},
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.footer {
		height: 250px;
		background: #fff;
		border-top: 1px solid #e9e9e9;
		color: #999;
		padding: 25px 0 30px;
		font-size: 12px;

		a {
			color: #999;
		}

		.content {
			display: flex;
			line-height: 30px;
			position: relative;

			.cont-list {
				width: 190px;

				.title {
					font-size: 14px;
				}
			}

			.right-box {
				position: absolute;
				right: 0;
				top: 0;
				width: 148px;
				text-align: right;
				line-height: 24px;
				.erm {
					width: 80px;
					margin-left: 60px;

					img {
						width: 100%;
					}
				}
			}
		}
		.bottom{
			margin-top: 20px;
			.cont{
				width: 800px;
				line-height: 24px;
				a{
					margin: 0 8px;
				}
			}
		}
	}
</style>
