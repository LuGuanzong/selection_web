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
        console.log('response', response)
        if (response.status === 200 && data.code === 0) {
            ElMessage.error(data.msg || '请求成功')
            return data;
        } else {
            ElMessage.error(data.msg || '请求失败')
            Promise.reject();
        }
    },
    (error: AxiosError) => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
