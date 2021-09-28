/*
 * @Author: wangyunbo
 * @Date: 2021-09-28 08:57:26
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-28 10:54:04
 * @FilePath: \my-vue3-project\src\models\http-client\HttpClient.ts
 * @Description: file content
 */

import { HttpClientInterface } from "./HttpClient.interface";
import { HttpClientModel } from "./HttpClient.model";

export const HttpClient: HttpClientInterface = new HttpClientModel();
