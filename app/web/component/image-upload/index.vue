<template>
  <div>
    <el-upload
      action=""
      ref="upload"
      list-type="picture-card"
      :http-request="handlePicture"
    >
      <i class="el-icon-plus" />
    </el-upload>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
