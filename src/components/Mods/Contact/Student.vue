<template>
<van-cell-group>
  <van-field v-model="value" label="姓名" readonly />
  <van-field v-model="value" label="性别" readonly />
  <van-field v-model="value" label="年龄" readonly />
  <van-field v-model="value" label="学号" readonly />
</van-cell-group>
</template>
<script>
import { CellGroup, Field } from 'vant'
export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field
  }
}
</script>
