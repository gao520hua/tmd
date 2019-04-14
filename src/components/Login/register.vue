<template>
	<div class="register">
		<div class="form-box">
			<div class="title">注册</div>
			<div class="content">
				<div class="tabs">
					<div :class="['item', {'active': item.id == tabs_selected_id}]" v-for="item in tabs" @click="clickTabs(item.id)">{{item.name}}</div>
				</div>
				<div class="wrap">
					<el-form label-position="left" label-width="96px" :model="formData">
						<el-form-item :label="labels.label_1">
							<el-input v-model="formData.phone" size="medium">
								<el-select v-if="is_show_pl" v-model="select_val" slot="prepend" placeholder="请选择" @change="selectChange">
									<el-option :label="item.label" :value="item.value" v-for="item in phone_list">
										<span style="float: left;">{{item.label}}</span>
										<span style="float: right;">{{item.value}}</span>
									</el-option>
								</el-select>
							</el-input>
						</el-form-item>
						<el-form-item :label="labels.label_2">
							<div class="sjyzm">
								<el-input class="yzm-srk" v-model="formData.v_code" size="medium"></el-input>
								<div class="button">发送验证码</div>
							</div>
						</el-form-item>
						<el-form-item label="密码">
							<el-input type="password" v-model="formData.password" size="medium" suffix-icon="el-icon-view">
							</el-input>
						</el-form-item>
						<el-form-item label="确认密码">
							<el-input type="password" v-model="formData.password2" size="medium">
								<span slot="suffix" class="el-input__icon el-icon-view"></span>
							</el-input>
						</el-form-item>
						<el-form-item>
							<el-checkbox v-model="checked">我同意</el-checkbox>
							<a style="color: #5d80b9;" href="">注册服务协议</a>
						</el-form-item>
						<el-form-item>
							<div class="submit">注册</div>
						</el-form-item>
						<el-form-item></el-form-item>
					</el-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				labels: {
					label_1: "手机",
					label_2: "手机验证码"
				},
				formData: {
					phone: "",
					v_code: '',
					password: "",
					password2: "",
				},
				phone_list: [
					{
						value: "aa",
						label: "+82"
					},
					{
						value: "bb",
						label: "+83"
					},
					{
						value: "cc",
						label: "+84"
					},
					{
						value: "dd",
						label: "+85"
					},
					{
						value: "ee",
						label: "+86"
					},
					{
						value: "ff",
						label: "+87"
					},
				],
				select_val: "+86",
				is_show_pl: true, //是否显示 手机区号下拉框。
				checked: false,
				tabs: [
					{name: "手机注册", id: 1},
					{name: "邮箱注册", id: 2}
				],
				tabs_selected_id: 1,  // 默认选中
			}
		},
		methods: {
			// 选择不一样的手机号前缀：
			selectChange: function(val) {
				console.log(val)
			},
			// 选择tabs 
			clickTabs: function(id) {
				this.tabs_selected_id = id
				if (id == 1) {
					this.is_show_pl = true
					this.labels.label_1 = "手机"
					this.labels.label_2 = "手机验证码"
				} else {
					this.is_show_pl = false
					this.labels.label_1 = "邮箱"
					this.labels.label_2 = "邮箱验证码"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.register {
		padding: 50px 0 100px;
		.form-box{
			width: 480px;
			margin: 0 auto;
			border: 1px solid #ebeef5;
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			font-size: 14px;
			border-radius: 4px;
			.title{
				height: 46px;
				line-height: 46px;
				background: #f9f9fa;
				padding-left: 20px;
				border-bottom: 1px solid #ebeef5;
			}
			.content{
				padding: 0 20px;
				.tabs{
					display: flex;
					margin: 30px 0 20px;
					.item{
						width: 50%;
						line-height: 40px;
						text-align: center;
						border-bottom: 2px solid #f2f2f2;
						cursor: pointer;
						&.active{
							border-color: @highlight;
							color: @highlight;
						}
					}
				}
				.sjyzm{
					display: flex;
					align-items: center;
					.yzm-srk{
						width: 180px;
						margin-right: 10px;
					}
					.button{
						width: 100px;
						height: 36px;
						line-height: 34px;
						border: 1px solid @highlight;
						color: @highlight;
						text-align: center;
						border-radius: 4px;
						cursor: pointer;
					}
				}
				.submit{
					width: 300px;
					height: 40px;
					border-radius: 4px;
					text-align: center;
					color: #fff;
					background: @highlight;
					cursor: pointer;
				}
			}
		}
	}
</style>
<style lang="less">
	@highlight: #32c057;
	.el-tabs__nav{
		width: 100%;
		.el-tabs__active-bar{
			background-color: @highlight;
		}
	}
	.el-tabs__item{
		width: 50%;
		&:hover{
			color: @highlight;
		}
		&.is-active{
			color: @highlight;
		}
	}
</style>
