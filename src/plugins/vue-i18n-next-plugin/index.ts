/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 15:42:06
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-19 15:32:12
 * @FilePath: \my-vue3-project\src\plugins\vue-i18n-next-plugin\index.ts
 * @Description: file content
 */

import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";

interface LocalesDataInterface {
  messages: LocaleMessages<VueMessageType>;
}

const getLocalesData = (): LocalesDataInterface => {
  const files = (require as any).context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const localeData: LocalesDataInterface = {
    messages: {},
  };
  const keys: string[] = files.keys();
  keys.forEach((key: string) => {
    console.log("modelKey: ", key);
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    console.log("matched", matched);
    if (matched && matched.length > 1) {
      const localeId = matched[1];
      localeData.messages[localeId] = files(key).messages;
    }
  });
  return localeData;
};

const data = getLocalesData();
console.log("data", data);
export const i18n = createI18n({
  locale: "it-IT",
  fallbackLocale: "en-US",
  messages: data.messages,
});
