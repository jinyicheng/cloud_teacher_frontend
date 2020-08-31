<template>
    <van-tabbar v-model="active" @change="onChange" >
        <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item name="healthy" icon="like-o">健康登记</van-tabbar-item>
        <van-tabbar-item name="match" icon="medal-o">幼儿比赛</van-tabbar-item>
        <van-tabbar-item name="activity" icon="friends-o">亲子活动</van-tabbar-item>
        <van-tabbar-item name="about" icon="info-o">关于</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Notify } from 'vant'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Notify.name]: Notify
  },
  data () {
    return {
      active: ''
    }
  },
  methods: {
    onChange (index) {
      Notify({ type: 'primary', message: index })
    }
  }
}
</script>
