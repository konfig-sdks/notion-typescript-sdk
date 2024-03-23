/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PageUpdatePropertiesResponseCover } from './page-update-properties-response-cover';
import { PageUpdatePropertiesResponseCreatedBy } from './page-update-properties-response-created-by';
import { PageUpdatePropertiesResponseIcon } from './page-update-properties-response-icon';
import { PageUpdatePropertiesResponseLastEditedBy } from './page-update-properties-response-last-edited-by';
import { PageUpdatePropertiesResponseParent } from './page-update-properties-response-parent';
import { PageUpdatePropertiesResponseProperties } from './page-update-properties-response-properties';

/**
 * 
 * @export
 * @interface PageUpdatePropertiesResponse
 */
export interface PageUpdatePropertiesResponse {
    /**
     * 
     * @type {string}
     * @memberof PageUpdatePropertiesResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageUpdatePropertiesResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageUpdatePropertiesResponse
     */
    'created_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageUpdatePropertiesResponse
     */
    'last_edited_time'?: string;
    /**
     * 
     * @type {PageUpdatePropertiesResponseCreatedBy}
     * @memberof PageUpdatePropertiesResponse
     */
    'created_by'?: PageUpdatePropertiesResponseCreatedBy;
    /**
     * 
     * @type {PageUpdatePropertiesResponseLastEditedBy}
     * @memberof PageUpdatePropertiesResponse
     */
    'last_edited_by'?: PageUpdatePropertiesResponseLastEditedBy;
    /**
     * 
     * @type {PageUpdatePropertiesResponseCover}
     * @memberof PageUpdatePropertiesResponse
     */
    'cover'?: PageUpdatePropertiesResponseCover;
    /**
     * 
     * @type {PageUpdatePropertiesResponseIcon}
     * @memberof PageUpdatePropertiesResponse
     */
    'icon'?: PageUpdatePropertiesResponseIcon;
    /**
     * 
     * @type {PageUpdatePropertiesResponseParent}
     * @memberof PageUpdatePropertiesResponse
     */
    'parent'?: PageUpdatePropertiesResponseParent;
    /**
     * 
     * @type {boolean}
     * @memberof PageUpdatePropertiesResponse
     */
    'archived'?: boolean;
    /**
     * 
     * @type {PageUpdatePropertiesResponseProperties}
     * @memberof PageUpdatePropertiesResponse
     */
    'properties'?: PageUpdatePropertiesResponseProperties;
    /**
     * 
     * @type {string}
     * @memberof PageUpdatePropertiesResponse
     */
    'url'?: string;
}

