/*
 * @Author: wangyunbo
 * @Date: 2021-09-26 09:46:48
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 10:32:57
 * @FilePath: \my-vue3-project\src\api-client\mock\items\index.ts
 * @Description: file content
 */

import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel,
} from "@/models/api-client/items";
import { config } from "@/config";

const urls: ItemsApiClientUrlsInterface = config.items.apiUrls;

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls);

export default itemsApiClient;
