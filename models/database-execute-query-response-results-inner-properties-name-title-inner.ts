/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInnerAnnotations } from './database-execute-query-response-results-inner-properties-name-title-inner-annotations';
import { DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInnerText } from './database-execute-query-response-results-inner-properties-name-title-inner-text';

/**
 * 
 * @export
 * @interface DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInner
 */
export interface DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInner {
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInner
     */
    'type'?: string;
    /**
     * 
     * @type {DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInnerText}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInner
     */
    'text'?: DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInnerText;
    /**
     * 
     * @type {DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInnerAnnotations}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInner
     */
    'annotations'?: DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInnerAnnotations;
    /**
     * 
     * @type {string}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInner
     */
    'plain_text'?: string;
    /**
     * 
     * @type {any}
     * @memberof DatabaseExecuteQueryResponseResultsInnerPropertiesNameTitleInner
     */
    'href'?: any;
}

