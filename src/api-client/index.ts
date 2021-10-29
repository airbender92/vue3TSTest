/*
 * @Author: wangyunbo
 * @Date: 2021-09-27 18:25:36
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 10:30:47
 * @FilePath: \my-vue3-project\src\api-client\index.ts
 * @Description: file content
 */
import { ApiClientInterface } from "@/models/api-client/ApiClient.interface";
import apiMockClient from "./mock";
import apiLiveClient from "./live";
import { config } from "@/config";

let apiClient: ApiClientInterface;
if (config.apiClient.type === "live") {
  apiClient = apiLiveClient;
} else if (config.apiClient.type === "mock") {
  apiClient = apiMockClient;
} else {
  throw Error("Invalid or undefined config.apiClient.type");
}

export default apiClient;
