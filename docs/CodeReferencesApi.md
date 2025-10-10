# CodeReferencesApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteBranches**](#deletebranches) | **POST** /api/v2/code-refs/repositories/{repo}/branch-delete-tasks | Delete branches|
|[**deleteRepository**](#deleterepository) | **DELETE** /api/v2/code-refs/repositories/{repo} | Delete repository|
|[**getBranch**](#getbranch) | **GET** /api/v2/code-refs/repositories/{repo}/branches/{branch} | Get branch|
|[**getBranches**](#getbranches) | **GET** /api/v2/code-refs/repositories/{repo}/branches | List branches|
|[**getExtinctions**](#getextinctions) | **GET** /api/v2/code-refs/extinctions | List extinctions|
|[**getRepositories**](#getrepositories) | **GET** /api/v2/code-refs/repositories | List repositories|
|[**getRepository**](#getrepository) | **GET** /api/v2/code-refs/repositories/{repo} | Get repository|
|[**getRootStatistic**](#getrootstatistic) | **GET** /api/v2/code-refs/statistics | Get links to code reference repositories for each project|
|[**getStatistics**](#getstatistics) | **GET** /api/v2/code-refs/statistics/{projectKey} | Get code references statistics for flags|
|[**patchRepository**](#patchrepository) | **PATCH** /api/v2/code-refs/repositories/{repo} | Update repository|
|[**postExtinction**](#postextinction) | **POST** /api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events | Create extinction|
|[**postRepository**](#postrepository) | **POST** /api/v2/code-refs/repositories | Create repository|
|[**putBranch**](#putbranch) | **PUT** /api/v2/code-refs/repositories/{repo}/branches/{branch} | Upsert branch|

# **deleteBranches**
> deleteBranches(requestBody)

Asynchronously delete a number of branches.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repo: string; //The repository name to delete branches for. (default to undefined)
let requestBody: Array<string>; //

const { status, data } = await apiInstance.deleteBranches(
    repo,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**|  | |
| **repo** | [**string**] | The repository name to delete branches for. | defaults to undefined|


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
|**200** | Action succeeded |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRepository**
> deleteRepository()

Delete a repository with the specified name.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repo: string; //The repository name (default to undefined)

const { status, data } = await apiInstance.deleteRepository(
    repo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repo** | [**string**] | The repository name | defaults to undefined|


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

# **getBranch**
> BranchRep getBranch()

Get a specific branch in a repository.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repo: string; //The repository name (default to undefined)
let branch: string; //The url-encoded branch name (default to undefined)
let projKey: string; //Filter results to a specific project (optional) (default to undefined)
let flagKey: string; //Filter results to a specific flag key (optional) (default to undefined)

const { status, data } = await apiInstance.getBranch(
    repo,
    branch,
    projKey,
    flagKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repo** | [**string**] | The repository name | defaults to undefined|
| **branch** | [**string**] | The url-encoded branch name | defaults to undefined|
| **projKey** | [**string**] | Filter results to a specific project | (optional) defaults to undefined|
| **flagKey** | [**string**] | Filter results to a specific flag key | (optional) defaults to undefined|


### Return type

**BranchRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Branch response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBranches**
> BranchCollectionRep getBranches()

Get a list of branches.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repo: string; //The repository name (default to undefined)

const { status, data } = await apiInstance.getBranches(
    repo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repo** | [**string**] | The repository name | defaults to undefined|


### Return type

**BranchCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Branch collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExtinctions**
> ExtinctionCollectionRep getExtinctions()

Get a list of all extinctions. LaunchDarkly creates an extinction event after you remove all code references to a flag. To learn more, read [About extinction events](https://launchdarkly.com/docs/home/observability/code-references#about-extinction-events).

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repoName: string; //Filter results to a specific repository (optional) (default to undefined)
let branchName: string; //Filter results to a specific branch. By default, only the default branch will be queried for extinctions. (optional) (default to undefined)
let projKey: string; //Filter results to a specific project (optional) (default to undefined)
let flagKey: string; //Filter results to a specific flag key (optional) (default to undefined)
let from: number; //Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `to`. (optional) (default to undefined)
let to: number; //Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `from`. (optional) (default to undefined)

const { status, data } = await apiInstance.getExtinctions(
    repoName,
    branchName,
    projKey,
    flagKey,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repoName** | [**string**] | Filter results to a specific repository | (optional) defaults to undefined|
| **branchName** | [**string**] | Filter results to a specific branch. By default, only the default branch will be queried for extinctions. | (optional) defaults to undefined|
| **projKey** | [**string**] | Filter results to a specific project | (optional) defaults to undefined|
| **flagKey** | [**string**] | Filter results to a specific flag key | (optional) defaults to undefined|
| **from** | [**number**] | Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with &#x60;to&#x60;. | (optional) defaults to undefined|
| **to** | [**number**] | Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with &#x60;from&#x60;. | (optional) defaults to undefined|


### Return type

**ExtinctionCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Extinction collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRepositories**
> RepositoryCollectionRep getRepositories()

Get a list of connected repositories. Optionally, you can include branch metadata with the `withBranches` query parameter. Embed references for the default branch with `ReferencesForDefaultBranch`. You can also filter the list of code references by project key and flag key.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let withBranches: string; //If set to any value, the endpoint returns repositories with associated branch data (optional) (default to undefined)
let withReferencesForDefaultBranch: string; //If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch (optional) (default to undefined)
let projKey: string; //A LaunchDarkly project key. If provided, this filters code reference results to the specified project. (optional) (default to undefined)
let flagKey: string; //If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch (optional) (default to undefined)

const { status, data } = await apiInstance.getRepositories(
    withBranches,
    withReferencesForDefaultBranch,
    projKey,
    flagKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **withBranches** | [**string**] | If set to any value, the endpoint returns repositories with associated branch data | (optional) defaults to undefined|
| **withReferencesForDefaultBranch** | [**string**] | If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch | (optional) defaults to undefined|
| **projKey** | [**string**] | A LaunchDarkly project key. If provided, this filters code reference results to the specified project. | (optional) defaults to undefined|
| **flagKey** | [**string**] | If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch | (optional) defaults to undefined|


### Return type

**RepositoryCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Repository collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRepository**
> RepositoryRep getRepository()

Get a single repository by name.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repo: string; //The repository name (default to undefined)

const { status, data } = await apiInstance.getRepository(
    repo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repo** | [**string**] | The repository name | defaults to undefined|


### Return type

**RepositoryRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Repository response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRootStatistic**
> StatisticsRoot getRootStatistic()

Get links for all projects that have code references.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

const { status, data } = await apiInstance.getRootStatistic();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StatisticsRoot**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Statistic root response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatistics**
> StatisticCollectionRep getStatistics()

Get statistics about all the code references across repositories for all flags in your project that have code references in the default branch, for example, `main`. Optionally, you can include the `flagKey` query parameter to limit your request to statistics about code references for a single flag. This endpoint returns the number of references to your flag keys in your repositories, as well as a link to each repository.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let projectKey: string; //The project key (default to undefined)
let flagKey: string; //Filter results to a specific flag key (optional) (default to undefined)

const { status, data } = await apiInstance.getStatistics(
    projectKey,
    flagKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **flagKey** | [**string**] | Filter results to a specific flag key | (optional) defaults to undefined|


### Return type

**StatisticCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Statistic collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchRepository**
> RepositoryRep patchRepository(patchOperation)

Update a repository\'s settings. Updating repository settings uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repo: string; //The repository name (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchRepository(
    repo,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **repo** | [**string**] | The repository name | defaults to undefined|


### Return type

**RepositoryRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Repository response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postExtinction**
> postExtinction(extinction)

Create a new extinction.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repo: string; //The repository name (default to undefined)
let branch: string; //The URL-encoded branch name (default to undefined)
let extinction: Array<Extinction>; //

const { status, data } = await apiInstance.postExtinction(
    repo,
    branch,
    extinction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **extinction** | **Array<Extinction>**|  | |
| **repo** | [**string**] | The repository name | defaults to undefined|
| **branch** | [**string**] | The URL-encoded branch name | defaults to undefined|


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
|**200** | Action succeeded |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postRepository**
> RepositoryRep postRepository(repositoryPost)

Create a repository with the specified name.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration,
    RepositoryPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repositoryPost: RepositoryPost; //

const { status, data } = await apiInstance.postRepository(
    repositoryPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repositoryPost** | **RepositoryPost**|  | |


### Return type

**RepositoryRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Repository response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putBranch**
> putBranch(putBranch)

Create a new branch if it doesn\'t exist, or update the branch if it already exists.

### Example

```typescript
import {
    CodeReferencesApi,
    Configuration,
    PutBranch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new CodeReferencesApi(configuration);

let repo: string; //The repository name (default to undefined)
let branch: string; //The URL-encoded branch name (default to undefined)
let putBranch: PutBranch; //

const { status, data } = await apiInstance.putBranch(
    repo,
    branch,
    putBranch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putBranch** | **PutBranch**|  | |
| **repo** | [**string**] | The repository name | defaults to undefined|
| **branch** | [**string**] | The URL-encoded branch name | defaults to undefined|


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
|**200** | Action succeeded |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

