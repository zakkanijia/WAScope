<script setup>
import CONST from '@/data/Const.json'

const pageData = reactive({})
</script>

<template>
  <el-footer v-html="CONST.copyright"></el-footer>
</template>

<style lang="less" scoped>
.el-footer {
  background: var(--el-color-info-light-9);
  padding: 10px 0;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  border-top: solid 1px var(--el-menu-border-color);
}
</style>
