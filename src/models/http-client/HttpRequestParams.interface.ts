/*
 * @Author: wangyunbo
 * @Date: 2021-09-28 08:58:12
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-28 09:00:14
 * @FilePath: \my-vue3-project\src\models\http-client\HttpRequestParams.interface.ts
 * @Description: file content
 */

export interface HttpRequestParamsInterface {
  url: string;
  requiresToken: boolean;
  payload?: any;
}
