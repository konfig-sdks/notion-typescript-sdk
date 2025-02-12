/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DatabaseExecuteQueryResponseResultsInnerPropertiesFoodGroupSelect } from './database-execute-query-response-results-inner-properties-food-group-select';

/**
 * 
 * @export
 * @interface DatabaseExecuteQueryResponseResultsInnerPropertiesFoodGroup
 */
export interface DatabaseExecuteQueryResponseResultsInnerPropertiesFoodGroup {
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesFoodGroup
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesFoodGroup
     */
    'type'?: string;
    /**
     * 
     * @type {DatabaseExecuteQueryResponseResultsInnerPropertiesFoodGroupSelect}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesFoodGroup
     */
    'select'?: DatabaseExecuteQueryResponseResultsInnerPropertiesFoodGroupSelect;
}

