<template>
  <div class="handle-box">
    <el-form>
      <el-form-item label="上传选品">
        <import />
         <el-link :href="stTempUrl" type="primary">下载模板</el-link>
      </el-form-item>
      <el-form-item label="上传图片">
        <img-upload />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import Import from "@/views/product/selection/typeIn/import.vue";
import ImgUpload from "@/views/product/selection/typeIn/imgUpload.vue";
import {genDownloadAssetUrl} from "@/utils/download";


const stTempUrl = genDownloadAssetUrl('select_thing_temp.xlsx')
</script>

<style scoped>

</style>