/*
 * @Descripttion: 公共请求api
 * @Author: DXY
 * @Date: 2022-06-08 08:55:07
 * @LastEditors: DXY
 * @LastEditTime: 2022-06-08 09:00:46
 */
import request from "../utils/request";

interface ResponsData <T = any>{
  status: number,
  message: string,
  data:T
}

export const getLoginInfo = () => {
  return request.get<ResponsData<{logindata:string}>>('')
}