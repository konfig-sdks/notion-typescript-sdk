/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BlockAppendChildrenResponseResultsInnerHeading2RichTextInner } from './block-append-children-response-results-inner-heading2-rich-text-inner';

/**
 * 
 * @export
 * @interface BlockAppendChildrenResponseResultsInnerHeading2
 */
export interface BlockAppendChildrenResponseResultsInnerHeading2 {
    /**
     * 
     * @type {Array<BlockAppendChildrenResponseResultsInnerHeading2RichTextInner>}
     * @memberof BlockAppendChildrenResponseResultsInnerHeading2
     */
    'rich_text'?: Array<BlockAppendChildrenResponseResultsInnerHeading2RichTextInner>;
    /**
     * 
     * @type {string}
     * @memberof BlockAppendChildrenResponseResultsInnerHeading2
     */
    'color'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BlockAppendChildrenResponseResultsInnerHeading2
     */
    'is_toggleable'?: boolean;
}

