# AccessTokensApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteToken**](#deletetoken) | **DELETE** /api/v2/tokens/{id} | Delete access token|
|[**getToken**](#gettoken) | **GET** /api/v2/tokens/{id} | Get access token|
|[**getTokens**](#gettokens) | **GET** /api/v2/tokens | List access tokens|
|[**patchToken**](#patchtoken) | **PATCH** /api/v2/tokens/{id} | Patch access token|
|[**postToken**](#posttoken) | **POST** /api/v2/tokens | Create access token|
|[**resetToken**](#resettoken) | **POST** /api/v2/tokens/{id}/reset | Reset access token|

# **deleteToken**
> deleteToken()

Delete an access token by ID.

### Example

```typescript
import {
    AccessTokensApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccessTokensApi(configuration);

let id: string; //The ID of the access token to update (default to undefined)

const { status, data } = await apiInstance.deleteToken(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the access token to update | defaults to undefined|


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
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getToken**
> Token getToken()

Get a single access token by ID.

### Example

```typescript
import {
    AccessTokensApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccessTokensApi(configuration);

let id: string; //The ID of the access token (default to undefined)

const { status, data } = await apiInstance.getToken(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the access token | defaults to undefined|


### Return type

**Token**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access token response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTokens**
> Tokens getTokens()

Fetch a list of all access tokens.

### Example

```typescript
import {
    AccessTokensApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccessTokensApi(configuration);

let showAll: boolean; //If set to true, and the authentication access token has the \'Admin\' role, personal access tokens for all members will be retrieved. (optional) (default to undefined)
let limit: number; //The number of access tokens to return in the response. Defaults to 25. (optional) (default to undefined)
let offset: number; //Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getTokens(
    showAll,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showAll** | [**boolean**] | If set to true, and the authentication access token has the \&#39;Admin\&#39; role, personal access tokens for all members will be retrieved. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of access tokens to return in the response. Defaults to 25. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**Tokens**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access tokens collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchToken**
> Token patchToken(patchOperation)

Update an access token\'s settings. Updating an access token uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    AccessTokensApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccessTokensApi(configuration);

let id: string; //The ID of the access token to update (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchToken(
    id,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **id** | [**string**] | The ID of the access token to update | defaults to undefined|


### Return type

**Token**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access token response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**422** | Invalid patch content |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postToken**
> Token postToken(accessTokenPost)

Create a new access token.

### Example

```typescript
import {
    AccessTokensApi,
    Configuration,
    AccessTokenPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccessTokensApi(configuration);

let accessTokenPost: AccessTokenPost; //

const { status, data } = await apiInstance.postToken(
    accessTokenPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accessTokenPost** | **AccessTokenPost**|  | |


### Return type

**Token**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Access token response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetToken**
> Token resetToken()

Reset an access token\'s secret key with an optional expiry time for the old key.

### Example

```typescript
import {
    AccessTokensApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccessTokensApi(configuration);

let id: string; //The ID of the access token to update (default to undefined)
let expiry: number; //An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately. (optional) (default to undefined)

const { status, data } = await apiInstance.resetToken(
    id,
    expiry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the access token to update | defaults to undefined|
| **expiry** | [**number**] | An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately. | (optional) defaults to undefined|


### Return type

**Token**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access token response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

