<script setup>
import API from '@/api/lmad.js'
import {ArrowLeft, Search} from '@element-plus/icons-vue'
import {gotoByName, gotoByPath} from "../../utils/goto.js";

const pageData = reactive({
  tableData: [],
  tableLoading: true
})

onMounted(() => {
  getHostList()
})

const getHostList = () => {
  API.hostList().then(res => {
    if (res?.code === 2000) {
      pageData.tableData = res.data
    } else {
      ElMessage.error('data error！')
    }
  }).finally(e => {
    pageData.tableLoading = false
  })
}

const getAnalysisResult = (_obj) => {
  gotoByName('analysis_result', _obj)
}
</script>

<template>
  <el-page-header @back="gotoByPath('/home')" :icon="ArrowLeft">
    <template #title>
      Back
    </template>
    <template #content>
      <el-text class="mx-1" type="primary"> Results list</el-text>
    </template>
  </el-page-header>
  <el-divider border-style="dashed"/>
  <el-table v-loading="pageData.tableLoading" :data="pageData.tableData" stripe border style="width: 500px">
    <el-table-column label="id" type="index" width="60" align="center"/>
    <el-table-column prop="host" label="host" width="260">
      <template #default="scope">
        <el-tag type="danger">{{ scope.row.host }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="Option" align="center">
      <template #default="scope">
        <el-button type="warning" :icon="Search" @click="getAnalysisResult(scope.row)">
          view
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>
