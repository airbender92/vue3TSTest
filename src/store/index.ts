/*
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-22 19:12:40
 * @FilePath: \my-vue3-project\src\store\index.ts
 * @Description: file content
 */
import { createStore } from "vuex";
import { ItemInterface } from "@/models/items/Item.interface";

export default createStore({
  state: {
    items: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
