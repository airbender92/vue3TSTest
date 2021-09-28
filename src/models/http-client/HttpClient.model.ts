/*
 * @Author: wangyunbo
 * @Date: 2021-09-28 08:57:50
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-28 10:50:27
 * @FilePath: \my-vue3-project\src\models\http-client\HttpClient.model.ts
 * @Description: file content
 */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
import { HttpClientInterface } from "./HttpClient.interface";

export class HttpClientModel implements HttpClientInterface {
  private getToken(): string {
    const TOKEN_KEY =
      process.env && process.env.VUE_APP_TOKEN_KEY
        ? process.env.VUE_APP_TOKEN_KEY
        : "myapp-token";
    return localStorage.getItem(TOKEN_KEY) || "";
  }

  constructor() {
    // TODO:
  }
  get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters;
      const options: AxiosRequestConfig = {
        headers: {},
      };
      if (requiresToken) {
        const token = this.getToken();
        options.headers.RequestVerificationToken = token;
      }
      axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((response: AxiosResponse) => {
          console.info("-----------rejecting------------");
          reject(response);
        });
    });
  }
  post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload } = parameters;
      const options: AxiosRequestConfig = {
        headers: {},
      };
      if (requiresToken) {
        const token = this.getToken();
        options.headers.RequestVerificationToken = token;
      }
      axios
        .post(url, payload, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((response: AxiosResponse) => {
          reject(response);
        });
    });
  }
}
