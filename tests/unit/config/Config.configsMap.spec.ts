/*
 * @Author: wangyunbo
 * @Date: 2021-10-29 09:38:26
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-10-29 10:37:56
 * @FilePath: \my-vue3-project\tests\unit\config\Config.configsMap.spec.ts
 * @Description: file content
 */
import { expect } from "chai";
import { configMap } from "@/config";

describe("configsMap", () => {
  it('instance should have "mock" key', () => {
    expect(configMap.has("mock")).to.equal(true);
  });
  it('instance should have "local" key', () => {
    expect(configMap.has("local")).to.equal(true);
  });
  it('instance should have "beta" key', () => {
    expect(configMap.has("beta")).to.equal(true);
  });
  it('instance should have "live" key', () => {
    expect(configMap.has("live")).to.equal(true);
  });
});
