# SDKKeysBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteSdkKeyByKey**](#deletesdkkeybykey) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey} | Delete SDK key|
|[**getProjectSdkKeys**](#getprojectsdkkeys) | **GET** /api/v2/projects/{projectKey}/sdk-keys | Get all project SDK keys|
|[**getSdkKeyByKey**](#getsdkkeybykey) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey} | Get SDK key|
|[**getSdkKeys**](#getsdkkeys) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys | Get all environment SDK keys|
|[**patchSdkKeyByKey**](#patchsdkkeybykey) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey} | Update SDK key|
|[**postSdkKey**](#postsdkkey) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys | Create SDK key|
|[**putSdkKeyViews**](#putsdkkeyviews) | **PUT** /api/v2/projects/{projectKey}/environments/{environmentKey}/sdk-keys/{sdkKeyKey}/views | Replace SDK key views|

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

# **getProjectSdkKeys**
> SdkKeys getProjectSdkKeys()

Get all SDK keys for a given project across environments.

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
let filter: string; //A queryfilter expression to apply to the list of SDK keys. Supports the following fields and operators: `kind` (`equals`, `anyOf`; values: \"sdk\", \"mobile\"), `active` (`equals`, `anyOf`; values: `true`, `false`), `environmentKey` (`equals`, `anyOf`; values: environment keys), `viewKey` (`equals`, `anyOf`; values: view key strings — returns only SDK keys linked to the specified view(s)), `name` (`equals` only; returns SDK keys whose name or key contains the value, matched case-insensitively). Example: `kind anyOf [\"sdk\",\"mobile\"], environmentKey anyOf [\"production\",\"test\"], viewKey equals my-view, name equals \"production\"`. (optional) (default to undefined)
let limit: number; //The number of SDK keys to return. Defaults to 20. Maximum is 100. (optional) (default to undefined)
let offset: number; //The number of SDK keys to skip. Used for pagination. (optional) (default to undefined)
let expand: string; //A comma-separated list of fields to expand in the response. Supported fields: `environmentSummary`, `viewSummaries`. (optional) (default to undefined)
let sort: 'createdAt' | '-createdAt' | 'environmentKey'; //A sort to apply to the list of SDK keys. Supported fields: `createdAt` and `environmentKey`. Prefix `createdAt` with `-` to sort in descending order (for example, `-createdAt`). `environmentKey` orders keys by environment key ascending, then by creation time ascending within each environment, so each page is environment-contiguous. (optional) (default to undefined)

const { status, data } = await apiInstance.getProjectSdkKeys(
    lDAPIVersion,
    projectKey,
    filter,
    limit,
    offset,
    expand,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **filter** | [**string**] | A queryfilter expression to apply to the list of SDK keys. Supports the following fields and operators: &#x60;kind&#x60; (&#x60;equals&#x60;, &#x60;anyOf&#x60;; values: \&quot;sdk\&quot;, \&quot;mobile\&quot;), &#x60;active&#x60; (&#x60;equals&#x60;, &#x60;anyOf&#x60;; values: &#x60;true&#x60;, &#x60;false&#x60;), &#x60;environmentKey&#x60; (&#x60;equals&#x60;, &#x60;anyOf&#x60;; values: environment keys), &#x60;viewKey&#x60; (&#x60;equals&#x60;, &#x60;anyOf&#x60;; values: view key strings — returns only SDK keys linked to the specified view(s)), &#x60;name&#x60; (&#x60;equals&#x60; only; returns SDK keys whose name or key contains the value, matched case-insensitively). Example: &#x60;kind anyOf [\&quot;sdk\&quot;,\&quot;mobile\&quot;], environmentKey anyOf [\&quot;production\&quot;,\&quot;test\&quot;], viewKey equals my-view, name equals \&quot;production\&quot;&#x60;. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of SDK keys to return. Defaults to 20. Maximum is 100. | (optional) defaults to undefined|
| **offset** | [**number**] | The number of SDK keys to skip. Used for pagination. | (optional) defaults to undefined|
| **expand** | [**string**] | A comma-separated list of fields to expand in the response. Supported fields: &#x60;environmentSummary&#x60;, &#x60;viewSummaries&#x60;. | (optional) defaults to undefined|
| **sort** | [**&#39;createdAt&#39; | &#39;-createdAt&#39; | &#39;environmentKey&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;-createdAt&#39; &#124; &#39;environmentKey&#39;>** | A sort to apply to the list of SDK keys. Supported fields: &#x60;createdAt&#x60; and &#x60;environmentKey&#x60;. Prefix &#x60;createdAt&#x60; with &#x60;-&#x60; to sort in descending order (for example, &#x60;-createdAt&#x60;). &#x60;environmentKey&#x60; orders keys by environment key ascending, then by creation time ascending within each environment, so each page is environment-contiguous. | (optional) defaults to undefined|


### Return type

**SdkKeys**

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

# **getSdkKeys**
> SdkKeysForGetSdkKeys getSdkKeys()

Get all SDK keys for a given project and environment. Can filter by kind.

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
let filter: string; //A filter to apply to the list of SDK keys. Supports the following fields and operators: `kind` (equals \"sdk\" or \"mobile\"), `active` (equals true or false). Format: `field:value`. Example: `kind:sdk`. (optional) (default to undefined)
let limit: number; //The number of SDK keys to return. Defaults to 20. Maximum is 100. (optional) (default to undefined)
let offset: number; //The number of SDK keys to skip. Used for pagination. (optional) (default to undefined)
let sort: 'createdAt' | '-createdAt'; //A sort to apply to the list of SDK keys. Supported field: `createdAt`. Prefix the field with `-` to sort in descending order (for example, `-createdAt`). (optional) (default to undefined)

const { status, data } = await apiInstance.getSdkKeys(
    lDAPIVersion,
    projectKey,
    environmentKey,
    filter,
    limit,
    offset,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **filter** | [**string**] | A filter to apply to the list of SDK keys. Supports the following fields and operators: &#x60;kind&#x60; (equals \&quot;sdk\&quot; or \&quot;mobile\&quot;), &#x60;active&#x60; (equals true or false). Format: &#x60;field:value&#x60;. Example: &#x60;kind:sdk&#x60;. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of SDK keys to return. Defaults to 20. Maximum is 100. | (optional) defaults to undefined|
| **offset** | [**number**] | The number of SDK keys to skip. Used for pagination. | (optional) defaults to undefined|
| **sort** | [**&#39;createdAt&#39; | &#39;-createdAt&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;-createdAt&#39;>** | A sort to apply to the list of SDK keys. Supported field: &#x60;createdAt&#x60;. Prefix the field with &#x60;-&#x60; to sort in descending order (for example, &#x60;-createdAt&#x60;). | (optional) defaults to undefined|


### Return type

**SdkKeysForGetSdkKeys**

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

Create a new server-side or mobile SDK key.  Deleted SDK keys are retained for 180 days. During that period you cannot reuse the `key` of a deleted SDK key, even though the deleted key no longer appears in the list of SDK keys for the environment.

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

# **putSdkKeyViews**
> SdkKeyForPutSdkKeyViews putSdkKeyViews(sdkKeyViewsPut)

Replace the set of views associated with an SDK key. The `viewKeys` field is required. To remove all views from the SDK key, pass an empty `viewKeys` array.

### Example

```typescript
import {
    SDKKeysBetaApi,
    Configuration,
    SdkKeyViewsPut
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SDKKeysBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let sdkKeyKey: string; // (default to undefined)
let sdkKeyViewsPut: SdkKeyViewsPut; //
let expand: string; //A comma-separated list of fields to expand in the response. Supported fields: `viewSummaries`. (optional) (default to undefined)

const { status, data } = await apiInstance.putSdkKeyViews(
    lDAPIVersion,
    projectKey,
    environmentKey,
    sdkKeyKey,
    sdkKeyViewsPut,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sdkKeyViewsPut** | **SdkKeyViewsPut**|  | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **sdkKeyKey** | [**string**] |  | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of fields to expand in the response. Supported fields: &#x60;viewSummaries&#x60;. | (optional) defaults to undefined|


### Return type

**SdkKeyForPutSdkKeyViews**

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
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

