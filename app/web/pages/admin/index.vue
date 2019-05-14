<template>
    <el-container>
        <el-header>后台管理系统</el-header>
        <el-container>
            <el-aside width="200px">
                <menu-list ></menu-list>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
        <el-footer>卡车后台管理系统-有bug就找达美乐</el-footer>
    </el-container>
</template>
<script lang="ts" src="./index.ts"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "./index.less";
</style>
