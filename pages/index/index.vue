<template>
	<view class="content">
		<SearchInput></SearchInput>

		<view class="index_swiper">
			<swiper indicator-dots autoplay circular>
				<swiper-item v-for="(item,index) in swiperList" :key="item.goods_id">
					<image :src="item.image_src" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
            <view class="index_cate">
              <navigator v-for="(item,index) in catesList" :kry="index" >
               <image mode="widthFix" :src="item.image_src" ></image> 
              </navigator>
              
            </view>
			    <!-- 楼层开始 -->
			    <view class="index_floor">
			      <view class="floor_group" v-for="(item1,index1) in floorList" :key="index1" >
			        <!-- 标题 -->
			        <view class="floor_title">
			          <image mode="widthFix" :src="item1.floor_title.image_src"></image>
			        </view>
			        <!-- 内容 -->
			        <view class="floor_list">
			          <navigator v-for="(item2,index2) in item1.product_list" :key="index2">
			            <image :mode="index2===0?'widthFix':'scaleToFill'" :src="item2.image_src"></image>
			          </navigator>
			        </view>
			      </view>
			    </view>
			    <!-- 楼层结束 -->
	</view>
</template>

<script>
	import SearchInput from "../../components/SearchInput.vue"
	import {requset} from "../../request/request.js"
	export default {
		components: {
			SearchInput
		},
		data() {
			return {
				//  轮播图数组
				swiperList: [],
				catesList:[],
				floorList:[]
			}
		},
		onLoad() {
			this.getSwiperList()
			this.getCatesList()
			this.getFloorList()
		},
		methods: {
			getSwiperList() {
				requset({
						url: "/home/swiperdata"
					})
					.then(result => {
						this.swiperList = result
					})
			},
			  //  获取导航栏数据
			  getCatesList(){
			    requset({url:"/home/catitems"})
			    .then(result =>{
			      
			      this.catesList = result
			       
			    })
			  },
			    getFloorList(){
			      requset({url:"/home/floordata"})
			      .then(result =>{
			         
			          this.floorList = result
			       
			      })
			    }

		}
	}
</script>

<style lang="scss" scoped>
	.index_swiper {
		swiper {
			width: 750rpx;
			height: 340rpx;

			image {
				width: 100%;
			}
		}
	}
	.index_cate{
	    display:flex;
	    navigator{
	        flex: 1;
	        padding: 20rpx;
	        image{
	            width: 100%;
	        }
	    }
	}
	.index_floor{
	    overflow: hidden;
	    .floor_group{
	        .floor_title{
	           
	            padding: 10rpx 0;
	            image{
	                width: 100%;
	            }
	        }
	    .floor_list{
	        box-sizing: border-box;
	        navigator{
	            float: left;
	            width: 31.33%;
	
	            &:nth-last-child(-n+4){
	                /* 原图的宽高 232*386
	                    232/386 = 33.33vw /height
	                    第一张图片的高度 heigth：33.33vw * 386 /232
	                */
	                height: 31.33vw * 370 / 232 /2;
	            }
	            border-left: 10rpx solid #fff;
	            &:nth-child(2),
	            &:nth-child(3){
	                border-bottom: 10rpx solid #fff;
	            }
	            image{
	                width: 100%;
	                height: 100%;
	            }
	        }
	    }
	    }
	}
</style>
