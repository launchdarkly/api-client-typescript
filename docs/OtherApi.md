# OtherApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCallerIdentity**](#getcalleridentity) | **GET** /api/v2/caller-identity | Identify the caller|
|[**getIps**](#getips) | **GET** /api/v2/public-ip-list | Gets the public IP list|
|[**getOpenapiSpec**](#getopenapispec) | **GET** /api/v2/openapi.json | Gets the OpenAPI spec in json|
|[**getRoot**](#getroot) | **GET** /api/v2 | Root resource|
|[**getVersions**](#getversions) | **GET** /api/v2/versions | Get version information|

# **getCallerIdentity**
> CallerIdentityRep getCallerIdentity()

Get basic information about the identity used (session cookie, API token, SDK keys, etc.) to call the API

### Example

```typescript
import {
    OtherApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OtherApi(configuration);

const { status, data } = await apiInstance.getCallerIdentity();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CallerIdentityRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Caller Identity |  -  |
|**401** | Invalid access token |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIps**
> IpList getIps()

Get a list of IP ranges the LaunchDarkly service uses. You can use this list to allow LaunchDarkly through your firewall. We post upcoming changes to this list in advance on our [status page](https://status.launchdarkly.com/). <br /><br />In the sandbox, click \'Play\' and enter any string in the \'Authorization\' field to test this endpoint.

### Example

```typescript
import {
    OtherApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OtherApi(configuration);

const { status, data } = await apiInstance.getIps();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IpList**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Public IP response |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOpenapiSpec**
> getOpenapiSpec()

Get the latest version of the OpenAPI specification for LaunchDarkly\'s API in JSON format. In the sandbox, click \'Play\' and enter any string in the \'Authorization\' field to test this endpoint.

### Example

```typescript
import {
    OtherApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OtherApi(configuration);

const { status, data } = await apiInstance.getOpenapiSpec();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | OpenAPI Spec |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoot**
> RootResponse getRoot()

Get all of the resource categories the API supports. In the sandbox, click \'Play\' and enter any string in the \'Authorization\' field to test this endpoint.

### Example

```typescript
import {
    OtherApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OtherApi(configuration);

const { status, data } = await apiInstance.getRoot();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RootResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Root response |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVersions**
> VersionsRep getVersions()

Get the latest API version, the list of valid API versions in ascending order, and the version being used for this request. These are all in the external, date-based format.

### Example

```typescript
import {
    OtherApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OtherApi(configuration);

const { status, data } = await apiInstance.getVersions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**VersionsRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Versions information response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

