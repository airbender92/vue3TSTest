/*
 * @Author: wangyunbo
 * @Date: 2021-09-26 10:08:41
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-26 10:23:10
 * @FilePath: \my-vue3-project\src\api-client\live\items\index.ts
 * @Description: file content
 */

import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel,
} from "@/models/api-client/items";

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: "/static/data/items.json",
};

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls);

export default itemsApiClient;
