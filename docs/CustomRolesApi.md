# CustomRolesApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteCustomRole**](#deletecustomrole) | **DELETE** /api/v2/roles/{customRoleKey} | Delete custom role|
|[**getCustomRole**](#getcustomrole) | **GET** /api/v2/roles/{customRoleKey} | Get custom role|
|[**getCustomRoles**](#getcustomroles) | **GET** /api/v2/roles | List custom roles|
|[**patchCustomRole**](#patchcustomrole) | **PATCH** /api/v2/roles/{customRoleKey} | Update custom role|
|[**postCustomRole**](#postcustomrole) | **POST** /api/v2/roles | Create custom role|

# **deleteCustomRole**
> deleteCustomRole()

Delete a custom role by key

### Example

```typescript
import {
    CustomRolesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CustomRolesApi(configuration);

let customRoleKey: string; //The custom role key (default to undefined)

const { status, data } = await apiInstance.deleteCustomRole(
    customRoleKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customRoleKey** | [**string**] | The custom role key | defaults to undefined|


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
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomRole**
> CustomRole getCustomRole()

Get a single custom role by key or ID

### Example

```typescript
import {
    CustomRolesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CustomRolesApi(configuration);

let customRoleKey: string; //The custom role key or ID (default to undefined)

const { status, data } = await apiInstance.getCustomRole(
    customRoleKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customRoleKey** | [**string**] | The custom role key or ID | defaults to undefined|


### Return type

**CustomRole**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom role response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomRoles**
> CustomRoles getCustomRoles()

Get a complete list of custom roles. This includes project and organization roles that you create, or that are provided as presets by LaunchDarkly. It does not include base roles.

### Example

```typescript
import {
    CustomRolesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CustomRolesApi(configuration);

let limit: number; //The maximum number of custom roles to return. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomRoles(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | The maximum number of custom roles to return. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**CustomRoles**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom roles collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchCustomRole**
> CustomRole patchCustomRole(patchWithComment)

Update a single custom role. Updating a custom role uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the `policy` array, set the `path` to `/policy` and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.

### Example

```typescript
import {
    CustomRolesApi,
    Configuration,
    PatchWithComment
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CustomRolesApi(configuration);

let customRoleKey: string; //The custom role key (default to undefined)
let patchWithComment: PatchWithComment; //

const { status, data } = await apiInstance.patchCustomRole(
    customRoleKey,
    patchWithComment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchWithComment** | **PatchWithComment**|  | |
| **customRoleKey** | [**string**] | The custom role key | defaults to undefined|


### Return type

**CustomRole**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Custom role response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postCustomRole**
> CustomRole postCustomRole(customRolePost)

Create a new custom role

### Example

```typescript
import {
    CustomRolesApi,
    Configuration,
    CustomRolePost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CustomRolesApi(configuration);

let customRolePost: CustomRolePost; //

const { status, data } = await apiInstance.postCustomRole(
    customRolePost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customRolePost** | **CustomRolePost**|  | |


### Return type

**CustomRole**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Custom role response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

