<script setup>
import CONST from '@/data/Const.json'

const pageData = reactive({})
</script>

<template>
  <el-header>
    <div class="flex headerWrap">
      <h3>
        <el-icon size="26" class="iconfont icon-evaluate"/>
        {{ CONST.systemName }}
      </h3>
<!--      <div class="headerExtra">-->
<!--        <el-link href="#/login" :underline="false">-->
<!--          <el-icon class="iconfont icon-user"/>-->
<!--          登录-->
<!--        </el-link>-->
<!--      </div>-->
    </div>
  </el-header>
</template>

<style scoped lang="less">
.el-header {
  background: var(--el-color-primary);
  color: #fff;
  line-height: 60px;

  .el-link {
    color: #fff;
    margin: 0 5px;
  }
}

.headerWrap {
  justify-content: space-between;

  h3 {
    font-size: 26px;
    margin: 0 0 0 20px;
  }
}

.headerExtra {
  margin: 0 20px 0 0;
}
</style>
