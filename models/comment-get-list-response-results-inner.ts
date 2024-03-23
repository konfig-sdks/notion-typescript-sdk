/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CommentGetListResponseResultsInnerCreatedBy } from './comment-get-list-response-results-inner-created-by';
import { CommentGetListResponseResultsInnerParent } from './comment-get-list-response-results-inner-parent';
import { CommentGetListResponseResultsInnerRichTextInner } from './comment-get-list-response-results-inner-rich-text-inner';

/**
 * 
 * @export
 * @interface CommentGetListResponseResultsInner
 */
export interface CommentGetListResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof CommentGetListResponseResultsInner
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentGetListResponseResultsInner
     */
    'id'?: string;
    /**
     * 
     * @type {CommentGetListResponseResultsInnerParent}
     * @memberof CommentGetListResponseResultsInner
     */
    'parent'?: CommentGetListResponseResultsInnerParent;
    /**
     * 
     * @type {string}
     * @memberof CommentGetListResponseResultsInner
     */
    'discussion_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentGetListResponseResultsInner
     */
    'created_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentGetListResponseResultsInner
     */
    'last_edited_time'?: string;
    /**
     * 
     * @type {CommentGetListResponseResultsInnerCreatedBy}
     * @memberof CommentGetListResponseResultsInner
     */
    'created_by'?: CommentGetListResponseResultsInnerCreatedBy;
    /**
     * 
     * @type {Array<CommentGetListResponseResultsInnerRichTextInner>}
     * @memberof CommentGetListResponseResultsInner
     */
    'rich_text'?: Array<CommentGetListResponseResultsInnerRichTextInner>;
}

