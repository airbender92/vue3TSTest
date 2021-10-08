/*
 * @Author: wangyunbo
 * @Date: 2021-10-08 09:58:00
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-08 09:59:58
 * @FilePath: \my-vue3-project\src\store\items\initialState.ts
 * @Description: file content
 */
import { ItemsStateInterface } from "@/models/store";

export const initialItemsState: ItemsStateInterface = {
  loading: false,
  items: [],
};
