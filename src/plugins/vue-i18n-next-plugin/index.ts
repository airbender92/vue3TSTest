/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 15:42:06
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 17:05:23
 * @FilePath: \my-vue3-project\src\plugins\vue-i18n-next-plugin\index.ts
 * @Description: file content
 */

import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";

interface LocalesDataInterface {
  messages: LocaleMessages<VueMessageType>;
}

const data: LocalesDataInterface = {
  messages: {
    "en-US": {
      welcome: "Welcome: this message is localized in English",
    },
    "it-IT": {
      welcome: "Benvenuti: this message is localized in Italian",
    },
    "fr-FR": {
      welcome: "Bienvenue: this message is localized in French",
    },
    "es-ES": {
      welcome: "Bienvenido: this message is localized in Spanish",
    },
    "zh-CN": {
      welcome: "恭喜发财，大吉大利",
    },
  },
};

export const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "en-US",
  messages: data.messages,
});
