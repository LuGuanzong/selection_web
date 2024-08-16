<!--上传sku图片-->
<template>
  <div class="img-upload-contain">
    <el-upload
        ref="uploadRef"
        v-model:file-list="fileList"
        :action="uploadUrl"
        list-type="picture-card"
        :auto-upload="false"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
      <el-icon><Plus /></el-icon>
    </el-upload>

    <el-button style="margin-top: 10px;" size="small" @click="handleUpload">确定上传</el-button>

    <el-dialog v-model="dialogVisible" style="text-align: center;">
      <el-image :src="dialogImageUrl" fit="contain" style=" width: 100%; height: 70vh;">
        <template #placeholder>
          <span>Loading...</span>
        </template>
      </el-image>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import { Plus } from '@element-plus/icons-vue'

import type {UploadProps, UploadUserFile, UploadInstance, UploadFile} from 'element-plus'
import {ElMessage} from "element-plus";

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

// 拼接上传链接
const uploadUrl = computed(() => {
  return `${import.meta.env.VITE_APP_BASE_URL}/product/selection/upload_st_imgs`
})

/**
 * 批量上传sku图片
 */
const fileList = ref<UploadUserFile[]>([])
// 上传图片
const uploadRef = ref<UploadInstance>()
const handleUpload = () => {
  if (fileList.value.length === 0) {
    ElMessage.warning('请先上传图片')
    return
  }
  uploadRef.value!.submit()
}

// 上传成功时，判断后端处理是否成功
const handleSuccess = (response: any, uploadFile: UploadFile) => {
  if (response.code !== 0) ElMessage.error( `${uploadFile.name}：` + response.msg)
  else ElMessage.success( `${uploadFile.name}：` + response.msg)
  uploadRef.value!.clearFiles()
}

// 上传失败时，提示失败
const handleError = (error: Error, uploadFile: UploadFile) => {
  ElMessage.error( `${uploadFile.name}：${error.message}`)
}

/**
 * 大图显示
 */
const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

</script>

<style scoped lang="scss">

</style>