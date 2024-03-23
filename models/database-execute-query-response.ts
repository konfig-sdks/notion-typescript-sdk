/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DatabaseExecuteQueryResponseResultsInner } from './database-execute-query-response-results-inner';

/**
 * 
 * @export
 * @interface DatabaseExecuteQueryResponse
 */
export interface DatabaseExecuteQueryResponse {
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponse
     */
    'object'?: string;
    /**
     * 
     * @type {Array<DatabaseExecuteQueryResponseResultsInner>}
     * @memberof DatabaseExecuteQueryResponse
     */
    'results'?: Array<DatabaseExecuteQueryResponseResultsInner>;
    /**
     * 
     * @type {any}
     * @memberof DatabaseExecuteQueryResponse
     */
    'next_cursor'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof DatabaseExecuteQueryResponse
     */
    'has_more'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponse
     */
    'type'?: string;
    /**
     * 
     * @type {object}
     * @memberof DatabaseExecuteQueryResponse
     */
    'page_or_database'?: object;
}
