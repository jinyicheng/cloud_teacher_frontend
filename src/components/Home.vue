<template>
    <div>
        <mod-navBar-afterLogin></mod-navBar-afterLogin>
        <van-notice-bar color="#1989fa" scrollable background="#ecf9ff" left-icon="volume-o">
            黄晓明小朋友，贝贝星幼儿园小7班欢迎你。
        </van-notice-bar>
        <van-grid>
            <van-grid-item icon="new-o" text="新生登记" />
            <van-grid-item icon="photo-o" text="成长瞬间" />
            <van-grid-item icon="star-o" text="星星鼓励" />
            <van-grid-item icon="edit" text="请假登记" />
        </van-grid>
        <van-divider dashed>最新消息</van-divider>
        <mod-list-news></mod-list-news>
        <mod-tabBar-afterLogin></mod-tabBar-afterLogin>
    </div>
</template>

<script>
import { Grid, GridItem, NoticeBar, Divider } from 'vant'
import modNavBarAfterLogin from './Mods/NavBar/AfterLogin.vue'
import modTabBarAfterLogin from './Mods/TabBar/AfterLogin.vue'
import modListNews from './Mods/List/News.vue'

export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [NoticeBar.name]: NoticeBar,
    [Divider.name]: Divider,
    'mod-navBar-afterLogin': modNavBarAfterLogin,
    'mod-tabBar-afterLogin': modTabBarAfterLogin,
    'mod-list-news': modListNews
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']
    }
  }
}
</script>
