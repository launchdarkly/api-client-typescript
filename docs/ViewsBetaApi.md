# ViewsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createView**](#createview) | **POST** /api/v2/projects/{projectKey}/views | Create view|
|[**deleteView**](#deleteview) | **DELETE** /api/v2/projects/{projectKey}/views/{viewKey} | Delete view|
|[**getLinkedResources**](#getlinkedresources) | **GET** /api/v2/projects/{projectKey}/views/{viewKey}/linked/{resourceType} | Get linked resources|
|[**getLinkedViews**](#getlinkedviews) | **GET** /api/v2/projects/{projectKey}/view-associations/{resourceType}/{resourceKey} | Get linked views for a given resource|
|[**getView**](#getview) | **GET** /api/v2/projects/{projectKey}/views/{viewKey} | Get view|
|[**getViews**](#getviews) | **GET** /api/v2/projects/{projectKey}/views | List views|
|[**linkResource**](#linkresource) | **POST** /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType} | Link resource|
|[**unlinkResource**](#unlinkresource) | **DELETE** /api/v2/projects/{projectKey}/views/{viewKey}/link/{resourceType} | Unlink resource|
|[**updateView**](#updateview) | **PATCH** /api/v2/projects/{projectKey}/views/{viewKey} | Update view|

# **createView**
> View createView(viewPost)

Create a new view in the given project.

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration,
    ViewPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let viewPost: ViewPost; //View object to create

const { status, data } = await apiInstance.createView(
    lDAPIVersion,
    projectKey,
    viewPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewPost** | **ViewPost**| View object to create | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|


### Return type

**View**

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

# **deleteView**
> deleteView()

Delete a specific view by its key.

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let viewKey: string; // (default to undefined)

const { status, data } = await apiInstance.deleteView(
    lDAPIVersion,
    projectKey,
    viewKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **viewKey** | [**string**] |  | defaults to undefined|


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
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLinkedResources**
> ViewLinkedResources getLinkedResources()

Get a list of all linked resources for a given view.

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let viewKey: string; // (default to undefined)
let resourceType: 'flags' | 'segments'; // (default to undefined)
let limit: number; //The number of views to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let sort: 'linkedAt' | 'name'; //Field to sort by. Default field is `linkedAt`, default order is ascending. (optional) (default to 'linkedAt')
let query: string; //Case-insensitive search query for linked resources. Matches resource key and, when expanded, resource name. (optional) (default to undefined)
let filter: string; //Optional resource filter expression for linked resources. - Supported for `flags` and `segments` resource types. - Uses the same syntax as link/unlink and list endpoints. - For `segments`, `environmentId` is required when `filter` is provided.  (optional) (default to undefined)
let expand: Array<'maintainer' | 'resourceDetails'>; //A comma-separated list of fields to expand. (optional) (default to undefined)

const { status, data } = await apiInstance.getLinkedResources(
    lDAPIVersion,
    projectKey,
    viewKey,
    resourceType,
    limit,
    offset,
    sort,
    query,
    filter,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **viewKey** | [**string**] |  | defaults to undefined|
| **resourceType** | [**&#39;flags&#39; | &#39;segments&#39;**]**Array<&#39;flags&#39; &#124; &#39;segments&#39;>** |  | defaults to undefined|
| **limit** | [**number**] | The number of views to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **sort** | [**&#39;linkedAt&#39; | &#39;name&#39;**]**Array<&#39;linkedAt&#39; &#124; &#39;name&#39;>** | Field to sort by. Default field is &#x60;linkedAt&#x60;, default order is ascending. | (optional) defaults to 'linkedAt'|
| **query** | [**string**] | Case-insensitive search query for linked resources. Matches resource key and, when expanded, resource name. | (optional) defaults to undefined|
| **filter** | [**string**] | Optional resource filter expression for linked resources. - Supported for &#x60;flags&#x60; and &#x60;segments&#x60; resource types. - Uses the same syntax as link/unlink and list endpoints. - For &#x60;segments&#x60;, &#x60;environmentId&#x60; is required when &#x60;filter&#x60; is provided.  | (optional) defaults to undefined|
| **expand** | **Array<&#39;maintainer&#39; &#124; &#39;resourceDetails&#39;>** | A comma-separated list of fields to expand. | (optional) defaults to undefined|


### Return type

**ViewLinkedResources**

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

# **getLinkedViews**
> Views getLinkedViews()

Get a list of all linked views for a resource. Flags are identified by key. Segments are identified by segment ID.

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let resourceType: 'flags' | 'segments'; // (default to undefined)
let resourceKey: string; // (default to undefined)
let environmentId: string; //Environment ID. Required when resourceType is \'segments\' (optional) (default to undefined)
let limit: number; //The number of views to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getLinkedViews(
    lDAPIVersion,
    projectKey,
    resourceType,
    resourceKey,
    environmentId,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **resourceType** | [**&#39;flags&#39; | &#39;segments&#39;**]**Array<&#39;flags&#39; &#124; &#39;segments&#39;>** |  | defaults to undefined|
| **resourceKey** | [**string**] |  | defaults to undefined|
| **environmentId** | [**string**] | Environment ID. Required when resourceType is \&#39;segments\&#39; | (optional) defaults to undefined|
| **limit** | [**number**] | The number of views to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**Views**

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

# **getView**
> View getView()

Retrieve a specific view by its key.

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let viewKey: string; // (default to undefined)
let sort: 'key' | 'name' | 'updatedAt'; //A sort to apply to the list of views. (optional) (default to undefined)
let limit: number; //The number of views to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let filter: string; //A filter to apply to the list of views. Supports the following fields and operators: `name` (equals, notEquals, startsWith, contains, anyOf), `key` (equals, notEquals, startsWith, contains, anyOf), `tag` (equals, anyOf), `maintainerId` (equals, anyOf), `isPayloadView` (equals). (optional) (default to undefined)
let expand: Array<'allFlags' | 'allSegments' | 'allResources' | 'maintainer' | 'flagsSummary' | 'segmentsSummary' | 'resourceSummary'>; //A comma-separated list of fields to expand. (optional) (default to undefined)

const { status, data } = await apiInstance.getView(
    lDAPIVersion,
    projectKey,
    viewKey,
    sort,
    limit,
    offset,
    filter,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **viewKey** | [**string**] |  | defaults to undefined|
| **sort** | [**&#39;key&#39; | &#39;name&#39; | &#39;updatedAt&#39;**]**Array<&#39;key&#39; &#124; &#39;name&#39; &#124; &#39;updatedAt&#39;>** | A sort to apply to the list of views. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of views to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A filter to apply to the list of views. Supports the following fields and operators: &#x60;name&#x60; (equals, notEquals, startsWith, contains, anyOf), &#x60;key&#x60; (equals, notEquals, startsWith, contains, anyOf), &#x60;tag&#x60; (equals, anyOf), &#x60;maintainerId&#x60; (equals, anyOf), &#x60;isPayloadView&#x60; (equals). | (optional) defaults to undefined|
| **expand** | **Array<&#39;allFlags&#39; &#124; &#39;allSegments&#39; &#124; &#39;allResources&#39; &#124; &#39;maintainer&#39; &#124; &#39;flagsSummary&#39; &#124; &#39;segmentsSummary&#39; &#124; &#39;resourceSummary&#39;>** | A comma-separated list of fields to expand. | (optional) defaults to undefined|


### Return type

**View**

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

# **getViews**
> Views getViews()

Get a list of all views in the given project.

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let sort: 'key' | 'name' | 'updatedAt'; //A sort to apply to the list of views. (optional) (default to undefined)
let limit: number; //The number of views to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let filter: string; //A filter to apply to the list of views. Supports the following fields and operators: `name` (equals, notEquals, startsWith, contains, anyOf), `key` (equals, notEquals, startsWith, contains, anyOf), `tag` (equals, anyOf), `maintainerId` (equals, anyOf), `isPayloadView` (equals). (optional) (default to undefined)
let expand: Array<'flagsSummary' | 'segmentsSummary' | 'resourceSummary'>; //A comma-separated list of fields to expand. (optional) (default to undefined)

const { status, data } = await apiInstance.getViews(
    lDAPIVersion,
    projectKey,
    sort,
    limit,
    offset,
    filter,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **sort** | [**&#39;key&#39; | &#39;name&#39; | &#39;updatedAt&#39;**]**Array<&#39;key&#39; &#124; &#39;name&#39; &#124; &#39;updatedAt&#39;>** | A sort to apply to the list of views. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of views to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A filter to apply to the list of views. Supports the following fields and operators: &#x60;name&#x60; (equals, notEquals, startsWith, contains, anyOf), &#x60;key&#x60; (equals, notEquals, startsWith, contains, anyOf), &#x60;tag&#x60; (equals, anyOf), &#x60;maintainerId&#x60; (equals, anyOf), &#x60;isPayloadView&#x60; (equals). | (optional) defaults to undefined|
| **expand** | **Array<&#39;flagsSummary&#39; &#124; &#39;segmentsSummary&#39; &#124; &#39;resourceSummary&#39;>** | A comma-separated list of fields to expand. | (optional) defaults to undefined|


### Return type

**Views**

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

# **linkResource**
> LinkResourceSuccessResponse linkResource(viewLinkRequest)

Link one or multiple resources to a view by keys, filters, or both: - Link flags using flag keys or filters (maintainerId, maintainerTeamKey, tags, state, query) - Link segments using segment IDs or filters (tags, query, unbounded)  When both keys and filters are provided, resources matching either condition are linked (union). 

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration,
    ViewLinkRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let viewKey: string; // (default to undefined)
let resourceType: 'flags' | 'segments'; // (default to undefined)
let viewLinkRequest: ViewLinkRequest; //Resources to link to the view. You can provide explicit keys/IDs, filters, or both. - Flags: identified by key or filtered by maintainerId, maintainerTeamKey, tags, state, query - Segments: identified by segment ID or filtered by tags, query, unbounded 

const { status, data } = await apiInstance.linkResource(
    lDAPIVersion,
    projectKey,
    viewKey,
    resourceType,
    viewLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewLinkRequest** | **ViewLinkRequest**| Resources to link to the view. You can provide explicit keys/IDs, filters, or both. - Flags: identified by key or filtered by maintainerId, maintainerTeamKey, tags, state, query - Segments: identified by segment ID or filtered by tags, query, unbounded  | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **viewKey** | [**string**] |  | defaults to undefined|
| **resourceType** | [**&#39;flags&#39; | &#39;segments&#39;**]**Array<&#39;flags&#39; &#124; &#39;segments&#39;>** |  | defaults to undefined|


### Return type

**LinkResourceSuccessResponse**

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

# **unlinkResource**
> UnlinkResourceSuccessResponse unlinkResource(viewLinkRequest)

Unlink one or multiple resources from a view: - Unlink flags using flag keys - Unlink segments using segment IDs 

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration,
    ViewLinkRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let viewKey: string; // (default to undefined)
let resourceType: 'flags' | 'segments'; // (default to undefined)
let viewLinkRequest: ViewLinkRequest; //The resource to link to the view. Flags are identified by key. Segments are identified by segment ID.

const { status, data } = await apiInstance.unlinkResource(
    lDAPIVersion,
    projectKey,
    viewKey,
    resourceType,
    viewLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewLinkRequest** | **ViewLinkRequest**| The resource to link to the view. Flags are identified by key. Segments are identified by segment ID. | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **viewKey** | [**string**] |  | defaults to undefined|
| **resourceType** | [**&#39;flags&#39; | &#39;segments&#39;**]**Array<&#39;flags&#39; &#124; &#39;segments&#39;>** |  | defaults to undefined|


### Return type

**UnlinkResourceSuccessResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response with unlink details |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateView**
> View updateView(viewPatch)

Edit an existing view.  The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.  Here\'s an example:   ```     {       \"description\": \"Example updated description\",       \"tags\": [\"new-tag\"]     }   ``` 

### Example

```typescript
import {
    ViewsBetaApi,
    Configuration,
    ViewPatch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ViewsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let viewKey: string; // (default to undefined)
let viewPatch: ViewPatch; //A JSON representation of the view including only the fields to update.

const { status, data } = await apiInstance.updateView(
    lDAPIVersion,
    projectKey,
    viewKey,
    viewPatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **viewPatch** | **ViewPatch**| A JSON representation of the view including only the fields to update. | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **viewKey** | [**string**] |  | defaults to undefined|


### Return type

**View**

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

