<template>
	<view v-if="surveyDetail" class="survey-detail-container">
		<view class="survey-detail-title">{{surveyDetail.companyName}}</view>
		<view class="survey-detail-item">
      <view class="item-title">注册地址</view>
      <view class="item-body">
        {{surveyDetail.province + surveyDetail.city + surveyDetail.area + surveyDetail.address}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">所属行业</view>
      <view class="item-body">
        {{surveyDetail.enterpriseNature}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">成立日期</view>
      <view class="item-body">
        {{surveyDetail.establishTime}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">企业简介（含主营范围）</view>
      <view class="item-body">
        {{surveyDetail.businessScope}}
      </view>
    </view>
    <u-gap height="20" bg-color="#f3f4f6"></u-gap>
    <view class="survey-detail-chunk-title">诉求方向</view>
    <!-- <u-line color="#f3f4f6" /> -->
    <view class="survey-detail-item">
      <view class="item-title">形象建设、提升</view>
      <view class="item-body">
        {{surveyDetail.building}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">政策性补贴</view>
      <view class="item-body">
        {{surveyDetail.policySubsidies}}
      </view>
    </view>
    <u-gap height="20" bg-color="#f3f4f6"></u-gap>
    <view class="survey-detail-item">
      <view class="item-title">高新技术领域</view>
      <view class="item-body">
        {{surveyDetail.techField}}
      </view>
    </view>
    <u-gap height="20" bg-color="#f3f4f6"></u-gap>
    <view class="survey-detail-chunk-title">财务状况</view>
    <view class="survey-detail-item">
      <view class="item-title">营业收入（万元）</view>
      <view class="item-body">
        <u-table>
          <u-tr>
            <u-th>2021年</u-th>
            <u-th>2020年</u-th>
            <u-th>2019年</u-th>
          </u-tr>
          <u-tr>
            <u-td>{{surveyDetail.revenueOne}}</u-td>
            <u-td>{{surveyDetail.revenueTwo}}</u-td>
            <u-td>{{surveyDetail.revenueThree}}</u-td>
          </u-tr>
        </u-table>
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">净资产（万元）</view>
      <view class="item-body">
        <u-table>
          <u-tr>
            <u-th>2021年</u-th>
            <u-th>2020年</u-th>
            <u-th>2019年</u-th>
          </u-tr>
          <u-tr>
            <u-td>{{surveyDetail.assetsOne}}</u-td>
            <u-td>{{surveyDetail.assetsTwo}}</u-td>
            <u-td>{{surveyDetail.assetsThree}}</u-td>
          </u-tr>
        </u-table>
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">研发费用投入（万元）</view>
      <view class="item-body">
        <u-table>
          <u-tr>
            <u-th>2021年</u-th>
            <u-th>2020年</u-th>
            <u-th>2019年</u-th>
          </u-tr>
          <u-tr>
            <u-td>{{surveyDetail.researchFeeOne}}</u-td>
            <u-td>{{surveyDetail.researchFeeTwo}}</u-td>
            <u-td>{{surveyDetail.researchFeeThree}}</u-td>
          </u-tr>
        </u-table>
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">完税情况（万元）</view>
      <view class="item-body">
        <u-table>
          <u-tr>
            <u-th>2021年</u-th>
            <u-th>2020年</u-th>
            <u-th>2019年</u-th>
          </u-tr>
          <u-tr>
            <u-td>{{surveyDetail.taxOne}}</u-td>
            <u-td>{{surveyDetail.taxTwo}}</u-td>
            <u-td>{{surveyDetail.taxThree}}</u-td>
          </u-tr>
        </u-table>
      </view>
    </view>
    
    <view class="survey-detail-item">
      <view class="item-title">融资贷款（质押）</view>
      <view class="item-body">
        {{surveyDetail.pledge}}
      </view>
    </view>
    <u-gap height="20" bg-color="#f3f4f6"></u-gap>
		<view class="survey-detail-chunk-title">人力资源结构（以申报个税/社保人数为准）</view>
    <view class="survey-detail-item">
      <view class="item-title">硕士以上学历（人）</view>
      <view class="item-body">
        {{surveyDetail.postgraduateCount}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">本科学历（人）</view>
      <view class="item-body">
        {{surveyDetail.undergraduateCount}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">专科学历（人）</view>
      <view class="item-body">
        {{surveyDetail.juniorCollegeCount}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">职称证书人数（人）</view>
      <view class="item-body">
        {{surveyDetail.occupationCount}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">研发人员占所有在职人员比率</view>
      <view class="item-body">
        {{surveyDetail.postgraduateRatio}}%
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">总人数（人）</view>
      <view class="item-body">
        {{surveyDetail.allCount}}
      </view>
    </view>
		<u-gap height="20" bg-color="#f3f4f6"></u-gap>
    <!-- 固定资产情况 -->
    <view class="survey-detail-chunk-title">固定资产情况</view>
    <view class="survey-detail-item">
      <view class="item-title">固定资产入账总金额</view>
      <view class="item-body">
        <u-row>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">基础建设投资（万元）</view>
              <view>{{surveyDetail.infrastructureBaseInvestment}}</view>
            </view>
        	</u-col>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">设备投资（万元）</view>
              <view>{{surveyDetail.equipmentInvestment}}</view>
            </view>
        	</u-col>
        </u-row>
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">固定资产未入账总金额</view>
      <view class="item-body">
        <u-row>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">基建投资</view>
              <view>{{surveyDetail.infrastructureInvestment}}</view>
            </view>
        	</u-col>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">冷链投资</view>
              <view>{{surveyDetail.coldChainInvestment}}</view>
            </view>
        	</u-col>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">物流投资</view>
              <view>{{surveyDetail.logisticsInvestment}}</view>
            </view>
        	</u-col>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">农机投资</view>
              <view>{{surveyDetail.machineryInvestment}}</view>
            </view>
        	</u-col>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">农药化肥投资</view>
              <view>{{surveyDetail.pesticidesInvestment}}</view>
            </view>
        	</u-col>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">仓库投资</view>
              <view>{{surveyDetail.warehouseInvestment}}</view>
            </view>
        	</u-col>
        	<u-col span="6">
        		<view class="item-body-col">
              <view class="col-title">大棚建设投资</view>
              <view>{{surveyDetail.constructionInvestment}}</view>
            </view>
        	</u-col>
        </u-row>
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">种植/养殖规模（亩）</view>
      <view class="item-body">
        {{surveyDetail.breedingScale}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">10万元以上设备原价总值（万元）</view>
      <view class="item-body">
        {{surveyDetail.equipmentAmt}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">场地用房（平方米）</view>
      <view class="item-body">
        {{surveyDetail.siteSpace}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">投资计划（1-3年内）-基础建设投资（万元）</view>
      <view class="item-body">
        {{surveyDetail.infrastructurePlanInvestment}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">投资计划（1-3年内）-设备投资（万元）</view>
      <view class="item-body">
        {{surveyDetail.equipmentInvestment}}
      </view>
    </view>
    <u-gap height="20" bg-color="#f3f4f6"></u-gap>
    <!-- 产品名称 -->
    <view class="survey-detail-chunk-title">产品名称</view>
    <view class="survey-detail-item">
      <view class="item-title">主要开票名称</view>
      <view class="item-body">
        {{surveyDetail.billingName}}
      </view>
    </view>
    <u-gap height="20" bg-color="#f3f4f6"></u-gap>
    <view class="survey-detail-item">
      <view class="item-title">已申报项目（包括荣誉资质）</view>
      <view class="item-body">
        {{surveyDetail.declaredItems}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">研发计划或方向</view>
      <view class="item-body">
        {{surveyDetail.researchPlan}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">行业水平</view>
      <view class="item-body">
        {{surveyDetail.industryLevel}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">企业未来三年的发展战略规划</view>
      <view class="item-body">
        {{surveyDetail.strategicPlanning}}
      </view>
    </view>
    <view class="survey-detail-item">
      <view class="item-title">其他</view>
      <view class="item-body">
        <!-- {{surveyDetail.strategicPlanning}} -->
      </view>
    </view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      surveyDetail: null,
      headStyle: {
        paddingLeft: '14px'
      }
    };
  },
  onLoad(options) {
    this.id = options.id
  },
  onReady() {
    this.getSurveyDetail()
  },
  methods: {
    async getSurveyDetail() {
      uni.showLoading()
      try {
        const resData = await this.$request({
          url: '/companys/' + this.id
        })
        this.surveyDetail = resData.data
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
.survey-detail-container {
  padding: 14px 0 30px;
  .survey-detail-chunk-title {
    font-size: 14px;
    color: $u-main-color;
    line-height: 42px;
    border-bottom: 1px solid $u-border-color;
    padding-left: 14px;
  }
  .survey-detail-title {
    font-size: 16px;
    padding: 0 14px;
    font-weight: blod;
    color: $u-main-color;
    margin-bottom: 10px;
  }
  .survey-detail-item {
    padding: 10px 14px;
    font-size: 14px;
    .item-title {
      color: $u-tips-color;
      margin-bottom: 5px;
    }
    .item-body {
      color: $u-content-color;
      padding: 4px 0;
      .item-body-col {
        padding-left: 4px;
        padding-bottom: 8px;
        position: relative;
        &::before {
          content: '';
          display: block;
          width: 3px;
          height: 14px;
          position: absolute;
          top: 3px;
          left: -4px;
          background-color: $u-border-color;
        }
        .col-title {
          margin-bottom: 6px;
        }
      }
    }
  }
}
</style>
