import axios from 'axios'
import store from '../store'
import Mint from 'mint-ui'

axios.defaults.timeout = 6000

//http request 拦截器
axios.interceptors.request.use(
  config => {
    Mint.Indicator.open({
      //打开loading
      text: 'loading...',
      spinnerType: 'fading-circle'
    })
    return config
  },
  error => {
    Mint.Indicator.close()
    return Promise.reject(err)
  }
)

//http response 拦截器
axios.interceptors.response.use(
  response => {
    Mint.Indicator.close()
    return response
  },
  error => {
    Mint.Indicator.close()
    return Promise.reject(error)
  }
)

/**
 * 封装 get 方法
 */
export function get(url, option = {}) {
  return axios
    .get(url, {
      params: option.data
    })
    .then(response => {
      store.commit('toast', {
        type: 'success',
        title: '成功',
        message: '调用成功'
      })
      option.success && option.success(response)
    })
    .catch(error => {
      store.commit('toast', {
        type: 'error',
        title: '失败',
        message: '调用失败'
      })
      option.error && option.error(error)
    })
}

/**
 * 封装 post 方法
 */
export function post(url, option = {}) {
  return axios
    .post(url, option.data)
    .then(response => {
      store.commit('toast', {
        type: 'success',
        title: '成功',
        message: '调用成功'
      })
      option.success && option.success(response)
    })
    .catct(error => {
      store.commit('toast', {
        type: 'error',
        title: '失败',
        message: '调用失败'
      })
      option.error && option.error(error)
    })
}

/**
 * 封装 put 方法
 */
export function put(url, option = {}) {
  return axios
    .put(url, option.data)
    .then(response => {
      store.commit('toast', {
        type: 'success',
        title: '成功',
        message: '调用成功'
      })
      option.success && option.success(response)
    })
    .catct(error => {
      store.commit('toast', {
        type: 'error',
        title: '失败',
        message: '调用失败'
      })
      option.error && option.error(error)
    })
}

/**
 * 封装 delete 方法
 */
export function del(url, option = {}) {
  return axios
    .delete(url, {
      params: option.data
    })
    .then(response => {
      store.commit('toast', {
        type: 'success',
        title: '成功',
        message: '调用成功'
      })
      option.success && option.success(response)
    })
    .catct(error => {
      store.commit('toast', {
        type: 'error',
        title: '失败',
        message: '调用失败'
      })
      option.error && option.error(error)
    })
}
