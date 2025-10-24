# AccountMembersApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteMember**](#deletemember) | **DELETE** /api/v2/members/{id} | Delete account member|
|[**getMember**](#getmember) | **GET** /api/v2/members/{id} | Get account member|
|[**getMembers**](#getmembers) | **GET** /api/v2/members | List account members|
|[**patchMember**](#patchmember) | **PATCH** /api/v2/members/{id} | Modify an account member|
|[**patchMembers**](#patchmembers) | **PATCH** /api/v2/members | Modify account members|
|[**postMemberTeams**](#postmemberteams) | **POST** /api/v2/members/{id}/teams | Add a member to teams|
|[**postMembers**](#postmembers) | **POST** /api/v2/members | Invite new members|

# **deleteMember**
> deleteMember()

Delete a single account member by ID. Requests to delete account members will not work if SCIM is enabled for the account.

### Example

```typescript
import {
    AccountMembersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountMembersApi(configuration);

let id: string; //The member ID (default to undefined)

const { status, data } = await apiInstance.deleteMember(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The member ID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Action succeeded |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMember**
> Member getMember()

Get a single account member by member ID.  `me` is a reserved value for the `id` parameter that returns the caller\'s member information.  ### Expanding the member response LaunchDarkly supports one field for expanding the \"Get member\" response. By default, this field is **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:  * `roleAttributes` includes a list of the role attributes that you have assigned to the member.  For example, `expand=roleAttributes` includes `roleAttributes` field in the response. 

### Example

```typescript
import {
    AccountMembersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountMembersApi(configuration);

let id: string; //The member ID (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. (optional) (default to undefined)

const { status, data } = await apiInstance.getMember(
    id,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The member ID | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. | (optional) defaults to undefined|


### Return type

**Member**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Member response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMembers**
> Members getMembers()

Return a list of account members.  By default, this returns the first 20 members. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links are not present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page.  ### Filtering members  LaunchDarkly supports the following fields for filters:  - `query` is a string that matches against the members\' emails and names. It is not case sensitive. - `role` is a `|` separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, `Owner` counts as `Admin`. - `id` is a `|` separated list of member IDs. It filters the list to members who match any of the IDs in the list. - `email` is a `|` separated list of member emails. It filters the list to members who match any of the emails in the list. - `team` is a string that matches against the key of the teams the members belong to. It is not case sensitive. - `noteam` is a boolean that filters the list of members who are not on a team if true and members on a team if false. - `lastSeen` is a JSON object in one of the following formats:   - `{\"never\": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - `{\"noData\": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - `{\"before\": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds. - `accessCheck` is a string that represents a specific action on a specific resource and is in the format `<ActionSpecifier>:<ResourceSpecifier>`. It filters the list to members who have the ability to perform that action on that resource. Note: `accessCheck` is only supported in API version `20220603` and earlier. To learn more, read [Versioning](https://launchdarkly.com/docs/api#versioning).   - For example, the filter `accessCheck:createApprovalRequest:proj/default:env/test:flag/alternate-page` matches members with the ability to create an approval request for the `alternate-page` flag in the `test` environment of the `default` project.   - Wildcard and tag filters are not supported when filtering for access.  For example, the filter `query:abc,role:admin|customrole` matches members with the string `abc` in their email or name, ignoring case, who also are either an `Owner` or `Admin` or have the custom role `customrole`.  ### Sorting members  LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:  - `displayName` sorts by first + last name, using the member\'s email if no name is set. - `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never been seen or have no data the oldest.  ### Expanding the members response LaunchDarkly supports two fields for expanding the \"List members\" response. By default, these fields are **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:  * `customRoles` includes a list of the roles that you have assigned to the member. * `roleAttributes` includes a list of the role attributes that you have assigned to the member.  For example, `expand=roleAttributes` includes `roleAttributes` field in the response. 

### Example

```typescript
import {
    AccountMembersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountMembersApi(configuration);

let limit: number; //The number of members to return in the response. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let filter: string; //A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above. (optional) (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. (optional) (default to undefined)
let sort: string; //A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. (optional) (default to undefined)

const { status, data } = await apiInstance.getMembers(
    limit,
    offset,
    filter,
    expand,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | The number of members to return in the response. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained above. | (optional) defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. | (optional) defaults to undefined|
| **sort** | [**string**] | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. | (optional) defaults to undefined|


### Return type

**Members**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Members collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchMember**
> Member patchMember(patchOperation)

 Update a single account member. Updating a member uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).  To update fields in the account member object that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array. For example, to add a new custom role to a member, use the following request body:  ```   [     {       \"op\": \"add\",       \"path\": \"/customRoles/0\",       \"value\": \"some-role-id\"     }   ] ```  You can update only an account member\'s role or custom role using a JSON patch. Members can update their own names and email addresses though the LaunchDarkly UI.  When SAML SSO or SCIM is enabled for the account, account members are managed in the Identity Provider (IdP). Requests to update account members will succeed, but the IdP will override the update shortly afterwards. 

### Example

```typescript
import {
    AccountMembersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountMembersApi(configuration);

let id: string; //The member ID (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchMember(
    id,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **id** | [**string**] | The member ID | defaults to undefined|


### Return type

**Member**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Member response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchMembers**
> BulkEditMembersRep patchMembers(membersPatchInput)

> ### Full use of this API resource is an Enterprise feature > > The ability to perform a partial update to multiple members is available to customers on an Enterprise plan. If you are on another plan, you can update members individually. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).  Perform a partial update to multiple members. Updating members uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instructions for updating members.  <details> <summary>Click to expand instructions for <strong>updating members</strong></summary>  #### replaceMembersRoles  Replaces the roles of the specified members. This also removes all custom roles assigned to the specified members.  ##### Parameters  - `value`: The new role. Must be a valid [base role](https://launchdarkly.com/docs/home/getting-started/vocabulary#base-role). To learn more, read [Roles](https://launchdarkly.com/docs/home/account/roles). - `memberIDs`: List of member IDs.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"replaceMembersRoles\",     \"value\": \"reader\",     \"memberIDs\": [       \"1234a56b7c89d012345e678f\",       \"507f1f77bcf86cd799439011\"     ]   }] } ```  #### replaceAllMembersRoles  Replaces the roles of all members. This also removes all custom roles assigned to the specified members.  Members that match any of the filters are **excluded** from the update.  ##### Parameters  - `value`: The new role. Must be a valid [base role](https://launchdarkly.com/docs/home/getting-started/vocabulary#base-role). To learn more, read [Roles](https://launchdarkly.com/docs/home/account/roles). - `filterLastSeen`: (Optional) A JSON object with one of the following formats:   - `{\"never\": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - `{\"noData\": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - `{\"before\": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds. - `filterQuery`: (Optional) A string that matches against the members\' emails and names. It is not case sensitive. - `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`. - `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive. - `ignoredMemberIDs`: (Optional) A list of member IDs.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"replaceAllMembersRoles\",     \"value\": \"reader\",     \"filterLastSeen\": { \"never\": true }   }] } ```  #### replaceMembersCustomRoles  Replaces the custom roles of the specified members.  ##### Parameters  - `values`: List of new custom roles. Must be a valid custom role key or ID. - `memberIDs`: List of member IDs.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"replaceMembersCustomRoles\",     \"values\": [ \"example-custom-role\" ],     \"memberIDs\": [       \"1234a56b7c89d012345e678f\",       \"507f1f77bcf86cd799439011\"     ]   }] } ```  #### replaceAllMembersCustomRoles  Replaces the custom roles of all members. Members that match any of the filters are **excluded** from the update.  ##### Parameters  - `values`: List of new roles. Must be a valid custom role key or ID. - `filterLastSeen`: (Optional) A JSON object with one of the following formats:   - `{\"never\": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.   - `{\"noData\": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.   - `{\"before\": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds. - `filterQuery`: (Optional) A string that matches against the members\' emails and names. It is not case sensitive. - `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`. - `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive. - `ignoredMemberIDs`: (Optional) A list of member IDs.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"replaceAllMembersCustomRoles\",     \"values\": [ \"example-custom-role\" ],     \"filterLastSeen\": { \"never\": true }   }] } ```  #### replaceMembersRoleAttributes  Replaces the role attributes of the specified members.  ##### Parameters  - `value`: Map of role attribute keys to lists of values. - `memberIDs`: List of member IDs.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"replaceMembersRoleAttributes\",     \"value\": {       \"myRoleProjectKey\": [\"mobile\", \"web\"],       \"myRoleEnvironmentKey\": [\"production\"]     },     \"memberIDs\": [       \"1234a56b7c89d012345e678f\",       \"507f1f77bcf86cd799439011\"     ]   }] } ```  </details> 

### Example

```typescript
import {
    AccountMembersApi,
    Configuration,
    MembersPatchInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountMembersApi(configuration);

let membersPatchInput: MembersPatchInput; //

const { status, data } = await apiInstance.patchMembers(
    membersPatchInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membersPatchInput** | **MembersPatchInput**|  | |


### Return type

**BulkEditMembersRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Members response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postMemberTeams**
> Member postMemberTeams(memberTeamsPostInput)

Add one member to one or more teams.

### Example

```typescript
import {
    AccountMembersApi,
    Configuration,
    MemberTeamsPostInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountMembersApi(configuration);

let id: string; //The member ID (default to undefined)
let memberTeamsPostInput: MemberTeamsPostInput; //

const { status, data } = await apiInstance.postMemberTeams(
    id,
    memberTeamsPostInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memberTeamsPostInput** | **MemberTeamsPostInput**|  | |
| **id** | [**string**] | The member ID | defaults to undefined|


### Return type

**Member**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Member response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Member not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postMembers**
> Members postMembers(newMemberForm)

Invite one or more new members to join an account. Each member is sent an invitation. Members with Admin or Owner roles may create new members, as well as anyone with a `createMember` permission for \"member/\\*\". If a member cannot be invited, the entire request is rejected and no members are invited from that request.  Each member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the \"message\" field of the response.  Valid base role names that you can provide for the `role` field include `reader`, `writer`, `admin`, `owner/admin`, and `no_access`. To learn more about base roles, read [Organization roles](https://launchdarkly.com/docs/home/account/roles/organization-roles).  If you are using the `customRoles` field instead, you can provide the key for any role that you have created, or for any preset [organization role](https://launchdarkly.com/docs/home/account/roles/organization-roles) or [project role](https://launchdarkly.com/docs/home/account/roles/project-roles) provided by LaunchDarkly. Some preset roles additionally require that you specify `roleAttributes`. To learn more, read [Using role scope](https://launchdarkly.com/docs/home/account/roles/role-scope).  Requests to create account members will not work if SCIM is enabled for the account.  _No more than 50 members may be created per request._  A request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:  - **email_already_exists_in_account**: A member with this email address already exists in this account. - **email_taken_in_different_account**: A member with this email address exists in another account. - **duplicate_email**s: This request contains two or more members with the same email address.  A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request). 

### Example

```typescript
import {
    AccountMembersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountMembersApi(configuration);

let newMemberForm: Array<NewMemberForm>; //

const { status, data } = await apiInstance.postMembers(
    newMemberForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newMemberForm** | **Array<NewMemberForm>**|  | |


### Return type

**Members**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Member collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

