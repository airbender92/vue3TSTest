/*
 * @Author: wangyunbo
 * @Date: 2021-09-27 18:25:36
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-27 18:29:17
 * @FilePath: \my-vue3-project\src\api-client\index.ts
 * @Description: file content
 */
import { ApiClientInterface } from "@/models/api-client/ApiClient.interface";
import apiMockClient from "./mock";
import apiLiveClient from "./live";

let env = "mock";
if (process.env && process.env.VUE_APP_API_CLIENT) {
  env = process.env.VUE_APP_API_CLIENT.trim();
}

let apiClient: ApiClientInterface;
if (env === "live") {
  apiClient = apiLiveClient;
} else {
  apiClient = apiMockClient;
}

export default apiClient;
