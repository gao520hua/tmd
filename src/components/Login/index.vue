<template>
	<div class="login">
		<div class="main">
			<div class="form-box">
				<div class="title">登录</div>
				<div class="content">
					<div class="tabs">
						<div :class="['item', {'active': item.id == tabs_selected_id}]" v-for="item in tabs" @click="clickTabs(item.id)">{{item.name}}</div>
					</div>
					<div class="wrap">
						<el-form label-position="left" label-width="96px" ref="loginForm" :model="formData">
							<el-form-item :label="label">
								<el-input v-model="formData.phone" size="medium">
									<el-select v-if="is_show_pl" v-model="select_val" slot="prepend" placeholder="请选择" @change="selectChange">
										<el-option :label="item.label" :value="item.value" v-for="item in phone_list">
											<span style="float: left;">{{item.label}}</span>
											<span style="float: right;">{{item.value}}</span>
										</el-option>
									</el-select>
								</el-input>
							</el-form-item>
							<el-form-item label="密码">
								<el-input type="password" v-model="formData.password" size="medium" suffix-icon="el-icon-view">
								</el-input>
							</el-form-item>
							<el-form-item>
								<div class="submit" @click="submitForm('loginForm')">登录</div>
							</el-form-item>
							<el-form-item>
								<div class="bottom-item">
									<div class="new">
										<router-link to="/register">注册新账号</router-link>
									</div>
									<div class="forget">
										<a href="">忘记密码？</a>
									</div>
								</div>
							</el-form-item>
						</el-form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				label: "手机",
				formData: {
					phone: "",
					password: "",
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
				is_show_pl: true, // 是否显示 下拉框
				tabs: [
					{name: "手机登录", id: 1},
					{name: "账号/邮箱登录", id: 2}
				],
				tabs_selected_id: 1,  // 默认选中
				checked: false
			}
		},
		methods: {
			// 手机区号：
			selectChange: function(val) {
				console.log(val)
				this.select_val = val
			},
			// 选择tabs 
			clickTabs: function(id) {
				this.tabs_selected_id = id
				if (id == 1) {
					this.is_show_pl = true
					this.label = "手机"
				} else {
					this.is_show_pl = false
					this.label = "用户名/邮箱"
				}
			},
			// 点击登录：
			submitForm: function(formName) {
				// 假设点击了登录，就登录成功了：
				window.localStorage.setItem("isLogin", true)
				let target_path = window.sessionStorage.getItem("target_path") || '/'
				this.$router.push({
					path: target_path
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.login{
		padding: 50px 0 200px;
		.main{
			width: 480px;
			margin: 0 auto;
			.form-box{
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
					.wrap{
						.submit{
							width: 300px;
							height: 40px;
							border-radius: 4px;
							text-align: center;
							color: #fff;
							background: @highlight;
							cursor: pointer;
						}
						.bottom-item{
							display: flex;
							justify-content: space-between;
							a{
								color: #5d80b9;
							}
						}
					}
				}
			}
		}
	}
</style>
<style lang="less">
	.el-select .el-input {
		width: 80px;
	}
	.el-select-dropdown.el-popper{
		width: 120px;
	}
</style>