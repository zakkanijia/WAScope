<script setup>
import MENU from '@/data/Menu.json'
</script>

<template>
  <div class="asideWrap">
    <el-menu
        router
        :unique-opened="true"
        active-text-color="var(--el-text-color-primary)"
        background-color="var(--el-color-info-light-9)"
        :default-openeds="['/lmad']"
        text-color="#000"
        class="h-full">
      <template v-for="(item,index) of MENU" :key="index">
        <template v-if="item.children.length===0">
          <el-menu-item :index="item.path">
            <template #title>
              <el-icon :class="'iconfont icon-'+item.icon"/>
              <span>{{ item.label }}</span>
            </template>
          </el-menu-item>
        </template>
        <template v-else>
          <el-sub-menu :index="item.path">
            <template #title>
              <el-icon :class="'iconfont icon-'+item.icon"/>
              <span>{{ item.label }}</span>
            </template>
            <el-menu-item v-for="(subItem,subIndex) of item.children" :key="subIndex" :index="subItem.path">
              <template #title>
                <el-icon :class="'iconfont icon-'+subItem.icon"/>
                <span>{{ subItem.label }}</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.asideWrap {
  background: var(--el-color-info-light-9);

  .el-menu-item:hover {
    background: var(--el-color-info-light-7);
  }
}

:deep(.el-submenu__title:hover) {
  background-color: rgb(48, 64, 110) !important;
  border-radius: 10px;
}
</style>
