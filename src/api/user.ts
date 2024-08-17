import request from '../utils/request';

// 批量导入选品数据
export const login = (data: any) => {
    return request({
        url: '/login',
        method: 'post',
        data,
    });
};