<template>
	<div class="blog">
		<div class="main banxin">
			<div class="wrap">
				<div class="article-list">
					<div class="items" v-for="i in 4">
						<div class="title">我是文章大标题大标题大标题</div>
						<div class="subtitle">我是文章小标题 作者、时间等信息</div>
						<div class="cont">
							我是文章的部分重点内容，用于吸引游客我是文章的部分重点内容，用于吸引游客
							<p>我是文章的部分重点内容，用于吸引游客</p>
							<p>我是文章的部分重点内容，用于吸引游客</p>
						</div>
					</div>
				</div>
			</div>
			<div class="aside">
				<div class="search">
					<el-input placeholder="搜索..." v-model="search_val" class="input-with-select">
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</div>
				<div class="sect recent-article">
					<div class="pub-title">近期文章</div>
					<ul class="list">
						<li class="item"><a href="">我是近期的文章我是近期</a></li>
						<li class="item"><a href="">我是近期的文章我是近期的文章我是近期的文章文章我是近期的文章</a></li>
						<li class="item"><a href="">我是近期的文章我是近期的文章</a></li>
						<li class="item"><a href="">我是近期的文章我是近期的文章我是近期的文章文章我是近期的文章</a></li>
						<li class="item"><a href="">我是近期的文章我是</a></li>
						<li class="item"><a href="">我是近期的文章我是近期文章我是近期的文章</a></li>
					</ul>
				</div>
				<div class="sect recent-comment">
					<div class="pub-title">近期评论</div>
					<ul class="list">
						<li class="item"><a href="">我是近期的评论我是近期</a></li>
						<li class="item"><a href="">我是近期的评论我是近期的评论我是近期的评论文章我是近期的评论</a></li>
						<li class="item"><a href="">我是近期的评论我是近期的评论</a></li>
						<li class="item"><a href="">我是近期的评论我是近期的评论我是近期的评论文章我是近期的评论</a></li>
						<li class="item"><a href="">我是近期的评论我是</a></li>
						<li class="item"><a href="">我是近期的评论我是近期评论我是近期的评论</a></li>
					</ul>
				</div>
				<div class="sect article-archive">
					<div class="pub-title">文章归档</div>
					<ul class="list">
						<li class="item"><a href="">2019年4月</a></li>
						<li class="item"><a href="">2019年3月</a></li>
						<li class="item"><a href="">2019年2月</a></li>
						<li class="item"><a href="">2019年1月</a></li>
						<li class="item"><a href="">2018年12月</a></li>
						<li class="item"><a href="">2018年11月</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search_val: ""
			}
		}
	}
</script>

<style lang="less" scoped>
	.blog {
		padding-bottom: 100px;
		.main{
			display: flex;
			.aside{
				width: 360px;
				margin-left: 30px;
				padding: 30px;
				border: 1px solid #e5e5e5;
				border-top: none;
				.search{
					margin-bottom: 30px;
				}
				.pub-title{
					line-height: 56px;
					font-size: 18px;
				}
				.list{
					font-size: 14px;
					line-height: 24px;
					.item{
						margin-bottom: 10px;
						padding-left: 20px;
						position: relative;
						&::before{
							content: "";
							position: absolute;
							left: 2px;
							top: 10px;
							border: 2px solid #999;
							border-radius: 50%;
						}
						a{
							color: #0096e0;
						}
					}
				}
				.sect{
					margin-bottom: 20px;
				}
			}
			.wrap{
				flex: 1;
				min-height: 960px;
				padding-top: 30px;
				padding: 30px 0;
				.article-list{
					.items{
						margin-bottom: 30px;
						&:last-child{
							margin-bottom: 0;
						}
						.title{
							font-size: 24px;
							line-height: 28px;
							color: #333;
							margin-bottom: 10px;
						}
						.subtitle{
							color: #999;
							font-size: 14px;
							line-height: 20px;
							margin-bottom: 20px;
						}
						.cont{
							min-height: 200px;
							
						}
					}
				}
			}
		}
	}
</style>
