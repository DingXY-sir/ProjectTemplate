/*
 * @Descripttion: axios封装
 * @Author: DXY
 * @Date: 2022-06-08 08:15:18
 * @LastEditors: DXY
 * @LastEditTime: 2022-06-08 08:16:56
 */
import axios from 'axios'

const request = axios.create({
  baseURL: '',
  timeout:6000
})