/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PageGetPageResponsePropertiesResponsiblePersonPeopleInnerPerson } from './page-get-page-response-properties-responsible-person-people-inner-person';

/**
 * 
 * @export
 * @interface PageGetPageResponsePropertiesResponsiblePersonPeopleInner
 */
export interface PageGetPageResponsePropertiesResponsiblePersonPeopleInner {
    /**
     * 
     * @type {string}
     * @memberof PageGetPageResponsePropertiesResponsiblePersonPeopleInner
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageGetPageResponsePropertiesResponsiblePersonPeopleInner
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageGetPageResponsePropertiesResponsiblePersonPeopleInner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageGetPageResponsePropertiesResponsiblePersonPeopleInner
     */
    'avatar_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof PageGetPageResponsePropertiesResponsiblePersonPeopleInner
     */
    'type'?: string;
    /**
     * 
     * @type {PageGetPageResponsePropertiesResponsiblePersonPeopleInnerPerson}
     * @memberof PageGetPageResponsePropertiesResponsiblePersonPeopleInner
     */
    'person'?: PageGetPageResponsePropertiesResponsiblePersonPeopleInnerPerson;
}
