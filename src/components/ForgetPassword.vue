<template>
    <div>
        <mod-navBar-beforeLogin></mod-navBar-beforeLogin>
        <van-notice-bar scrollable color="#1989fa" background="#ecf9ff" left-icon="volume-o">
            初始密码为身份证后6位，自助密码找回需已绑定邮箱。
        </van-notice-bar>
        <van-form @submit="onSubmit">
            <van-field v-model="id" label="身份证号" placeholder="请输入幼儿身份证号码" :rules="[{ required: true, message: '此项不能为空' }]" />
            <van-field v-model="captcha" center clearable label="验证码" placeholder="请输入验证码" :rules="[{ required: true, message: '此项不能为空' }]">
                <template #button>
                    <van-button round size="small" type="info" native-type="click" @click="handleGetCaptcha">获取验证码</van-button>
                </template>
            </van-field>
            <van-field v-model="password" label="登录密码" type="password" placeholder="请输入新的登录密码" :rules="[{ required: true, message: '此项不能为空' }]" />
            <van-field v-model="repassword" label="确认密码" type="password" placeholder="请再次输入登录密码" :rules="[{ required: true, message: '此项不能为空' }]" />
            <div style="margin: 16px;">
                <van-button block round type="info" native-type="submit">
                    保存
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { NavBar, Form, Field, Icon, NoticeBar, Button } from 'vant'
import axios from 'axios'
import modNavBarBeforeLogin from './Mods/NavBar/BeforeLogin.vue'
export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [NavBar.name]: NavBar,
    [NoticeBar.name]: NoticeBar,
    [Icon.name]: Icon,
    [Button.name]: Button,
    'mod-navBar-beforeLogin': modNavBarBeforeLogin
  },
  data () {
    return {
      id: '',
      password: '',
      repassword: '',
      captcha: ''
    }
  },
  methods: {
    handleGetCaptcha () {
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    onSubmit (values) {
      this.$router.push('login')
      // console.log('submit', values)
    }
  }
}
</script>
