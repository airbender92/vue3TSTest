/*
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 11:13:17
 * @FilePath: \my-vue3-project\src\main.ts
 * @Description: file content
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { rootStore } from "./store";
import { i18n } from "./plugins/vue-i18n-next-plugin";
import { FlagIconsScss } from "@/plugins/flags-icons";
import { MyAppScss } from "@/plugins/myapp-scss";

createApp(App)
  .use(rootStore)
  .use(router)
  .use(i18n)
  .use(MyAppScss)
  .use(FlagIconsScss)
  .mount("#app");
