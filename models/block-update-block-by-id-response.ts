/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BlockUpdateBlockByIdResponseCreatedBy } from './block-update-block-by-id-response-created-by';
import { BlockUpdateBlockByIdResponseHeading2 } from './block-update-block-by-id-response-heading2';
import { BlockUpdateBlockByIdResponseLastEditedBy } from './block-update-block-by-id-response-last-edited-by';
import { BlockUpdateBlockByIdResponseParent } from './block-update-block-by-id-response-parent';

/**
 * 
 * @export
 * @interface BlockUpdateBlockByIdResponse
 */
export interface BlockUpdateBlockByIdResponse {
    /**
     * 
     * @type {string}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'id'?: string;
    /**
     * 
     * @type {BlockUpdateBlockByIdResponseParent}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'parent'?: BlockUpdateBlockByIdResponseParent;
    /**
     * 
     * @type {string}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'created_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'last_edited_time'?: string;
    /**
     * 
     * @type {BlockUpdateBlockByIdResponseCreatedBy}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'created_by'?: BlockUpdateBlockByIdResponseCreatedBy;
    /**
     * 
     * @type {BlockUpdateBlockByIdResponseLastEditedBy}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'last_edited_by'?: BlockUpdateBlockByIdResponseLastEditedBy;
    /**
     * 
     * @type {boolean}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'has_children'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'archived'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'type'?: string;
    /**
     * 
     * @type {BlockUpdateBlockByIdResponseHeading2}
     * @memberof BlockUpdateBlockByIdResponse
     */
    'heading_2'?: BlockUpdateBlockByIdResponseHeading2;
}

