<template>
	<view class="index-container">
		<u-row gutter="10">
      <u-col span="6" v-for="item in gridList" :key="item.id" class="grid-col">
        <view class="grid-item" @click="handleSkip(item.id)">
          <u-icon :name="item.iconName" color="#fff" size="42"></u-icon>
          <view class="grid-item-text">{{item.gridText}}</view>
        </view>
      </u-col>
    </u-row>
    <view>TODO 公告</view>
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
  padding: 14px;
  .grid-col {
    .grid-item {
      font-size: 28rpx;
      color: $u-type-info;
      margin-bottom: 5px;
      text-align: center;
      padding: 45px 0;
      .grid-item-text {
        font-size: 14px;
        color: #fff;
      }
    }
    &:nth-child(2n) .grid-item {
      border-top-right-radius: 10px; 
      border-bottom-right-radius: 10px; 
      background: linear-gradient(135deg, #e66465, #9198e5);
    }
    &:nth-child(2n + 1) .grid-item {
      border-top-left-radius: 10px; 
      border-bottom-left-radius: 10px; 
      background: linear-gradient(135deg, #3f87a6, #f69d3c);
    }
  }
  
}
</style>
