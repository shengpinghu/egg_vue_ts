<template>
  <el-form ref="form" size="medium" :model="form" label-width="80px" label-position="left">
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" round  @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less" scoped>
  @import "./index.less";
</style>
