# ApplicationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteApplication**](#deleteapplication) | **DELETE** /api/v2/applications/{applicationKey} | Delete application|
|[**deleteApplicationVersion**](#deleteapplicationversion) | **DELETE** /api/v2/applications/{applicationKey}/versions/{versionKey} | Delete application version|
|[**getApplication**](#getapplication) | **GET** /api/v2/applications/{applicationKey} | Get application by key|
|[**getApplicationVersions**](#getapplicationversions) | **GET** /api/v2/applications/{applicationKey}/versions | Get application versions by application key|
|[**getApplications**](#getapplications) | **GET** /api/v2/applications | Get applications|
|[**patchApplication**](#patchapplication) | **PATCH** /api/v2/applications/{applicationKey} | Update application|
|[**patchApplicationVersion**](#patchapplicationversion) | **PATCH** /api/v2/applications/{applicationKey}/versions/{versionKey} | Update application version|

# **deleteApplication**
> deleteApplication()

Delete an application.

### Example

```typescript
import {
    ApplicationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApplicationsBetaApi(configuration);

let applicationKey: string; //The application key (default to undefined)

const { status, data } = await apiInstance.deleteApplication(
    applicationKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationKey** | [**string**] | The application key | defaults to undefined|


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

# **deleteApplicationVersion**
> deleteApplicationVersion()

Delete an application version.

### Example

```typescript
import {
    ApplicationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApplicationsBetaApi(configuration);

let applicationKey: string; //The application key (default to undefined)
let versionKey: string; //The application version key (default to undefined)

const { status, data } = await apiInstance.deleteApplicationVersion(
    applicationKey,
    versionKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationKey** | [**string**] | The application key | defaults to undefined|
| **versionKey** | [**string**] | The application version key | defaults to undefined|


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

# **getApplication**
> ApplicationRep getApplication()

 Retrieve an application by the application key.  ### Expanding the application response  LaunchDarkly supports expanding the \"Get application\" response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `flags` includes details on the flags that have been evaluated by the application  For example, use `?expand=flags` to include the `flags` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    ApplicationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApplicationsBetaApi(configuration);

let applicationKey: string; //The application key (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. Options: `flags`. (optional) (default to undefined)

const { status, data } = await apiInstance.getApplication(
    applicationKey,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationKey** | [**string**] | The application key | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. Options: &#x60;flags&#x60;. | (optional) defaults to undefined|


### Return type

**ApplicationRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Application response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApplicationVersions**
> ApplicationVersionsCollectionRep getApplicationVersions()

Get a list of versions for a specific application in an account.

### Example

```typescript
import {
    ApplicationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApplicationsBetaApi(configuration);

let applicationKey: string; //The application key (default to undefined)
let filter: string; //Accepts filter by `key`, `name`, `supported`, and `autoAdded`. To learn more about the filter syntax, read [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions). (optional) (default to undefined)
let limit: number; //The number of versions to return. Defaults to 50. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let sort: string; //Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending. (optional) (default to undefined)

const { status, data } = await apiInstance.getApplicationVersions(
    applicationKey,
    filter,
    limit,
    offset,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationKey** | [**string**] | The application key | defaults to undefined|
| **filter** | [**string**] | Accepts filter by &#x60;key&#x60;, &#x60;name&#x60;, &#x60;supported&#x60;, and &#x60;autoAdded&#x60;. To learn more about the filter syntax, read [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions). | (optional) defaults to undefined|
| **limit** | [**number**] | The number of versions to return. Defaults to 50. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | Accepts sorting order and fields. Fields can be comma separated. Possible fields are &#x60;creationDate&#x60;, &#x60;name&#x60;. Examples: &#x60;sort&#x3D;name&#x60; sort by names ascending, &#x60;sort&#x3D;-name,creationDate&#x60; sort by names descending and creationDate ascending. | (optional) defaults to undefined|


### Return type

**ApplicationVersionsCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Application versions response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApplications**
> ApplicationCollectionRep getApplications()

 Get a list of applications.  ### Expanding the applications response  LaunchDarkly supports expanding the \"Get applications\" response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `flags` includes details on the flags that have been evaluated by the application  For example, use `?expand=flags` to include the `flags` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    ApplicationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApplicationsBetaApi(configuration);

let filter: string; //Accepts filter by `key`, `name`, `kind`, and `autoAdded`. To learn more about the filter syntax, read [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions). (optional) (default to undefined)
let limit: number; //The number of applications to return. Defaults to 10. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let sort: string; //Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending. (optional) (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. Options: `flags`. (optional) (default to undefined)

const { status, data } = await apiInstance.getApplications(
    filter,
    limit,
    offset,
    sort,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | Accepts filter by &#x60;key&#x60;, &#x60;name&#x60;, &#x60;kind&#x60;, and &#x60;autoAdded&#x60;. To learn more about the filter syntax, read [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions). | (optional) defaults to undefined|
| **limit** | [**number**] | The number of applications to return. Defaults to 10. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | Accepts sorting order and fields. Fields can be comma separated. Possible fields are &#x60;creationDate&#x60;, &#x60;name&#x60;. Examples: &#x60;sort&#x3D;name&#x60; sort by names ascending, &#x60;sort&#x3D;-name,creationDate&#x60; sort by names descending and creationDate ascending. | (optional) defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. Options: &#x60;flags&#x60;. | (optional) defaults to undefined|


### Return type

**ApplicationCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Applications response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchApplication**
> ApplicationRep patchApplication(patchOperation)

Update an application. You can update the `description` and `kind` fields. Requires a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to the application. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    ApplicationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApplicationsBetaApi(configuration);

let applicationKey: string; //The application key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchApplication(
    applicationKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **applicationKey** | [**string**] | The application key | defaults to undefined|


### Return type

**ApplicationRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Application response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchApplicationVersion**
> ApplicationVersionRep patchApplicationVersion(patchOperation)

Update an application version. You can update the `supported` field. Requires a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to the application version. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    ApplicationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApplicationsBetaApi(configuration);

let applicationKey: string; //The application key (default to undefined)
let versionKey: string; //The application version key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchApplicationVersion(
    applicationKey,
    versionKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **applicationKey** | [**string**] | The application key | defaults to undefined|
| **versionKey** | [**string**] | The application version key | defaults to undefined|


### Return type

**ApplicationVersionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Application version response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

