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
 * @interface CommentCreateNewRequest
 */
export interface CommentCreateNewRequest {
    /**
     * A [page parent](/reference/database#page-parent). Either this or a discussion_id is required (not both)
     * @type {string}
     * @memberof CommentCreateNewRequest
     */
    'parent'?: string;
    /**
     * A UUID identifier for a discussion thread. Either this or a parent object is required (not both)
     * @type {string}
     * @memberof CommentCreateNewRequest
     */
    'discussion_id'?: string;
    /**
     * A [rich text object](ref:rich-text)
     * @type {string}
     * @memberof CommentCreateNewRequest
     */
    'rich_text': string;
}
