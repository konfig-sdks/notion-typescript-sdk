/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  BlockApi,
  CommentApi,
  DatabaseApi,
  PageApi,
  SearchApi,
  TokenApi,
  UserApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { NotionCustom } from "./client-custom";

export class Notion extends NotionCustom {
  readonly block: BlockApi;
  readonly comment: CommentApi;
  readonly database: DatabaseApi;
  readonly page: PageApi;
  readonly search: SearchApi;
  readonly token: TokenApi;
  readonly user: UserApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.block = new BlockApi(configuration);
    this.comment = new CommentApi(configuration);
    this.database = new DatabaseApi(configuration);
    this.page = new PageApi(configuration);
    this.search = new SearchApi(configuration);
    this.token = new TokenApi(configuration);
    this.user = new UserApi(configuration);
  }

}