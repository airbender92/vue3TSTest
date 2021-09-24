/*
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-24 08:55:41
 * @FilePath: \my-vue3-project\src\store\index.ts
 * @Description: file content
 */
import { createStore } from "vuex";
import { ItemInterface } from "@/models/items/Item.interface";
import { ItemsStateInterface } from "@/models/store/ItemsState.interface";

const state: ItemsStateInterface = {
  loading: false,
  items: [],
};

export default createStore({
  state,
  mutations: {
    loadingItems(state: ItemsStateInterface) {
      (state.loading = true), (state.items = []);
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.items = items;
      state.loading = false;
    },
  },
  actions: {
    loadItems({ commit, state }) {
      commit("loadingItems");

      // mock some data
      const mockItems: ItemInterface[] = [
        {
          id: 1,
          name: "Item 1",
          selected: false,
        },
        {
          id: 2,
          name: "Item 2",
          selected: false,
        },
        {
          id: 3,
          name: "Item 3",
          selected: false,
        },
      ];

      setTimeout(() => {
        commit("loadedItems", mockItems);
      }, 1000);
    },
  },
  modules: {},
});
