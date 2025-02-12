/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DatabaseGetDatabaseResponseCover } from './database-get-database-response-cover';
import { DatabaseGetDatabaseResponseDescriptionInner } from './database-get-database-response-description-inner';
import { DatabaseGetDatabaseResponseIcon } from './database-get-database-response-icon';
import { DatabaseGetDatabaseResponseParent } from './database-get-database-response-parent';
import { DatabaseGetDatabaseResponseProperties } from './database-get-database-response-properties';
import { DatabaseGetDatabaseResponseTitleInner } from './database-get-database-response-title-inner';

/**
 * 
 * @export
 * @interface DatabaseGetDatabaseResponse
 */
export interface DatabaseGetDatabaseResponse {
    /**
     * 
     * @type {Array<DatabaseGetDatabaseResponseTitleInner>}
     * @memberof DatabaseGetDatabaseResponse
     */
    'title'?: Array<DatabaseGetDatabaseResponseTitleInner>;
    /**
     * 
     * @type {Array<DatabaseGetDatabaseResponseDescriptionInner>}
     * @memberof DatabaseGetDatabaseResponse
     */
    'description'?: Array<DatabaseGetDatabaseResponseDescriptionInner>;
    /**
     * 
     * @type {string}
     * @memberof DatabaseGetDatabaseResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseGetDatabaseResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseGetDatabaseResponse
     */
    'created_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseGetDatabaseResponse
     */
    'last_edited_time'?: string;
    /**
     * 
     * @type {DatabaseGetDatabaseResponseIcon}
     * @memberof DatabaseGetDatabaseResponse
     */
    'icon'?: DatabaseGetDatabaseResponseIcon;
    /**
     * 
     * @type {DatabaseGetDatabaseResponseCover}
     * @memberof DatabaseGetDatabaseResponse
     */
    'cover'?: DatabaseGetDatabaseResponseCover;
    /**
     * 
     * @type {string}
     * @memberof DatabaseGetDatabaseResponse
     */
    'url'?: string;
    /**
     * 
     * @type {DatabaseGetDatabaseResponseProperties}
     * @memberof DatabaseGetDatabaseResponse
     */
    'properties'?: DatabaseGetDatabaseResponseProperties;
    /**
     * 
     * @type {DatabaseGetDatabaseResponseParent}
     * @memberof DatabaseGetDatabaseResponse
     */
    'parent'?: DatabaseGetDatabaseResponseParent;
    /**
     * 
     * @type {boolean}
     * @memberof DatabaseGetDatabaseResponse
     */
    'archived'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatabaseGetDatabaseResponse
     */
    'is_inline'?: boolean;
    /**
     * 
     * @type {any}
     * @memberof DatabaseGetDatabaseResponse
     */
    'public_url'?: any;
}

