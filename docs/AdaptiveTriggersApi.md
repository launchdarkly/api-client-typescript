# AdaptiveTriggersApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAdaptiveTrigger**](#deleteadaptivetrigger) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey}/adaptive-triggers/{triggerID} | Delete an adaptive trigger|
|[**getAdaptiveTrigger**](#getadaptivetrigger) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/adaptive-triggers/{triggerID} | Get an adaptive trigger|
|[**listAdaptiveTriggers**](#listadaptivetriggers) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/adaptive-triggers | List adaptive triggers|
|[**patchAdaptiveTrigger**](#patchadaptivetrigger) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/adaptive-triggers/{triggerID} | Update an adaptive trigger|
|[**postAdaptiveTrigger**](#postadaptivetrigger) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/adaptive-triggers | Create an adaptive trigger|
|[**postDisableAdaptiveTrigger**](#postdisableadaptivetrigger) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/adaptive-triggers/{triggerID}/disable | Disable an adaptive trigger|
|[**postEnableAdaptiveTrigger**](#postenableadaptivetrigger) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/adaptive-triggers/{triggerID}/enable | Enable an adaptive trigger|

# **deleteAdaptiveTrigger**
> deleteAdaptiveTrigger()

Delete a single adaptive trigger.

### Example

```typescript
import {
    AdaptiveTriggersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AdaptiveTriggersApi(configuration);

let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let triggerID: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAdaptiveTrigger(
    projectKey,
    environmentKey,
    triggerID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **triggerID** | [**string**] |  | defaults to undefined|


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
|**204** | No content |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate Limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAdaptiveTrigger**
> AdaptiveTrigger getAdaptiveTrigger()

Get a single adaptive trigger.

### Example

```typescript
import {
    AdaptiveTriggersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AdaptiveTriggersApi(configuration);

let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let triggerID: string; // (default to undefined)

const { status, data } = await apiInstance.getAdaptiveTrigger(
    projectKey,
    environmentKey,
    triggerID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **triggerID** | [**string**] |  | defaults to undefined|


### Return type

**AdaptiveTrigger**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Trigger |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate Limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAdaptiveTriggers**
> AdaptiveTriggers listAdaptiveTriggers()

List all adaptive triggers for a resource.

### Example

```typescript
import {
    AdaptiveTriggersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AdaptiveTriggersApi(configuration);

let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let resourceKind: AdaptiveTriggerResourceKind; // (default to undefined)
let resourceKey: string; // (default to undefined)
let limit: number; //The number of items to return. (optional) (default to 25)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to 0)

const { status, data } = await apiInstance.listAdaptiveTriggers(
    projectKey,
    environmentKey,
    resourceKind,
    resourceKey,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **resourceKind** | **AdaptiveTriggerResourceKind** |  | defaults to undefined|
| **resourceKey** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] | The number of items to return. | (optional) defaults to 25|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to 0|


### Return type

**AdaptiveTriggers**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Adaptive Triggers list |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate Limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchAdaptiveTrigger**
> AdaptiveTrigger patchAdaptiveTrigger(updateAdaptiveTriggerRequest)

Update a single adaptive trigger.

### Example

```typescript
import {
    AdaptiveTriggersApi,
    Configuration,
    UpdateAdaptiveTriggerRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AdaptiveTriggersApi(configuration);

let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let triggerID: string; // (default to undefined)
let updateAdaptiveTriggerRequest: UpdateAdaptiveTriggerRequest; //

const { status, data } = await apiInstance.patchAdaptiveTrigger(
    projectKey,
    environmentKey,
    triggerID,
    updateAdaptiveTriggerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAdaptiveTriggerRequest** | **UpdateAdaptiveTriggerRequest**|  | |
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **triggerID** | [**string**] |  | defaults to undefined|


### Return type

**AdaptiveTrigger**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Adaptive Trigger updated |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate Limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAdaptiveTrigger**
> AdaptiveTrigger postAdaptiveTrigger(createAdaptiveTriggerRequest)

Create a new adaptive trigger for a resource.

### Example

```typescript
import {
    AdaptiveTriggersApi,
    Configuration,
    CreateAdaptiveTriggerRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AdaptiveTriggersApi(configuration);

let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let createAdaptiveTriggerRequest: CreateAdaptiveTriggerRequest; //

const { status, data } = await apiInstance.postAdaptiveTrigger(
    projectKey,
    environmentKey,
    createAdaptiveTriggerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAdaptiveTriggerRequest** | **CreateAdaptiveTriggerRequest**|  | |
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|


### Return type

**AdaptiveTrigger**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Adaptive Trigger created |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**429** | Rate Limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDisableAdaptiveTrigger**
> postDisableAdaptiveTrigger()

Disable an adaptive trigger.

### Example

```typescript
import {
    AdaptiveTriggersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AdaptiveTriggersApi(configuration);

let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let triggerID: string; // (default to undefined)

const { status, data } = await apiInstance.postDisableAdaptiveTrigger(
    projectKey,
    environmentKey,
    triggerID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **triggerID** | [**string**] |  | defaults to undefined|


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
|**204** | No content |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate Limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postEnableAdaptiveTrigger**
> postEnableAdaptiveTrigger()

Enable an adaptive trigger.

### Example

```typescript
import {
    AdaptiveTriggersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AdaptiveTriggersApi(configuration);

let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let triggerID: string; // (default to undefined)

const { status, data } = await apiInstance.postEnableAdaptiveTrigger(
    projectKey,
    environmentKey,
    triggerID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **triggerID** | [**string**] |  | defaults to undefined|


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
|**204** | No content |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate Limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

