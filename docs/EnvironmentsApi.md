# EnvironmentsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteEnvironment**](#deleteenvironment) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey} | Delete environment|
|[**getEnvironment**](#getenvironment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey} | Get environment|
|[**getEnvironmentsByProject**](#getenvironmentsbyproject) | **GET** /api/v2/projects/{projectKey}/environments | List environments|
|[**patchEnvironment**](#patchenvironment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey} | Update environment|
|[**postEnvironment**](#postenvironment) | **POST** /api/v2/projects/{projectKey}/environments | Create environment|
|[**resetEnvironmentMobileKey**](#resetenvironmentmobilekey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/mobileKey | Reset environment mobile SDK key|
|[**resetEnvironmentSDKKey**](#resetenvironmentsdkkey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey | Reset environment SDK key|

# **deleteEnvironment**
> deleteEnvironment()

Delete a environment by key.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.deleteEnvironment(
    projectKey,
    environmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


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

# **getEnvironment**
> Environment getEnvironment()

> ### Approval settings > > The `approvalSettings` key is only returned when [approvals](https://launchdarkly.com/docs/home/releases/approvals) for flags or segments are enabled.  Get an environment given a project and key. 

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.getEnvironment(
    projectKey,
    environmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**Environment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Environment response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEnvironmentsByProject**
> Environments getEnvironmentsByProject()

Return a list of environments for the specified project.  By default, this returns the first 20 environments. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.  ### Filtering environments  LaunchDarkly supports two fields for filters: - `query` is a string that matches against the environments\' names and keys. It is not case sensitive. - `tags` is a `+`-separated list of environment tags. It filters the list of environments that have all of the tags in the list.  For example, the filter `filter=query:abc,tags:tag-1+tag-2` matches environments with the string `abc` in their name or key and also are tagged with `tag-1` and `tag-2`. The filter is not case-sensitive.  The documented values for `filter` query parameters are prior to URL encoding. For example, the `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.  ### Sorting environments  LaunchDarkly supports the following fields for sorting:  - `createdOn` sorts by the creation date of the environment. - `critical` sorts by whether the environments are marked as critical. - `name` sorts by environment name.  For example, `sort=name` sorts the response by environment name in ascending order. 

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let limit: number; //The number of environments to return in the response. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let filter: string; //A comma-separated list of filters. Each filter is of the form `field:value`. (optional) (default to undefined)
let sort: string; //A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. (optional) (default to undefined)

const { status, data } = await apiInstance.getEnvironmentsByProject(
    projectKey,
    limit,
    offset,
    filter,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **limit** | [**number**] | The number of environments to return in the response. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. | (optional) defaults to undefined|


### Return type

**Environments**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Environments collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchEnvironment**
> Environment patchEnvironment(patchOperation)

 Update an environment. Updating an environment uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).  To update fields in the environment object that are arrays, set the `path` to the name of the field and then append `/<array index>`. Using `/0` appends to the beginning of the array.  ### Approval settings  This request only returns the `approvalSettings` key if the [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled.  Only the `canReviewOwnRequest`, `canApplyDeclinedChanges`, `minNumApprovals`, `required` and `requiredApprovalTagsfields` are editable.  If you try to patch the environment by setting both `required` and `requiredApprovalTags`, the request fails and an error appears. You can specify either required approvals for all flags in an environment or those with specific tags, but not both. 

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchEnvironment(
    projectKey,
    environmentKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**Environment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Environment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postEnvironment**
> Environment postEnvironment(environmentPost)

> ### Approval settings > > The `approvalSettings` key is only returned when the [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled. > > You cannot update approval settings when creating new environments. Update approval settings with the [https://launchdarkly.com/docs/api/environments/patch-environment).  Create a new environment in a specified project with a given name, key, swatch color, and default TTL. 

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    EnvironmentPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentPost: EnvironmentPost; //

const { status, data } = await apiInstance.postEnvironment(
    projectKey,
    environmentPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environmentPost** | **EnvironmentPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**Environment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Environment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetEnvironmentMobileKey**
> Environment resetEnvironmentMobileKey()

Reset an environment\'s mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.resetEnvironmentMobileKey(
    projectKey,
    environmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**Environment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Environment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetEnvironmentSDKKey**
> Environment resetEnvironmentSDKKey()

Reset an environment\'s SDK key with an optional expiry time for the old key.

### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let expiry: number; //The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately. During the period between this call and the time when the old SDK key expires, both the old SDK key and the new SDK key will work. (optional) (default to undefined)

const { status, data } = await apiInstance.resetEnvironmentSDKKey(
    projectKey,
    environmentKey,
    expiry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **expiry** | [**number**] | The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately. During the period between this call and the time when the old SDK key expires, both the old SDK key and the new SDK key will work. | (optional) defaults to undefined|


### Return type

**Environment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Environment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

