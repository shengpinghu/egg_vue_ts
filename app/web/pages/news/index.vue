<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      label-position="left"
      label-width="120px"
    >
      <el-form-item label="新闻标题">
        <el-input v-model="form.title"/>
      </el-form-item>
      <el-form-item label="新闻链接">
        <el-input v-model="form.link"/>
      </el-form-item>
      <el-form-item label="咨询分类">
        <el-select
          v-model="form.categoryName"
          filterable
          allow-create
          default-first-option
          placeholder="请选择或输入咨询分类"
        >
          <el-option
            v-for="item in categoryType"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="展现形式">
        <el-radio-group v-model="form.type">
          <el-radio label="0">
            文字类型
          </el-radio>
          <el-radio
            label="1"
          >
            图片类型
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="图片上传">
        <image-up-load @uploadFinish="getImgUrl"/>
      </el-form-item>
      <el-form-item label="媒体logo上传">
        <image-up-load @uploadFinish="getLogo"/>
      </el-form-item>
      <el-form-item label="排序权重">
        <el-input
          v-model="form.sortBy"
          place-holder="值越大越靠前"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          立即创建
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style lang="less">
  @import "index.less";
</style>
