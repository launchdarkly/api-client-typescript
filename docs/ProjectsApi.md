# ProjectsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteProject**](#deleteproject) | **DELETE** /api/v2/projects/{projectKey} | Delete project|
|[**getFlagDefaultsByProject**](#getflagdefaultsbyproject) | **GET** /api/v2/projects/{projectKey}/flag-defaults | Get flag defaults for project|
|[**getProject**](#getproject) | **GET** /api/v2/projects/{projectKey} | Get project|
|[**getProjects**](#getprojects) | **GET** /api/v2/projects | List projects|
|[**patchFlagDefaultsByProject**](#patchflagdefaultsbyproject) | **PATCH** /api/v2/projects/{projectKey}/flag-defaults | Update flag default for project|
|[**patchProject**](#patchproject) | **PATCH** /api/v2/projects/{projectKey} | Update project|
|[**postProject**](#postproject) | **POST** /api/v2/projects | Create project|
|[**putFlagDefaultsByProject**](#putflagdefaultsbyproject) | **PUT** /api/v2/projects/{projectKey}/flag-defaults | Create or update flag defaults for project|

# **deleteProject**
> deleteProject()

Delete a project by key. Use this endpoint with caution. Deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectKey: string; //The project key (default to undefined)

const { status, data } = await apiInstance.deleteProject(
    projectKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **getFlagDefaultsByProject**
> FlagDefaultsRep getFlagDefaultsByProject()

Get the flag defaults for a specific project.

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectKey: string; //The project key (default to undefined)

const { status, data } = await apiInstance.getFlagDefaultsByProject(
    projectKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**FlagDefaultsRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag defaults response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProject**
> Project getProject()

Get a single project by key.  ### Expanding the project response  LaunchDarkly supports one field for expanding the \"Get project\" response. By default, these fields are **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields: * `environments` includes a paginated list of the project environments.  For example, `expand=environments` includes the `environments` field for the project in the response. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectKey: string; //The project key. (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. (optional) (default to undefined)

const { status, data } = await apiInstance.getProject(
    projectKey,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key. | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. | (optional) defaults to undefined|


### Return type

**Project**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjects**
> Projects getProjects()

Return a list of projects.  By default, this returns the first 20 projects. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.  ### Filtering projects  LaunchDarkly supports three fields for filters: - `query` is a string that matches against the projects\' names and keys. It is not case sensitive. - `tags` is a `+`-separated list of project tags. It filters the list of projects that have all of the tags in the list. - `keys` is a `|` separated list of project keys. It filters the list to projects that have any of the keys in the list.  For example, the filter `filter=query:abc,tags:tag-1+tag-2` matches projects with the string `abc` in their name or key and also are tagged with `tag-1` and `tag-2`. The filter is not case-sensitive.  The documented values for `filter` query parameters are prior to URL encoding. For example, the `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.  ### Sorting projects  LaunchDarkly supports two fields for sorting: - `name` sorts by project name. - `createdOn` sorts by the creation date of the project.  For example, `sort=name` sorts the response by project name in ascending order.  ### Expanding the projects response  LaunchDarkly supports one field for expanding the \"List projects\" response. By default, these fields are **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with the `environments` field.  * `environments` includes a paginated list of the project environments.  For example, `expand=environments` includes the `environments` field for each project in the response. 

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let limit: number; //The number of projects to return in the response. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items. (optional) (default to undefined)
let filter: string; //A comma-separated list of filters. Each filter is constructed as `field:value`. (optional) (default to undefined)
let sort: string; //A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. (optional) (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. (optional) (default to undefined)

const { status, data } = await apiInstance.getProjects(
    limit,
    offset,
    filter,
    sort,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | The number of projects to return in the response. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next &#x60;limit&#x60; items. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. Each filter is constructed as &#x60;field:value&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. | (optional) defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. | (optional) defaults to undefined|


### Return type

**Projects**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchFlagDefaultsByProject**
> UpsertPayloadRep patchFlagDefaultsByProject(patchOperation)

Update a flag default. Updating a flag default uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchFlagDefaultsByProject(
    projectKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**UpsertPayloadRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag default response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchProject**
> ProjectRep patchProject(patchOperation)

Update a project. Updating a project uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the project fields that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.

### Example

```typescript
import {
    ProjectsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchProject(
    projectKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**ProjectRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postProject**
> ProjectRep postProject(projectPost)

Create a new project with the given key and name. Project keys must be unique within an account.

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    ProjectPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectPost: ProjectPost; //

const { status, data } = await apiInstance.postProject(
    projectPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectPost** | **ProjectPost**|  | |


### Return type

**ProjectRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Project response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFlagDefaultsByProject**
> UpsertPayloadRep putFlagDefaultsByProject(upsertFlagDefaultsPayload)

Create or update flag defaults for a project.

### Example

```typescript
import {
    ProjectsApi,
    Configuration,
    UpsertFlagDefaultsPayload
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ProjectsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let upsertFlagDefaultsPayload: UpsertFlagDefaultsPayload; //

const { status, data } = await apiInstance.putFlagDefaultsByProject(
    projectKey,
    upsertFlagDefaultsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertFlagDefaultsPayload** | **UpsertFlagDefaultsPayload**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**UpsertPayloadRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag default response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

