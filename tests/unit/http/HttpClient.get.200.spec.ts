/*
 * @Author: wangyunbo
 * @Date: 2021-09-30 08:50:06
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-09-30 09:26:23
 * @FilePath: \my-vue3-project\tests\unit\http\HttpClient.get.200.spec.ts
 * @Description: file content
 */

import { expect } from "chai";
import sinon from "sinon";
import axios, { AxiosRequestConfig } from "axios";
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client";
import { MockedPromiseFactory } from "./MockedPromiseFactory";

const mockParams: HttpRequestParamsInterface = {
  url: "path/to/xxxx",
  requiresToken: false,
};

describe("HttpClient.get", () => {
  beforeAll(() => {
    const mockedRequestConfig = {
      headers: {},
    } as AxiosRequestConfig;

    const mockedPromise = MockedPromiseFactory({
      url: mockParams.url,
      statusCode: 200,
      statusText: "Success",
      requestConfig: mockedRequestConfig,
      data: "get completed",
      reject: false,
    });

    sinon
      .stub(axios, "get")
      .withArgs(mockParams.url, mockedRequestConfig)
      .returns(mockedPromise);
  });
  afterAll(() => {
    sinon.restore();
  });

  it("should succeed and return data", (done) => {
    HttpClient.get<string>(mockParams).then((response: string) => {
      expect(response).to.equal('get completed')
      done()
    });
  });
});
