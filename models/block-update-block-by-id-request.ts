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
 * @interface BlockUpdateBlockByIdRequest
 */
export interface BlockUpdateBlockByIdRequest {
    /**
     * The [block object `type`](ref:block#block-object-keys) value with the properties to be updated. Currently only `text` (for supported block types) and `checked` (for `to_do` blocks) fields can be updated.
     * @type {object}
     * @memberof BlockUpdateBlockByIdRequest
     */
    '{type}'?: object;
    /**
     * Set to true to archive (delete) a block. Set to false to un-archive (restore) a block.
     * @type {boolean}
     * @memberof BlockUpdateBlockByIdRequest
     */
    'archived'?: boolean;
}

