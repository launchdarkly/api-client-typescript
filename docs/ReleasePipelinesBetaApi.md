# ReleasePipelinesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteReleasePipeline**](#deletereleasepipeline) | **DELETE** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Delete release pipeline|
|[**getAllReleasePipelines**](#getallreleasepipelines) | **GET** /api/v2/projects/{projectKey}/release-pipelines | Get all release pipelines|
|[**getAllReleaseProgressionsForReleasePipeline**](#getallreleaseprogressionsforreleasepipeline) | **GET** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}/releases | Get release progressions for release pipeline|
|[**getReleasePipelineByKey**](#getreleasepipelinebykey) | **GET** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Get release pipeline by key|
|[**postReleasePipeline**](#postreleasepipeline) | **POST** /api/v2/projects/{projectKey}/release-pipelines | Create a release pipeline|
|[**putReleasePipeline**](#putreleasepipeline) | **PUT** /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey} | Update a release pipeline|

# **deleteReleasePipeline**
> deleteReleasePipeline()

Deletes a release pipeline.  You cannot delete the default release pipeline.  If you want to delete a release pipeline that is currently the default, create a second release pipeline and set it as the default. Then delete the first release pipeline. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`. 

### Example

```typescript
import {
    ReleasePipelinesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let pipelineKey: string; //The release pipeline key (default to undefined)

const { status, data } = await apiInstance.deleteReleasePipeline(
    projectKey,
    pipelineKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **pipelineKey** | [**string**] | The release pipeline key | defaults to undefined|


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
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllReleasePipelines**
> ReleasePipelineCollection getAllReleasePipelines()

Get all release pipelines for a project.  ### Filtering release pipelines  LaunchDarkly supports the following fields for filters:  - `query` is a string that matches against the release pipeline `key`, `name`, and `description`. It is not case sensitive. For example: `?filter=query:examplePipeline`.  - `env` is a string that matches an environment key. For example: `?filter=env:production`. 

### Example

```typescript
import {
    ReleasePipelinesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let filter: string; //A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields. (optional) (default to undefined)
let limit: number; //The maximum number of items to return. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllReleasePipelines(
    projectKey,
    filter,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields. | (optional) defaults to undefined|
| **limit** | [**number**] | The maximum number of items to return. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**ReleasePipelineCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release pipeline collection |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllReleaseProgressionsForReleasePipeline**
> ReleaseProgressionCollection getAllReleaseProgressionsForReleasePipeline()

Get details on the progression of all releases, across all flags, for a release pipeline

### Example

```typescript
import {
    ReleasePipelinesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let pipelineKey: string; //The pipeline key (default to undefined)
let filter: string; //Accepts filter by `status` and `activePhaseId`. `status` can take a value of `completed` or `active`. `activePhaseId` takes a UUID and will filter results down to releases active on the specified phase. Providing `status equals completed` along with an `activePhaseId` filter will return an error as they are disjoint sets of data. The combination of `status equals active` and `activePhaseId` will return the same results as `activePhaseId` alone. (optional) (default to undefined)
let limit: number; //The maximum number of items to return. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllReleaseProgressionsForReleasePipeline(
    projectKey,
    pipelineKey,
    filter,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **pipelineKey** | [**string**] | The pipeline key | defaults to undefined|
| **filter** | [**string**] | Accepts filter by &#x60;status&#x60; and &#x60;activePhaseId&#x60;. &#x60;status&#x60; can take a value of &#x60;completed&#x60; or &#x60;active&#x60;. &#x60;activePhaseId&#x60; takes a UUID and will filter results down to releases active on the specified phase. Providing &#x60;status equals completed&#x60; along with an &#x60;activePhaseId&#x60; filter will return an error as they are disjoint sets of data. The combination of &#x60;status equals active&#x60; and &#x60;activePhaseId&#x60; will return the same results as &#x60;activePhaseId&#x60; alone. | (optional) defaults to undefined|
| **limit** | [**number**] | The maximum number of items to return. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**ReleaseProgressionCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release progression collection |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReleasePipelineByKey**
> ReleasePipeline getReleasePipelineByKey()

Get a release pipeline by key

### Example

```typescript
import {
    ReleasePipelinesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let pipelineKey: string; //The release pipeline key (default to undefined)

const { status, data } = await apiInstance.getReleasePipelineByKey(
    projectKey,
    pipelineKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **pipelineKey** | [**string**] | The release pipeline key | defaults to undefined|


### Return type

**ReleasePipeline**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release pipeline response |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postReleasePipeline**
> ReleasePipeline postReleasePipeline(createReleasePipelineInput)

Creates a new release pipeline.  The first release pipeline you create is automatically set as the default release pipeline for your project. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`.  You can create up to 20 release pipelines per project. 

### Example

```typescript
import {
    ReleasePipelinesBetaApi,
    Configuration,
    CreateReleasePipelineInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let createReleasePipelineInput: CreateReleasePipelineInput; //

const { status, data } = await apiInstance.postReleasePipeline(
    projectKey,
    createReleasePipelineInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReleasePipelineInput** | **CreateReleasePipelineInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**ReleasePipeline**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Release pipeline response |  -  |
|**400** | Invalid request |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putReleasePipeline**
> ReleasePipeline putReleasePipeline(updateReleasePipelineInput)

Updates a release pipeline.

### Example

```typescript
import {
    ReleasePipelinesBetaApi,
    Configuration,
    UpdateReleasePipelineInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let pipelineKey: string; //The release pipeline key (default to undefined)
let updateReleasePipelineInput: UpdateReleasePipelineInput; //

const { status, data } = await apiInstance.putReleasePipeline(
    projectKey,
    pipelineKey,
    updateReleasePipelineInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateReleasePipelineInput** | **UpdateReleasePipelineInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **pipelineKey** | [**string**] | The release pipeline key | defaults to undefined|


### Return type

**ReleasePipeline**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release pipeline response |  -  |
|**400** | Invalid request |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

