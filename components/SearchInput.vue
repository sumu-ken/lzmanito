<template>
	<view class="search_input" >
	    <navigator url="/pages/search/index" open-type="navigate"  class="" >
	        搜索
	    </navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.search_input{
    height: 90rpx;
    padding: 10rpx;
    background-color: #eb4450;
    navigator {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 15rpx;
    }
}
</style>
