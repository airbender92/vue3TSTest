/*
 * @Author: wangyunbo
 * @Date: 2021-09-27 18:22:18
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-27 18:25:06
 * @FilePath: \my-vue3-project\src\api-client\live\index.ts
 * @Description: file content
 */

import { ApiClientInterface } from "@/models/api-client/ApiClient.interface";
import itemsApiClient from "./items";

const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient,
};

export default apiLiveClient;
