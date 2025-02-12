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
 * @interface TokenGenerateAccessRequest
 */
export interface TokenGenerateAccessRequest {
    /**
     * A unique random code that Notion generates to authenticate with your service, generated when a user initiates the OAuth flow.
     * @type {string}
     * @memberof TokenGenerateAccessRequest
     */
    'code': string;
    /**
     * A constant string: \"authorization_code\".
     * @type {string}
     * @memberof TokenGenerateAccessRequest
     */
    'grant_type': string;
    /**
     * The `\"redirect_uri\"` that was provided in the OAuth Domain & URI section of the integration\'s Authorization settings. Do not include this field if a `\"redirect_uri\"` query param was not included in the Authorization URL provided to users. In most cases, this field is required.
     * @type {string}
     * @memberof TokenGenerateAccessRequest
     */
    'redirect_uri': string;
    /**
     * Required if and only when building [Link Preview](https://developers.notion.com/docs/link-previews) integrations (otherwise ignored). An object with `key` and `name` properties. `key` should be a unique identifier for the account. Notion uses the `key` to determine whether or not the user is re-connecting the same account. `name` should be some way for the user to know which account they used to authenticate with your service. If a user has authenticated Notion with your integration before and `key` is the same but `name` is different, then Notion updates the `name` associated with your integration.
     * @type {object}
     * @memberof TokenGenerateAccessRequest
     */
    'external_account'?: object;
}

