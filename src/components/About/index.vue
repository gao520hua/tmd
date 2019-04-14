<template>
	<div class="about">
		<div class="banner">
			<img src="../../assets/about-banner.jpeg" alt="">
		</div>
		<div class="main">
			<div class="section">
				<div class="logo">
				</div>
				<ul class="dec-list">
					<li class="item">熊猫矿机（PandaMiner），企业文化背景为：其一，熊猫作为中国最具特色代表之一，能在第一时间带给全球用户深刻的中国形象烙印。它的独一无二使它具有了一种不言自明的国家代表性、象征性和符号性，与旨在打造中国数字货币硬件研发领头科技公司的PandaMiner不谋而合。其二，熊猫憨厚真诚的形象，代表了熊猫矿机公司的团队价值取向。诚心以待，从用户角度出发，一切尊重和维护用户的权益。</li>
					<li class="item">熊猫矿机（PandaMiner）成立于2016年，总部位于中国深圳，利用优越的地理优势，迅速整合专业人才和生产资源，成功打造数字货币挖矿领域多项核心竞争力。我们更面向全球市场，致力于为数字货币挖矿全产业链持续输送价值。熊猫矿机由数位硬件、互联网、及数字货币领域的资深人士构成，具有广阔的全球视野和优秀的战略规划及执行能力。2016年11月12日熊猫矿机官网开启了全网第一批预售，2017年迎来显卡挖矿元年，整体业务实现了成倍增长。发展至今，熊猫矿机已服务于全球60多个国家数字货币挖矿爱好者，旗下涵盖矿机研发，云算力，托管服务，矿池等整个数字货币挖矿产业链</li>
					<li class="item">熊猫矿机愿景：让挖矿更简单。</li>
				</ul>
				<div class="contact">
					<div class="title">联系方式：</div>
					<ul class="list">
						<li class="item" v-for="item in contact_list">
							<span class="tit">{{item.name}}:</span>
							<span class="txt">{{item.val}}</span>
							<span class="img" v-if="item.src">
								<img :src="item.src" alt="" width="100%">
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				contact_list: [
					{name:'QQ群', val: "11215454"},
					{name:'微信群', src: require("@/assets/wecode.jpg")},
					{name:'微博', val: "11215454"},
					{name:'售前', val: "11215454"},
					{name:'Q售后', val: "11215454"},
					{name:'商务', val: "11215454"},
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	@highlight: #32c057;
	.about{
		background: #f0f0f0;
		.banner{
			width: 1250px;
			margin: 0 auto;
			img{
				width: 100%;
			}
		}
		.main{
			.section{
				width: 800px;
				margin: 0 auto;
				padding: 100px 0;
				.logo{
					height: 176px;
					background: url("../../assets/big-logo.png") no-repeat center;
				}
				.dec-list{
					.item{
						line-height: 28px;
						margin-bottom: 35px;
					}
				}
				.contact{
					font-size: 14px;
					.list{
						.item{
							line-height: 28px;
							.txt{
								color: @highlight;
							}
							.img{
								display: block;
								width: 100px;
							}
						}
					}
				}
			}
		}
	}
</style>