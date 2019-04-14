<template>
	<div class="product">
		<div class="main banxin">
			<div class="title">矿机</div>
			<ul class="list">
				<li class="items" v-for="items in product_list">
					<div class="picture">
						<img src="../../assets/mute.jpg" alt="" width="100%">
					</div>
					<div class="name">
						{{items.name}}
						<span class="sign">{{items.sign}}</span>
					</div>
					<div class="price">
						<div class="val">{{items.price}}</div>
						<span class="ts">{{'('+items.ts+')'}}</span>
					</div>
					<div :class="['buy', {'disabled': items.inventory==0}]" @click="toBuy(items.id,items.inventory)">{{items.inventory == 0? '售罄' : '立即购买'}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				product_list: [
					{id: 1, name: "PandaMiner B3静音矿机准系统 ", sign: "热门", price: "￥880.00", ts: '0.0245 BTC', inventory: 10, picture: ""},
					{id: 2, name: "PandaMiner B3静音矿机准系统 ", sign: "热门", price: "￥880.00", ts: '0.0245 BTC', inventory: 2, picture: ""},
					{id: 9, name: "PandaMiner B3 Pro（30天体验） ", sign: "新矿工专享", price: "￥4500.00", ts: '0.0245 BTC', inventory: 10, picture: ""},
					{id: 45, name: "PandaMiner PandaMiner B3 Pro ", sign: "新矿工专享", price: "￥5000.00", ts: '0.0245 BTC', inventory: 10, picture: ""},
					{id: 86, name: "PandaMiner B3 Mute（静音版） ", sign: "新矿工专享", price: "￥5500.00", ts: '0.0245 BTC', inventory: 0, picture: ""},
					{id: 99, name: "PandaMiner B3 Pro （RX570 8G） ", sign: "新矿工专享", price: "￥5600.00", ts: '0.0245 BTC', inventory: 0, picture: ""},
				],
			}
		},
		methods: {
			// 点击立即购买
			toBuy: function(id, num) {
				if (num<=0) {
					return
				}
				this.$router.push({
					path: "/product/detail/"+id,
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.product{
		padding-bottom: 100px;
		.main{
			.title{
				font-size: 26px;
				line-height: 86px;
			}
			.list{
				border: 1px solid #ebeef5;
				&:hover{
					box-shadow: 0 0 4px 0 #ebeef5;
				}
				.items{
					border-bottom: 1px solid #ebeef5;
					padding: 20px 24px;
					display: flex;
					align-items: center;
					&:last-child{
						border-bottom: none;
					}
					.picture{
						width: 180px;
						height: 180px;
						overflow: hidden;
						margin-right: 20px;
						img{
							width: 100%;
						}
					}
					.name{
						font-size: 26px;
						width: 480px;
						.sign{
							display: inline-block;
							background: #ff7611;
							color: #fff;
							font-size: 14px;
							padding: 4px 10px;
							border-radius: 4px;
						}
					}
					.price{
						width: 140px;
						font-size: 26px;
						margin-left: 130px;
						text-align: center;
						.ts{
							font-size: 14px;
							color: #999;
						}
					}
					.buy{
						color: #fff;
						width: 160px;
						height: 40px;
						line-height: 40px;
						text-align: center;
						border-radius: 4px;
						background: @highlight;
						margin-left: 30px;
						cursor: pointer;
						&.disabled{
							cursor: not-allowed;
							background: #97989b;
						}
					}
				}
			}
		}
	}
</style>
