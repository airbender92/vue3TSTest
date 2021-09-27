/*
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-27 18:38:27
 * @FilePath: \my-vue3-project\src\store\index.ts
 * @Description: file content
 */
import { createStore } from "vuex";
import { ItemInterface } from "@/models/items/Item.interface";
import { ItemsStateInterface } from "@/models/store/ItemsState.interface";
import apiClient from "@/api-client";

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
    selectItem(
      state: ItemsStateInterface,
      params: {
        id: number;
        selected: boolean;
      }
    ) {
      const { id, selected } = params;
      const item = state.items.find((o) => o.id === id);
      if (item) {
        item.selected = selected;
      }
    },
  },
  actions: {
    loadItems({ commit, state }) {
      commit("loadingItems");

      setTimeout(() => {
        apiClient.items.fetchItems().then((data: ItemInterface[]) => {
          commit("loadedItems", data);
        });
      }, 1000);
    },
    selectItem({ commit }, params: { id: number; selected: boolean }) {
      commit("selectItem", params);
    },
  },
  modules: {},
});
