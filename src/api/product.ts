import request from '../utils/request';


export const fetchHelloworld = () => {
    return request({
        url: '/',
        method: 'get'
    });
};

export const createManySelection = (data) => {
    return request({
        url: '/product/upload_st_by_array',
        method: 'post',
        data,
    });
};