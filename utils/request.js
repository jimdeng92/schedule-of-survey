
const baseURI = 'http://120.78.130.184:8081/v1'

export default (params) => {
  return new Promise((resolve, reject) => {
    if (!params.url) {
      return reject('缺少 url 参数')
    }
    uni.request({
      url: baseURI + params.url,
      data: params.data || {},
      header: {
        token: uni.getStorageSync('token') || ''
      },
      method: params.method || 'GET',
      success(res) {
        const resData = res.data
        console.log(resData)
        if (!resData) {
          reject('no response')
          console.log('reject 之后的代码会被执行') 
          return
        }
        // 未登录
        if (resData.code === 401 || resData.code === 300) {
          uni.showToast({
            title: '未登录，请先登录',
            icon: 'none'
          })
          setTimeout(() => {
            uni.navigateTo({
              url: '/pages/login/login'
            })
          }, 1500)
          // return 不返回任何内容 try 和 catch 的代码都不执行
          return
        } else if (resData.code !== 200) {
          // reject 中的内容进入 catch
          return reject(resData.msg || resData.message)
        }
        resolve(resData) // 成功
      },
      fail(err) {
        reject(err)
      }
    })
  })
}