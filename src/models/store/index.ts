/*
 * @Author: wangyunbo
 * @Date: 2021-10-08 09:05:39
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 17:13:03
 * @FilePath: \my-vue3-project\src\models\store\index.ts
 * @Description: file content
 */
import * as MutationType from "./mutation-type/MutationType";
import * as StoreModuleNames from "./module-names/StoreModuleNames";

import { RootStateInterface } from "./root/RootState.interface";
import { RootStoreInterface } from "./root/RootStore.interface";
import { RootStoreModel } from "./root/RootStore.model";

import { ItemsStateInterface } from "./items/ItemsState.interface";
import { LocalesStateInterface } from "./locales/LocalesState.interface";

export {
  MutationType,
  StoreModuleNames,
  RootStateInterface,
  RootStoreInterface,
  RootStoreModel,
  ItemsStateInterface,
  LocalesStateInterface,
};
