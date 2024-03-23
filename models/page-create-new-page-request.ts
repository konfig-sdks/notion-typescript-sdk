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
 * @interface PageCreateNewPageRequest
 */
export interface PageCreateNewPageRequest {
    /**
     * The parent page or database where the new page is inserted, represented as a JSON object with a `page_id` or `database_id` key, and the corresponding ID.
     * @type {string}
     * @memberof PageCreateNewPageRequest
     */
    'parent': string;
    /**
     * The values of the page’s properties. If the `parent` is a database, then the schema must match the parent database’s properties. If the `parent` is a page, then the only valid object key is `title`.
     * @type {string}
     * @memberof PageCreateNewPageRequest
     */
    'properties': string;
    /**
     * The content to be rendered on the new page, represented as an array of [block objects](https://developers.notion.com/reference/block).
     * @type {Array<string>}
     * @memberof PageCreateNewPageRequest
     */
    'children'?: Array<string>;
    /**
     * The icon of the new page. Either an [emoji object](https://developers.notion.com/reference/emoji-object) or an [external file object](https://developers.notion.com/reference/file-object)..
     * @type {string}
     * @memberof PageCreateNewPageRequest
     */
    'icon'?: string;
    /**
     * The cover image of the new page, represented as a [file object](https://developers.notion.com/reference/file-object).
     * @type {string}
     * @memberof PageCreateNewPageRequest
     */
    'cover'?: string;
}
