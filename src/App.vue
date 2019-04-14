<template>
	<div id="app">
		<nav-bar></nav-bar>
		<div class="main">
			<router-view />
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import NavBar from "@/components/Nav"
	import Foot from "@/components/Footer"
	
	export default {
		name: 'App',
		components: {
			NavBar,
			Foot
		},
		data() {
			return{
				
			}
		}
	}
</script>

<style lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		// 版心 大小
		.banxin{
			width: 1250px;
			margin: 0 auto
		}
	}
</style>
