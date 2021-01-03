<template>
	<view class="login-container">
		<view class="login-title">调查表</view>
		<view class="login-form">
      <u-form :model="form" ref="uForm">
      		<u-form-item left-icon="account">
            <u-input v-model="form.username" placeholder="请输入用户名"/>
          </u-form-item>
      		<u-form-item left-icon="lock">
            <u-input v-model="form.password" placeholder="请输入密码" type="password"/>
          </u-form-item>
      </u-form>
			<!-- <u-field
				class="input"
				v-model.trim="form.username"
				label="用户名"
			>
			</u-field>
			<u-field
				class="input"
				v-model.trim="form.password"
				label="密码"
			>
			</u-field> -->
			<view class="login-submit-btn">
				<u-button type="primary" @click="handleLogin" :ripple="true">登 录</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				}
			}
		},
		onLoad() {

		},
		methods: {
			async handleLogin() {
				if (!this.checkForm()) return
        try {
          const resData = await this.$request({
            url: '/partnerlogin',
            method: 'POST',
            data: {
              loginName: this.form.username,
              password: this.form.password
            }
          })
          uni.setStorage({
            key: 'token',
            data: resData.data.token
          })
          // 跳转到上一个页面
          uni.reLaunch({
            url: '/pages/index/index'
          })
          // uni.navigateBack()
          // const pages = getCurrentPages()
          // console.log(pages)
          // uni.redirectTo({
          //   url: '/' + pages[pages.length - 2].route
          // })
        } catch(e) {
          uni.showToast({
          	title: e,
          	icon: 'none'
          })
        }
				// uni.showToast({
				// 	title: '用户名或密码错误！',
				// 	icon: 'none'
				// })
			},
			checkForm() {
				const username = this.form.username
				const password = this.form.password
				if (!username || !password) {
					uni.showToast({
						title: '请填写用户名和密码！',
						icon: 'none'
					})
					return false
				}
				return true
			}
		}
	}
</script>

<style lang="scss">
	.login-container {
		padding: 14px;
		.login-title {
			margin: 80px 0 40px;
			text-align: center;
			line-height: 32px;
			font-size: 24px;
		}
		.login-submit-btn {
			margin-top: 10px;
		}
	}
</style>
