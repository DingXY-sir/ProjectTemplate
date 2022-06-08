/*
 * @Descripttion: axios封装
 * @Author: DXY
 * @Date: 2022-06-08 08:15:18
 * @LastEditors: DXY
 * @LastEditTime: 2022-06-08 08:20:07
 */
import axios from 'axios'

const request = axios.create({
  baseURL: '',
  timeout:6000
})

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default request