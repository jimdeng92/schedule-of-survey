import rules from '@/utils/rules.js'
  
export default {
  data() {
    return {
      actionUrl: "https://test.zhengchi-cn.com/mgmt/v1/uploadAppPic",
      token: uni.getStorageSync('token') || '',
      currentYear: new Date().getFullYear(),
      visibleDate: false,
      visibleRegion: false,
      rules,
      form: {
        contacts: '',
        contactNumber: '',
        companyName: '',
        province: '',
        city: '',
        area: '',
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
        strategicPlanning: '',
        detail: '' // 图片地址逗号分隔
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
    handleError() {
      this.shwoToast({
        title: '图片上传失败',
        icon: 'none'
      })
    },
    // 图片全部上传成功
    async handleUploaded(lists, name) {
      const urls = lists.map(item => item.response.url)
      this.form.detail = urls.join(',')
      
      try {
        const resData = await this.$request({
          url: '/createCompany',
          data: this.form,
          method: 'POST'
        })
        uni.hideLoading()
        uni.redirectTo({
          url: '/pages/survey/survey'
        })
      } catch(e) {
        uni.hideLoading()
        uni.showToast({
          title: e,
          icon: 'none'
        })
      }
    },
    handleSubmit() {
      this.$refs.uForm.validate(valid => {
        if (!valid) {
          uni.showToast({
            title: '请检查必填项',
            icon: 'none'
          })
          uni.pageScrollTo({
            scrollTop: 0
          })
          return
        }
        // TODO 图片校验
        // if (this.$refs.uUpload.lists.length === 0) {
        //   uni.showToast({
        //     title: '请选择图片',
        //     icon: 'none'
        //   })
        // }
        uni.showLoading()
        this.$refs.uUpload.upload();
      });
    }
  }
};