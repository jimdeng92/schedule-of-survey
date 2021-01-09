<template>
	<view class="index-container">
    <!-- 公告栏 -->
    <u-notice-bar mode="vertical" :list="noticeList" :duration="3000" @click="handleNoticeClick"></u-notice-bar>
		<view class="index-wrap">
      <u-row gutter="10">
        <u-col span="6" v-for="item in gridList" :key="item.id" class="grid-col">
          <view class="grid-item" @click="handleSkip(item.id)">
            <u-icon :name="item.iconName" color="#fff" :size="item.iconSize"></u-icon>
            <view class="grid-item-text">{{item.gridText}}</view>
          </view>
        </u-col>
      </u-row>
    </view>
    <u-toast ref="uToast" />
    <!-- 弹出层 -->
    <u-popup v-model="visiblePopup" mode="bottom" :closeable="true" :height="600">
      <view class="popup-wrap">
        <text class="popup-time">{{popupContent.updateTime || popupContent.createTime}}</text>
        <view class="popup-context">{{popupContent.context}}</view>
      </view>
    </u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        visiblePopup: false,
        noticeList: [],
        nativeList: [],
        popupContent: null,
				gridList: [
          {
            id: 0,
            iconName: 'list-dot',
            iconSize: 68,
            gridText: '调查表'
          },
          {
            id: 1,
            iconName: 'coupon',
            iconSize: 68,
            gridText: '项目'
          }
        ]
			};
		},
    onReady() {
      this.getNoticeList()
    },
    onShareAppMessage() {
      console.log('index--onShareAppMessage');
    },
    methods: {
      handleNoticeClick(index) {
        this.visiblePopup = true
        this.popupContent = this.nativeList[index]
      },
      async getNoticeList() {
        try {
          const resData = await this.$request({
            url: '/getNotices',
            method: 'POST',
            data: {
              page: 1,
              pageSize: 100
            }
          })
          if (resData && resData.data && resData.data.rows) {
            this.nativeList = resData.data.rows
            this.noticeList = resData.data.rows.map(
              item => item.context
            )
          }
        } catch(e) {
          // uni.showToast
        }
      },
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
  // padding: 14px;
  .index-wrap {
    padding: 14px;
  }
  .grid-col {
    // &:nth-of-type(1) {
    //   .grid-item-text {
    //     margin-top: 6px;
    //   }
    // }
    .grid-item {
      color: $u-type-info;
      margin-bottom: 5px;
      // padding: 45px 0;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .grid-item-text {
        line-height: 2;
        font-size: 16px;
        font-weight: bold;
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
  .popup-wrap {
    padding: 44px 20px 20px;
    .popup-context {
      font-size: 14px;
      color: $u-type-info;
      line-height: 1.4;
    }
    .popup-time {
      font-size: 12px;
      color: $u-type-info-disabled;
      line-height: 2;
    }
  }
}
</style>
