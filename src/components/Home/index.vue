<template>
	<div class="home">
		<!-- 轮播图区域 -->
		<div class="banner-wrap">
			<el-carousel height="36.4vw">
				<el-carousel-item v-for="(item, index) in banner_list" :key="index">
					<div :class="['item', 'item'+index]">
						<img :src="item" alt="" width="100%" height="100%">
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<!-- 主要内容部分 -->
		<div class="main">
			<div class="sect sect1 banxin">
				<div class="new">
					<a href="" class="item">我是最新的博客我是最新的博客博客博客博客博客啊...</a>
					<router-link class="more" to="/blog">更多...</router-link>
				</div>
				<h3 class="title">立即选购</h3>
				<div class="product">
					<div class="items" v-for="items in product">
						<div class="picture" @click="goProductDetail(items.id)">
							<img :src="items.picture" alt="">
						</div>
						<div class="name">{{items.name}}</div>
						<div class="advantage">{{items.advantage}}</div>
						<div class="parameter">
							<div class="pa num">{{items.p_num}}</div>
							<div class="pa kernel">{{items.p_kernel}}</div>
						</div>
						<div class="price" @click="goProductDetail(items.id)">{{items.price}}</div>
					</div>
				</div>
				<router-link class="more-product" to="/product">了解更多商品</router-link>
			</div>
			<div class="sect sect2">
				<div class="content">
					<div class="title">什么是显卡矿机？</div>
					<p class="dec">显卡矿机是支持多种虚拟货币算法挖矿的挖矿装置。不同于普通显卡，显卡矿机是通过多张高配置显卡，定制化、高兼容的机箱，以及专业的矿机架等专门针对挖矿需求优化设计的设备组装而成。</p>
					<p class="dec">显卡矿机极具灵活性，能针对不同的虚拟货币运行不同的算法，做到一机多用。在比特币矿机更新换代速度日益放缓且价格日渐增高的今天，显卡矿机不失为更好的虚拟币投资选择。</p>
					<div class="adv-list">
						<div class="item" v-for="i in 3">
							<div class="pic-bg">
								<div class="icon"></div>
							</div>
							<p class="bj">什么与什么对比</p>
							<p class="adv">我是对比后的啥啥啥优势</p>
						</div>
					</div>
				</div>
			</div>
			<div class="sect sect3">
				<div class="content">
					<div class="logo">
					</div>
					<div class="title">我们是谁？</div>
					<div class="dec">我们是谁？
熊猫矿机（PandaMiner）成立于2016年，是一家专业的数字货币硬件研发科技公司。凭借强大的技术和研发实力，在显卡矿机领域出类拔萃，拥有高性能低功耗较为稳定的集成显卡矿机。熊猫矿机旗下涵盖，矿机研发，云算力，托管服务，矿池等整个数字货币挖矿产业链，未来将不断推陈出新，以满足日新月异的挖矿需求。我们的愿景是降低挖矿门槛，让挖矿更简单。</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				banner_list: [
					require("@/assets/home-banner1.jpg"),
					require("@/assets/home-banner2.jpg")
				],
				product: [
					{
						picture: require("@/assets/p.jpg"),
						name: "我是产品名称",
						advantage: "我是产品优点",
						p_num: 8,
						p_kernel: "RX 411",
						price: "￥4500",
						id: 1
					},
					{
						picture: require("@/assets/p.jpg"),
						name: "我是产品名称",
						advantage: "我是产品优点",
						p_num: 8,
						p_kernel: "RX 415",
						price: "￥900",
						id: 2
					}
				]
			}
		},
		methods: {
			goProductDetail: function(id) {
				this.$router.push({
					path: "/product/detail"
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.home{
		.banner-wrap{
			text-align: center;
			.item{
				height: 100%;
			}
		}
		.main{
			.sect1{
				font-size: 16px;
				padding-bottom: 80px;
				text-align: center;
				.new{
					text-align: center;
					line-height: 32px;
					.item{
						
					}
					.more{
						color: #0096e0;
						margin-left: 20px;
					}
				}
				.title{
					font-size: 26px;
					margin: 20px 0;
				}
				.product{
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					padding: 0 60px;
					margin-bottom: 30px;
					.items{
						width: 495px;
						.picture{
							background: #999;
							margin-bottom: 5px;
							cursor: pointer;
							text-align: center;
							img{
								width: 100%;
								margin: 0 auto;
							}
						}
						.name{
							font-size: 24px;
							font-weight: 700;
							margin-bottom: 5px;
						}
						.advantage{
							color: #666;
						}
						.parameter{
							display: flex;
							border: 1px solid #e5e5e5;
							margin: 10px 0;
							.pa{
								width: 50%;
								height: 40px;
								line-height: 40px;
							}
							.kernel{
								border-left: 1px solid #e5e5e5;
							}
						}
						.price{
							width: 160px;
							margin: 20px auto 0;
							height: 40px;
							line-height: 40px;
							border-radius: 4px;
							color: #fff;
							font-size: 18px;
							background: @highlight;
							cursor: pointer;
						}
					}
				}
				.more-product{
					display: inline-block;
					padding: 0 20px;
					line-height: 40px;
					height: 40px;
					border:1px solid #e5e5e5;
					border-radius: 4px;
					&:hover{
						color: @highlight;
					}
				}
			}
			.sect2{
				background: #666;
				padding-bottom: 100px;
				.content{
					overflow: hidden;
					color: #fff;
					width: 1000px;
					margin: 0 auto;
					.title{
						font-size: 26px;
						margin: 100px 0 20px;
						text-align: center;
					}
					.dec{
						font-size: 16x;
						line-height: 28px;
						margin-bottom: 10px;
					}
					.adv-list{
						margin-top: 40px;
						display: flex;
						justify-content: space-between;
						text-align: center;
						.item{
							width: 30%;
							.pic-bg{
								height: 100px;
								margin-bottom: 10px;
								.icon{
									width: 200px;
									height: 100%;
									background: #ccc;
									margin: 0 auto;
								}
							}
							.bj{
								color: #999;
								font-size: 14px;
							}
							.adv{
								text-align: center;
								padding: 0 20px;
							}
						}
					}
				}
			}
			.sect3{
				background: #f9f9f9;
				padding: 60px 0;
				.content{
					width: 1000px;
					margin: 0 auto;
					.logo{
						height: 144px;
						text-align: center;
						background: url("../../assets/big-logo.png") no-repeat center;
					}
					.title{
						font-size: 26px;
						color: #000;
						text-align: center;
						margin: 30px 0 20px;
					}
					.dec{
						line-height: 28px;
					}
				}
			}
		}
	}
</style>