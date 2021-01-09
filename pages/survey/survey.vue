<template>
	<view class="survey-list-container">
    <view v-if="surveyList.length">
      <!-- 基础卡片 -->
      <view class="listcard" v-for="item in surveyList" :key="item.companyId" @click="handleNavigateTosurveyDetail(item.companyId)">
        <view class="listcard-content">
          <view class="listcard-content__title">
            <text>{{item.companyName}}</text>
          </view>
          <view class="listcard-content__des">
            <view class="listcard-content__des-label">
              <view class="listcard-content__des-label-item u-line-2">{{item.businessScope}}</view>
            </view>
          </view>
          <!-- <view class="listcard-content__time">
            成立时间：{{item.establishTime}}
          </view> -->
        </view>
        <view class="listcard-image">
          <image src="/static/logo.png" mode="aspectFill"></image>
        </view>
      </view>
      <!-- 加载更多 -->
      <u-loadmore :status="status" margin-bottom="20"/>
    </view>
		<view class="survey-addition" @click="handleToSurveyAddition">
      <u-icon name="edit-pen" :size="28" class="survey-addition-icon"></u-icon>
      <text class="survey-addition-text">填表</text>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        status: 'loadmore',
				surveyList: [],
        total: 0,
        currentPage: 1,
        pageSize: 10
			};
		},
    async onReady() {
      await this.getSurveyList()
    },
    // 上拉
    onReachBottom() {
      if (this.status === 'nomore') return
      this.currentPage++
      this.getSurveyList()
    },
    methods: {
      async getSurveyList() {
        try {
          uni.showLoading()
          const resData = await this.$request({
            url: '/queryAppCompany',
            method: "POST",
            data: {
              page: this.currentPage,
              pageSize: this.pageSize
            }
          })
          // reject 之后直接进入 catch，不会再执行后面的代码
          this.total = resData.data.total
          this.surveyList = [...this.surveyList, ...resData.data.rows]
          // 没有更多
          if (this.total <= this.pageSize * this.currentPage) {
            this.status = 'nomore'
          }
          uni.hideLoading()
        } catch(e) {
          uni.hideLoading()
          uni.showToast({
            title: e,
            icon: 'none'
          })
        }
      },
      handleToSurveyAddition() {
        uni.navigateTo({
          url: '/pages/survey-addition/survey-addition'
        })
      },
      // 跳转到 公司详情
      handleNavigateTosurveyDetail(id) {
        uni.navigateTo({
          url: '/pages/survey-detail/survey-detail?id=' + id
        })
      }
    }
	}
</script>

<style lang="scss">
.survey-list-container {
  padding: 0 14px;
  .listcard {
  	display: flex;
  	padding: 10px;
  	margin: 10px 0;
  	border-radius: 5px;
  	box-shadow: 0 0 5px 1px rgba($color: #000, $alpha: 0.1);
  	box-sizing: border-box;
  	.listcard-image {
  		flex-shrink: 0;
  		width: 80px;
  		height: 80px;
  		border-radius: 5px;
  		overflow: hidden;
  		image {
  			width: 100%;
  			height: 100%;
  		}
  	}
  	.listcard-content {
  		display: flex;
  		flex-direction: column;
      padding: 5px 10px 0 0;
  		width: 100%;
  		.listcard-content__title {
  			position: relative;
  			padding-right: 30px;
        padding-bottom: 10px;
  			font-size: 14px;
  			color: #333;
  			line-height: 1.2;
  			text {
  				overflow: hidden;
  				text-overflow: ellipsis;
  				display: -webkit-box;
  				-webkit-line-clamp: 1;
  				-webkit-box-orient: vertical;
  			}
  		}
      .listcard-content__time {
        font-size: 12px;
        color: $u-type-info-disabled;
        margin-top: 10px;
      }
  		.listcard-content__des {
  			display: flex;
  			justify-content: space-between;
  			font-size: 12px;
  			.listcard-content__des-label {
  				.listcard-content__des-label-item {
  					color: $u-type-info;
  				}
  			}
  			.listcard-content__des-browse {
  				color: #999;
  				line-height: 1.5;
  			}
  		}
  	}
  }
  .survey-addition {
    color: $u-type-error;
    border-radius: 22px;
    background-color: #fff;
    height: 44px;
    padding: 0 28px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px $u-type-info;
    .survey-addition-icon {
      margin-right: 6px;
    }
    .survey-addition-text {
      font-size: 14px;
    }
  }
}
</style>
