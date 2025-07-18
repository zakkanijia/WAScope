<script setup>
import IncHeader from '@/views/inc/Header.vue'
import IncAside from '@/views/inc/Aside.vue'
import IncFooter from '@/views/inc/Footer.vue'
</script>
<template>
  <div class="h-full">
    <el-container direction="vertical" class="h-full">
      <IncHeader/>
      <el-container>
        <IncAside/>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <IncFooter/>
    </el-container>
  </div>
</template>

<style scoped lang="less">

</style>
