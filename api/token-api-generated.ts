/* tslint:disable */
/* eslint-disable */
/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TokenGenerateAccess400Response } from '../models';
// @ts-ignore
import { TokenGenerateAccessRequest } from '../models';
// @ts-ignore
import { TokenGenerateAccessResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TokenApi - axios parameter creator
 * @export
 */
export const TokenApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates an access token that a third-party service can use to authenticate with Notion.
         * @summary Create a token
         * @param {TokenGenerateAccessRequest} [tokenGenerateAccessRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateAccess: async (tokenGenerateAccessRequest?: TokenGenerateAccessRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/oauth/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: tokenGenerateAccessRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/oauth/token',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(tokenGenerateAccessRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokenApi - functional programming interface
 * @export
 */
export const TokenApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TokenApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates an access token that a third-party service can use to authenticate with Notion.
         * @summary Create a token
         * @param {TokenApiGenerateAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateAccess(requestParameters: TokenApiGenerateAccessRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenGenerateAccessResponse>> {
            const tokenGenerateAccessRequest: TokenGenerateAccessRequest = {
                code: requestParameters.code,
                grant_type: requestParameters.grant_type,
                redirect_uri: requestParameters.redirect_uri,
                external_account: requestParameters.external_account
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateAccess(tokenGenerateAccessRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TokenApi - factory interface
 * @export
 */
export const TokenApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TokenApiFp(configuration)
    return {
        /**
         * Creates an access token that a third-party service can use to authenticate with Notion.
         * @summary Create a token
         * @param {TokenApiGenerateAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateAccess(requestParameters: TokenApiGenerateAccessRequest, options?: AxiosRequestConfig): AxiosPromise<TokenGenerateAccessResponse> {
            return localVarFp.generateAccess(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateAccess operation in TokenApi.
 * @export
 * @interface TokenApiGenerateAccessRequest
 */
export type TokenApiGenerateAccessRequest = {
    
} & TokenGenerateAccessRequest

/**
 * TokenApiGenerated - object-oriented interface
 * @export
 * @class TokenApiGenerated
 * @extends {BaseAPI}
 */
export class TokenApiGenerated extends BaseAPI {
    /**
     * Creates an access token that a third-party service can use to authenticate with Notion.
     * @summary Create a token
     * @param {TokenApiGenerateAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenApiGenerated
     */
    public generateAccess(requestParameters: TokenApiGenerateAccessRequest, options?: AxiosRequestConfig) {
        return TokenApiFp(this.configuration).generateAccess(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
