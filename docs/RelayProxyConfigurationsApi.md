# RelayProxyConfigurationsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteRelayAutoConfig**](#deleterelayautoconfig) | **DELETE** /api/v2/account/relay-auto-configs/{id} | Delete Relay Proxy config by ID|
|[**getRelayProxyConfig**](#getrelayproxyconfig) | **GET** /api/v2/account/relay-auto-configs/{id} | Get Relay Proxy config|
|[**getRelayProxyConfigs**](#getrelayproxyconfigs) | **GET** /api/v2/account/relay-auto-configs | List Relay Proxy configs|
|[**patchRelayAutoConfig**](#patchrelayautoconfig) | **PATCH** /api/v2/account/relay-auto-configs/{id} | Update a Relay Proxy config|
|[**postRelayAutoConfig**](#postrelayautoconfig) | **POST** /api/v2/account/relay-auto-configs | Create a new Relay Proxy config|
|[**resetRelayAutoConfig**](#resetrelayautoconfig) | **POST** /api/v2/account/relay-auto-configs/{id}/reset | Reset Relay Proxy configuration key|

# **deleteRelayAutoConfig**
> deleteRelayAutoConfig()

Delete a Relay Proxy config.

### Example

```typescript
import {
    RelayProxyConfigurationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new RelayProxyConfigurationsApi(configuration);

let id: string; //The relay auto config id (default to undefined)

const { status, data } = await apiInstance.deleteRelayAutoConfig(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The relay auto config id | defaults to undefined|


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
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRelayProxyConfig**
> RelayAutoConfigRep getRelayProxyConfig()

Get a single Relay Proxy auto config by ID.

### Example

```typescript
import {
    RelayProxyConfigurationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new RelayProxyConfigurationsApi(configuration);

let id: string; //The relay auto config id (default to undefined)

const { status, data } = await apiInstance.getRelayProxyConfig(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The relay auto config id | defaults to undefined|


### Return type

**RelayAutoConfigRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relay auto config response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRelayProxyConfigs**
> RelayAutoConfigCollectionRep getRelayProxyConfigs()

Get a list of Relay Proxy configurations in the account.

### Example

```typescript
import {
    RelayProxyConfigurationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new RelayProxyConfigurationsApi(configuration);

const { status, data } = await apiInstance.getRelayProxyConfigs();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RelayAutoConfigCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relay auto configs collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchRelayAutoConfig**
> RelayAutoConfigRep patchRelayAutoConfig(patchWithComment)

Update a Relay Proxy configuration. Updating a configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    RelayProxyConfigurationsApi,
    Configuration,
    PatchWithComment
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new RelayProxyConfigurationsApi(configuration);

let id: string; //The relay auto config id (default to undefined)
let patchWithComment: PatchWithComment; //

const { status, data } = await apiInstance.patchRelayAutoConfig(
    id,
    patchWithComment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchWithComment** | **PatchWithComment**|  | |
| **id** | [**string**] | The relay auto config id | defaults to undefined|


### Return type

**RelayAutoConfigRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relay auto config response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**422** | Invalid patch content |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postRelayAutoConfig**
> RelayAutoConfigRep postRelayAutoConfig(relayAutoConfigPost)

Create a Relay Proxy config.

### Example

```typescript
import {
    RelayProxyConfigurationsApi,
    Configuration,
    RelayAutoConfigPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new RelayProxyConfigurationsApi(configuration);

let relayAutoConfigPost: RelayAutoConfigPost; //

const { status, data } = await apiInstance.postRelayAutoConfig(
    relayAutoConfigPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **relayAutoConfigPost** | **RelayAutoConfigPost**|  | |


### Return type

**RelayAutoConfigRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Relay auto config response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetRelayAutoConfig**
> RelayAutoConfigRep resetRelayAutoConfig()

Reset a Relay Proxy configuration\'s secret key with an optional expiry time for the old key.

### Example

```typescript
import {
    RelayProxyConfigurationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new RelayProxyConfigurationsApi(configuration);

let id: string; //The Relay Proxy configuration ID (default to undefined)
let expiry: number; //An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately. (optional) (default to undefined)

const { status, data } = await apiInstance.resetRelayAutoConfig(
    id,
    expiry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The Relay Proxy configuration ID | defaults to undefined|
| **expiry** | [**number**] | An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately. | (optional) defaults to undefined|


### Return type

**RelayAutoConfigRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Relay auto config response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

