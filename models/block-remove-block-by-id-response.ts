/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BlockRemoveBlockByIdResponseCreatedBy } from './block-remove-block-by-id-response-created-by';
import { BlockRemoveBlockByIdResponseLastEditedBy } from './block-remove-block-by-id-response-last-edited-by';
import { BlockRemoveBlockByIdResponseParagraph } from './block-remove-block-by-id-response-paragraph';
import { BlockRemoveBlockByIdResponseParent } from './block-remove-block-by-id-response-parent';

/**
 * 
 * @export
 * @interface BlockRemoveBlockByIdResponse
 */
export interface BlockRemoveBlockByIdResponse {
    /**
     * 
     * @type {string}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'id'?: string;
    /**
     * 
     * @type {BlockRemoveBlockByIdResponseParent}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'parent'?: BlockRemoveBlockByIdResponseParent;
    /**
     * 
     * @type {string}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'created_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'last_edited_time'?: string;
    /**
     * 
     * @type {BlockRemoveBlockByIdResponseCreatedBy}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'created_by'?: BlockRemoveBlockByIdResponseCreatedBy;
    /**
     * 
     * @type {BlockRemoveBlockByIdResponseLastEditedBy}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'last_edited_by'?: BlockRemoveBlockByIdResponseLastEditedBy;
    /**
     * 
     * @type {boolean}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'has_children'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'archived'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'type'?: string;
    /**
     * 
     * @type {BlockRemoveBlockByIdResponseParagraph}
     * @memberof BlockRemoveBlockByIdResponse
     */
    'paragraph'?: BlockRemoveBlockByIdResponseParagraph;
}
