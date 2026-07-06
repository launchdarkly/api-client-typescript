# SDKKeysBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteSdkKeyByKey**](#deletesdkkeybykey) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey} | Delete SDK key|
|[**getSdkKeyByKey**](#getsdkkeybykey) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey} | Get SDK key|
|[**patchSdkKeyByKey**](#patchsdkkeybykey) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey} | Update SDK key|
|[**postSdkKey**](#postsdkkey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys | Create SDK key|

# **deleteSdkKeyByKey**
> deleteSdkKeyByKey()

Delete a specific SDK key by its key.

### Example

```typescript
import {
    SDKKeysBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SDKKeysBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let sdkKeyKey: string; //The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. (default to undefined)

const { status, data } = await apiInstance.deleteSdkKeyByKey(
    lDAPIVersion,
    projectKey,
    environmentKey,
    sdkKeyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **sdkKeyKey** | [**string**] | The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. | defaults to undefined|


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
|**204** | SDK key deleted |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSdkKeyByKey**
> SdkKey getSdkKeyByKey()

Get a specific SDK key by its key.

### Example

```typescript
import {
    SDKKeysBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SDKKeysBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let sdkKeyKey: string; //The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. (default to undefined)

const { status, data } = await apiInstance.getSdkKeyByKey(
    lDAPIVersion,
    projectKey,
    environmentKey,
    sdkKeyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **sdkKeyKey** | [**string**] | The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. | defaults to undefined|


### Return type

**SdkKey**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchSdkKeyByKey**
> SdkKey patchSdkKeyByKey(sdkKeyPatch)

Update a an existing SDK key by its identifying key.

### Example

```typescript
import {
    SDKKeysBetaApi,
    Configuration,
    SdkKeyPatch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SDKKeysBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let sdkKeyKey: string; //The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. (default to undefined)
let sdkKeyPatch: SdkKeyPatch; //An array of patches for updating an existing SDK key. The following fields are supported: `name`, `description`, `expiry`.
let version: number; //The version of the SDK key for optimistic locking. If provided, the update will only succeed if the current version matches. (optional) (default to undefined)

const { status, data } = await apiInstance.patchSdkKeyByKey(
    lDAPIVersion,
    projectKey,
    environmentKey,
    sdkKeyKey,
    sdkKeyPatch,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sdkKeyPatch** | **SdkKeyPatch**| An array of patches for updating an existing SDK key. The following fields are supported: &#x60;name&#x60;, &#x60;description&#x60;, &#x60;expiry&#x60;. | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **sdkKeyKey** | [**string**] | The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. | defaults to undefined|
| **version** | [**number**] | The version of the SDK key for optimistic locking. If provided, the update will only succeed if the current version matches. | (optional) defaults to undefined|


### Return type

**SdkKey**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSdkKey**
> SdkKey postSdkKey(sdkKeyPost)

Create a new server-side or mobile SDK key.

### Example

```typescript
import {
    SDKKeysBetaApi,
    Configuration,
    SdkKeyPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SDKKeysBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let sdkKeyPost: SdkKeyPost; //Parameters for creating a new SDK key

const { status, data } = await apiInstance.postSdkKey(
    lDAPIVersion,
    projectKey,
    environmentKey,
    sdkKeyPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sdkKeyPost** | **SdkKeyPost**| Parameters for creating a new SDK key | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|


### Return type

**SdkKey**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | SDK key created |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

