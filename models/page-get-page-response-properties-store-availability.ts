/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PageGetPageResponsePropertiesStoreAvailabilityMultiSelectInner } from './page-get-page-response-properties-store-availability-multi-select-inner';

/**
 * 
 * @export
 * @interface PageGetPageResponsePropertiesStoreAvailability
 */
export interface PageGetPageResponsePropertiesStoreAvailability {
    /**
     * 
     * @type {string}
     * @memberof PageGetPageResponsePropertiesStoreAvailability
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageGetPageResponsePropertiesStoreAvailability
     */
    'type'?: string;
    /**
     * 
     * @type {Array<PageGetPageResponsePropertiesStoreAvailabilityMultiSelectInner>}
     * @memberof PageGetPageResponsePropertiesStoreAvailability
     */
    'multi_select'?: Array<PageGetPageResponsePropertiesStoreAvailabilityMultiSelectInner>;
}

