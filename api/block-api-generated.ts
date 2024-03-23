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
import { BlockAppendChildrenRequest } from '../models';
// @ts-ignore
import { BlockAppendChildrenResponse } from '../models';
// @ts-ignore
import { BlockGetChildrenResponse } from '../models';
// @ts-ignore
import { BlockGetDetailsResponse } from '../models';
// @ts-ignore
import { BlockRemoveBlockByIdResponse } from '../models';
// @ts-ignore
import { BlockUpdateBlockByIdRequest } from '../models';
// @ts-ignore
import { BlockUpdateBlockByIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BlockApi - axios parameter creator
 * @export
 */
export const BlockApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Append block children
         * @param {string} blockId Identifier for a [block](ref:block). Also accepts a [page](ref:page) ID.
         * @param {string} notionVersion 
         * @param {BlockAppendChildrenRequest} [blockAppendChildrenRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appendChildren: async (blockId: string, notionVersion: string, blockAppendChildrenRequest?: BlockAppendChildrenRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockId' is not null or undefined
            assertParamExists('appendChildren', 'blockId', blockId)
            // verify required parameter 'notionVersion' is not null or undefined
            assertParamExists('appendChildren', 'notionVersion', notionVersion)
            const localVarPath = `/v1/blocks/{block_id}/children`
                .replace(`{${"block_id"}}`, encodeURIComponent(String(blockId !== undefined ? blockId : `-block_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (notionVersion != null) {
                localVarHeaderParameter['Notion-Version'] = String(notionVersion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: blockAppendChildrenRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/blocks/{block_id}/children',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(blockAppendChildrenRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve block children
         * @param {string} blockId Identifier for a [block](ref:block)
         * @param {string} notionVersion 
         * @param {string} [startCursor] If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.
         * @param {number} [pageSize] The number of items from the full list desired in the response. Maximum: 100
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChildren: async (blockId: string, notionVersion: string, startCursor?: string, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockId' is not null or undefined
            assertParamExists('getChildren', 'blockId', blockId)
            // verify required parameter 'notionVersion' is not null or undefined
            assertParamExists('getChildren', 'notionVersion', notionVersion)
            const localVarPath = `/v1/blocks/{block_id}/children`
                .replace(`{${"block_id"}}`, encodeURIComponent(String(blockId !== undefined ? blockId : `-block_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (startCursor !== undefined) {
                localVarQueryParameter['start_cursor'] = startCursor;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (notionVersion != null) {
                localVarHeaderParameter['Notion-Version'] = String(notionVersion);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/blocks/{block_id}/children',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve a block
         * @param {string} blockId Identifier for a Notion block
         * @param {string} [notionVersion] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (blockId: string, notionVersion?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockId' is not null or undefined
            assertParamExists('getDetails', 'blockId', blockId)
            const localVarPath = `/v1/blocks/{block_id}`
                .replace(`{${"block_id"}}`, encodeURIComponent(String(blockId !== undefined ? blockId : `-block_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (notionVersion != null) {
                localVarHeaderParameter['Notion-Version'] = String(notionVersion);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/blocks/{block_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a block
         * @param {string} blockId Identifier for a Notion block
         * @param {string} [notionVersion] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeBlockById: async (blockId: string, notionVersion?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockId' is not null or undefined
            assertParamExists('removeBlockById', 'blockId', blockId)
            const localVarPath = `/v1/blocks/{block_id}`
                .replace(`{${"block_id"}}`, encodeURIComponent(String(blockId !== undefined ? blockId : `-block_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (notionVersion != null) {
                localVarHeaderParameter['Notion-Version'] = String(notionVersion);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/blocks/{block_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a block
         * @param {string} blockId Identifier for a Notion block
         * @param {string} [notionVersion] 
         * @param {BlockUpdateBlockByIdRequest} [blockUpdateBlockByIdRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBlockById: async (blockId: string, notionVersion?: string, blockUpdateBlockByIdRequest?: BlockUpdateBlockByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockId' is not null or undefined
            assertParamExists('updateBlockById', 'blockId', blockId)
            const localVarPath = `/v1/blocks/{block_id}`
                .replace(`{${"block_id"}}`, encodeURIComponent(String(blockId !== undefined ? blockId : `-block_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (notionVersion != null) {
                localVarHeaderParameter['Notion-Version'] = String(notionVersion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: blockUpdateBlockByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/blocks/{block_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(blockUpdateBlockByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BlockApi - functional programming interface
 * @export
 */
export const BlockApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BlockApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Append block children
         * @param {BlockApiAppendChildrenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appendChildren(requestParameters: BlockApiAppendChildrenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockAppendChildrenResponse>> {
            const blockAppendChildrenRequest: BlockAppendChildrenRequest = {
                children: requestParameters.children,
                after: requestParameters.after
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.appendChildren(requestParameters.blockId, requestParameters.notionVersion, blockAppendChildrenRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve block children
         * @param {BlockApiGetChildrenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChildren(requestParameters: BlockApiGetChildrenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockGetChildrenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChildren(requestParameters.blockId, requestParameters.notionVersion, requestParameters.startCursor, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve a block
         * @param {BlockApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: BlockApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockGetDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.blockId, requestParameters.notionVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete a block
         * @param {BlockApiRemoveBlockByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeBlockById(requestParameters: BlockApiRemoveBlockByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockRemoveBlockByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeBlockById(requestParameters.blockId, requestParameters.notionVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a block
         * @param {BlockApiUpdateBlockByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBlockById(requestParameters: BlockApiUpdateBlockByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockUpdateBlockByIdResponse>> {
            const blockUpdateBlockByIdRequest: BlockUpdateBlockByIdRequest = {
                {type}: requestParameters.{type},
                archived: requestParameters.archived
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBlockById(requestParameters.blockId, requestParameters.notionVersion, blockUpdateBlockByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BlockApi - factory interface
 * @export
 */
export const BlockApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BlockApiFp(configuration)
    return {
        /**
         * 
         * @summary Append block children
         * @param {BlockApiAppendChildrenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appendChildren(requestParameters: BlockApiAppendChildrenRequest, options?: AxiosRequestConfig): AxiosPromise<BlockAppendChildrenResponse> {
            return localVarFp.appendChildren(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve block children
         * @param {BlockApiGetChildrenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChildren(requestParameters: BlockApiGetChildrenRequest, options?: AxiosRequestConfig): AxiosPromise<BlockGetChildrenResponse> {
            return localVarFp.getChildren(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve a block
         * @param {BlockApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: BlockApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<BlockGetDetailsResponse> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a block
         * @param {BlockApiRemoveBlockByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeBlockById(requestParameters: BlockApiRemoveBlockByIdRequest, options?: AxiosRequestConfig): AxiosPromise<BlockRemoveBlockByIdResponse> {
            return localVarFp.removeBlockById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a block
         * @param {BlockApiUpdateBlockByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBlockById(requestParameters: BlockApiUpdateBlockByIdRequest, options?: AxiosRequestConfig): AxiosPromise<BlockUpdateBlockByIdResponse> {
            return localVarFp.updateBlockById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for appendChildren operation in BlockApi.
 * @export
 * @interface BlockApiAppendChildrenRequest
 */
export type BlockApiAppendChildrenRequest = {
    
    /**
    * Identifier for a [block](ref:block). Also accepts a [page](ref:page) ID.
    * @type {string}
    * @memberof BlockApiAppendChildren
    */
    readonly blockId: string
    
    /**
    * 
    * @type {string}
    * @memberof BlockApiAppendChildren
    */
    readonly notionVersion: string
    
} & BlockAppendChildrenRequest

/**
 * Request parameters for getChildren operation in BlockApi.
 * @export
 * @interface BlockApiGetChildrenRequest
 */
export type BlockApiGetChildrenRequest = {
    
    /**
    * Identifier for a [block](ref:block)
    * @type {string}
    * @memberof BlockApiGetChildren
    */
    readonly blockId: string
    
    /**
    * 
    * @type {string}
    * @memberof BlockApiGetChildren
    */
    readonly notionVersion: string
    
    /**
    * If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.
    * @type {string}
    * @memberof BlockApiGetChildren
    */
    readonly startCursor?: string
    
    /**
    * The number of items from the full list desired in the response. Maximum: 100
    * @type {number}
    * @memberof BlockApiGetChildren
    */
    readonly pageSize?: number
    
}

/**
 * Request parameters for getDetails operation in BlockApi.
 * @export
 * @interface BlockApiGetDetailsRequest
 */
export type BlockApiGetDetailsRequest = {
    
    /**
    * Identifier for a Notion block
    * @type {string}
    * @memberof BlockApiGetDetails
    */
    readonly blockId: string
    
    /**
    * 
    * @type {string}
    * @memberof BlockApiGetDetails
    */
    readonly notionVersion?: string
    
}

/**
 * Request parameters for removeBlockById operation in BlockApi.
 * @export
 * @interface BlockApiRemoveBlockByIdRequest
 */
export type BlockApiRemoveBlockByIdRequest = {
    
    /**
    * Identifier for a Notion block
    * @type {string}
    * @memberof BlockApiRemoveBlockById
    */
    readonly blockId: string
    
    /**
    * 
    * @type {string}
    * @memberof BlockApiRemoveBlockById
    */
    readonly notionVersion?: string
    
}

/**
 * Request parameters for updateBlockById operation in BlockApi.
 * @export
 * @interface BlockApiUpdateBlockByIdRequest
 */
export type BlockApiUpdateBlockByIdRequest = {
    
    /**
    * Identifier for a Notion block
    * @type {string}
    * @memberof BlockApiUpdateBlockById
    */
    readonly blockId: string
    
    /**
    * 
    * @type {string}
    * @memberof BlockApiUpdateBlockById
    */
    readonly notionVersion?: string
    
} & BlockUpdateBlockByIdRequest

/**
 * BlockApiGenerated - object-oriented interface
 * @export
 * @class BlockApiGenerated
 * @extends {BaseAPI}
 */
export class BlockApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Append block children
     * @param {BlockApiAppendChildrenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiGenerated
     */
    public appendChildren(requestParameters: BlockApiAppendChildrenRequest, options?: AxiosRequestConfig) {
        return BlockApiFp(this.configuration).appendChildren(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve block children
     * @param {BlockApiGetChildrenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiGenerated
     */
    public getChildren(requestParameters: BlockApiGetChildrenRequest, options?: AxiosRequestConfig) {
        return BlockApiFp(this.configuration).getChildren(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve a block
     * @param {BlockApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiGenerated
     */
    public getDetails(requestParameters: BlockApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return BlockApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a block
     * @param {BlockApiRemoveBlockByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiGenerated
     */
    public removeBlockById(requestParameters: BlockApiRemoveBlockByIdRequest, options?: AxiosRequestConfig) {
        return BlockApiFp(this.configuration).removeBlockById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a block
     * @param {BlockApiUpdateBlockByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockApiGenerated
     */
    public updateBlockById(requestParameters: BlockApiUpdateBlockByIdRequest, options?: AxiosRequestConfig) {
        return BlockApiFp(this.configuration).updateBlockById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}