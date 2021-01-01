<template>
	<view class="index-container">
		<u-grid :col="2">
      <u-grid-item v-for="(item,index) in gridList" :key="item.id">
        <u-icon :name="item.iconName" :size="46"></u-icon>
        <view class="grid-text" @click="handleSkip(item.id)">{{item.gridText}}</view>
      </u-grid-item>
    </u-grid>
    <view>TODO 公告...</view>
    <u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridList: [
          {
            id: 0,
            iconName: 'file-text',
            gridText: '调查表'
          },
          {
            id: 1,
            iconName: 'list',
            gridText: '项目'
          },
          {
            id: 2,
            iconName: 'hourglass',
            gridText: '沙漏'
          }
        ]
			};
		},
    methods: {
      handleSkip(id) {
        let path = ''
        switch (id){
          case 0:
            path = 'survey'
            break
          case 1:
            path = 'project'
            break
          default:
        }
        if (!path) {
          this.$refs.uToast.show({
            title: '正在开发中...'
          })
          return
        }
        uni.navigateTo({
          url: `/pages/${path}/${path}`
        })
      }
    }
	}
</script>

<style lang="scss">
.index-container {
  .grid-text {
    font-size: 28rpx;
    margin-top: 4rpx;
    color: $u-type-info;
  }
}
</style>
