<template>
	<view class="survey-list-container">
    <view v-if="projectList.length">
      <!-- 基础卡片 -->
      <view class="listcard" v-for="item in projectList" :key="item.projectScienceId ">
        <view class="listcard-content">
          <view class="listcard-content__title">
            <text>{{item.projectName}}</text>
          </view>
          <view class="listcard-content__des">
            <view class="listcard-content__des-label">
              <view class="listcard-content__des-label-item">
                <view class="label-item-label">企业名称：</view>
                <text>{{item.companyName}}</text>
              </view>
              <view class="listcard-content__des-label-item">
                <view class="label-item-label">实际到账金额：</view>
                <text>{{item.actualAmount}}万元</text>
              </view>
              <view class="listcard-content__des-label-item">
                <view class="label-item-label">具体补贴额度：</view>
                <text>{{item.subsidyAmount}}万元</text>
              </view>
              <view class="listcard-content__des-label-item">
                <view class="label-item-label">项目进度：</view>
                <text>{{item.projectSchedule || '-'}}</text>
              </view>
            </view>
          </view>
        </view>
        <!-- <view class="listcard-image">
          <image src="/static/logo.png" mode="aspectFill"></image>
        </view> -->
      </view>
      <!-- 加载更多 -->
      <u-loadmore :status="status" margin-bottom="20"/>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        status: 'loadmore',
				projectList: [],
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
            url: '/queryAppProjectScience',
            method: "POST",
            data: {
              page: this.currentPage,
              pageSize: this.pageSize
            }
          })
          // reject 之后直接进入 catch，不会再执行后面的代码
          this.total = resData.data.total
          this.projectList = [...this.projectList, ...resData.data.rows]
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
            line-height: 1.6;
            display: flex;
            word-break: break-all;
            .label-item-label {
              width: 90px;
              text-align: right;
              flex-shrink: 0;
            }
  				}
  			}
  			.listcard-content__des-browse {
  				color: #999;
  				line-height: 1.5;
  			}
  		}
  	}
  }
  
}
</style>
