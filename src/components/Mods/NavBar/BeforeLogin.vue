<template>
    <van-nav-bar title="贝贝星幼儿园『御衡路分部』" left-text="" />
</template>

<script>
import { NavBar, Toast } from 'vant'
export default {
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  },
  components: {
    [NavBar.name]: NavBar
  }
}
</script>
