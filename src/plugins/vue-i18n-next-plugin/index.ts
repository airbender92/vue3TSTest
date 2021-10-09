/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 15:42:06
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 15:45:12
 * @FilePath: \my-vue3-project\src\plugins\vue-i18n-next-plugin\index.ts
 * @Description: file content
 */

import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";

interface LocalesDataInterface {
  messages: LocaleMessages<VueMessageType>;
}
