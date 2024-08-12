import axios, { AxiosInstance, CreateAxiosDefaults, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus'

const service: AxiosInstance = axios.create({
    timeout: 5000,
    baseURL: import.meta.env.VITE_APP_BASE_URL,
} as CreateAxiosDefaults);

service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response: AxiosResponse) => {
        const data = response.data

        // 检查HTTP状态码
        if (response.status === 200) {
            // 检查业务状态码
            if (data.code === 0) {
                ElMessage.success(data.msg || '请求成功');
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
        console.log(error);
        return Promise.reject();
    }
);

export default service;
