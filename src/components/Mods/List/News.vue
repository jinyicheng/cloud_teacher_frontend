<template>
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
</template>

<script>
import { List, Cell } from 'vant'
export default {
  data () {
    return {
      list: [
        'xxx幼儿歌唱比赛',
        'xxx亲子园艺展览',
        'xxx母情节献礼',
        'xxx全国幼儿书画比赛报名',
        '第88届上海市幼儿歌唱比赛报名',
        '浦东苗苗杯语言大赛报名',
        '幼儿体育嘉年华'
      ],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  }
}
</script>
