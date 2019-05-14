<template>
  <div>
    <el-table
      :data="newsList.articles"
    >
      <el-table-column
        align="center"
        prop="id"
        label="资讯id"
        width="180"
      />
      <el-table-column
        align="center"
        prop="title"
        label="标题"
        width="180"
      />
      <el-table-column
        align="center"
        prop="link"
        label="链接"
      />
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            :type="scope.row.status === 0 ? 'danger' : 'primary'"
            @click="handleNews(scope.row)"
            v-text="scope.row.status === 0 ? '下架' : '上架'"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="pageChange"
      layout="prev, pager, next"
      :page-size="10"
      :total="newsList.total">
    </el-pagination>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less">
  @import "index.less";
</style>
