// request.js
import axios from 'axios'
import { message } from 'ant-design-vue'
// 创建axios实例
// 创建请求时可以用的配置选项

// 配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
const contentType = 'application/json;charset=UTF-8'

const instance = axios.create({
    /**
     * 是否携带cookie,注意若携带cookie后端必须配置
     * 1.Access-Control-Allow-Origin为单一域名(具体到IP + port,用localhost貌似不行)
     * 2.需要带上响应头Access-Control-Allow-Credentials
     */
    // withCredentials: true,
    timeout: 1000,
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': contentType
    }
})
// axios的全局配置
instance.defaults.headers.post = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
instance.defaults.headers.common = {
    'Auth-Type': 'company-web',
    'X-Requested-With': 'XMLHttpRequest',
    token: 'sdfjlsdfjlsdjflsjflsfjlskd'
}

// 添加请求拦截器(post只能接受字符串类型数据)
instance.interceptors.request.use(
    config => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            message.error('信息校验失败')
            break
        case 401:
            // @ts-nocheck
            message.error('认证失败')
            break
        case 403:
            message.error('token校验失败')
            break
        case 404:
            message.error('请求的资源不存在')
            break
        default:
            message.error(other)
            break
    }
}

// 添加响应拦截器
instance.interceptors.response.use(
    // 响应包含以下信息data,status,statusText,headers,config
    res => {
        if (res.data && res.data.code !== 0 && !(res.data instanceof Blob)) {
            message.error(res.data.msg || '服务器出错!')
        }
        // 请求通用处理
        return res.data
    },
    err => {
        // message.error(err)
        const { response } = err
        if (response) {
            errorHandle(response.status, response.data)
            return Promise.reject(response)
        }
        message.error('请求失败')
        return true
    }
)

export default instance
