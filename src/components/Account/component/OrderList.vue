<template>
	<div class="order-list">
		<div class="tabs">
			<div 
				:class="['item', {'active': tabs_selected_id == item.id}]" 
				v-for="item in tabs_list"
				@click="clickTabs(item.id)">
				{{item.name}}
			</div>
		</div>
		<div class="wrap">
			<div class="yes-data">
				<!-- 这里写有数据的 -->
			</div>
			<div class="no-data">
				<h3>暂无数据订单</h3>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				tabs_list: [
					{name: "全部", id: 1},
					{name: "待确认支付", id: 2},
					{name: "待发货", id: 3},
					{name: "已发货", id: 4},
					{name: "其他", id: 5},
				],
				tabs_selected_id: 1,
			}
		},
		methods: {
			clickTabs: function(id) {
				this.tabs_selected_id = id
			}
		}
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.order-list{
		.tabs{
			display: flex;
			text-align: center;
			margin-bottom: 20px;
			.item{
				width: 120px;
				line-height: 20px;
				position: relative;
				border-right: 1px solid #ebeef5;
				cursor: pointer;
				&:last-child{
					border-right: none;
				}
				&.active::after{
					content: "";
					position: absolute;
					left: 0;
					bottom: -10px;
					width: 100%;
					border: 2px solid @highlight;
				}
			}
		}
		.wrap{
			.yes-data{
				
			}
			.no-data{
				color: #999;
				text-align: center;
				margin-top: 100px;
			}
		}
	}
</style>
