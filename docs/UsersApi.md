# UsersApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteUser**](#deleteuser) | **DELETE** /api/v2/users/{projectKey}/{environmentKey}/{userKey} | Delete user|
|[**getSearchUsers**](#getsearchusers) | **GET** /api/v2/user-search/{projectKey}/{environmentKey} | Find users|
|[**getUser**](#getuser) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey} | Get user|
|[**getUsers**](#getusers) | **GET** /api/v2/users/{projectKey}/{environmentKey} | List users|

# **deleteUser**
> deleteUser()

> ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Delete context instances](https://launchdarkly.com/docs/api/contexts/delete-context-instances) instead of this endpoint.  Delete a user by key. 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let userKey: string; //The user key (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    projectKey,
    environmentKey,
    userKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **userKey** | [**string**] | The user key | defaults to undefined|


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

# **getSearchUsers**
> Users getSearchUsers()

> ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Search for context instances](https://launchdarkly.com/docs/api/contexts/search-context-instances) instead of this endpoint.  Search users in LaunchDarkly based on their last active date, a user attribute filter set, or a search query.  An example user attribute filter set is `filter=firstName:Anna,activeTrial:false`. This matches users that have the user attribute `firstName` set to `Anna`, that also have the attribute `activeTrial` set to `false`.  To paginate through results, follow the `next` link in the `_links` object. To learn more, read [Representations](https://launchdarkly.com/docs/api#representations). 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let q: string; //Full-text search for users based on name, first name, last name, e-mail address, or key (optional) (default to undefined)
let limit: number; //Specifies the maximum number of items in the collection to return (max: 50, default: 20) (optional) (default to undefined)
let offset: number; //Deprecated, use `searchAfter` instead. Specifies the first item to return in the collection. (optional) (default to undefined)
let after: number; //A Unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly (optional) (default to undefined)
let sort: string; //Specifies a field by which to sort. LaunchDarkly supports the `userKey` and `lastSeen` fields. Fields prefixed by a dash ( - ) sort in descending order. (optional) (default to undefined)
let searchAfter: string; //Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead. (optional) (default to undefined)
let filter: string; //A comma-separated list of user attribute filters. Each filter is in the form of attributeKey:attributeValue (optional) (default to undefined)

const { status, data } = await apiInstance.getSearchUsers(
    projectKey,
    environmentKey,
    q,
    limit,
    offset,
    after,
    sort,
    searchAfter,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **q** | [**string**] | Full-text search for users based on name, first name, last name, e-mail address, or key | (optional) defaults to undefined|
| **limit** | [**number**] | Specifies the maximum number of items in the collection to return (max: 50, default: 20) | (optional) defaults to undefined|
| **offset** | [**number**] | Deprecated, use &#x60;searchAfter&#x60; instead. Specifies the first item to return in the collection. | (optional) defaults to undefined|
| **after** | [**number**] | A Unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly | (optional) defaults to undefined|
| **sort** | [**string**] | Specifies a field by which to sort. LaunchDarkly supports the &#x60;userKey&#x60; and &#x60;lastSeen&#x60; fields. Fields prefixed by a dash ( - ) sort in descending order. | (optional) defaults to undefined|
| **searchAfter** | [**string**] | Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of user attribute filters. Each filter is in the form of attributeKey:attributeValue | (optional) defaults to undefined|


### Return type

**Users**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Users collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUser**
> UserRecord getUser()

> ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get context instances](https://launchdarkly.com/docs/api/contexts/get-context-instances) instead of this endpoint.  Get a user by key. The `user` object contains all attributes sent in `variation` calls for that key. 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let userKey: string; //The user key (default to undefined)

const { status, data } = await apiInstance.getUser(
    projectKey,
    environmentKey,
    userKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **userKey** | [**string**] | The user key | defaults to undefined|


### Return type

**UserRecord**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsers**
> UsersRep getUsers()

> ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Search for contexts](https://launchdarkly.com/docs/api/contexts/search-contexts) instead of this endpoint.  List all users in the environment. Includes the total count of users. This is useful for exporting all users in the system for further analysis.  Each page displays users up to a set `limit`. The default is 20. To page through, follow the `next` link in the `_links` object. To learn more, read [Representations](https://launchdarkly.com/docs/api#representations). 

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let limit: number; //The number of elements to return per page (optional) (default to undefined)
let searchAfter: string; //Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead. (optional) (default to undefined)

const { status, data } = await apiInstance.getUsers(
    projectKey,
    environmentKey,
    limit,
    searchAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **limit** | [**number**] | The number of elements to return per page | (optional) defaults to undefined|
| **searchAfter** | [**string**] | Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the &#x60;next&#x60; link we provide instead. | (optional) defaults to undefined|


### Return type

**UsersRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Users collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

