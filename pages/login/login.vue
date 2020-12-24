<template>
	<view class="login-container">
		<view class="login-title">uni-app Demo</view>
		<view class="login-form">
			<u-field
				class="input"
				v-model="form.username"
				label="用户名"
				placeholder="请填写用户名"
				required
			>
			</u-field>
			<u-field
				class="input"
				v-model="form.password"
				label="密码"
				placeholder="请填写密码"
				required
			>
			</u-field>
			<view class="login-submit-btn">
				<u-button type="primary" @click="handleLogin">登录</u-button>
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
			handleLogin() {
				if (!this.checkForm()) return
				
				// TODO AJAX
				
				uni.redirectTo({
					url: '/pages/index/index'
				})
			},
			checkForm() {
				const username = this.form.username.trim()
				const password = this.form.password.trim()
				if (!username || !password) {
					uni.showToast({
						title: '请填写用户名和密码！',
						icon: 'none'
					})
					return false
				}
				if (username !== 'jimdeng' || password !== '123456') {
					uni.showToast({
						title: '用户名或密码错误！',
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
		margin: 0 10px;
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
