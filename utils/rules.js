const baseRule = {
  required: true,
  message: '必填',
  trigger: ['change', 'blur']
}

export default {
  companyName: [baseRule],
  region: [baseRule],
  address: [baseRule],
  enterpriseNature: [baseRule],
  establishTime: [baseRule], // 转换后的值
  businessScope: [baseRule],
  building: [baseRule],
  policySubsidies: [baseRule],
  techField: [baseRule],
  revenueOne: [baseRule],
  revenueTwo: [baseRule],
  revenueThree: [baseRule],
  assetsOne: [baseRule],
  assetsTwo: [baseRule],
  assetsThree: [baseRule],
  researchFeeOne: [baseRule],
  researchFeeTwo: [baseRule],
  researchFeeThree: [baseRule],
  taxOne: [baseRule],
  taxTwo: [baseRule],
  taxThree: [baseRule],
  pledge: [baseRule],
  postgraduateCount: [baseRule],
  undergraduateCount: [baseRule],
  juniorCollegeCount: [baseRule],
  occupationCount: [baseRule],
  postgraduateRatio: [baseRule],
  allCount: [baseRule],
  billingName: [baseRule],
  researchPlan: [baseRule],
  strategicPlanning: [baseRule]
}