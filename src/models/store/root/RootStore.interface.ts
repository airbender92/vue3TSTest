/*
 * @Author: wangyunbo
 * @Date: 2021-10-08 09:07:42
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-08 18:36:12
 * @FilePath: \my-vue3-project\src\models\store\root\RootStore.interface.ts
 * @Description: file content
 */
import {
  ItemsStateInterface
} from '../items/ItemsState.interface'

export interface RootStoreInterface {
  itemsState: ItemsStateInterface
}