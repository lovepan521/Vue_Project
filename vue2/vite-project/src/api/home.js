import request from './request';

export default {
    getList(model) {
        return request({
            url: '/temem/list',
            method: 'post',
            dara: model
        })
    }
}
