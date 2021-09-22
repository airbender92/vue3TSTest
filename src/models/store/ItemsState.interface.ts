/*
 * @Author: wangyunbo
 * @Date: 2021-09-22 09:02:43
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-22 09:04:31
 * @FilePath: \my-vue3-project\src\models\store\ItemsState.interface.ts
 * @Description: file content
 */
import { ItemInterface } from "@/models/items/Item.interface";

export interface ItemsStateInterface {
  loading: boolean;
  items: ItemInterface[];
}
