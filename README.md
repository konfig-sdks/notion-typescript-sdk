<div align="left">

[![Visit Notion](./header.png)](https://developers.notion.com)

# [Notion](https://developers.notion.com)<a id="notion"></a>

Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`notion.block.appendChildren`](#notionblockappendchildren)
  * [`notion.block.getChildren`](#notionblockgetchildren)
  * [`notion.block.getDetails`](#notionblockgetdetails)
  * [`notion.block.removeBlockById`](#notionblockremoveblockbyid)
  * [`notion.block.updateBlockById`](#notionblockupdateblockbyid)
  * [`notion.comment.createNew`](#notioncommentcreatenew)
  * [`notion.comment.getList`](#notioncommentgetlist)
  * [`notion.database.createNewDatabase`](#notiondatabasecreatenewdatabase)
  * [`notion.database.executeQuery`](#notiondatabaseexecutequery)
  * [`notion.database.getDatabase`](#notiondatabasegetdatabase)
  * [`notion.database.updateDatabase`](#notiondatabaseupdatedatabase)
  * [`notion.page.createNewPage`](#notionpagecreatenewpage)
  * [`notion.page.getPage`](#notionpagegetpage)
  * [`notion.page.getPropertyItem`](#notionpagegetpropertyitem)
  * [`notion.page.updateProperties`](#notionpageupdateproperties)
  * [`notion.search.byTitle`](#notionsearchbytitle)
  * [`notion.token.generateAccess`](#notiontokengenerateaccess)
  * [`notion.user.getTokenBotUser`](#notionusergettokenbotuser)
  * [`notion.user.getUserById`](#notionusergetuserbyid)
  * [`notion.user.listAllUsers`](#notionuserlistallusers)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Notion&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Notion } from "notion-typescript-sdk";

const notion = new Notion({
  // Defining the base path is optional and defaults to https://api.notion.com
  // basePath: "https://api.notion.com",
  accessToken: "ACCESS_TOKEN",
});

const appendChildrenResponse = await notion.block.appendChildren({
  blockId: "blockId_example",
  NotionVersion: "2022-06-28",
  children: [null],
});

console.log(appendChildrenResponse);
```

## Reference<a id="reference"></a>


### `notion.block.appendChildren`<a id="notionblockappendchildren"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const appendChildrenResponse = await notion.block.appendChildren({
  blockId: "blockId_example",
  NotionVersion: "2022-06-28",
  children: [null],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### children: `any`<a id="children-any"></a>
                `any`[]

Child content to append to a container block as an array of [block objects](ref:block)

##### blockId: `string`<a id="blockid-string"></a>

Identifier for a [block](ref:block). Also accepts a [page](ref:page) ID.

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### after: `string`<a id="after-string"></a>

The ID of the existing block that the new block should be appended after.

#### 🔄 Return<a id="🔄-return"></a>

[BlockAppendChildrenResponse](./models/block-append-children-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/blocks/{block_id}/children` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.block.getChildren`<a id="notionblockgetchildren"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChildrenResponse = await notion.block.getChildren({
  blockId: "blockId_example",
  pageSize: 100,
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### blockId: `string`<a id="blockid-string"></a>

Identifier for a [block](ref:block)

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### startCursor: `string`<a id="startcursor-string"></a>

If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.

##### pageSize: `number`<a id="pagesize-number"></a>

The number of items from the full list desired in the response. Maximum: 100

#### 🔄 Return<a id="🔄-return"></a>

[BlockGetChildrenResponse](./models/block-get-children-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/blocks/{block_id}/children` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.block.getDetails`<a id="notionblockgetdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await notion.block.getDetails({
  blockId: "blockId_example",
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### blockId: `string`<a id="blockid-string"></a>

Identifier for a Notion block

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BlockGetDetailsResponse](./models/block-get-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/blocks/{block_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.block.removeBlockById`<a id="notionblockremoveblockbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeBlockByIdResponse = await notion.block.removeBlockById({
  blockId: "blockId_example",
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### blockId: `string`<a id="blockid-string"></a>

Identifier for a Notion block

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BlockRemoveBlockByIdResponse](./models/block-remove-block-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/blocks/{block_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.block.updateBlockById`<a id="notionblockupdateblockbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBlockByIdResponse = await notion.block.updateBlockById({
  blockId: "blockId_example",
  NotionVersion: "2022-06-28",
  archived: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### blockId: `string`<a id="blockid-string"></a>

Identifier for a Notion block

##### {type}: `object`<a id="type-object"></a>

The [block object `type`](ref:block#block-object-keys) value with the properties to be updated. Currently only `text` (for supported block types) and `checked` (for `to_do` blocks) fields can be updated.

##### archived: `boolean`<a id="archived-boolean"></a>

Set to true to archive (delete) a block. Set to false to un-archive (restore) a block.

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BlockUpdateBlockByIdResponse](./models/block-update-block-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/blocks/{block_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.comment.createNew`<a id="notioncommentcreatenew"></a>

Creates a comment in a page or existing discussion thread.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await notion.comment.createNew({
  NotionVersion: "2022-06-28",
  rich_text: "rich_text_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### rich_text: `string`<a id="rich_text-string"></a>

A [rich text object](ref:rich-text)

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### parent: `string`<a id="parent-string"></a>

A [page parent](/reference/database#page-parent). Either this or a discussion_id is required (not both)

##### discussion_id: `string`<a id="discussion_id-string"></a>

A UUID identifier for a discussion thread. Either this or a parent object is required (not both)

#### 🔄 Return<a id="🔄-return"></a>

[CommentCreateNewResponse](./models/comment-create-new-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.comment.getList`<a id="notioncommentgetlist"></a>

Retrieves a list of un-resolved [Comment objects](ref:comment-object) from a page or block.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await notion.comment.getList({
  NotionVersion: "2022-06-28",
  blockId: "blockId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### blockId: `string`<a id="blockid-string"></a>

Identifier for a Notion block or page

##### startCursor: `string`<a id="startcursor-string"></a>

If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.

##### pageSize: `number`<a id="pagesize-number"></a>

The number of items from the full list desired in the response. Maximum: 100

#### 🔄 Return<a id="🔄-return"></a>

[CommentGetListResponse](./models/comment-get-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.database.createNewDatabase`<a id="notiondatabasecreatenewdatabase"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDatabaseResponse = await notion.database.createNewDatabase({
  NotionVersion: "2022-06-28",
  parent: "parent_example",
  properties: "properties_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parent: `string`<a id="parent-string"></a>

A [page parent](/reference/database#page-parent)

##### properties: `string`<a id="properties-string"></a>

Property schema of database. The keys are the names of properties as they appear in Notion and the values are [property schema objects](https://developers.notion.com/reference/property-schema-object).

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### title: `any`<a id="title-any"></a>
             `any`[]

Title of database as it appears in Notion. An array of [rich text objects](ref:rich-text).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/databases` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.database.executeQuery`<a id="notiondatabaseexecutequery"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeQueryResponse = await notion.database.executeQuery({
  databaseId: "databaseId_example",
  NotionVersion: "2022-06-28",
  page_size: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Identifier for a Notion database.

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### filter: `string`<a id="filter-string"></a>

When supplied, limits which pages are returned based on the [filter conditions](ref:post-database-query-filter).

##### sorts: `any`<a id="sorts-any"></a>
             `any`[]

When supplied, orders the results based on the provided [sort criteria](ref:post-database-query-sort).

##### start_cursor: `string`<a id="start_cursor-string"></a>

When supplied, returns a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.

##### page_size: `number`<a id="page_size-number"></a>

The number of items from the full list desired in the response. Maximum: 100

##### filterProperties: `string`<a id="filterproperties-string"></a>

A list of page property value IDs associated with the database. Use this param to limit the response to a specific page property value or values for pages that meet the `filter` criteria.

#### 🔄 Return<a id="🔄-return"></a>

[DatabaseExecuteQueryResponse](./models/database-execute-query-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/databases/{database_id}/query` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.database.getDatabase`<a id="notiondatabasegetdatabase"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDatabaseResponse = await notion.database.getDatabase({
  databaseId: "databaseId_example",
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

An identifier for the Notion database.

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DatabaseGetDatabaseResponse](./models/database-get-database-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/databases/{database_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.database.updateDatabase`<a id="notiondatabaseupdatedatabase"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDatabaseResponse = await notion.database.updateDatabase({
  databaseId: "databaseId_example",
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

identifier for a Notion database

##### title: `any`<a id="title-any"></a>
             `any`[]

An array of [rich text objects](https://developers.notion.com/reference/rich-text) that represents the title of the database that is displayed in the Notion UI. If omitted, then the database title remains unchanged.

##### description: `any`<a id="description-any"></a>
                   `any`[]

An array of [rich text objects](https://developers.notion.com/reference/rich-text) that represents the description of the database that is displayed in the Notion UI. If omitted, then the database description remains unchanged.

##### properties: `string`<a id="properties-string"></a>

The properties of a database to be changed in the request, in the form of a JSON object. If updating an existing property, then the keys are the names or IDs of the properties as they appear in Notion, and the values are [property schema objects](ref:property-schema-object). If adding a new property, then the key is the name of the new database property and the value is a [property schema object](ref:property-schema-object).

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/databases/{database_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.page.createNewPage`<a id="notionpagecreatenewpage"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewPageResponse = await notion.page.createNewPage({
  NotionVersion: "2022-06-28",
  parent: "parent_example",
  properties: "properties_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parent: `string`<a id="parent-string"></a>

The parent page or database where the new page is inserted, represented as a JSON object with a `page_id` or `database_id` key, and the corresponding ID.

##### properties: `string`<a id="properties-string"></a>

The values of the page’s properties. If the `parent` is a database, then the schema must match the parent database’s properties. If the `parent` is a page, then the only valid object key is `title`.

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### children: `string`[]<a id="children-string"></a>

The content to be rendered on the new page, represented as an array of [block objects](https://developers.notion.com/reference/block).

##### icon: `string`<a id="icon-string"></a>

The icon of the new page. Either an [emoji object](https://developers.notion.com/reference/emoji-object) or an [external file object](https://developers.notion.com/reference/file-object)..

##### cover: `string`<a id="cover-string"></a>

The cover image of the new page, represented as a [file object](https://developers.notion.com/reference/file-object).

#### 🔄 Return<a id="🔄-return"></a>

[PageCreateNewPageResponse](./models/page-create-new-page-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/pages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.page.getPage`<a id="notionpagegetpage"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPageResponse = await notion.page.getPage({
  pageId: "pageId_example",
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

Identifier for a Notion page

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### filterProperties: `string`<a id="filterproperties-string"></a>

A list of page property value IDs associated with the page. Use this param to limit the response to a specific page property value or values. To retrieve multiple properties, specify each page property ID. For example: `?filter_properties=iAk8&filter_properties=b7dh`.

#### 🔄 Return<a id="🔄-return"></a>

[PageGetPageResponse](./models/page-get-page-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/pages/{page_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.page.getPropertyItem`<a id="notionpagegetpropertyitem"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPropertyItemResponse = await notion.page.getPropertyItem({
  pageId: "pageId_example",
  propertyId: "propertyId_example",
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

Identifier for a Notion page

##### propertyId: `string`<a id="propertyid-string"></a>

Identifier for a page [property](https://developers.notion.com/reference/page#all-property-values)

##### pageSize: `number`<a id="pagesize-number"></a>

For paginated properties. The max number of property item objects on a page. The default size is 100

##### startCursor: `string`<a id="startcursor-string"></a>

For paginated properties.

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/pages/{page_id}/properties/{property_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.page.updateProperties`<a id="notionpageupdateproperties"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePropertiesResponse = await notion.page.updateProperties({
  pageId: "pageId_example",
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

The identifier for the Notion page to be updated.

##### properties: `string`<a id="properties-string"></a>

The property values to update for the page. The keys are the names or IDs of the property and the values are property values. If a page property ID is not included, then it is not changed.

##### archived: `boolean`<a id="archived-boolean"></a>

Whether the page is archived (deleted). Set to true to archive a page. Set to false to un-archive (restore) a page.

##### icon: `string`<a id="icon-string"></a>

A page icon for the page. Supported types are [external file object](https://developers.notion.com/reference/file-object) or [emoji object](https://developers.notion.com/reference/emoji-object).

##### cover: `string`<a id="cover-string"></a>

A cover image for the page. Only [external file objects](https://developers.notion.com/reference/file-object) are supported.

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageUpdatePropertiesResponse](./models/page-update-properties-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/pages/{page_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.search.byTitle`<a id="notionsearchbytitle"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const byTitleResponse = await notion.search.byTitle({
  NotionVersion: "2022-06-28",
  page_size: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### query: `string`<a id="query-string"></a>

The text that the API compares page and database titles against.

##### sort: [`SearchByTitleRequestSort`](./models/search-by-title-request-sort.ts)<a id="sort-searchbytitlerequestsortmodelssearch-by-title-request-sortts"></a>

##### filter: [`SearchByTitleRequestFilter`](./models/search-by-title-request-filter.ts)<a id="filter-searchbytitlerequestfiltermodelssearch-by-title-request-filterts"></a>

##### start_cursor: `string`<a id="start_cursor-string"></a>

A `cursor` value returned in a previous response that If supplied, limits the response to results starting after the `cursor`. If not supplied, then the first page of results is returned. Refer to [pagination](https://developers.notion.com/reference/intro#pagination) for more details.

##### page_size: `number`<a id="page_size-number"></a>

The number of items from the full list to include in the response. Maximum: `100`.

#### 🔄 Return<a id="🔄-return"></a>

[SearchByTitleResponse](./models/search-by-title-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/search` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.token.generateAccess`<a id="notiontokengenerateaccess"></a>

Creates an access token that a third-party service can use to authenticate with Notion.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateAccessResponse = await notion.token.generateAccess({
  code: "code_example",
  grant_type: '"authorization_code"',
  redirect_uri: "redirect_uri_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

A unique random code that Notion generates to authenticate with your service, generated when a user initiates the OAuth flow.

##### grant_type: `string`<a id="grant_type-string"></a>

A constant string: \\\"authorization_code\\\".

##### redirect_uri: `string`<a id="redirect_uri-string"></a>

The `\\\"redirect_uri\\\"` that was provided in the OAuth Domain & URI section of the integration\\\'s Authorization settings. Do not include this field if a `\\\"redirect_uri\\\"` query param was not included in the Authorization URL provided to users. In most cases, this field is required.

##### external_account: `object`<a id="external_account-object"></a>

Required if and only when building [Link Preview](https://developers.notion.com/docs/link-previews) integrations (otherwise ignored). An object with `key` and `name` properties. `key` should be a unique identifier for the account. Notion uses the `key` to determine whether or not the user is re-connecting the same account. `name` should be some way for the user to know which account they used to authenticate with your service. If a user has authenticated Notion with your integration before and `key` is the same but `name` is different, then Notion updates the `name` associated with your integration.

#### 🔄 Return<a id="🔄-return"></a>

[TokenGenerateAccessResponse](./models/token-generate-access-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/oauth/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.user.getTokenBotUser`<a id="notionusergettokenbotuser"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTokenBotUserResponse = await notion.user.getTokenBotUser({
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserGetTokenBotUserResponse](./models/user-get-token-bot-user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/users/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.user.getUserById`<a id="notionusergetuserbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdResponse = await notion.user.getUserById({
  userId: "userId_example",
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Identifier for a Notion user

##### NotionVersion: `string`<a id="notionversion-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/users/{user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `notion.user.listAllUsers`<a id="notionuserlistallusers"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllUsersResponse = await notion.user.listAllUsers({
  pageSize: 100,
  NotionVersion: "2022-06-28",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### NotionVersion: `string`<a id="notionversion-string"></a>

##### startCursor: `string`<a id="startcursor-string"></a>

If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.

##### pageSize: `number`<a id="pagesize-number"></a>

The number of items from the full list desired in the response. Maximum: 100

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
