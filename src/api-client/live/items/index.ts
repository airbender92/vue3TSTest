/*
 * @Author: wangyunbo
 * @Date: 2021-09-27 18:21:42
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-27 18:21:42
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
