/*
 * @Author: wangyunbo
 * @Date: 2021-09-17 09:06:34
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-28 10:51:48
 * @FilePath: \my-vue3-project\src\shims-vue.d.ts
 * @Description: file content
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface process {
  env: {
    VUE_APP_API_CLIENT: string,
    VUE_APP_TOKEN_KEY: string
  }
}