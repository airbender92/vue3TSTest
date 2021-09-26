/*
 * @Author: wangyunbo
 * @Date: 2021-09-26 09:46:48
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-26 09:52:28
 * @FilePath: \my-vue3-project\src\api-client\mock\items\index.ts
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
