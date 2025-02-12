/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DatabaseExecuteQueryResponseResultsInnerPropertiesRecipesRelationInner } from './database-execute-query-response-results-inner-properties-recipes-relation-inner';

/**
 * 
 * @export
 * @interface DatabaseExecuteQueryResponseResultsInnerPropertiesRecipes
 */
export interface DatabaseExecuteQueryResponseResultsInnerPropertiesRecipes {
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesRecipes
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesRecipes
     */
    'type'?: string;
    /**
     * 
     * @type {Array<DatabaseExecuteQueryResponseResultsInnerPropertiesRecipesRelationInner>}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesRecipes
     */
    'relation'?: Array<DatabaseExecuteQueryResponseResultsInnerPropertiesRecipesRelationInner>;
    /**
     * 
     * @type {boolean}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesRecipes
     */
    'has_more'?: boolean;
}

