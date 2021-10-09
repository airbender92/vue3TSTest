/*
 * @Author: wangyunbo
 * @Date: 2021-10-09 17:09:03
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-09 18:14:16
 * @FilePath: \my-vue3-project\src\models\store\locales\LocalesState.interface.ts
 * @Description: file content
 */
import { LocalInfoInterface } from "@/models/localization/LocaleInfo.interface";

export interface LocalesStateInterface {
  availableLocales: LocalInfoInterface[];
}
