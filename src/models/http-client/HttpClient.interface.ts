/*
 * @Author: wangyunbo
 * @Date: 2021-09-28 08:57:40
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-28 10:20:47
 * @FilePath: \my-vue3-project\src\models\http-client\HttpClient.interface.ts
 * @Description: file content
 */

import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";

export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Promise<T>;
  post<T>(parameters: HttpRequestParamsInterface): Promise<T>;
}
