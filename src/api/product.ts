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
    return request({
        url: '/product/selection/search_skus_by_keywords',
        method: 'get',
        params
    });
};

// 更改数量为1的库存
export const changeOneStore = (data) => {
    return request({
        url: '/product/store/change_one_store',
        method: 'post',
        data
    });
};

// 根据关键词搜索sku
export const searchSkuCount = (params) => {
    return request({
        url: '/product/store/search_sku_count',
        method: 'get',
        params
    });
};
