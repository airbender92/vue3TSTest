/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 17:16:44
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-12 08:56:23
 * @FilePath: \my-vue3-project\src\store\locales\initialState.ts
 * @Description: file content
 */
import { LocalesStateInterface } from "@/models/store";

export const initialLocalesState: LocalesStateInterface = {
  availableLocales: [
    {
      name: "USA",
      locale: "en-US",
      flag: "us",
      selected: false,
    },
    {
      name: "Italy",
      locale: "it-IT",
      flag: "it",
      selected: true,
    },
    {
      name: "Spain",
      locale: "es-ES",
      flag: "es",
      selected: false,
    },
    {
      name: "France",
      locale: "fr-FR",
      flag: "fr",
      selected: false,
    },
    {
      name: "中文",
      locale: "zh-CN",
      flag: "cn",
      selected: false,
    },
  ],
};
