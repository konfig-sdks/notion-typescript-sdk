/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface BlockAppendChildrenRequest
 */
export interface BlockAppendChildrenRequest {
    /**
     * Child content to append to a container block as an array of [block objects](ref:block)
     * @type {Array<any>}
     * @memberof BlockAppendChildrenRequest
     */
    'children': Array<any>;
    /**
     * The ID of the existing block that the new block should be appended after.
     * @type {string}
     * @memberof BlockAppendChildrenRequest
     */
    'after'?: string;
}

