# IntegrationDeliveryConfigurationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createIntegrationDeliveryConfiguration**](#createintegrationdeliveryconfiguration) | **POST** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey} | Create delivery configuration|
|[**deleteIntegrationDeliveryConfiguration**](#deleteintegrationdeliveryconfiguration) | **DELETE** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Delete delivery configuration|
|[**getIntegrationDeliveryConfigurationByEnvironment**](#getintegrationdeliveryconfigurationbyenvironment) | **GET** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey} | Get delivery configurations by environment|
|[**getIntegrationDeliveryConfigurationById**](#getintegrationdeliveryconfigurationbyid) | **GET** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Get delivery configuration by ID|
|[**getIntegrationDeliveryConfigurations**](#getintegrationdeliveryconfigurations) | **GET** /api/v2/integration-capabilities/featureStore | List all delivery configurations|
|[**patchIntegrationDeliveryConfiguration**](#patchintegrationdeliveryconfiguration) | **PATCH** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id} | Update delivery configuration|
|[**validateIntegrationDeliveryConfiguration**](#validateintegrationdeliveryconfiguration) | **POST** /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate | Validate delivery configuration|

# **createIntegrationDeliveryConfiguration**
> IntegrationDeliveryConfiguration createIntegrationDeliveryConfiguration(integrationDeliveryConfigurationPost)

Create a delivery configuration.

### Example

```typescript
import {
    IntegrationDeliveryConfigurationsBetaApi,
    Configuration,
    IntegrationDeliveryConfigurationPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationDeliveryConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let integrationDeliveryConfigurationPost: IntegrationDeliveryConfigurationPost; //

const { status, data } = await apiInstance.createIntegrationDeliveryConfiguration(
    projectKey,
    environmentKey,
    integrationKey,
    integrationDeliveryConfigurationPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationDeliveryConfigurationPost** | **IntegrationDeliveryConfigurationPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|


### Return type

**IntegrationDeliveryConfiguration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Integration delivery configuration response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIntegrationDeliveryConfiguration**
> deleteIntegrationDeliveryConfiguration()

Delete a delivery configuration.

### Example

```typescript
import {
    IntegrationDeliveryConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationDeliveryConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let id: string; //The configuration ID (default to undefined)

const { status, data } = await apiInstance.deleteIntegrationDeliveryConfiguration(
    projectKey,
    environmentKey,
    integrationKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **id** | [**string**] | The configuration ID | defaults to undefined|


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

# **getIntegrationDeliveryConfigurationByEnvironment**
> IntegrationDeliveryConfigurationCollection getIntegrationDeliveryConfigurationByEnvironment()

Get delivery configurations by environment.

### Example

```typescript
import {
    IntegrationDeliveryConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationDeliveryConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.getIntegrationDeliveryConfigurationByEnvironment(
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

**IntegrationDeliveryConfigurationCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration delivery configuration collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntegrationDeliveryConfigurationById**
> IntegrationDeliveryConfiguration getIntegrationDeliveryConfigurationById()

Get delivery configuration by ID.

### Example

```typescript
import {
    IntegrationDeliveryConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationDeliveryConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let id: string; //The configuration ID (default to undefined)

const { status, data } = await apiInstance.getIntegrationDeliveryConfigurationById(
    projectKey,
    environmentKey,
    integrationKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **id** | [**string**] | The configuration ID | defaults to undefined|


### Return type

**IntegrationDeliveryConfiguration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration delivery configuration response |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntegrationDeliveryConfigurations**
> IntegrationDeliveryConfigurationCollection getIntegrationDeliveryConfigurations()

List all delivery configurations.

### Example

```typescript
import {
    IntegrationDeliveryConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationDeliveryConfigurationsBetaApi(configuration);

const { status, data } = await apiInstance.getIntegrationDeliveryConfigurations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IntegrationDeliveryConfigurationCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration delivery configuration collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchIntegrationDeliveryConfiguration**
> IntegrationDeliveryConfiguration patchIntegrationDeliveryConfiguration(patchOperation)

Update an integration delivery configuration. Updating an integration delivery configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    IntegrationDeliveryConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationDeliveryConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let id: string; //The configuration ID (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchIntegrationDeliveryConfiguration(
    projectKey,
    environmentKey,
    integrationKey,
    id,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **id** | [**string**] | The configuration ID | defaults to undefined|


### Return type

**IntegrationDeliveryConfiguration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration delivery configuration response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**422** | Invalid patch content |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateIntegrationDeliveryConfiguration**
> IntegrationDeliveryConfigurationResponse validateIntegrationDeliveryConfiguration()

Validate the saved delivery configuration, using the `validationRequest` in the integration\'s `manifest.json` file.

### Example

```typescript
import {
    IntegrationDeliveryConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationDeliveryConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let id: string; //The configuration ID (default to undefined)

const { status, data } = await apiInstance.validateIntegrationDeliveryConfiguration(
    projectKey,
    environmentKey,
    integrationKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **id** | [**string**] | The configuration ID | defaults to undefined|


### Return type

**IntegrationDeliveryConfigurationResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration delivery configuration validation response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

