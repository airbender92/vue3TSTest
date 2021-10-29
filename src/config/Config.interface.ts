/*
 * @Author: wangyunbo
 * @Date: 2021-10-29 08:53:25
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 10:37:29
 * @FilePath: \my-vue3-project\src\config\Config.interface.ts
 * @Description: file content
 */

import { ItemsApiClientUrlsInterface } from "@/models/api-client/items";

export interface ConfigInterface {
  global: {
    // ... things that are not specific to a single app domain
  };
  httpClient: {
    tokenKey: string;
  };
  apiClient: {
    type: string;
  };
  items: {
    apiUrls: ItemsApiClientUrlsInterface;
  };
}
