/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DatabaseExecuteQueryResponseResultsInnerPropertiesStoreAvailabilityMultiSelectInner } from './database-execute-query-response-results-inner-properties-store-availability-multi-select-inner';

/**
 * 
 * @export
 * @interface DatabaseExecuteQueryResponseResultsInnerPropertiesStoreAvailability
 */
export interface DatabaseExecuteQueryResponseResultsInnerPropertiesStoreAvailability {
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesStoreAvailability
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesStoreAvailability
     */
    'type'?: string;
    /**
     * 
     * @type {Array<DatabaseExecuteQueryResponseResultsInnerPropertiesStoreAvailabilityMultiSelectInner>}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesStoreAvailability
     */
    'multi_select'?: Array<DatabaseExecuteQueryResponseResultsInnerPropertiesStoreAvailabilityMultiSelectInner>;
}

