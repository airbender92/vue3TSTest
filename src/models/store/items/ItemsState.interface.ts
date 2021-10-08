/*
 * @Author: wangyunbo
 * @Date: 2021-10-08 09:25:36
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-08 09:42:46
 * @FilePath: \my-vue3-project\src\models\store\items\ItemsState.interface.ts
 * @Description: file content
 */
import { ItemInterface } from "@/models/items/Item.interface";

export interface ItemsStateInterface {
  loading: boolean;
  items: ItemInterface[];
}