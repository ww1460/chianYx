const url = "http://192.168.8.48:21021/"
// const url = "http://192.168.0.42:8765/"
// 添加请求拦截器，在请求头中加token
import axios from 'axios'
import NProgress from 'NProgress'
import 'nprogress/nprogress.css'
let sha1 = require("js-sha1");
import store from '@/store'

axios.defaults.baseURL = url
axios.defaults.timeout = 5000
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.withCredentials = true
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
// 请求拦截器
axios.interceptors.request.use(
  config => {
    NProgress.start()
    // 时间戳精确到秒
    var timestamp = Date.parse(new Date()) / 1000;
    var urlLast = config.url.split('/').pop()
    var user = store.state.user
    // window.console.log(user)
    var tokens = ""
    //登陆后请求加userToken
    if (user.userToken) {
      config.data.userToken = user.userToken
      tokens = urlLast + "yunsheng" + timestamp + user.userToken
    } else {
      tokens = urlLast + "yunsheng" + timestamp
    }
    if (user.userInfo.userId) {
      config.data.userId = user.userInfo.userId
    }
    // 加密token
    config.data.token = sha1(tokens)
    config.data.ts = timestamp

    //是否是formData表单提交
    if (config.data.isFormSubmit) {
      config.data = formData(config.data)
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    window.console.log(config.data)
    return config;
  },
  error => {
    alert("请求超时")
    return Promise.reject(error);
  });

// 响应拦截器
axios.interceptors.response.use(
  res => {
    NProgress.done()
    return res;
  },
  error => {
    return Promise.reject(error);
  });
export function formData(query) {
  const formData = new FormData();
  Object.keys(query).forEach(key => {
    formData.append(key, query[key]);
  });
  return formData;
}
export default axios