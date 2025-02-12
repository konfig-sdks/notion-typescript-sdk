/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface DatabaseUpdateDatabaseRequest
 */
export interface DatabaseUpdateDatabaseRequest {
    /**
     * An array of [rich text objects](https://developers.notion.com/reference/rich-text) that represents the title of the database that is displayed in the Notion UI. If omitted, then the database title remains unchanged.
     * @type {Array<any>}
     * @memberof DatabaseUpdateDatabaseRequest
     */
    'title'?: Array<any>;
    /**
     * An array of [rich text objects](https://developers.notion.com/reference/rich-text) that represents the description of the database that is displayed in the Notion UI. If omitted, then the database description remains unchanged.
     * @type {Array<any>}
     * @memberof DatabaseUpdateDatabaseRequest
     */
    'description'?: Array<any>;
    /**
     * The properties of a database to be changed in the request, in the form of a JSON object. If updating an existing property, then the keys are the names or IDs of the properties as they appear in Notion, and the values are [property schema objects](ref:property-schema-object). If adding a new property, then the key is the name of the new database property and the value is a [property schema object](ref:property-schema-object).
     * @type {string}
     * @memberof DatabaseUpdateDatabaseRequest
     */
    'properties'?: string;
}

