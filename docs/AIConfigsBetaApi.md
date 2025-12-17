# AIConfigsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAIConfig**](#deleteaiconfig) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Delete AI Config|
|[**deleteAIConfigVariation**](#deleteaiconfigvariation) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Delete AI Config variation|
|[**deleteAITool**](#deleteaitool) | **DELETE** /api/v2/projects/{projectKey}/ai-tools/{toolKey} | Delete AI tool|
|[**deleteModelConfig**](#deletemodelconfig) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey} | Delete an AI model config|
|[**deleteRestrictedModels**](#deleterestrictedmodels) | **DELETE** /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted | Remove AI models from the restricted list|
|[**getAIConfig**](#getaiconfig) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Get AI Config|
|[**getAIConfigMetrics**](#getaiconfigmetrics) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics | Get AI Config metrics|
|[**getAIConfigMetricsByVariation**](#getaiconfigmetricsbyvariation) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics-by-variation | Get AI Config metrics by variation|
|[**getAIConfigTargeting**](#getaiconfigtargeting) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting | Show an AI Config\&#39;s targeting|
|[**getAIConfigVariation**](#getaiconfigvariation) | **GET** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Get AI Config variation|
|[**getAIConfigs**](#getaiconfigs) | **GET** /api/v2/projects/{projectKey}/ai-configs | List AI Configs|
|[**getAITool**](#getaitool) | **GET** /api/v2/projects/{projectKey}/ai-tools/{toolKey} | Get AI tool|
|[**getModelConfig**](#getmodelconfig) | **GET** /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey} | Get AI model config|
|[**listAIToolVersions**](#listaitoolversions) | **GET** /api/v2/projects/{projectKey}/ai-tools/{toolKey}/versions | List AI tool versions|
|[**listAITools**](#listaitools) | **GET** /api/v2/projects/{projectKey}/ai-tools | List AI tools|
|[**listAgentGraphs**](#listagentgraphs) | **GET** /api/v2/projects/{projectKey}/agent-graphs | List agent graphs|
|[**listModelConfigs**](#listmodelconfigs) | **GET** /api/v2/projects/{projectKey}/ai-configs/model-configs | List AI model configs|
|[**patchAIConfig**](#patchaiconfig) | **PATCH** /api/v2/projects/{projectKey}/ai-configs/{configKey} | Update AI Config|
|[**patchAIConfigTargeting**](#patchaiconfigtargeting) | **PATCH** /api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting | Update AI Config targeting|
|[**patchAIConfigVariation**](#patchaiconfigvariation) | **PATCH** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey} | Update AI Config variation|
|[**patchAITool**](#patchaitool) | **PATCH** /api/v2/projects/{projectKey}/ai-tools/{toolKey} | Update AI tool|
|[**postAIConfig**](#postaiconfig) | **POST** /api/v2/projects/{projectKey}/ai-configs | Create new AI Config|
|[**postAIConfigVariation**](#postaiconfigvariation) | **POST** /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations | Create AI Config variation|
|[**postAITool**](#postaitool) | **POST** /api/v2/projects/{projectKey}/ai-tools | Create an AI tool|
|[**postAgentGraph**](#postagentgraph) | **POST** /api/v2/projects/{projectKey}/agent-graphs | Create new agent graph|
|[**postModelConfig**](#postmodelconfig) | **POST** /api/v2/projects/{projectKey}/ai-configs/model-configs | Create an AI model config|
|[**postRestrictedModels**](#postrestrictedmodels) | **POST** /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted | Add AI models to the restricted list|

# **deleteAIConfig**
> deleteAIConfig()

Delete an existing AI Config.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAIConfig(
    lDAPIVersion,
    projectKey,
    configKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|


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
|**204** | No content |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAIConfigVariation**
> deleteAIConfigVariation()

Delete a specific variation of an AI Config by config key and variation key.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)
let variationKey: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAIConfigVariation(
    lDAPIVersion,
    projectKey,
    configKey,
    variationKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|
| **variationKey** | [**string**] |  | defaults to undefined|


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
|**204** | No content |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAITool**
> deleteAITool()

Delete an existing AI tool.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let toolKey: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAITool(
    lDAPIVersion,
    projectKey,
    toolKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **toolKey** | [**string**] |  | defaults to undefined|


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
|**204** | No content |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteModelConfig**
> deleteModelConfig()

Delete an AI model config.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let modelConfigKey: string; // (default to undefined)

const { status, data } = await apiInstance.deleteModelConfig(
    lDAPIVersion,
    projectKey,
    modelConfigKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **modelConfigKey** | [**string**] |  | defaults to undefined|


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
|**204** | No content |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRestrictedModels**
> deleteRestrictedModels(restrictedModelsRequest)

Remove AI models, by key, from the restricted list.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    RestrictedModelsRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let restrictedModelsRequest: RestrictedModelsRequest; //List of AI model keys to remove from the restricted list

const { status, data } = await apiInstance.deleteRestrictedModels(
    lDAPIVersion,
    projectKey,
    restrictedModelsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **restrictedModelsRequest** | **RestrictedModelsRequest**| List of AI model keys to remove from the restricted list | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No content |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIConfig**
> AIConfig getAIConfig()

Retrieve a specific AI Config by its key.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)

const { status, data } = await apiInstance.getAIConfig(
    lDAPIVersion,
    projectKey,
    configKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|


### Return type

**AIConfig**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI Config found |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIConfigMetrics**
> Metrics getAIConfigMetrics()

Retrieve usage metrics for an AI Config by config key.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)
let from: number; //The starting time, as milliseconds since epoch (inclusive). (default to undefined)
let to: number; //The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`. (default to undefined)
let env: string; //An environment key. Only metrics from this environment will be included. (default to undefined)

const { status, data } = await apiInstance.getAIConfigMetrics(
    lDAPIVersion,
    projectKey,
    configKey,
    from,
    to,
    env
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|
| **from** | [**number**] | The starting time, as milliseconds since epoch (inclusive). | defaults to undefined|
| **to** | [**number**] | The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after &#x60;from&#x60;. | defaults to undefined|
| **env** | [**string**] | An environment key. Only metrics from this environment will be included. | defaults to undefined|


### Return type

**Metrics**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metrics computed |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIConfigMetricsByVariation**
> Array<MetricByVariation> getAIConfigMetricsByVariation()

Retrieve usage metrics for an AI Config by config key, with results split by variation.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)
let from: number; //The starting time, as milliseconds since epoch (inclusive). (default to undefined)
let to: number; //The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`. (default to undefined)
let env: string; //An environment key. Only metrics from this environment will be included. (default to undefined)

const { status, data } = await apiInstance.getAIConfigMetricsByVariation(
    lDAPIVersion,
    projectKey,
    configKey,
    from,
    to,
    env
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|
| **from** | [**number**] | The starting time, as milliseconds since epoch (inclusive). | defaults to undefined|
| **to** | [**number**] | The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after &#x60;from&#x60;. | defaults to undefined|
| **env** | [**string**] | An environment key. Only metrics from this environment will be included. | defaults to undefined|


### Return type

**Array<MetricByVariation>**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metrics computed |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIConfigTargeting**
> AIConfigTargeting getAIConfigTargeting()

Retrieves a specific AI Config\'s targeting by its key

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)

const { status, data } = await apiInstance.getAIConfigTargeting(
    lDAPIVersion,
    projectKey,
    configKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|


### Return type

**AIConfigTargeting**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAIConfigVariation**
> AIConfigVariationsResponse getAIConfigVariation()

Get an AI Config variation by key. The response includes all variation versions for the given variation key.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)
let variationKey: string; // (default to undefined)

const { status, data } = await apiInstance.getAIConfigVariation(
    lDAPIVersion,
    projectKey,
    configKey,
    variationKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|
| **variationKey** | [**string**] |  | defaults to undefined|


### Return type

**AIConfigVariationsResponse**

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

# **getAIConfigs**
> AIConfigs getAIConfigs()

Get a list of all AI Configs in the given project.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let sort: string; //A sort to apply to the list of AI Configs. (optional) (default to undefined)
let limit: number; //The number of AI Configs to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let filter: string; //A filter to apply to the list of AI Configs. (optional) (default to undefined)

const { status, data } = await apiInstance.getAIConfigs(
    lDAPIVersion,
    projectKey,
    sort,
    limit,
    offset,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **sort** | [**string**] | A sort to apply to the list of AI Configs. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of AI Configs to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A filter to apply to the list of AI Configs. | (optional) defaults to undefined|


### Return type

**AIConfigs**

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

# **getAITool**
> AITool getAITool()

Retrieve a specific AI tool by its key.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let toolKey: string; // (default to undefined)

const { status, data } = await apiInstance.getAITool(
    lDAPIVersion,
    projectKey,
    toolKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **toolKey** | [**string**] |  | defaults to undefined|


### Return type

**AITool**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI tool found |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getModelConfig**
> ModelConfig getModelConfig()

Get an AI model config by key.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let modelConfigKey: string; // (default to undefined)

const { status, data } = await apiInstance.getModelConfig(
    lDAPIVersion,
    projectKey,
    modelConfigKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **modelConfigKey** | [**string**] |  | defaults to undefined|


### Return type

**ModelConfig**

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

# **listAIToolVersions**
> AITools listAIToolVersions()

Get a list of all versions of an AI tool in the given project.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let toolKey: string; // (default to undefined)
let sort: string; //A sort to apply to the list of AI Configs. (optional) (default to undefined)
let limit: number; //The number of AI Configs to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.listAIToolVersions(
    lDAPIVersion,
    projectKey,
    toolKey,
    sort,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **toolKey** | [**string**] |  | defaults to undefined|
| **sort** | [**string**] | A sort to apply to the list of AI Configs. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of AI Configs to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**AITools**

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
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAITools**
> AITools listAITools()

Get a list of all AI tools in the given project.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let sort: string; //A sort to apply to the list of AI Configs. (optional) (default to undefined)
let limit: number; //The number of AI Configs to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let filter: string; //A filter to apply to the list of AI Configs. (optional) (default to undefined)

const { status, data } = await apiInstance.listAITools(
    lDAPIVersion,
    projectKey,
    sort,
    limit,
    offset,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **sort** | [**string**] | A sort to apply to the list of AI Configs. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of AI Configs to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A filter to apply to the list of AI Configs. | (optional) defaults to undefined|


### Return type

**AITools**

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
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAgentGraphs**
> AgentGraphs listAgentGraphs()

Get a list of all agent graphs in the given project. Returns metadata only, without edge data.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let limit: number; //The number of AI Configs to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.listAgentGraphs(
    lDAPIVersion,
    projectKey,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] | The number of AI Configs to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**AgentGraphs**

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
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listModelConfigs**
> Array<ModelConfig> listModelConfigs()

Get all AI model configs for a project.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let restricted: boolean; //Whether to return only restricted models (optional) (default to undefined)

const { status, data } = await apiInstance.listModelConfigs(
    lDAPIVersion,
    projectKey,
    restricted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **restricted** | [**boolean**] | Whether to return only restricted models | (optional) defaults to undefined|


### Return type

**Array<ModelConfig>**

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

# **patchAIConfig**
> AIConfig patchAIConfig()

Edit an existing AI Config.  The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.  Here\'s an example:   ```     {       \"description\": \"Example updated description\",       \"tags\": [\"new-tag\"]     }   ``` 

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    AIConfigPatch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)
let aIConfigPatch: AIConfigPatch; //AI Config object to update (optional)

const { status, data } = await apiInstance.patchAIConfig(
    lDAPIVersion,
    projectKey,
    configKey,
    aIConfigPatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIConfigPatch** | **AIConfigPatch**| AI Config object to update | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|


### Return type

**AIConfig**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI Config updated |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchAIConfigTargeting**
> AIConfigTargeting patchAIConfigTargeting()

Perform a partial update to an AI Config\'s targeting. The request body must be a valid semantic patch.  ### Using semantic patches on an AI Config  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  The body of a semantic patch request for updating an AI Config\'s targeting takes the following properties:  * `comment` (string): (Optional) A description of the update. * `environmentKey` (string): The key of the LaunchDarkly environment. * `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object. The body of a single semantic patch can contain many different instructions.  ### Instructions  Semantic patch requests support the following `kind` instructions for updating AI Configs.  <details> <summary>Click to expand instructions for <strong>working with targeting and variations</strong> for AI Configs</summary>  #### addClauses  Adds the given clauses to the rule indicated by `ruleId`.  ##### Parameters  - `ruleId`: ID of a rule in the AI Config. - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.  Here\'s an example:  ```json {   \"environmentKey\": \"environment-key-123abc\",   \"instructions\": [{     \"kind\": \"addClauses\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauses\": [{       \"contextKind\": \"user\",       \"attribute\": \"country\",       \"op\": \"in\",       \"negate\": false,       \"values\": [\"USA\", \"Canada\"]     }]   }] } ```  #### addRule  Adds a new targeting rule to the AI Config. The rule may contain `clauses` and serve the variation that `variationId` indicates, or serve a percentage rollout that `rolloutWeights`, `rolloutBucketBy`, and `rolloutContextKind` indicate.  If you set `beforeRuleId`, this adds the new rule before the indicated rule. Otherwise, adds the new rule to the end of the list.  ##### Parameters  - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case. - `beforeRuleId`: (Optional) ID of a rule. - Either - `variationId`: ID of a variation.  or  - `rolloutWeights`: (Optional) Map of `variationId` to weight, in thousandths of a percent (0-100000). - `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`. - `rolloutContextKind`: (Optional) Context kind, defaults to `user`  Here\'s an example that uses a `variationId`:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"addRule\",   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\",   \"clauses\": [{     \"contextKind\": \"organization\",     \"attribute\": \"located_in\",     \"op\": \"in\",     \"negate\": false,     \"values\": [\"Sweden\", \"Norway\"]   }] }] } ```  Here\'s an example that uses a percentage rollout:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"addRule\",   \"clauses\": [{     \"contextKind\": \"organization\",     \"attribute\": \"located_in\",     \"op\": \"in\",     \"negate\": false,     \"values\": [\"Sweden\", \"Norway\"]   }],   \"rolloutContextKind\": \"organization\",   \"rolloutWeights\": {     \"2f43f67c-3e4e-4945-a18a-26559378ca00\": 15000, // serve 15% this variation     \"e5830889-1ec5-4b0c-9cc9-c48790090c43\": 85000  // serve 85% this variation   } }] } ```  #### addTargets  Adds context keys to the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Returns an error if this causes the AI Config to target the same context key in multiple variations.  ##### Parameters  - `values`: List of context keys. - `contextKind`: (Optional) Context kind to target, defaults to `user` - `variationId`: ID of a variation.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"addTargets\",   \"values\": [\"context-key-123abc\", \"context-key-456def\"],   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" }] } ```  #### addValuesToClause  Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.  ##### Parameters  - `ruleId`: ID of a rule in the AI Config. - `clauseId`: ID of a clause in that rule. - `values`: Array of strings, case sensitive.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"addValuesToClause\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"clauseId\": \"10a58772-3121-400f-846b-b8a04e8944ed\",   \"values\": [\"beta_testers\"] }] } ```  #### clearTargets  Removes all individual targets from the variation that `variationId` specifies. This includes both user and non-user targets.  ##### Parameters  - `variationId`: ID of a variation.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"clearTargets\", \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" } ] } ```  #### removeClauses  Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.  ##### Parameters  - `ruleId`: ID of a rule. - `clauseIds`: Array of IDs of clauses in the rule.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"removeClauses\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"clauseIds\": [\"10a58772-3121-400f-846b-b8a04e8944ed\", \"36a461dc-235e-4b08-97b9-73ce9365873e\"] }] } ```  #### removeRule  Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.  ##### Parameters  - `ruleId`: ID of a rule.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"removeRule\", \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\" } ] } ```  #### removeTargets  Removes context keys from the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Does nothing if the flag does not target the context keys.  ##### Parameters  - `values`: List of context keys. - `contextKind`: (Optional) Context kind to target, defaults to `user` - `variationId`: ID of a variation.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"removeTargets\",   \"values\": [\"context-key-123abc\", \"context-key-456def\"],   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" }] } ```  #### removeValuesFromClause  Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.  ##### Parameters  - `ruleId`: ID of a rule. - `clauseId`: ID of a clause in that rule. - `values`: Array of strings, case sensitive.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"removeValuesFromClause\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"clauseId\": \"10a58772-3121-400f-846b-b8a04e8944ed\",   \"values\": [\"beta_testers\"] }] } ```  #### reorderRules  Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules on the AI Config.  ##### Parameters  - `ruleIds`: Array of IDs of all rules.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"reorderRules\",   \"ruleIds\": [\"a902ef4a-2faf-4eaf-88e1-ecc356708a29\", \"63c238d1-835d-435e-8f21-c8d5e40b2a3d\"] }] } ```  #### replaceRules  Removes all targeting rules for the AI Config and replaces them with the list you provide.  ##### Parameters  - `rules`: A list of rules.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [   {     \"kind\": \"replaceRules\",     \"rules\": [       {         \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\",         \"description\": \"My new rule\",         \"clauses\": [           {             \"contextKind\": \"user\",             \"attribute\": \"segmentMatch\",             \"op\": \"segmentMatch\",             \"values\": [\"test\"]           }         ]       }     ]   } ] } ```  #### replaceTargets  Removes all existing targeting and replaces it with the list of targets you provide.  ##### Parameters  - `targets`: A list of context targeting. Each item in the list includes an optional `contextKind` that defaults to `user`, a required `variationId`, and a required list of `values`.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [   {     \"kind\": \"replaceTargets\",     \"targets\": [       {         \"contextKind\": \"user\",         \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\",         \"values\": [\"user-key-123abc\"]       },       {         \"contextKind\": \"device\",         \"variationId\": \"e5830889-1ec5-4b0c-9cc9-c48790090c43\",         \"values\": [\"device-key-456def\"]       }     ]   } ] } ```  #### updateClause  Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.  ##### Parameters  - `ruleId`: ID of a rule. - `clauseId`: ID of a clause in that rule. - `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateClause\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"clauseId\": \"10c7462a-2062-45ba-a8bb-dfb3de0f8af5\",   \"clause\": {     \"contextKind\": \"user\",     \"attribute\": \"country\",     \"op\": \"in\",     \"negate\": false,     \"values\": [\"Mexico\", \"Canada\"]   } }] } ```  #### updateDefaultVariation  Updates the default on or off variation of the AI Config.  ##### Parameters  - `onVariationValue`: (Optional) The value of the variation of the new on variation. - `offVariationValue`: (Optional) The value of the variation of the new off variation  Here\'s an example:  ```json { \"instructions\": [ { \"kind\": \"updateDefaultVariation\", \"OnVariationValue\": true, \"OffVariationValue\": false } ] } ```  #### updateFallthroughVariationOrRollout  Updates the default or \"fallthrough\" rule for the AI Config, which the AI Config serves when a context matches none of the targeting rules. The rule can serve either the variation that `variationId` indicates, or a percentage rollout that `rolloutWeights` and `rolloutBucketBy` indicate.  ##### Parameters  - `variationId`: ID of a variation.  or  - `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000). - `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`. - `rolloutContextKind`: (Optional) Context kind, defaults to `user`  Here\'s an example that uses a `variationId`:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateFallthroughVariationOrRollout\",   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" }] } ```  Here\'s an example that uses a percentage rollout:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateFallthroughVariationOrRollout\",   \"rolloutContextKind\": \"user\",   \"rolloutWeights\": {     \"2f43f67c-3e4e-4945-a18a-26559378ca00\": 15000, // serve 15% this variation     \"e5830889-1ec5-4b0c-9cc9-c48790090c43\": 85000  // serve 85% this variation   } }] } ```  #### updateOffVariation  Updates the default off variation to `variationId`. The AI Config serves the default off variation when the AI Config\'s targeting is **Off**.  ##### Parameters  - `variationId`: ID of a variation.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"updateOffVariation\", \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" } ] } ```  #### updateRuleDescription  Updates the description of the targeting rule.  ##### Parameters  - `description`: The new human-readable description for this rule. - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the AI Config.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateRuleDescription\",   \"description\": \"New rule description\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\" }] } ```  #### updateRuleTrackEvents  Updates whether or not LaunchDarkly tracks events for the AI Config associated with this rule.  ##### Parameters  - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the AI Config. - `trackEvents`: Whether or not events are tracked.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateRuleTrackEvents\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"trackEvents\": true }] } ```  #### updateRuleVariationOrRollout  Updates what `ruleId` serves when its clauses evaluate to true. The rule can serve either the variation that `variationId` indicates, or a percent rollout that `rolloutWeights` and `rolloutBucketBy` indicate.  ##### Parameters  - `ruleId`: ID of a rule. - `variationId`: ID of a variation.  or  - `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000). - `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`. - `rolloutContextKind`: (Optional) Context kind, defaults to `user`  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [{   \"kind\": \"updateRuleVariationOrRollout\",   \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   \"variationId\": \"2f43f67c-3e4e-4945-a18a-26559378ca00\" }] } ```  #### updateTrackEvents  Updates whether or not LaunchDarkly tracks events for the AI Config, for all rules.  ##### Parameters  - `trackEvents`: Whether or not events are tracked.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"updateTrackEvents\", \"trackEvents\": true } ] } ```  #### updateTrackEventsFallthrough  Updates whether or not LaunchDarkly tracks events for the AI Config, for the default rule.  ##### Parameters  - `trackEvents`: Whether or not events are tracked.  Here\'s an example:  ```json { \"environmentKey\": \"environment-key-123abc\", \"instructions\": [ { \"kind\": \"updateTrackEventsFallthrough\", \"trackEvents\": true } ] } ``` </details> 

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    AIConfigTargetingPatch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)
let aIConfigTargetingPatch: AIConfigTargetingPatch; //AI Config targeting semantic patch instructions (optional)

const { status, data } = await apiInstance.patchAIConfigTargeting(
    lDAPIVersion,
    projectKey,
    configKey,
    aIConfigTargetingPatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIConfigTargetingPatch** | **AIConfigTargetingPatch**| AI Config targeting semantic patch instructions | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|


### Return type

**AIConfigTargeting**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI Config targeting updated |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchAIConfigVariation**
> AIConfigVariation patchAIConfigVariation()

Edit an existing variation of an AI Config. This creates a new version of the variation.  The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.  Here\'s an example: ```   {     \"messages\": [       {         \"role\": \"system\",         \"content\": \"The new message\"       }     ]   } ``` 

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    AIConfigVariationPatch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)
let variationKey: string; // (default to undefined)
let aIConfigVariationPatch: AIConfigVariationPatch; //AI Config variation object to update (optional)

const { status, data } = await apiInstance.patchAIConfigVariation(
    lDAPIVersion,
    projectKey,
    configKey,
    variationKey,
    aIConfigVariationPatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIConfigVariationPatch** | **AIConfigVariationPatch**| AI Config variation object to update | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|
| **variationKey** | [**string**] |  | defaults to undefined|


### Return type

**AIConfigVariation**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI Config variation updated |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchAITool**
> AITool patchAITool()

Edit an existing AI tool.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    AIToolPatch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let toolKey: string; // (default to undefined)
let aIToolPatch: AIToolPatch; //AI tool object to update (optional)

const { status, data } = await apiInstance.patchAITool(
    lDAPIVersion,
    projectKey,
    toolKey,
    aIToolPatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIToolPatch** | **AIToolPatch**| AI tool object to update | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **toolKey** | [**string**] |  | defaults to undefined|


### Return type

**AITool**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI tool updated |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAIConfig**
> AIConfig postAIConfig(aIConfigPost)

Create a new AI Config within the given project.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    AIConfigPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let aIConfigPost: AIConfigPost; //AI Config object to create

const { status, data } = await apiInstance.postAIConfig(
    lDAPIVersion,
    projectKey,
    aIConfigPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIConfigPost** | **AIConfigPost**| AI Config object to create | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|


### Return type

**AIConfig**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | AI Config created |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAIConfigVariation**
> AIConfigVariation postAIConfigVariation(aIConfigVariationPost)

Create a new variation for a given AI Config.  The <code>model</code> in the request body requires a <code>modelName</code> and <code>parameters</code>, for example:  ```   \"model\": {     \"modelName\": \"claude-3-opus-20240229\",     \"parameters\": {       \"max_tokens\": 1024     }   } ``` 

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    AIConfigVariationPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let configKey: string; // (default to undefined)
let aIConfigVariationPost: AIConfigVariationPost; //AI Config variation object to create

const { status, data } = await apiInstance.postAIConfigVariation(
    lDAPIVersion,
    projectKey,
    configKey,
    aIConfigVariationPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIConfigVariationPost** | **AIConfigVariationPost**| AI Config variation object to create | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **configKey** | [**string**] |  | defaults to undefined|


### Return type

**AIConfigVariation**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | AI Config variation created |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAITool**
> AITool postAITool(aIToolPost)

Create an AI tool

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    AIToolPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let aIToolPost: AIToolPost; //AI tool object to create

const { status, data } = await apiInstance.postAITool(
    lDAPIVersion,
    projectKey,
    aIToolPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aIToolPost** | **AIToolPost**| AI tool object to create | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|


### Return type

**AITool**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | AI tool created |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAgentGraph**
> AgentGraph postAgentGraph(agentGraphPost)

Create a new agent graph within the given project.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    AgentGraphPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let agentGraphPost: AgentGraphPost; //Agent graph object to create

const { status, data } = await apiInstance.postAgentGraph(
    lDAPIVersion,
    projectKey,
    agentGraphPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentGraphPost** | **AgentGraphPost**| Agent graph object to create | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|


### Return type

**AgentGraph**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Agent graph created |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**413** | Payload too large |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postModelConfig**
> ModelConfig postModelConfig(modelConfigPost)

Create an AI model config. You can use this in any variation for any AI Config in your project.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    ModelConfigPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let modelConfigPost: ModelConfigPost; //AI model config object to create

const { status, data } = await apiInstance.postModelConfig(
    lDAPIVersion,
    projectKey,
    modelConfigPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelConfigPost** | **ModelConfigPost**| AI model config object to create | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|


### Return type

**ModelConfig**

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

# **postRestrictedModels**
> RestrictedModelsResponse postRestrictedModels(restrictedModelsRequest)

Add AI models, by key, to the restricted list. Keys are included in the response from the [List AI model configs](https://launchdarkly.com/docs/api/ai-configs-beta/list-model-configs) endpoint.

### Example

```typescript
import {
    AIConfigsBetaApi,
    Configuration,
    RestrictedModelsRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let restrictedModelsRequest: RestrictedModelsRequest; //List of AI model keys to add to the restricted list.

const { status, data } = await apiInstance.postRestrictedModels(
    lDAPIVersion,
    projectKey,
    restrictedModelsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **restrictedModelsRequest** | **RestrictedModelsRequest**| List of AI model keys to add to the restricted list. | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|


### Return type

**RestrictedModelsResponse**

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

