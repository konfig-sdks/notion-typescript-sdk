/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BlockUpdateBlockByIdResponseHeading2RichTextInnerAnnotations } from './block-update-block-by-id-response-heading2-rich-text-inner-annotations';
import { BlockUpdateBlockByIdResponseHeading2RichTextInnerText } from './block-update-block-by-id-response-heading2-rich-text-inner-text';

/**
 * 
 * @export
 * @interface BlockUpdateBlockByIdResponseHeading2RichTextInner
 */
export interface BlockUpdateBlockByIdResponseHeading2RichTextInner {
    /**
     * 
     * @type {string}
     * @memberof BlockUpdateBlockByIdResponseHeading2RichTextInner
     */
    'type'?: string;
    /**
     * 
     * @type {BlockUpdateBlockByIdResponseHeading2RichTextInnerText}
     * @memberof BlockUpdateBlockByIdResponseHeading2RichTextInner
     */
    'text'?: BlockUpdateBlockByIdResponseHeading2RichTextInnerText;
    /**
     * 
     * @type {BlockUpdateBlockByIdResponseHeading2RichTextInnerAnnotations}
     * @memberof BlockUpdateBlockByIdResponseHeading2RichTextInner
     */
    'annotations'?: BlockUpdateBlockByIdResponseHeading2RichTextInnerAnnotations;
    /**
     * 
     * @type {string}
     * @memberof BlockUpdateBlockByIdResponseHeading2RichTextInner
     */
    'plain_text'?: string;
    /**
     * 
     * @type {any}
     * @memberof BlockUpdateBlockByIdResponseHeading2RichTextInner
     */
    'href'?: any;
}
