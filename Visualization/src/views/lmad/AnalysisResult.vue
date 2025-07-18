<script setup>
import {gotoByPath} from "../../utils/goto.js";
import {ArrowLeft, Download} from "@element-plus/icons-vue";
import * as API from "../../api/lmad.js";

const pageData = reactive({
  params: history.state,
  result: [],
  tableLoading: true,
  tableData: [],
  tableHeight: document.documentElement.clientHeight - 235,
  report: ''
})

onMounted(() => {
  if (typeof pageData.params.host_base64 !== "undefined") {
    getAnalysisResult(pageData.params)
  } else {
    ElMessage.error("params error")
    gotoByPath('/lmad/analysis_list')
  }
})

const getAnalysisResult = (_obj) => {
  API.analysisResult(_obj?.host_base64).then(res => {
    // console.log(res)
    if (res?.code === 2000) {
      pageData.tableData = res?.data?.list
      pageData.report = res?.data?.report
      // console.log(pageData.tableData)
    }
  }).finally(res => {
    pageData.tableLoading = false
  })
}

const openReport = () => {
  window.open(API.analysisReport(pageData.report))
}
</script>

<template>
  <el-page-header @back="gotoByPath('/lmad/analysis_list')" :icon="ArrowLeft">
    <template #title>
      Back
    </template>
    <template #content>
      <span class="text-large font-600 mr-3">
        <el-text class="mx-1" type="primary">Analysis Report</el-text>
      </span>
    </template>
  </el-page-header>
  <el-divider border-style="dashed"/>
  <el-table v-loading="pageData.tableLoading" :data="pageData.tableData"
            stripe border default-expand-all
            style="width: 100%;" :height="pageData.tableHeight">
    <el-table-column type="expand">
      <template #default="props">
        <el-table :data="props.row.page" stripe border>
          <el-table-column type="expand">
            <template #default="inner_props">
              <el-table :data="inner_props.row.taint_analysis" border
                        v-if="inner_props.row.taint_analysis.length>0"
                        style="width:calc(100% - 40px);margin:auto 20px;"
                        :header-cell-style="{backgroundColor:'#fef0f0' }">
                <el-table-column label="Id" type="index" width="60" align="center"/>
                <el-table-column label="Number of Privacy-Sensitive Fields" prop="sensitives_nums" width="140" align="center">
                  <template #default="scope">
                    <el-tag type="danger">{{ scope.row.source_sensitives_nums }}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="Source" prop="source" width="200" align="center">
                  <template #default="scope">
                    <el-popover
                        placement="top-start"
                        title="Source"
                        :width="500"
                        trigger="click"
                        :content="scope.row.source">
                      <template #reference>
                        <el-button type="danger" class="m-2">view Privacy-Sensitive</el-button>
                      </template>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="Path" prop="path">
                  <template #default="scope">
                    <el-text class="mx-1" type="primary">{{ scope.row.path }}</el-text>
                  </template>
                </el-table-column>
                <el-table-column label="Sink" prop="sink">
                  <template #default="scope">
                    <el-text class="mx-1" type="primary">{{ scope.row.sink }}</el-text>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="Exists Risk" width="130" align="center">
            <template #default="scope">
              <el-tag :type="scope.row.taint_analysis.length!==0?'danger':'primary'">
                {{ scope.row.taint_analysis.length !== 0 ? 'T' : 'F' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="Method" prop="method" width="130" align="center">
            <template #default="scope">
              <el-tag type="warning">{{ scope.row.method }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="API" prop="api">
            <template #default="scope">
              <el-text class="mx-1" type="primary">{{ scope.row.api }}</el-text>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column prop="referer" style="width: 100%">
      <template #header>
        <el-text class="mx-1" type="danger">Host：{{ pageData.params.host }}</el-text>
        <el-button @click="openReport()" text type="primary" style="margin: 0 0 0 30px" :icon="Download">Gen-Report
        </el-button>
      </template>
      <template #default="scope">
        <el-tag type="primary">Referer:</el-tag>
        <el-text class="mx-1" type="primary">{{ scope.row.referer }}</el-text>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
</style>
