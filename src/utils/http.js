import axios from "axios";
import { MessageBox, Message } from "element-ui";

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000, // request timeout
    headers: {
        'Content-Type': 'application/json',
    },
})



/**
 * 请求拦截,处理token
 */

instance.interceptors.request.use(
    config => {

    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
    res => {
        console.log(res.code);
        if (resp.status >= 200 && resp.status < 300) {
            console.log('200');
        } else {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(data.error)
        }
    },
    error => {
        console.log(error);
        return Promise.reject("请求异常");
    }
)

export default instance

export class HttpUtil {
    static get(url, paramas = {}) {
        return instance.get(url, { params })
    }
    static post(url, body) {
        return instance.post(url, body)
    }
}

