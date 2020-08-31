<template>
    <div>
        <mod-navBar-beforeLogin></mod-navBar-beforeLogin>
        <van-notice-bar color="#1989fa" scrollable background="#ecf9ff" left-icon="volume-o">
            初始密码为身份证后6位，登录后请修改密码。
        </van-notice-bar>
        <van-form @submit="onSubmit">
            <van-field v-model="id" label="身份证号" placeholder="请输入幼儿身份证号码" :rules="[{ required: true, message: '此项不能为空' }]" />
            <van-field v-model="password" label="登录密码" type="password" placeholder="请输入登录密码" :rules="[{ required: true, message: '此项不能为空' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="default" to="forget_password">
                    忘记密码
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { NavBar, Form, Button, Field, Icon, NoticeBar } from 'vant'
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
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      this.$router.push('/')
    }
  }
}
</script>
