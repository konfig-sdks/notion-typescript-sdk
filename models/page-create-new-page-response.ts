/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PageCreateNewPageResponseCover } from './page-create-new-page-response-cover';
import { PageCreateNewPageResponseCreatedBy } from './page-create-new-page-response-created-by';
import { PageCreateNewPageResponseIcon } from './page-create-new-page-response-icon';
import { PageCreateNewPageResponseLastEditedBy } from './page-create-new-page-response-last-edited-by';
import { PageCreateNewPageResponseParent } from './page-create-new-page-response-parent';
import { PageCreateNewPageResponseProperties } from './page-create-new-page-response-properties';

/**
 * 
 * @export
 * @interface PageCreateNewPageResponse
 */
export interface PageCreateNewPageResponse {
    /**
     * 
     * @type {string}
     * @memberof PageCreateNewPageResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageCreateNewPageResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageCreateNewPageResponse
     */
    'created_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageCreateNewPageResponse
     */
    'last_edited_time'?: string;
    /**
     * 
     * @type {PageCreateNewPageResponseCreatedBy}
     * @memberof PageCreateNewPageResponse
     */
    'created_by'?: PageCreateNewPageResponseCreatedBy;
    /**
     * 
     * @type {PageCreateNewPageResponseLastEditedBy}
     * @memberof PageCreateNewPageResponse
     */
    'last_edited_by'?: PageCreateNewPageResponseLastEditedBy;
    /**
     * 
     * @type {PageCreateNewPageResponseCover}
     * @memberof PageCreateNewPageResponse
     */
    'cover'?: PageCreateNewPageResponseCover;
    /**
     * 
     * @type {PageCreateNewPageResponseIcon}
     * @memberof PageCreateNewPageResponse
     */
    'icon'?: PageCreateNewPageResponseIcon;
    /**
     * 
     * @type {PageCreateNewPageResponseParent}
     * @memberof PageCreateNewPageResponse
     */
    'parent'?: PageCreateNewPageResponseParent;
    /**
     * 
     * @type {boolean}
     * @memberof PageCreateNewPageResponse
     */
    'archived'?: boolean;
    /**
     * 
     * @type {PageCreateNewPageResponseProperties}
     * @memberof PageCreateNewPageResponse
     */
    'properties'?: PageCreateNewPageResponseProperties;
    /**
     * 
     * @type {string}
     * @memberof PageCreateNewPageResponse
     */
    'url'?: string;
}

