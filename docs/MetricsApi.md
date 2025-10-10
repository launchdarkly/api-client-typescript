# MetricsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteMetric**](#deletemetric) | **DELETE** /api/v2/metrics/{projectKey}/{metricKey} | Delete metric|
|[**getMetric**](#getmetric) | **GET** /api/v2/metrics/{projectKey}/{metricKey} | Get metric|
|[**getMetrics**](#getmetrics) | **GET** /api/v2/metrics/{projectKey} | List metrics|
|[**patchMetric**](#patchmetric) | **PATCH** /api/v2/metrics/{projectKey}/{metricKey} | Update metric|
|[**postMetric**](#postmetric) | **POST** /api/v2/metrics/{projectKey} | Create metric|

# **deleteMetric**
> deleteMetric()

Delete a metric by key.

### Example

```typescript
import {
    MetricsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let metricKey: string; //The metric key (default to undefined)

const { status, data } = await apiInstance.deleteMetric(
    projectKey,
    metricKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **metricKey** | [**string**] | The metric key | defaults to undefined|


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
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMetric**
> MetricRep getMetric()

Get information for a single metric from the specific project.  ### Expanding the metric response LaunchDarkly supports four fields for expanding the \"Get metric\" response. By default, these fields are **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:  - `experiments` includes all experiments from the specific project that use the metric - `experimentCount` includes the number of experiments from the specific project that use the metric - `metricGroups` includes all metric groups from the specific project that use the metric - `metricGroupCount` includes the number of metric groups from the specific project that use the metric  For example, `expand=experiments` includes the `experiments` field in the response. 

### Example

```typescript
import {
    MetricsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let metricKey: string; //The metric key (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. Supported fields are `experiments`, `experimentCount`, `metricGroups`, `metricGroupCount`, `eventSources`, `guardedRollouts`, `guardedRolloutCount`, and `lastUsedInEntity`. (optional) (default to undefined)
let versionId: string; //The specific version ID of the metric (optional) (default to undefined)

const { status, data } = await apiInstance.getMetric(
    projectKey,
    metricKey,
    expand,
    versionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **metricKey** | [**string**] | The metric key | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. Supported fields are &#x60;experiments&#x60;, &#x60;experimentCount&#x60;, &#x60;metricGroups&#x60;, &#x60;metricGroupCount&#x60;, &#x60;eventSources&#x60;, &#x60;guardedRollouts&#x60;, &#x60;guardedRolloutCount&#x60;, and &#x60;lastUsedInEntity&#x60;. | (optional) defaults to undefined|
| **versionId** | [**string**] | The specific version ID of the metric | (optional) defaults to undefined|


### Return type

**MetricRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metric response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMetrics**
> MetricCollectionRep getMetrics()

Get a list of all metrics for the specified project.  ### Filtering metrics  The `filter` parameter supports the following operators: `contains`, `equals`, `anyOf`.  #### Supported fields and operators  You can only filter certain fields in metrics when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.  When you search for metrics, the `filter` parameter supports the following fields and operators:  |<div style=\"width:120px\">Field</div> |Description |Supported operators | |---|---|---| | `eventKind` | The metric event kind. One of `custom`, `pageview`, `click`. | `equals` | | `hasConnections` | Whether the metric has connections to experiments or guarded rollouts. One of `true`, `false`. | `equals` | | `isNumeric` | Whether the metric is numeric. One of `true`, `false`. | `equals` | | `maintainerIds` | A comma-separated list of metric maintainer IDs. | `anyOf` | | `maintainerTeamKey` | The metric maintainer team key. | `equals` | | `query` | A \"fuzzy\" search across metric key and name. Supply a string or list of strings to the operator. | `equals` | | `tags` | The metric tags. | `contains` | | `unitAggregationType` | The metric\'s unit aggregation type. One of `sum`, `average`. | `equals` |  For example, the filter `?filter=tags contains [\"tag1\", \"tag2\", \"tag3\"]` matches metrics that have all three tags.  The documented values for `filter` query parameters are prior to URL encoding. For example, the `[` in `?filter=tags contains [\"tag1\", \"tag2\", \"tag3\"]` must be encoded to `%5B`.  ### Expanding the metric list response  LaunchDarkly supports expanding the \"List metrics\" response. By default, the expandable field is **not** included in the response.  To expand the response, append the `expand` query parameter and add the following supported field:  - `experimentCount` includes the number of experiments from the specific project that use the metric  For example, `expand=experimentCount` includes the `experimentCount` field for each metric in the response. 

### Example

```typescript
import {
    MetricsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. (optional) (default to undefined)
let limit: number; //The number of metrics to return in the response. Defaults to 20. Maximum limit is 50. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items. (optional) (default to undefined)
let sort: string; //A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by `createdAt` or `name`. (optional) (default to undefined)
let filter: string; //A comma-separated list of filters. This endpoint accepts filtering by `query`, `tags`, \'eventKind\', \'isNumeric\', \'unitAggregationType`, `hasConnections`, `maintainerIds`, `maintainerTeamKey` and `view`. To learn more about the filter syntax, read the \'Filtering metrics\' section above. (optional) (default to undefined)

const { status, data } = await apiInstance.getMetrics(
    projectKey,
    expand,
    limit,
    offset,
    sort,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of metrics to return in the response. Defaults to 20. Maximum limit is 50. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next &#x60;limit&#x60; items. | (optional) defaults to undefined|
| **sort** | [**string**] | A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by &#x60;createdAt&#x60; or &#x60;name&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. This endpoint accepts filtering by &#x60;query&#x60;, &#x60;tags&#x60;, \&#39;eventKind\&#39;, \&#39;isNumeric\&#39;, \&#39;unitAggregationType&#x60;, &#x60;hasConnections&#x60;, &#x60;maintainerIds&#x60;, &#x60;maintainerTeamKey&#x60; and &#x60;view&#x60;. To learn more about the filter syntax, read the \&#39;Filtering metrics\&#39; section above. | (optional) defaults to undefined|


### Return type

**MetricCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metrics collection response |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchMetric**
> MetricRep patchMetric(patchOperation)

Patch a metric by key. Updating a metric uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    MetricsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let metricKey: string; //The metric key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchMetric(
    projectKey,
    metricKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **metricKey** | [**string**] | The metric key | defaults to undefined|


### Return type

**MetricRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metric response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postMetric**
> MetricRep postMetric(metricPost)

Create a new metric in the specified project. The expected `POST` body differs depending on the specified `kind` property.

### Example

```typescript
import {
    MetricsApi,
    Configuration,
    MetricPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let metricPost: MetricPost; //

const { status, data } = await apiInstance.postMetric(
    projectKey,
    metricPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metricPost** | **MetricPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**MetricRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Metric response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

