/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 09:30:04
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 10:10:04
 * @FilePath: \my-vue3-project\src\store\root\index.ts
 * @Description: file content
 */
import { createStore, StoreOptions } from "vuex";

import { RootStateInterface, RootStoreModel } from "@/models/store";

import { initialRootState } from "./initialState";

import { itemsState } from "@/store/items/module";

const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    itemsState,
  },
};

export const rootStore: RootStoreModel<RootStateInterface> = <any>(
  createStore(storeOptions)
);

export function dispatchModuleAction<T>(
  moduleName: string,
  actionName: string,
  params?: T
): void {
  rootStore.dispatch(`${moduleName}/${actionName}`, params);
}
