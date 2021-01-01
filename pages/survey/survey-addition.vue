<template>
  <view class="survey-addition-container">
    <u-form :model="form" ref="uForm" label-position="top">
      <u-form-item label="企业名称">
        <u-input v-model="form.companyName" />
      </u-form-item>
      <u-form-item label="注册地址">
        <u-input v-model="form.address" />
      </u-form-item>
      <u-form-item label="所属行业">
        <u-input v-model="form.xxx" />
      </u-form-item>
      <u-form-item label="成立日期">
        <u-input v-model="form.xxx" @focus="visibleTimeShow = true"/>
      </u-form-item>
      <u-form-item label="企业简介（含主营范围）">
        <u-input v-model="form.businessScope" type="textarea"/>
       </u-form-item>
      <u-card title="诉求方向" :full="true">
        <view slot="body">
          <u-form-item label="形象建设、提升">
            <u-input v-model="form.xxx" />
          </u-form-item>
          <u-form-item label="政策性补贴">
            <u-input v-model="form.xxx" />
          </u-form-item>
        </view>
      </u-card>
      <u-form-item label="高新技术领域">
        <u-input v-model="form.xxx" type="textarea"/>
      </u-form-item>
      <u-card title="财务状况" :full="true">
        <view slot="body">
          <u-table>
            <u-tr>
              <u-th>（万元）</u-th>
              <u-th>2020年</u-th>
              <u-th>2019年</u-th>
              <u-th>2018年</u-th>
            </u-tr>
            <u-tr>
              <u-td>营业收入</u-td>
              <u-td>
                <u-input v-model="form.revenueOne" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
              <u-td>
                <u-input v-model="form.revenueTwo" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
              <u-td>
                <u-input v-model="form.revenueThree" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
            </u-tr>
            <u-tr>
              <u-td>净资产</u-td>
              <u-td>
                <u-input v-model="form.assetsOne" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
              <u-td>
                <u-input v-model="form.assetsTwo" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
              <u-td>
                <u-input v-model="form.assetsThree" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
            </u-tr>
            <u-tr>
              <u-td>研发费用投入</u-td>
              <u-td>
                <u-input v-model="form.researchFeeOne" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
              <u-td>
                <u-input v-model="form.researchFeeTwo" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
              <u-td>
                <u-input v-model="form.researchFeeThree" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
            </u-tr>
            <u-tr>
              <u-td>完税情况</u-td>
              <u-td>
                <u-input v-model="form.taxOne" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
              <u-td>
                <u-input v-model="form.taxTwo" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
              <u-td>
                <u-input v-model="form.taxThree" type="number" placeholder="请输入" input-align="center"/>
              </u-td>
            </u-tr>
          </u-table>
          <u-form-item label="融资贷款（质押）">
            <u-input v-model="form.pledge" />
          </u-form-item>
        </view>
      </u-card>
      <u-card title="人力资源结构（以申报个税/社保人数为准）" :full="true">
        <view slot="body">
          <u-form-item label="硕士以上人数（人）">
            <u-input v-model="form.postgraduateCount" type="number"/>
          </u-form-item>
          <u-form-item label="本科学历（人）">
            <u-input v-model="form.undergraduateCount" type="number" />
          </u-form-item>
          <u-form-item label="专科学历（人）">
            <u-input v-model="form.juniorCollegeCount" type="number" />
          </u-form-item>
          <u-form-item label="职称证书人数（人）">
            <u-input v-model="form.occupationCount" type="number" />
          </u-form-item>
          <u-form-item label="研发人员占所有在职人员比率">
            <u-input v-model="form.xxx" type="number" />
          </u-form-item>
          <u-form-item label="总人数（人）">
            <u-input v-model="form.allCount" type="number" />
          </u-form-item>
        </view>
      </u-card>
      <u-card title="固定资产情况" :full="true">
        <view slot="body">
          <view class="assets-item-title">固定资产入账总金额</view>
          <u-form-item label="基础建设投资（万元）">
            <u-input v-model="form.infrastructureInvestment " type="number" />
          </u-form-item>
          <u-form-item label="设备投资（万元）">
            <u-input v-model="form.xxx" type="number" />
           </u-form-item>
          <view class="assets-item-title">固定资产未入账总金额</view>
          <u-form-item label="基建投资">
            <u-input v-model="form.xxx" type="number" />
          </u-form-item>
          <u-form-item label="冷链投资">
            <u-input v-model="form.coldChainInvestment" type="number" />
          </u-form-item>
          <u-form-item label="物流投资">
            <u-input v-model="form.xxx" type="number" />
          </u-form-item>
          <u-form-item label="农机投资">
            <u-input v-model="form.machineryInvestment" type="number" />
          </u-form-item>
          <u-form-item label="农药化肥投资">
            <u-input v-model="form.pesticidesInvestment" type="number" />
          </u-form-item>
          <u-form-item label="仓库投资">
            <u-input v-model="form.xxx" type="number" />
          </u-form-item>
          <u-form-item label="大棚建设投资">
            <u-input v-model="form.constructionInvestment" type="number" />
          </u-form-item>
          <u-form-item label="种植养殖规模（亩）">
            <u-input v-model="form.breedingScale" type="number" />
          </u-form-item>
          <view class="assets-item-title">其他</view>
          <u-form-item label="10万元以上设备原价总值（万元）">
            <u-input v-model="form.xxx" type="number" />
          </u-form-item>
          <u-form-item label="场地用房（平方米）">
            <u-input v-model="form.xxx" type="number" />
          </u-form-item>
          <u-form-item label="投资计划（1-3年内）- 基础建设投资（万元）">
            <u-input v-model="form.infrastructurePlanInvestment" type="number" />
          </u-form-item>
          <u-form-item label="投资计划（1-3年内）-设备投资（万元）">
            <u-input v-model="form.equipmentInvestment" type="number" />
          </u-form-item>
        </view>
      </u-card>
      <u-card title="产品名称" :full="true">
        <view slot="body">
          <u-form-item label="主要开票名称">
            <u-input v-model="form.billingName" />
          </u-form-item>
        </view>
      </u-card>
      <u-form-item label="已申报项目（包括荣誉资质）">
        <u-input v-model="form.declaredItems" type="textarea"/>
      </u-form-item>
      <u-form-item label="研发计划或方向">
        <u-input v-model="form.researchPlan " type="textarea"/>
      </u-form-item>
      <u-form-item label="行业水平">
        <u-input v-model="form.xxx" type="textarea"/>
      </u-form-item>
      <u-form-item label="企业未来三年的发展战略规划">
        <u-input v-model="form.xxx" type="textarea" placeholder="1.是否有投新厂或迁厂规划、2.是否有购买或更新设备规划、3.是否有建设冷链规划（冷库、冷藏车）、4.以及其他方面投资规划"/>
      </u-form-item>
      <u-form-item label="其他">
        <u-input v-model="form.xxx" type="textarea"/>
      </u-form-item>
      <u-form-item>
        <u-button type="primary">提交</u-button>
      </u-form-item>
    </u-form>
    <!-- 日期选择器 -->
    <u-picker v-model="visibleTimeShow" mode="time"></u-picker>
  </view>
</template>


<script>
export default {
  data() {
    return {
      visibleTimeShow: false,
      form: {}
    };
  }
};
</script>

<style lang="scss">
.survey-addition-container {
  .assets-item-title {
    background-color: $u-type-info-light;
    line-height: 32px;
    padding: 0 10px;
  }
}
</style>
