/*
 * @Author: wangyunbo
 * @Date: 2021-10-29 09:04:46
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 09:36:42
 * @FilePath: \my-vue3-project\src\config\index.ts
 * @Description: file content
 */
import { ConfigInterface } from "./Config.interface";

import configMock from "./config-files/mock.json";
import configLocal from "./config-files/local.json";
import configBeta from "./config-files/beta.json";
import configLive from "./config-files/live.json";

let env = "mock";
if (process.env && process.env.VUE_APP_CONFIG) {
  env = process.env.VUE_APP_CONFIG.trim().toLowerCase();
}

export const configMap: Map<string, ConfigInterface> = new Map<
  string,
  ConfigInterface
>([
  ["mock", configMock],
  ["local", configLocal],
  ["beta", configBeta],
  ["live", configLive],
]);

if (!configMap.has(env)) {
  throw Error(`Could not find config for VUE_APP_CONFIG key "${env}"`);
}

export const config: ConfigInterface = configMap.get(env) as ConfigInterface;
