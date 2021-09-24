/*
 * @Author: wangyunbo
 * @Date: 2021-09-24 14:40:28
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-24 14:53:08
 * @FilePath: \my-vue3-project\src\models\api-client\items\ItemsApiClient.model.ts
 * @Description: file content
 */
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

import { ItemsApiClientUrlsInterface } from "./ItemsApiClientUrls.interface";
import { ItemsApiClientInterface } from "./ItemsApiClient.interface";
import { ItemInterface } from "@/models/items/Item.interface";

export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly urls!: ItemsApiClientUrlsInterface;

  constructor(urls: ItemsApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchItems(): Promise<ItemInterface[]> {
    return new Promise<ItemInterface[]>((resolve) => {
      const url = this.urls.fetchItems;

      const options: AxiosRequestConfig = {
        headers: {},
      };

      axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as ItemInterface[]);
        })
        .catch((error: any) => {
          console.error("ItemsApiClient: HttpClient: Get: error", error);
        });
    });
  }
}
