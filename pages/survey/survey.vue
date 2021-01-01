<template>
	<view class="survey-list-container">
    <view class="survey-list" v-for="item in 10" :key="item">
      列表
    </view>
		<view class="survey-addition" @click="handleToSurveyAddition">
      <u-icon name="edit-pen" :size="26" class="survey-addition-icon"></u-icon>
      <text class="survey-addition-text">填表</text>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
    methods: {
      handleToSurveyAddition() {
        uni.navigateTo({
          url: '/pages/survey/survey-addition'
        })
      }
    }
	}
</script>

<style lang="scss">
.survey-list-container {
  .survey-addition {
    color: red;
    border-radius: 21px;
    background-color: #fff;
    height: 42px;
    padding: 0 25px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px $u-type-info;
    .survey-addition-icon {
      margin-right: 5px;
    }
  }
}
</style>
