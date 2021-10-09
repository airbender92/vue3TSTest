/*
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 10:03:57
 * @FilePath: \my-vue3-project\src\main.ts
 * @Description: file content
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { rootStore } from "./store";

createApp(App).use(rootStore).use(router).mount("#app");
