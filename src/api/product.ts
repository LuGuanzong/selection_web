import request from '../utils/request';


export const fetchHelloworld = () => {
    return request({
        url: '/',
        method: 'get'
    });
};

// 批量导入选品数据
export const createManySelection = (data) => {
    return request({
        url: '/product/selection/upload_st_by_array',
        method: 'post',
        data,
    });
};

// 根据关键词搜索sku
export const searchSkusByKeywords = (params) => {
    console.log('params', params)
    return request({
        url: '/product/selection/search_skus_by_keywords',
        method: 'get',
        params
    });
};