import axios from 'axios'
// import { message as MSG } from 'ant-design-vue'
// import { jwt } from '@/util/jwt'
import {ElMessage} from "element-plus";

// 创建axios实例
const service = axios.create({
    baseURL: '', // api 的 base_url
    timeout: 9000000000, // 请求超时时间
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    // withCredentials: true
})
//request 拦截器
service.interceptors.request.use(
    config => {
        return config
    }
)
// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('debug err' + error) // for debug
        // MSG.error(error.message, 5)
        ElMessage.error(error.message)
        return Promise.reject(error)
    }
)

service.all = axios.all
service.spread = axios.spread
export default service
