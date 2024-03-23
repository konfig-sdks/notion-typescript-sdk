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
import { UserGetTokenBotUserResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieve your token\'s bot user
         * @param {string} notionVersion 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokenBotUser: async (notionVersion: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'notionVersion' is not null or undefined
            assertParamExists('getTokenBotUser', 'notionVersion', notionVersion)
            const localVarPath = `/v1/users/me`;
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
                pathTemplate: '/v1/users/me',
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
         * @summary Retrieve a user
         * @param {string} userId Identifier for a Notion user
         * @param {string} notionVersion 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserById: async (userId: string, notionVersion: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUserById', 'userId', userId)
            // verify required parameter 'notionVersion' is not null or undefined
            assertParamExists('getUserById', 'notionVersion', notionVersion)
            const localVarPath = `/v1/users/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-user_id-`)));
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
                pathTemplate: '/v1/users/{user_id}',
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
         * @summary List all users
         * @param {string} notionVersion 
         * @param {string} [startCursor] If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.
         * @param {number} [pageSize] The number of items from the full list desired in the response. Maximum: 100
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllUsers: async (notionVersion: string, startCursor?: string, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'notionVersion' is not null or undefined
            assertParamExists('listAllUsers', 'notionVersion', notionVersion)
            const localVarPath = `/v1/users`;
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
                pathTemplate: '/v1/users',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieve your token\'s bot user
         * @param {UserApiGetTokenBotUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTokenBotUser(requestParameters: UserApiGetTokenBotUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserGetTokenBotUserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokenBotUser(requestParameters.notionVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve a user
         * @param {UserApiGetUserByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserById(requestParameters: UserApiGetUserByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserById(requestParameters.userId, requestParameters.notionVersion, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List all users
         * @param {UserApiListAllUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllUsers(requestParameters: UserApiListAllUsersRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllUsers(requestParameters.notionVersion, requestParameters.startCursor, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieve your token\'s bot user
         * @param {UserApiGetTokenBotUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokenBotUser(requestParameters: UserApiGetTokenBotUserRequest, options?: AxiosRequestConfig): AxiosPromise<UserGetTokenBotUserResponse> {
            return localVarFp.getTokenBotUser(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve a user
         * @param {UserApiGetUserByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserById(requestParameters: UserApiGetUserByIdRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.getUserById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List all users
         * @param {UserApiListAllUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllUsers(requestParameters: UserApiListAllUsersRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.listAllUsers(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getTokenBotUser operation in UserApi.
 * @export
 * @interface UserApiGetTokenBotUserRequest
 */
export type UserApiGetTokenBotUserRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof UserApiGetTokenBotUser
    */
    readonly notionVersion: string
    
}

/**
 * Request parameters for getUserById operation in UserApi.
 * @export
 * @interface UserApiGetUserByIdRequest
 */
export type UserApiGetUserByIdRequest = {
    
    /**
    * Identifier for a Notion user
    * @type {string}
    * @memberof UserApiGetUserById
    */
    readonly userId: string
    
    /**
    * 
    * @type {string}
    * @memberof UserApiGetUserById
    */
    readonly notionVersion: string
    
}

/**
 * Request parameters for listAllUsers operation in UserApi.
 * @export
 * @interface UserApiListAllUsersRequest
 */
export type UserApiListAllUsersRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof UserApiListAllUsers
    */
    readonly notionVersion: string
    
    /**
    * If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.
    * @type {string}
    * @memberof UserApiListAllUsers
    */
    readonly startCursor?: string
    
    /**
    * The number of items from the full list desired in the response. Maximum: 100
    * @type {number}
    * @memberof UserApiListAllUsers
    */
    readonly pageSize?: number
    
}

/**
 * UserApiGenerated - object-oriented interface
 * @export
 * @class UserApiGenerated
 * @extends {BaseAPI}
 */
export class UserApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Retrieve your token\'s bot user
     * @param {UserApiGetTokenBotUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public getTokenBotUser(requestParameters: UserApiGetTokenBotUserRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getTokenBotUser(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve a user
     * @param {UserApiGetUserByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public getUserById(requestParameters: UserApiGetUserByIdRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List all users
     * @param {UserApiListAllUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public listAllUsers(requestParameters: UserApiListAllUsersRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).listAllUsers(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
