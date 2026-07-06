# IPAllowlistBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createIpAllowlistEntry**](#createipallowlistentry) | **POST** /api/v2/account/ip-allowlist | Create IP Allowlist Entry|
|[**deleteIpAllowlistEntry**](#deleteipallowlistentry) | **DELETE** /api/v2/account/ip-allowlist/{id} | Delete IP Allowlist Entry|
|[**getIpAllowlist**](#getipallowlist) | **GET** /api/v2/account/ip-allowlist | Get IP Allowlist|
|[**patchIpAllowlistConfig**](#patchipallowlistconfig) | **PATCH** /api/v2/account/ip-allowlist | Update IP Allowlist Configuration|
|[**patchIpAllowlistEntry**](#patchipallowlistentry) | **PATCH** /api/v2/account/ip-allowlist/{id} | Update IP Allowlist Entry Description|

# **createIpAllowlistEntry**
> IpAllowlistEntryResponse createIpAllowlistEntry(createIpAllowlistEntryRequest)

Create a new IP allowlist entry.

### Example

```typescript
import {
    IPAllowlistBetaApi,
    Configuration,
    CreateIpAllowlistEntryRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IPAllowlistBetaApi(configuration);

let createIpAllowlistEntryRequest: CreateIpAllowlistEntryRequest; //

const { status, data } = await apiInstance.createIpAllowlistEntry(
    createIpAllowlistEntryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createIpAllowlistEntryRequest** | **CreateIpAllowlistEntryRequest**|  | |


### Return type

**IpAllowlistEntryResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | IP allowlist entry created |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIpAllowlistEntry**
> deleteIpAllowlistEntry()

Delete an IP allowlist entry by id.

### Example

```typescript
import {
    IPAllowlistBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IPAllowlistBetaApi(configuration);

let id: string; //Unique identifier for the allowlist entry (default to undefined)

const { status, data } = await apiInstance.deleteIpAllowlistEntry(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Unique identifier for the allowlist entry | defaults to undefined|


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
|**204** | IP allowlist entry deleted successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIpAllowlist**
> IpAllowlistResponse getIpAllowlist()

Get the current IP allowlist configuration and entries.

### Example

```typescript
import {
    IPAllowlistBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IPAllowlistBetaApi(configuration);

const { status, data } = await apiInstance.getIpAllowlist();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IpAllowlistResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | IP allowlist configuration and entries |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchIpAllowlistConfig**
> IpAllowlistResponse patchIpAllowlistConfig(patchIpAllowlistConfigRequest)

Update sessionAllowlistEnabled and apiTokenAllowlistEnabled settings.

### Example

```typescript
import {
    IPAllowlistBetaApi,
    Configuration,
    PatchIpAllowlistConfigRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IPAllowlistBetaApi(configuration);

let patchIpAllowlistConfigRequest: PatchIpAllowlistConfigRequest; //

const { status, data } = await apiInstance.patchIpAllowlistConfig(
    patchIpAllowlistConfigRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchIpAllowlistConfigRequest** | **PatchIpAllowlistConfigRequest**|  | |


### Return type

**IpAllowlistResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated IP allowlist configuration and entries |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchIpAllowlistEntry**
> IpAllowlistEntryResponse patchIpAllowlistEntry(patchIpAllowlistEntryRequest)

Update the description of an IP allowlist entry.

### Example

```typescript
import {
    IPAllowlistBetaApi,
    Configuration,
    PatchIpAllowlistEntryRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IPAllowlistBetaApi(configuration);

let id: string; //Unique identifier for the allowlist entry (default to undefined)
let patchIpAllowlistEntryRequest: PatchIpAllowlistEntryRequest; //

const { status, data } = await apiInstance.patchIpAllowlistEntry(
    id,
    patchIpAllowlistEntryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchIpAllowlistEntryRequest** | **PatchIpAllowlistEntryRequest**|  | |
| **id** | [**string**] | Unique identifier for the allowlist entry | defaults to undefined|


### Return type

**IpAllowlistEntryResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated IP allowlist entry |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

