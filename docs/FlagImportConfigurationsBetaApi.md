# FlagImportConfigurationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFlagImportConfiguration**](#createflagimportconfiguration) | **POST** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey} | Create a flag import configuration|
|[**deleteFlagImportConfiguration**](#deleteflagimportconfiguration) | **DELETE** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Delete a flag import configuration|
|[**getFlagImportConfiguration**](#getflagimportconfiguration) | **GET** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Get a single flag import configuration|
|[**getFlagImportConfigurations**](#getflagimportconfigurations) | **GET** /api/v2/integration-capabilities/flag-import | List all flag import configurations|
|[**patchFlagImportConfiguration**](#patchflagimportconfiguration) | **PATCH** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId} | Update a flag import configuration|
|[**triggerFlagImportJob**](#triggerflagimportjob) | **POST** /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger | Trigger a single flag import run|

# **createFlagImportConfiguration**
> FlagImportIntegration createFlagImportConfiguration(flagImportConfigurationPost)

Create a new flag import configuration. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`. The `config` object in the request body schema is described by the global integration settings, as specified by the <code>formVariables</code> in the <code>manifest.json</code> for this integration. It varies slightly based on the `integrationKey`.

### Example

```typescript
import {
    FlagImportConfigurationsBetaApi,
    Configuration,
    FlagImportConfigurationPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagImportConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let flagImportConfigurationPost: FlagImportConfigurationPost; //

const { status, data } = await apiInstance.createFlagImportConfiguration(
    projectKey,
    integrationKey,
    flagImportConfigurationPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flagImportConfigurationPost** | **FlagImportConfigurationPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|


### Return type

**FlagImportIntegration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag Import Configuration response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Project not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFlagImportConfiguration**
> deleteFlagImportConfiguration()

Delete a flag import configuration by ID. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.

### Example

```typescript
import {
    FlagImportConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagImportConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let integrationId: string; //The integration ID (default to undefined)

const { status, data } = await apiInstance.deleteFlagImportConfiguration(
    projectKey,
    integrationKey,
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **integrationId** | [**string**] | The integration ID | defaults to undefined|


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
|**204** | Action completed successfully |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Project or import configuration not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFlagImportConfiguration**
> FlagImportIntegration getFlagImportConfiguration()

Get a single flag import configuration by ID. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.

### Example

```typescript
import {
    FlagImportConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagImportConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let integrationKey: string; //The integration key, for example, `split` (default to undefined)
let integrationId: string; //The integration ID (default to undefined)

const { status, data } = await apiInstance.getFlagImportConfiguration(
    projectKey,
    integrationKey,
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key, for example, &#x60;split&#x60; | defaults to undefined|
| **integrationId** | [**string**] | The integration ID | defaults to undefined|


### Return type

**FlagImportIntegration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag import response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Project or import configuration not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFlagImportConfigurations**
> FlagImportIntegrationCollection getFlagImportConfigurations()

List all flag import configurations.

### Example

```typescript
import {
    FlagImportConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagImportConfigurationsBetaApi(configuration);

const { status, data } = await apiInstance.getFlagImportConfigurations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FlagImportIntegrationCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag Import Configuration response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Project not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchFlagImportConfiguration**
> FlagImportIntegration patchFlagImportConfiguration(patchOperation)

Updating a flag import configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the import configuration fields that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.<br/><br/>You can update the `config`, `tags`, and `name` of the flag import configuration.

### Example

```typescript
import {
    FlagImportConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagImportConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let integrationId: string; //The integration ID (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchFlagImportConfiguration(
    projectKey,
    integrationKey,
    integrationId,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **integrationId** | [**string**] | The integration ID | defaults to undefined|


### Return type

**FlagImportIntegration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag import response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Project or import configuration not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggerFlagImportJob**
> triggerFlagImportJob()

Trigger a single flag import run for an existing flag import configuration. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.

### Example

```typescript
import {
    FlagImportConfigurationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagImportConfigurationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let integrationKey: string; //The integration key (default to undefined)
let integrationId: string; //The integration ID (default to undefined)

const { status, data } = await apiInstance.triggerFlagImportJob(
    projectKey,
    integrationKey,
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **integrationId** | [**string**] | The integration ID | defaults to undefined|


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
|**201** | Import job queued successfully |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Project or import configuration not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

