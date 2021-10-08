/*
 * @Author: wangyunbo
 * @Date: 2021-10-08 09:07:58
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-08 09:54:40
 * @FilePath: \my-vue3-project\src\models\store\root\RootStore.model.ts
 * @Description: file content
 */
import Vuex from 'vuex'
import { RootStoreInterface } from './RootStore.interface'

export class RootStoreModel<S> extends Vuex.Store<RootStoreInterface> {
  
}