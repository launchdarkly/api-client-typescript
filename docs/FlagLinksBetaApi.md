# FlagLinksBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFlagLink**](#createflaglink) | **POST** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey} | Create flag link|
|[**deleteFlagLink**](#deleteflaglink) | **DELETE** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id} | Delete flag link|
|[**getFlagLinks**](#getflaglinks) | **GET** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey} | List flag links|
|[**updateFlagLink**](#updateflaglink) | **PATCH** /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id} | Update flag link|

# **createFlagLink**
> FlagLinkRep createFlagLink(flagLinkPost)

Create a new flag link. Flag links let you reference external resources and associate them with your flags.

### Example

```typescript
import {
    FlagLinksBetaApi,
    Configuration,
    FlagLinkPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagLinksBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let flagLinkPost: FlagLinkPost; //

const { status, data } = await apiInstance.createFlagLink(
    projectKey,
    featureFlagKey,
    flagLinkPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flagLinkPost** | **FlagLinkPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|


### Return type

**FlagLinkRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Flag link response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFlagLink**
> deleteFlagLink()

Delete a flag link by ID or key.

### Example

```typescript
import {
    FlagLinksBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagLinksBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let id: string; //The flag link ID or Key (default to undefined)

const { status, data } = await apiInstance.deleteFlagLink(
    projectKey,
    featureFlagKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **id** | [**string**] | The flag link ID or Key | defaults to undefined|


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
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFlagLinks**
> FlagLinkCollectionRep getFlagLinks()

Get a list of all flag links.

### Example

```typescript
import {
    FlagLinksBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagLinksBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)

const { status, data } = await apiInstance.getFlagLinks(
    projectKey,
    featureFlagKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|


### Return type

**FlagLinkCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag link collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateFlagLink**
> FlagLinkRep updateFlagLink(patchOperation)

Update a flag link. Updating a flag link uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    FlagLinksBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagLinksBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let id: string; //The flag link ID (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.updateFlagLink(
    projectKey,
    featureFlagKey,
    id,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **id** | [**string**] | The flag link ID | defaults to undefined|


### Return type

**FlagLinkRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag link response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

