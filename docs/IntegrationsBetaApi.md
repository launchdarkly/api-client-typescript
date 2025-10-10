# IntegrationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createIntegrationConfiguration**](#createintegrationconfiguration) | **POST** /api/v2/integration-configurations/keys/{integrationKey} | Create integration configuration|
|[**deleteIntegrationConfiguration**](#deleteintegrationconfiguration) | **DELETE** /api/v2/integration-configurations/{integrationConfigurationId} | Delete integration configuration|
|[**getAllIntegrationConfigurations**](#getallintegrationconfigurations) | **GET** /api/v2/integration-configurations/keys/{integrationKey} | Get all configurations for the integration|
|[**getIntegrationConfiguration**](#getintegrationconfiguration) | **GET** /api/v2/integration-configurations/{integrationConfigurationId} | Get an integration configuration|
|[**updateIntegrationConfiguration**](#updateintegrationconfiguration) | **PATCH** /api/v2/integration-configurations/{integrationConfigurationId} | Update integration configuration|

# **createIntegrationConfiguration**
> IntegrationConfigurationsRep createIntegrationConfiguration(integrationConfigurationPost)

Create a new integration configuration. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)

### Example

```typescript
import {
    IntegrationsBetaApi,
    Configuration,
    IntegrationConfigurationPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationsBetaApi(configuration);

let integrationKey: string; //The integration key (default to undefined)
let integrationConfigurationPost: IntegrationConfigurationPost; //

const { status, data } = await apiInstance.createIntegrationConfiguration(
    integrationKey,
    integrationConfigurationPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationConfigurationPost** | **IntegrationConfigurationPost**|  | |
| **integrationKey** | [**string**] | The integration key | defaults to undefined|


### Return type

**IntegrationConfigurationsRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Integration Configuration response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Integration key not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteIntegrationConfiguration**
> deleteIntegrationConfiguration()

Delete an integration configuration by ID. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)

### Example

```typescript
import {
    IntegrationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationsBetaApi(configuration);

let integrationConfigurationId: string; //The ID of the integration configuration to be deleted (default to undefined)

const { status, data } = await apiInstance.deleteIntegrationConfiguration(
    integrationConfigurationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationConfigurationId** | [**string**] | The ID of the integration configuration to be deleted | defaults to undefined|


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

# **getAllIntegrationConfigurations**
> IntegrationConfigurationCollectionRep getAllIntegrationConfigurations()

Get all integration configurations with the specified integration key. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).).

### Example

```typescript
import {
    IntegrationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationsBetaApi(configuration);

let integrationKey: string; //Integration key (default to undefined)

const { status, data } = await apiInstance.getAllIntegrationConfigurations(
    integrationKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationKey** | [**string**] | Integration key | defaults to undefined|


### Return type

**IntegrationConfigurationCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of Integration Configurations |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Integration key not found |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntegrationConfiguration**
> IntegrationConfigurationsRep getIntegrationConfiguration()

Get integration configuration with the specified ID. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)

### Example

```typescript
import {
    IntegrationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationsBetaApi(configuration);

let integrationConfigurationId: string; //Integration configuration ID (default to undefined)

const { status, data } = await apiInstance.getIntegrationConfiguration(
    integrationConfigurationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationConfigurationId** | [**string**] | Integration configuration ID | defaults to undefined|


### Return type

**IntegrationConfigurationsRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration Configuration response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Integration ID not found |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateIntegrationConfiguration**
> IntegrationConfigurationsRep updateIntegrationConfiguration(patchOperation)

Update an integration configuration. Updating an integration configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    IntegrationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationsBetaApi(configuration);

let integrationConfigurationId: string; //The ID of the integration configuration (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.updateIntegrationConfiguration(
    integrationConfigurationId,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **integrationConfigurationId** | [**string**] | The ID of the integration configuration | defaults to undefined|


### Return type

**IntegrationConfigurationsRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration configuration response |  -  |
|**400** | Invalid request |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

