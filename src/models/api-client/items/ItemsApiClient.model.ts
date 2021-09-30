/*
 * @Author: wangyunbo
 * @Date: 2021-09-24 14:40:28
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-30 09:37:31
 * @FilePath: \my-vue3-project\src\models\api-client\items\ItemsApiClient.model.ts
 * @Description: file content
 */
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client";

import { ItemsApiClientUrlsInterface } from "./ItemsApiClientUrls.interface";
import { ItemsApiClientInterface } from "./ItemsApiClient.interface";
import { ItemInterface } from "@/models/items/Item.interface";

export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface;

  constructor(urls: ItemsApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchItems(): Promise<ItemInterface[]> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchItems,
      requiresToken: false,
    };
    return HttpClient.get<ItemInterface[]>(getParameters);
  }
}
