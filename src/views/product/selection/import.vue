<template>
  <el-upload action="#" :limit="1" accept=".xlsx, .xls" :show-file-list="false"
          :before-upload="beforeUpload">
          <el-button :icon="Upload">上传选品</el-button>
  </el-upload>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import { UploadProps } from 'element-plus';
import * as XLSX from 'xlsx';
import {createManySelection} from "@/api/product";
import { Upload } from '@element-plus/icons-vue'

/**
 * 上传并分析xlsx文件
 */
const importList = ref<any>([]);
const beforeUpload: UploadProps['beforeUpload'] = async (rawFile) => {
    const fileData = await analysisExcel(rawFile);
    importList.value = fileData;

    // 直接在这里调用API上传数据
    await createManySelection({
        selection: fileData
    });

    // 返回false阻止默认的上传行为
    return false;
};
const analysisExcel = (file: any) => {
    return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.onload = function (e: any) {
            const data = e.target.result;
            let datajson = XLSX.read(data, {
                type: 'binary',
            });

            const sheetName = datajson.SheetNames[0];
            const result = XLSX.utils.sheet_to_json(datajson.Sheets[sheetName]);
            resolve(result);
        };
        reader.readAsArrayBuffer(file);
    });
};
</script>

<style scoped>

</style>