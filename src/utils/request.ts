import axios, { AxiosInstance, CreateAxiosDefaults, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus'
import {useRouter} from "vue-router";

const service: AxiosInstance = axios.create({
    timeout: 5000,
    baseURL: import.meta.env.VITE_APP_BASE_URL,
} as CreateAxiosDefaults);

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (!config.meta) {
            config.meta = {};
        }

        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        const { _, config } = response;
        const data = response.data

        // 检查HTTP状态码
        if (response.status === 200) {
            // 检查业务状态码
            if (data.code === 0) {
                if (!config.meta?.showSuccessMessage) {
                    ElMessage.success(data.msg || '请求成功');
                }
                return data;
            } else {
                ElMessage.error(data.msg || '业务逻辑错误');
                return Promise.reject(new Error(data.msg || '业务逻辑错误'));
            }
        } else {
            // 处理HTTP错误
            ElMessage.error(response.statusText || 'HTTP请求错误');
            return Promise.reject(new Error(response.statusText || 'HTTP请求错误'));
        }
    },
    (error: AxiosError) => {
        if (error.response.status === 401) {
            ElMessage.error('请先登录');
            const currentDomain = window.location.origin
            window.location = `${currentDomain}/login`
        } else {
            console.log(error);
            ElMessage.error(error.message || '系统错误');
        }
        return Promise.reject();
    }
);

export default service;
