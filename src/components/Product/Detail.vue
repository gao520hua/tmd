<template>
	<div class="detail">
		<div class="main banxin">
			<div class="wrap">
				<div class="left-box">
					<div class="big-picture">
						<img src="../../assets/mute.jpg" alt="" width="100%">
					</div>
					<div class="min-picture">
						<div class="item active">
							<img src="../../assets/mute.jpg" alt="" width="100%">
						</div>
					</div>
				</div>
				<div class="right-box">
					<div class="name">
						PandaMiner B3静音矿机准系统
						<span class="sign">热门</span>
					</div>
					<div class="adv">
						包含静音机箱、内置电源及10个内置静音风扇；超低噪音、更低功耗
						<div class="td">低门槛、一站式托管服务，新矿工首选</div>
					</div>
					<div class="price">
						<span class="tit">价格：</span>
						<span class="val"><span class="origin">￥1299.00</span>￥880.00</span>
						<span class="ts">0.0251 BTC</span>
					</div>
					<div class="norm">
						<span class="tit">产品规格：</span>
						<div class="nick">静音机箱+内置电源</div>
					</div>
					<div class="nums">
						<span class="tit">台数：</span>
						<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
					</div>
					<div class="buy">
						立即购买
					</div>
				</div>
			</div>
			<div class="wrap-other">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="产品详情" name="first">
						<!-- <div class="title">产品详情</div> -->
						<div class="cont">
							我是产品详情内容哦
							<h3>富文本区域，后端直接输出带有样式的内容</h3>
						</div>
					</el-tab-pane>
					<el-tab-pane label="规格参数" name="second">
						<!-- <div class="title">规格参数</div> -->
						<div class="cont">
							我是规格参数内容哦
							<h3>富文本区域，后端直接输出带有样式的内容</h3>
						</div>
					</el-tab-pane>
					<el-tab-pane label="付款方式" name="third">
						<!-- <div class="title">付款方式</div> -->
						<div class="cont">
							我是付款方式内容哦
							<h3>富文本区域，后端直接输出带有样式的内容</h3>
						</div>
					</el-tab-pane>
					<el-tab-pane label="售后政策" name="fourth">
						<!-- <div class="title">售后政策</div> -->
						<div class="cont">
							我是售后参数内容哦
							<h3>富文本区域，后端直接输出带有样式的内容</h3>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num1: 1,
				activeName: 'first'
			}
		},
		methods: {
			// 加减 台数：
			handleChange: function() {

			},
			// 改变tabs 的显示内容
			handleClick: function() {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.detail {
		.main{
			padding: 40px 0 100px;
			.wrap{
				display: flex;
				justify-content: space-between;
				padding-bottom: 50px;
				.left-box{
					width: 330px;
					.big-picture{
						border: 1px solid #ddd;
					}
					.min-picture{
						margin-top: 10px;
						display: flex;
						.item{
							width: 56px;
							margin-right: 10px;
							cursor: pointer;
							&:last-child{
								margin-right: 0;
							}
							&.active{
								border: 2px solid @highlight;
							}
						}
					}
				}
				.right-box{
					width: 720px;
					font-size: 16px;
					.name{
						font-size: 32px;
						margin-bottom: 10px;
						.sign{
							padding: 4px 10px;
							font-size: 14px;
							color: #fff;
							background: #ff7611;
						}
					}
					.adv{
						color: #666;
						line-height: 28px;
						.td{
							color: red;
						}
					}
					.price{
						line-height: 50px;
						height: 50px;
						background: #f1f1f3;
						padding-left: 8px;
						margin: 30px 0;
						.val{
							font-size: 26px;
							.origin{
								text-decoration: line-through;
								font-size: 16px;
							}
						}
						.ts{
							font-size: 14px;
							color: #999;
						}
					}
					.norm{
						display: flex;
						line-height: 40px;
						.tit{
							font-size: 14px;
						}
						.nick{
							border: 1px solid @highlight;
							padding: 0 6px;
							border-radius: 4px;
						}
					}
					.nums{
						.tit{
							fotn-size: 14px;
						}
						margin: 30px 0;
					}
					.buy{
						width: 200px;
						height: 50px;
						line-height: 50px;
						text-align: center;
						border-radius: 6px;
						color: #fff;
						background: @highlight;
						cursor: pointer;
					}
				}
			}
			.wrap-other{
				.title{
					font-size: 22px;
					font-weight: 700;
					line-height: 60px;
					border-bottom: 1px solid #ddd;
				}
			}
		}
	}
</style>
<style lang="less">
	// 这里改框架 样式
	@highlight: #32c057;
	.detail{
		.main{
			.wrap-other{
				.el-tabs__nav{
					width: 100%;
					background: #f1f1f3;
					.el-tabs__active-bar{
						background-color: @highlight;
					}
				}
				.el-tabs__item{
					width: 10%;
					font-size: 16px;
					&:hover{
						color: @highlight;
					}
					&.is-active{
						color: @highlight;
					}
				}
			}
		}
	}
</style>
