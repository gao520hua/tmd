<template>
	<div class="fixed-right">
		<ul class="list">
			<li class="item" v-for="item in list" @click="clickItem(item.id)">
				<div class="icon"></div>
				{{item.name}}
				<div class="ewm" v-show="item.id == 3">
					<img src="../../assets/wecode.jpg" alt="">
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				list: [
					{name: "在线客服", id: 1},
					{name: "提交工单", id: 2},
					{name: "立减200元", id: 3}
				]
			}
		},
		created: function() {
			
		},
		mounted: function() {
			
		},
		methods: {
			clickItem: function(id) {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.fixed-right{
		position: fixed;
		right: 0;
		top: 50%;
		z-index: 100;
		transform: translateY(-50%);
		width: 80px;
		box-shadow: 0 8px 17px 0 rgba(0,0,0,.2);
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		background: #fff;
		font-size: 12px;
		.list{
			padding: 6px 0;
			.item{
				line-height: 24px;
				text-align: center;
				cursor: pointer;
				position: relative;
				.icon{
					height: 60px;
				}
				.ewm{
					position: absolute;
					left: -124px;
					bottom: -6px;
					width: 120px;
					border: 1px solid #dfdfdf;
					padding: 10px;
					display: none;
					background: #fff;
					img{
						width: 100%;
					}
				}
				&:first-child{
					.icon{
						background: url("../../assets/kf2.svg") no-repeat center / 40px 40px;
					}
				}
				&:nth-child(2){
					.icon{
						background: url("../../assets/gd2.svg") no-repeat center / 40px 40px;
					}
				}
				&:nth-child(3){
					.icon{
						background: url("../../assets/sm2.svg") no-repeat center / 40px 40px;
					}
					
				}
				
			}
			.item:hover{
				background: @highlight;
				color: #fff;
				&:first-child{
					.icon{
						background: url("../../assets/kf.svg") no-repeat center / 40px 40px;
					}
				}
				&:nth-child(2){
					.icon{
						background: url("../../assets/gd.svg") no-repeat center / 40px 40px;
					}
				}
				&:nth-child(3){
					.icon{
						background: url("../../assets/sm.svg") no-repeat center / 40px 40px;
					}
					.ewm{
						display: block;
					}
				}
			}
		}
	}
</style>
