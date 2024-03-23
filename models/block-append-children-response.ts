/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BlockAppendChildrenResponseResultsInner } from './block-append-children-response-results-inner';

/**
 * 
 * @export
 * @interface BlockAppendChildrenResponse
 */
export interface BlockAppendChildrenResponse {
    /**
     * 
     * @type {string}
     * @memberof BlockAppendChildrenResponse
     */
    'object'?: string;
    /**
     * 
     * @type {Array<BlockAppendChildrenResponseResultsInner>}
     * @memberof BlockAppendChildrenResponse
     */
    'results'?: Array<BlockAppendChildrenResponseResultsInner>;
    /**
     * 
     * @type {any}
     * @memberof BlockAppendChildrenResponse
     */
    'next_cursor'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof BlockAppendChildrenResponse
     */
    'has_more'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BlockAppendChildrenResponse
     */
    'type'?: string;
    /**
     * 
     * @type {object}
     * @memberof BlockAppendChildrenResponse
     */
    'block'?: object;
}

