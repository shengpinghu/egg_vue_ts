<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        :default-active="$route.path"
        router
        class="el-menu-vertical-demo"
        text-color="#000"
        active-text-color="#409EFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-postcard" />
            <span>资讯管理</span>
          </template>
          <el-menu-item
            index="/news"
          >
            <span>添加资讯</span>
          </el-menu-item>
          <el-menu-item index="/newsList">
            <span>资讯列表</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script lang="ts" src="./index.ts"></script>
