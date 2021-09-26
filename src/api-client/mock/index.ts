/*
 * @Author: wangyunbo
 * @Date: 2021-09-26 09:59:48
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-26 10:06:36
 * @FilePath: \my-vue3-project\src\api-client\mock\index.ts
 * @Description: file content
 */

import { ApiClientInterface } from "@/models/api-client/ApiClient.interface";
import itemsApiClient from "./items";

const apiMockClient: ApiClientInterface = {
  items: itemsApiClient,
};

export default apiMockClient;
