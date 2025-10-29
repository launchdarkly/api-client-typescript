# MetricsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMetricGroup**](#createmetricgroup) | **POST** /api/v2/projects/{projectKey}/metric-groups | Create metric group|
|[**deleteMetricGroup**](#deletemetricgroup) | **DELETE** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Delete metric group|
|[**getMetricGroup**](#getmetricgroup) | **GET** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Get metric group|
|[**getMetricGroups**](#getmetricgroups) | **GET** /api/v2/projects/{projectKey}/metric-groups | List metric groups|
|[**patchMetricGroup**](#patchmetricgroup) | **PATCH** /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey} | Patch metric group|

# **createMetricGroup**
> MetricGroupRep createMetricGroup(metricGroupPost)

Create a new metric group in the specified project

### Example

```typescript
import {
    MetricsBetaApi,
    Configuration,
    MetricGroupPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let metricGroupPost: MetricGroupPost; //

const { status, data } = await apiInstance.createMetricGroup(
    projectKey,
    metricGroupPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metricGroupPost** | **MetricGroupPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**MetricGroupRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Metric group response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMetricGroup**
> deleteMetricGroup()

Delete a metric group by key.

### Example

```typescript
import {
    MetricsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let metricGroupKey: string; //The metric group key (default to undefined)

const { status, data } = await apiInstance.deleteMetricGroup(
    projectKey,
    metricGroupKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **metricGroupKey** | [**string**] | The metric group key | defaults to undefined|


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
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMetricGroup**
> MetricGroupRep getMetricGroup()

Get information for a single metric group from the specific project.  ### Expanding the metric group response LaunchDarkly supports two fields for expanding the \"Get metric group\" response. By default, these fields are **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with either or both of the following fields:  - `experiments` includes all experiments from the specific project that use the metric group - `experimentCount` includes the number of experiments from the specific project that use the metric group  For example, `expand=experiments` includes the `experiments` field in the response. 

### Example

```typescript
import {
    MetricsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let metricGroupKey: string; //The metric group key (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. (optional) (default to undefined)

const { status, data } = await apiInstance.getMetricGroup(
    projectKey,
    metricGroupKey,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **metricGroupKey** | [**string**] | The metric group key | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. | (optional) defaults to undefined|


### Return type

**MetricGroupRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metric group response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMetricGroups**
> MetricGroupCollectionRep getMetricGroups()

Get a list of all metric groups for the specified project.  ### Expanding the metric groups response  This endpoint does not support response expansion.  Although the API accepts an `expand` query parameter for compatibility reasons, it does not currently modify the response. The parameter is reserved for future use.  ### Filtering metric groups  The `filter` parameter supports the following operators: `contains`, `equals`, `anyOf`.  #### Supported fields and operators  You can only filter certain fields in metrics when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.  When you search for metrics, the `filter` parameter supports the following fields and operators:  |<div style=\"width:120px\">Field</div> |Description |Supported operators | |---|---|---| | `experimentStatus` | The experiment\'s status. One of `not_started`, `running`, `stopped`, `started`. | `equals` | | `hasConnections` | Whether the metric group has connections to experiments or guarded rollouts. One of `true`, `false`. | `equals` | | `kind` | The metric group kind. One of `funnel`, `standard`. | `equals` | | `maintainerIds` | The metric maintainer IDs. | `anyOf` | | `maintainerTeamKey` | The metric maintainer team key. | `equals` | | `query` | A \"fuzzy\" search across metric group key and name. Supply a string or list of strings to the operator. | `equals` |  ### Sorting metric groups  LaunchDarkly supports the following fields for sorting:  - `name` sorts by metric group name. - `createdAt` sorts by the creation date of the metric group. - `connectionCount` sorts by the number of connections to experiments the metric group has.  By default, the sort is in ascending order. Use `-` to sort in descending order. For example, `?sort=name` sorts the response by metric group name in ascending order, and `?sort=-name` sorts in descending order.  #### Sample query  `filter=experimentStatus equals \'not_started\' and query equals \'metric name\'` 

### Example

```typescript
import {
    MetricsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let filter: string; //Accepts filter by `experimentStatus`, `query`, `kind`, `hasConnections`, `maintainerIds`, and `maintainerTeamKey`. Example: `filter=experimentStatus equals \'running\' and query equals \'test\'`. (optional) (default to undefined)
let sort: string; //A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. Read the endpoint description for a full list of available sort fields. (optional) (default to undefined)
let expand: string; //This parameter is reserved for future use and is not currently supported on this endpoint. (optional) (default to undefined)
let limit: number; //The number of metric groups to return in the response. Defaults to 20. Maximum limit is 50. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items. (optional) (default to undefined)

const { status, data } = await apiInstance.getMetricGroups(
    projectKey,
    filter,
    sort,
    expand,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **filter** | [**string**] | Accepts filter by &#x60;experimentStatus&#x60;, &#x60;query&#x60;, &#x60;kind&#x60;, &#x60;hasConnections&#x60;, &#x60;maintainerIds&#x60;, and &#x60;maintainerTeamKey&#x60;. Example: &#x60;filter&#x3D;experimentStatus equals \&#39;running\&#39; and query equals \&#39;test\&#39;&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. Read the endpoint description for a full list of available sort fields. | (optional) defaults to undefined|
| **expand** | [**string**] | This parameter is reserved for future use and is not currently supported on this endpoint. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of metric groups to return in the response. Defaults to 20. Maximum limit is 50. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next &#x60;limit&#x60; items. | (optional) defaults to undefined|


### Return type

**MetricGroupCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metric group collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchMetricGroup**
> MetricGroupRep patchMetricGroup(patchOperation)

Patch a metric group by key. Updating a metric group uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes.

### Example

```typescript
import {
    MetricsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let metricGroupKey: string; //The metric group key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchMetricGroup(
    projectKey,
    metricGroupKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **metricGroupKey** | [**string**] | The metric group key | defaults to undefined|


### Return type

**MetricGroupRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metric group response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

