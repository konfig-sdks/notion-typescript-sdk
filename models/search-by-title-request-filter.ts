/*
Notion API

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A set of criteria, `value` and `property` keys, that limits the results to either only pages or only databases. Possible `value` values are `\"page\"` or `\"database\"`. The only supported `property` value is `\"object\"`.
 * @export
 * @interface SearchByTitleRequestFilter
 */
export interface SearchByTitleRequestFilter {
    /**
     * The value of the property to filter the results by.  Possible values for object type include `page` or `database`.  **Limitation**: Currently the only filter allowed is `object` which will filter by type of object (either `page` or `database`)
     * @type {string}
     * @memberof SearchByTitleRequestFilter
     */
    'value'?: string;
    /**
     * The name of the property to filter by. Currently the only property you can filter by is the object type.  Possible values include `object`.   Limitation: Currently the only filter allowed is `object` which will filter by type of object (either `page` or `database`)
     * @type {string}
     * @memberof SearchByTitleRequestFilter
     */
    'property'?: string;
}

