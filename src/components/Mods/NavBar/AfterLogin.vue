<template>
    <div>
        <van-nav-bar title="贝贝星幼儿园『御衡路分部』" @click-left="onClickLeft" @click-right="onClickRight">
            <template #left>
                    <van-icon name="ellipsis" size="18"/>
            </template>

            <template #right>
                <van-icon name="phone-o" size="18" />
            </template>
        </van-nav-bar>
        <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" close-on-click-action @cancel="onCancel"  @select="onSelect"/>
    </div>
</template>

<script>
import { NavBar, Toast, Icon, ActionSheet } from 'vant'
export default {
  data () {
    return {
      show: false,
      actions: [
        { name: '登录', color: '#ee0a24', router: 'login' },
        { name: '退出' }
      ]
    }
  },
  methods: {
    onClickLeft () {
      this.show = true
    },
    onClickRight () {
      open('tel:13800138000')
    },
    onCancel () {
      Toast('取消')
    },
    onSelect (item) {
      if (item.router != null) {
        this.$router.push('login')
      } else {
        Toast(item.name)
      }
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [ActionSheet.name]: ActionSheet,
    [Icon.name]: Icon
  }
}
</script>
