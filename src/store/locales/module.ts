/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 17:20:52
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-11 09:01:33
 * @FilePath: \my-vue3-project\src\store\locales\module.ts
 * @Description: file content
 */

import { Module, MutationTree, ActionTree, GetterTree, Action } from "vuex";

import {
  MutationType,
  RootStateInterface,
  LocalesStateInterface,
} from "@/models/store";

import { initialLocalesState } from "./initialState";

import { i18n } from "@/plugins/vue-i18n-next-plugin";

export const mutations: MutationTree<LocalesStateInterface> = {
  selectLocale(state: LocalesStateInterface, localeId: string) {
    state.availableLocales.forEach((localeInfo) => {
      localeInfo.selected = localeInfo.locale === localeId;
      if (localeInfo.selected) {
        i18n.global.locale = localeInfo.locale;
      }
    });
  },
};

export const actions: ActionTree<LocalesStateInterface, RootStateInterface> = {
  selectLocale({ commit }, localeId: string) {
    commit(MutationType.locales.selectLocale, localeId);
  },
};

export const getters: GetterTree<LocalesStateInterface, RootStateInterface> =
  {};

const namespaced = true;
const state: LocalesStateInterface = initialLocalesState;

export const localesState: Module<LocalesStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
