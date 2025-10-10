# InsightsRepositoriesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**associateRepositoriesAndProjects**](#associaterepositoriesandprojects) | **PUT** /api/v2/engineering-insights/repositories/projects | Associate repositories with projects|
|[**deleteRepositoryProject**](#deleterepositoryproject) | **DELETE** /api/v2/engineering-insights/repositories/{repositoryKey}/projects/{projectKey} | Remove repository project association|
|[**getInsightsRepositories**](#getinsightsrepositories) | **GET** /api/v2/engineering-insights/repositories | List repositories|

# **associateRepositoriesAndProjects**
> InsightsRepositoryProjectCollection associateRepositoriesAndProjects(insightsRepositoryProjectMappings)

Associate repositories with projects

### Example

```typescript
import {
    InsightsRepositoriesBetaApi,
    Configuration,
    InsightsRepositoryProjectMappings
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsRepositoriesBetaApi(configuration);

let insightsRepositoryProjectMappings: InsightsRepositoryProjectMappings; //

const { status, data } = await apiInstance.associateRepositoriesAndProjects(
    insightsRepositoryProjectMappings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **insightsRepositoryProjectMappings** | **InsightsRepositoryProjectMappings**|  | |


### Return type

**InsightsRepositoryProjectCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Repositories projects response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRepositoryProject**
> deleteRepositoryProject()

Remove repository project association

### Example

```typescript
import {
    InsightsRepositoriesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsRepositoriesBetaApi(configuration);

let repositoryKey: string; //The repository key (default to undefined)
let projectKey: string; //The project key (default to undefined)

const { status, data } = await apiInstance.deleteRepositoryProject(
    repositoryKey,
    projectKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repositoryKey** | [**string**] | The repository key | defaults to undefined|
| **projectKey** | [**string**] | The project key | defaults to undefined|


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

# **getInsightsRepositories**
> InsightsRepositoryCollection getInsightsRepositories()

Get a list of repositories  ### Expanding the repository collection response  LaunchDarkly supports expanding the repository collection response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `projects` includes details on all of the LaunchDarkly projects associated with each repository  For example, use `?expand=projects` to include the `projects` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsRepositoriesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsRepositoriesBetaApi(configuration);

let expand: string; //Expand properties in response. Options: `projects` (optional) (default to undefined)

const { status, data } = await apiInstance.getInsightsRepositories(
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **expand** | [**string**] | Expand properties in response. Options: &#x60;projects&#x60; | (optional) defaults to undefined|


### Return type

**InsightsRepositoryCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Repository collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

