/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 09:59:46
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 10:04:49
 * @FilePath: \my-vue3-project\src\store\items\index.ts
 * @Description: file content
 */

import { rootStore, dispatchModuleAction } from "../root";
import { StoreModuleNames, ItemsStateInterface } from "@/models/store";

const itemsStore = {
  get state(): ItemsStateInterface {
    return rootStore.state.itemsState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.itemsState, actionName, params);
  },
};

export const useItemsStore = () => {
  return itemsStore;
};
