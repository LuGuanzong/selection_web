import request from '../utils/request';

// 批量导入选品数据
export const createManySelection = (data) => {
    return request({
        url: '/product/selection/upload_st_by_array',
        method: 'post',
        data,
    });
};

// 根据关键词搜索sku
export const searchSkusByKeywords = (params, showSuccessMessage) => {
    return request({
        url: '/product/selection/search_skus_by_keywords',
        method: 'get',
        params,
        meta: { showSuccessMessage }
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

// 获取所有货架号
export const getAllShelf = (params) => {
    return request({
        url: '/product/store/all_shelf',
        method: 'get',
        params
    });
};

// 搜索sku在每个货仓数量
export const searchSkuCount = (params) => {
    return request({
        url: '/product/store/sku_count',
        method: 'get',
        params
    });
};


// 搜索sku在每个货仓数量
export const searchRestRoom = (params) => {
    return request({
        url: '/product/store/valid_store_for_mat',
        method: 'get',
        params
    });
};