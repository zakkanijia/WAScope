<script setup>
import CONST from '@/data/Const.json'
import backgroundImg from '@/assets/background.jpg'
</script>
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <el-text class="mx-1" type="primary">{{ CONST.systemName }}</el-text>
          </div>
        </template>
        <div class="sys_intro">
          <el-text class="mx-1">{{ CONST.systemIntroduction }}</el-text>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <el-text class="mx-1" type="primary">Modules</el-text>
          </div>
        </template>
        <div>
          <el-collapse accordion>
            <el-collapse-item title="Traffic interception proxy" name="1">
              <div>
<!--                　　Filter & Hijacking-->
                Data Hijacking
              </div>
            </el-collapse-item>
            <el-collapse-item title="Analyzer" name="2">
              <div>
                　　Analyzer
              </div>
            </el-collapse-item>
            <el-collapse-item title="API Confusion" name="3">
              <div>
                　　API Confusion
              </div>
            </el-collapse-item>
            <el-collapse-item title="Report Generator" name="4">
              <div>
                　　Report Generator
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-card>

    </el-col>
    <el-col :span="8" :style="'background: url('+backgroundImg+') no-repeat  center top'"/>
  </el-row>

</template>

<style scoped>
.sys_intro {
  //text-indent: 2em;
}
</style>
