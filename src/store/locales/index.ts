/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 17:16:33
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 17:40:09
 * @FilePath: \my-vue3-project\src\store\locales\index.ts
 * @Description: file content
 */
import { rootStore, dispatchModuleAction } from "../root";
import {
  MutationType,
  StoreModuleNames,
  LocalesStateInterface,
} from "@/models/store";
import LocalStorageKeys from "@/models/local-storage/LocalStorageKeys";

const localesStore = {
  get state(): LocalesStateInterface {
    return rootStore.state.localesState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.localesState, actionName, params);
  },
};

export const useLocalesStore = () => {
  return localesStore;
};
