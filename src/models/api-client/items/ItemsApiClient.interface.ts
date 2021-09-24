/*
 * @Author: wangyunbo
 * @Date: 2021-09-24 14:40:16
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-24 14:57:47
 * @FilePath: \my-vue3-project\src\models\api-client\items\ItemsApiClient.interface.ts
 * @Description: file content
 */
import { ItemInterface } from "@/models/items/Item.interface";

export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>;
}
