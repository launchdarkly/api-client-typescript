# InsightsChartsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDeploymentFrequencyChart**](#getdeploymentfrequencychart) | **GET** /api/v2/engineering-insights/charts/deployments/frequency | Get deployment frequency chart data|
|[**getFlagStatusChart**](#getflagstatuschart) | **GET** /api/v2/engineering-insights/charts/flags/status | Get flag status chart data|
|[**getLeadTimeChart**](#getleadtimechart) | **GET** /api/v2/engineering-insights/charts/lead-time | Get lead time chart data|
|[**getReleaseFrequencyChart**](#getreleasefrequencychart) | **GET** /api/v2/engineering-insights/charts/releases/frequency | Get release frequency chart data|
|[**getStaleFlagsChart**](#getstaleflagschart) | **GET** /api/v2/engineering-insights/charts/flags/stale | Get stale flags chart data|

# **getDeploymentFrequencyChart**
> InsightsChart getDeploymentFrequencyChart()

Get deployment frequency chart data. Engineering insights displays deployment frequency data in the [deployment frequency metric view](https://launchdarkly.com/docs/home/observability/deployments).  ### Expanding the chart response  LaunchDarkly supports expanding the chart response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `metrics` includes details on the metrics related to deployment frequency  For example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsChartsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsChartsBetaApi(configuration);

let projectKey: string; //The project key (optional) (default to undefined)
let environmentKey: string; //The environment key (optional) (default to undefined)
let applicationKey: string; //Comma separated list of application keys (optional) (default to undefined)
let from: string; //Unix timestamp in milliseconds. Default value is 7 days ago. (optional) (default to undefined)
let to: string; //Unix timestamp in milliseconds. Default value is now. (optional) (default to undefined)
let bucketType: string; //Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. (optional) (default to undefined)
let bucketMs: number; //Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds). (optional) (default to undefined)
let groupBy: string; //Options: `application`, `kind` (optional) (default to undefined)
let expand: string; //Options: `metrics` (optional) (default to undefined)

const { status, data } = await apiInstance.getDeploymentFrequencyChart(
    projectKey,
    environmentKey,
    applicationKey,
    from,
    to,
    bucketType,
    bucketMs,
    groupBy,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | (optional) defaults to undefined|
| **environmentKey** | [**string**] | The environment key | (optional) defaults to undefined|
| **applicationKey** | [**string**] | Comma separated list of application keys | (optional) defaults to undefined|
| **from** | [**string**] | Unix timestamp in milliseconds. Default value is 7 days ago. | (optional) defaults to undefined|
| **to** | [**string**] | Unix timestamp in milliseconds. Default value is now. | (optional) defaults to undefined|
| **bucketType** | [**string**] | Specify type of bucket. Options: &#x60;rolling&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;. Default: &#x60;rolling&#x60;. | (optional) defaults to undefined|
| **bucketMs** | [**number**] | Duration of intervals for x-axis in milliseconds. Default value is one day (&#x60;86400000&#x60; milliseconds). | (optional) defaults to undefined|
| **groupBy** | [**string**] | Options: &#x60;application&#x60;, &#x60;kind&#x60; | (optional) defaults to undefined|
| **expand** | [**string**] | Options: &#x60;metrics&#x60; | (optional) defaults to undefined|


### Return type

**InsightsChart**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chart response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFlagStatusChart**
> InsightsChart getFlagStatusChart()

Get flag status chart data. To learn more, read [Flag statuses](https://launchdarkly.com/docs/home/observability/flag-health#flag-statuses).

### Example

```typescript
import {
    InsightsChartsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsChartsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let applicationKey: string; //Comma separated list of application keys (optional) (default to undefined)

const { status, data } = await apiInstance.getFlagStatusChart(
    projectKey,
    environmentKey,
    applicationKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **applicationKey** | [**string**] | Comma separated list of application keys | (optional) defaults to undefined|


### Return type

**InsightsChart**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chart response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLeadTimeChart**
> InsightsChart getLeadTimeChart()

Get lead time chart data. The engineering insights UI displays lead time data in the [lead time metric view](https://launchdarkly.com/docs/home/observability/lead-time).

### Example

```typescript
import {
    InsightsChartsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsChartsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (optional) (default to undefined)
let applicationKey: string; //Comma separated list of application keys (optional) (default to undefined)
let from: number; //Unix timestamp in milliseconds. Default value is 7 days ago. (optional) (default to undefined)
let to: number; //Unix timestamp in milliseconds. Default value is now. (optional) (default to undefined)
let bucketType: string; //Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. (optional) (default to undefined)
let bucketMs: number; //Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds). (optional) (default to undefined)
let groupBy: string; //Options: `application`, `stage`. Default: `stage`. (optional) (default to undefined)
let expand: string; //Options: `metrics`, `percentiles`. (optional) (default to undefined)

const { status, data } = await apiInstance.getLeadTimeChart(
    projectKey,
    environmentKey,
    applicationKey,
    from,
    to,
    bucketType,
    bucketMs,
    groupBy,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | (optional) defaults to undefined|
| **applicationKey** | [**string**] | Comma separated list of application keys | (optional) defaults to undefined|
| **from** | [**number**] | Unix timestamp in milliseconds. Default value is 7 days ago. | (optional) defaults to undefined|
| **to** | [**number**] | Unix timestamp in milliseconds. Default value is now. | (optional) defaults to undefined|
| **bucketType** | [**string**] | Specify type of bucket. Options: &#x60;rolling&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;. Default: &#x60;rolling&#x60;. | (optional) defaults to undefined|
| **bucketMs** | [**number**] | Duration of intervals for x-axis in milliseconds. Default value is one day (&#x60;86400000&#x60; milliseconds). | (optional) defaults to undefined|
| **groupBy** | [**string**] | Options: &#x60;application&#x60;, &#x60;stage&#x60;. Default: &#x60;stage&#x60;. | (optional) defaults to undefined|
| **expand** | [**string**] | Options: &#x60;metrics&#x60;, &#x60;percentiles&#x60;. | (optional) defaults to undefined|


### Return type

**InsightsChart**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chart response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReleaseFrequencyChart**
> InsightsChart getReleaseFrequencyChart()

Get release frequency chart data. Engineering insights displays release frequency data in the [release frequency metric view](https://launchdarkly.com/docs/home/observability/releases).

### Example

```typescript
import {
    InsightsChartsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsChartsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let applicationKey: string; //Comma separated list of application keys (optional) (default to undefined)
let hasExperiments: boolean; //Filter events to those associated with an experiment (`true`) or without an experiment (`false`) (optional) (default to undefined)
let global: string; //Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude` (optional) (default to undefined)
let groupBy: string; //Property to group results by. Options: `impact` (optional) (default to undefined)
let from: string; //Unix timestamp in milliseconds. Default value is 7 days ago. (optional) (default to undefined)
let to: string; //Unix timestamp in milliseconds. Default value is now. (optional) (default to undefined)
let bucketType: string; //Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. (optional) (default to undefined)
let bucketMs: number; //Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds). (optional) (default to undefined)
let expand: string; //Options: `metrics` (optional) (default to undefined)

const { status, data } = await apiInstance.getReleaseFrequencyChart(
    projectKey,
    environmentKey,
    applicationKey,
    hasExperiments,
    global,
    groupBy,
    from,
    to,
    bucketType,
    bucketMs,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **applicationKey** | [**string**] | Comma separated list of application keys | (optional) defaults to undefined|
| **hasExperiments** | [**boolean**] | Filter events to those associated with an experiment (&#x60;true&#x60;) or without an experiment (&#x60;false&#x60;) | (optional) defaults to undefined|
| **global** | [**string**] | Filter to include or exclude global events. Default value is &#x60;include&#x60;. Options: &#x60;include&#x60;, &#x60;exclude&#x60; | (optional) defaults to undefined|
| **groupBy** | [**string**] | Property to group results by. Options: &#x60;impact&#x60; | (optional) defaults to undefined|
| **from** | [**string**] | Unix timestamp in milliseconds. Default value is 7 days ago. | (optional) defaults to undefined|
| **to** | [**string**] | Unix timestamp in milliseconds. Default value is now. | (optional) defaults to undefined|
| **bucketType** | [**string**] | Specify type of bucket. Options: &#x60;rolling&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;. Default: &#x60;rolling&#x60;. | (optional) defaults to undefined|
| **bucketMs** | [**number**] | Duration of intervals for x-axis in milliseconds. Default value is one day (&#x60;86400000&#x60; milliseconds). | (optional) defaults to undefined|
| **expand** | [**string**] | Options: &#x60;metrics&#x60; | (optional) defaults to undefined|


### Return type

**InsightsChart**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chart response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStaleFlagsChart**
> InsightsChart getStaleFlagsChart()

Get stale flags chart data. Engineering insights displays stale flags data in the [flag health metric view](https://launchdarkly.com/docs/home/observability/flag-health).  ### Expanding the chart response  LaunchDarkly supports expanding the chart response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `metrics` includes details on the metrics related to stale flags  For example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsChartsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsChartsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let applicationKey: string; //Comma separated list of application keys (optional) (default to undefined)
let groupBy: string; //Property to group results by. Options: `maintainer` (optional) (default to undefined)
let maintainerId: string; //Comma-separated list of individual maintainers to filter results. (optional) (default to undefined)
let maintainerTeamKey: string; //Comma-separated list of team maintainer keys to filter results. (optional) (default to undefined)
let expand: string; //Options: `metrics` (optional) (default to undefined)

const { status, data } = await apiInstance.getStaleFlagsChart(
    projectKey,
    environmentKey,
    applicationKey,
    groupBy,
    maintainerId,
    maintainerTeamKey,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **applicationKey** | [**string**] | Comma separated list of application keys | (optional) defaults to undefined|
| **groupBy** | [**string**] | Property to group results by. Options: &#x60;maintainer&#x60; | (optional) defaults to undefined|
| **maintainerId** | [**string**] | Comma-separated list of individual maintainers to filter results. | (optional) defaults to undefined|
| **maintainerTeamKey** | [**string**] | Comma-separated list of team maintainer keys to filter results. | (optional) defaults to undefined|
| **expand** | [**string**] | Options: &#x60;metrics&#x60; | (optional) defaults to undefined|


### Return type

**InsightsChart**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Chart response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

