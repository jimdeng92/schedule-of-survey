import rules from '@/utils/rules.js'
  
export default {
  data() {
    return {
      fileList: [],
      visibleDate: false,
      visibleRegion: false,
      rules,
      form: {
        companyName: '',
        region: '', // 省市区
        address: '', // 详细地址
        enterpriseNature: '',
        establishTime: '',
        businessScope: '',
        building: '',
        policySubsidies: '',
        techField: '',
        revenueOne: '',
        revenueTwo: '',
        revenueThree: '',
        assetsOne: '',
        assetsTwo: '',
        assetsThree: '',
        researchFeeOne: '',
        researchFeeTwo: '',
        researchFeeThree: '',
        taxOne: '',
        taxTwo: '',
        taxThree: '',
        pledge: '',
        postgraduateCount: '',
        undergraduateCount: '',
        juniorCollegeCount: '',
        occupationCount: '',
        postgraduateRatio: '',
        allCount: '',
        infrastructureBaseInvestment: '',
        equipmentInvestment: '',
        infrastructureInvestment: '',
        coldChainInvestment: '',
        logisticsInvestment: '',
        machineryInvestment: '',
        pesticidesInvestment: '',
        warehouseInvestment: '',
        constructionInvestment: '',
        breedingScale: '',
        equipmentAmt: '',
        siteSpace: '',
        infrastructurePlanInvestment: '',
        equipmentThreeInvestment: '',
        billingName: '',
        declaredItems: '',
        researchPlan: '',
        industryLevel: '',
        strategicPlanning: ''
      }
    };
  },
  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
  onReady() {
    this.$refs.uForm.setRules(this.rules)
  },
  methods: {
    handleConfirmDate(res) {
      // this.form.establishTime = res.timestamp 
      this.form.establishTime = `${res.year}-${res.month}-${res.day}` // 后端需要的字段
    },
    handleConfirmRegion(res) {
      this.form.province = res.province.label // 后端需要的字段
      this.form.city = res.city.label // 后端需要的字段
      this.form.area = res.area.label // 后端需要的字段
      this.form.region = res.province.label + res.city.label + res.area.label
    },
    handleSubmit() {
      // this.$refs.uUpload.upload();
      // const files = this.$refs.uUpload.lists.filter(val => val.progress == 100)
      // console.log(files)
      this.$refs.uForm.validate(async (valid) => {
        if (!valid) {
          uni.showToast({
            title: '请检查必填项',
            icon: 'none'
          })
          return
        }
        try {
          const resData = await this.$request({
            url: '/createCompany',
            data: this.form,
            method: 'POST'
          })
          uni.showToast({
            title: '操作成功！',
            success() {
              uni.redirectTo({
                url: '/pages/survey/survey'
              })
            }
          })
        } catch(e) {
          uni.showToast({
            title: e,
            icon: 'none'
          })
        }
      });
    }
  }
};