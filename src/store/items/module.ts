/*
 * @Author: wangyunbo
 * @Date: 2021-10-08 09:58:06
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 09:27:36
 * @FilePath: \my-vue3-project\src\store\items\index.ts
 * @Description: file content
 */

import { Module, MutationTree, ActionTree, GetterTree } from "vuex";

import {
  MutationType,
  RootStateInterface,
  ItemsStateInterface,
} from "@/models/store";

import { initialItemsState } from "./initialState";

import { ItemInterface } from "@/models/items/Item.interface";

import apiClient from "@/api-client";

export const mutations: MutationTree<ItemsStateInterface> = {
  loadingItems(state: ItemsStateInterface) {
    state.loading = true;
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
};

export const actions: ActionTree<ItemsStateInterface, RootStateInterface> = {
  loadItems({ commit }) {
    commit(MutationType.items.loadingItems);
    setTimeout(() => {
      apiClient.items.fetchItems().then((data: ItemInterface[]) => {
        commit(MutationType.items.loadedItems, data);
      });
    }, 1000);
  },
  selectItem({ commit }, params: { id: number; selected: boolean }) {
    commit(MutationType.items.selectItem, params);
  },
};

export const getters: GetterTree<ItemsStateInterface, RootStateInterface> = {};

const namespaced = true;
const state: ItemsStateInterface = initialItemsState;

export const itemsState: Module<ItemsStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
