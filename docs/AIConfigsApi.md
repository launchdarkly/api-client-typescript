# AIConfigsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listAIToolReferences**](#listaitoolreferences) | **GET** /api/v2/projects/{projectKey}/ai-tools/{toolKey}/references | List AI tool references|
|[**listAgentOptimizationRuns**](#listagentoptimizationruns) | **GET** /api/v2/projects/{projectKey}/agent-optimizations/{optimizationKey}/runs | List agent optimization runs|

# **listAIToolReferences**
> ToolReferences listAIToolReferences()

Get all AgentControl config variations that currently reference this tool.

### Example

```typescript
import {
    AIConfigsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsApi(configuration);

let projectKey: string; // (default to undefined)
let toolKey: string; // (default to undefined)
let limit: number; //The number of resources to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.listAIToolReferences(
    projectKey,
    toolKey,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] |  | defaults to undefined|
| **toolKey** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] | The number of resources to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**ToolReferences**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | AI tool references |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAgentOptimizationRuns**
> AgentOptimizationRuns listAgentOptimizationRuns()

Get one run summary per distinct run_id across all versions of an agent optimization config, ordered by created_at DESC.

### Example

```typescript
import {
    AIConfigsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AIConfigsApi(configuration);

let projectKey: string; // (default to undefined)
let optimizationKey: string; // (default to undefined)
let limit: number; //The number of resources to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.listAgentOptimizationRuns(
    projectKey,
    optimizationKey,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] |  | defaults to undefined|
| **optimizationKey** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] | The number of resources to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**AgentOptimizationRuns**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Agent optimization run list |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

