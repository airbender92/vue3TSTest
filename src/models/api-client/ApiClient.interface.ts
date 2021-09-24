/*
 * @Author: wangyunbo
 * @Date: 2021-09-24 14:34:35
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-24 14:38:55
 * @FilePath: \my-vue3-project\src\models\api-client\ApiClient.interface.ts
 * @Description: file content
 */

import { ItemsApiClientInterface } from "./items";

export interface ApiClientInterface {
  items: ItemsApiClientInterface;
}
