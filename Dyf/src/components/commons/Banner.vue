<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in List" :key="index">
					<img :src="item">
				</div>
			</div>

			<!-- 如果需要滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import Vue from 'vue'

	export default {
		name: 'Banner',
		components: {},
		data() {
			return {
				name: 'Banner',
				List: []
			}
		},
		methods: {
			getList() {
				setTimeout(() => {
					this.List = [
						"https://static.21cake.com//upload/images/708feb93099dd86c261ed0d20986cb4e.jpg",
						"https://static.21cake.com//upload/images/8da5bbd19cf67cbbb5cf14695e7dedc7.jpg",
						"https://static.21cake.com//upload/images/9d8f2c58e9a273c35bad9e6d744d7a9d.jpg",
						"https://static.21cake.com//upload/images/fecdd523d0ea9a3fb89fe822f6cff39b.jpg",
						"https://static.21cake.com//upload/images/28f8b5a25ae76804d75ce4b32fa83bce.jpg",
						"https://static.21cake.com//upload/images/e9e251a75927c39ebb860ee674963b07.jpg"
					]
					Vue.nextTick(() => {
						new Swiper('.swiper-container', {
							spaceBetween: 30,
							centeredSlides: true,
							autoplay: {
								delay: 2500,
								disableOnInteraction: false,
							},
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
						});
					})
				})
//				console.log(1111111);
			}
		},
		created() {
			this.getList();
//			console.log(1111111);
//			console.log(this.List);
		},
		mounted() {

		}

	}
</script>

<style lang="less" scoped>
	@import url("../../styles/main.less");
	@import url("../../../node_modules/swiper/dist/css/swiper.css");
	.banner {
		
		.swiper-container {
			.swiper-wrapper {
				.w(375);
				.h(200);
				.swiper-slide {
					.w(375);
					.h(200);
					img {
						.w(375);
						.h(200);
					}
				}
			}
		}
	}
</style>