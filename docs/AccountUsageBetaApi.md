# AccountUsageBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAIRunsUsage**](#getairunsusage) | **GET** /api/v2/usage/ai-runs | Get AI runs usage|
|[**getContextsClientsideUsage**](#getcontextsclientsideusage) | **GET** /api/v2/usage/clientside-contexts | Get contexts clientside usage|
|[**getContextsServersideUsage**](#getcontextsserversideusage) | **GET** /api/v2/usage/serverside-contexts | Get contexts serverside usage|
|[**getContextsTotalUsage**](#getcontextstotalusage) | **GET** /api/v2/usage/total-contexts | Get contexts total usage|
|[**getDataExportEventsUsage**](#getdataexporteventsusage) | **GET** /api/v2/usage/data-export-events | Get data export events usage|
|[**getEvaluationsUsage**](#getevaluationsusage) | **GET** /api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey} | Get evaluations usage|
|[**getEventsUsage**](#geteventsusage) | **GET** /api/v2/usage/events/{type} | Get events usage|
|[**getExperimentationEventsUsage**](#getexperimentationeventsusage) | **GET** /api/v2/usage/experimentation-events | Get experimentation events usage|
|[**getExperimentationKeysUsage**](#getexperimentationkeysusage) | **GET** /api/v2/usage/experimentation-keys | Get experimentation keys usage|
|[**getMAUClientsideUsage**](#getmauclientsideusage) | **GET** /api/v2/usage/clientside-mau | Get MAU clientside usage|
|[**getMAUTotalUsage**](#getmautotalusage) | **GET** /api/v2/usage/total-mau | Get MAU total usage|
|[**getMauSdksByType**](#getmausdksbytype) | **GET** /api/v2/usage/mau/sdks | Get MAU SDKs by type|
|[**getMauUsage**](#getmauusage) | **GET** /api/v2/usage/mau | Get MAU usage|
|[**getMauUsageByCategory**](#getmauusagebycategory) | **GET** /api/v2/usage/mau/bycategory | Get MAU usage by category|
|[**getObservabilityErrorsUsage**](#getobservabilityerrorsusage) | **GET** /api/v2/usage/observability/errors | Get observability errors usage|
|[**getObservabilityLogsUsage**](#getobservabilitylogsusage) | **GET** /api/v2/usage/observability/logs | Get observability logs usage|
|[**getObservabilityMetricsUsage**](#getobservabilitymetricsusage) | **GET** /api/v2/usage/observability/metrics | Get observability metrics usage|
|[**getObservabilitySessionsUsage**](#getobservabilitysessionsusage) | **GET** /api/v2/usage/observability/sessions | Get observability sessions usage|
|[**getObservabilityTracesUsage**](#getobservabilitytracesusage) | **GET** /api/v2/usage/observability/traces | Get observability traces usage|
|[**getSdkAllVersions**](#getsdkallversions) | **GET** /api/v2/usage/sdk-versions/all | Get usage details for all SDK versions|
|[**getSdkVersionsDetails**](#getsdkversionsdetails) | **GET** /api/v2/usage/sdk-versions/details | Get SDK versions usage details|
|[**getServiceConnectionsUsage**](#getserviceconnectionsusage) | **GET** /api/v2/usage/service-connections | Get service connections usage|
|[**getStreamUsage**](#getstreamusage) | **GET** /api/v2/usage/streams/{source} | Get stream usage|
|[**getStreamUsageBySdkVersion**](#getstreamusagebysdkversion) | **GET** /api/v2/usage/streams/{source}/bysdkversion | Get stream usage by SDK version|
|[**getStreamUsageSdkversion**](#getstreamusagesdkversion) | **GET** /api/v2/usage/streams/{source}/sdkversions | Get stream usage SDK versions|
|[**getVegaAIUsage**](#getvegaaiusage) | **GET** /api/v2/usage/vega-ai | Get Vega AI usage|
|[**getWarehouseExportUsage**](#getwarehouseexportusage) | **GET** /api/v2/usage/warehouse-export | Get warehouse Data Export usage|

# **getAIRunsUsage**
> SeriesListRep getAIRunsUsage()

Get a time series array showing the number of AI runs recorded for your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let sdkName: string; //An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. (optional) (default to undefined)
let sdkVersion: string; //An SDK version to filter results by. Can be specified multiple times, one query parameter per SDK version. (optional) (default to undefined)
let sdkType: string; //An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkVersion`, `sdkType`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. (optional) (default to undefined)

const { status, data } = await apiInstance.getAIRunsUsage(
    from,
    to,
    projectKey,
    environmentKey,
    sdkName,
    sdkVersion,
    sdkType,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **sdkName** | [**string**] | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | (optional) defaults to undefined|
| **sdkVersion** | [**string**] | An SDK version to filter results by. Can be specified multiple times, one query parameter per SDK version. | (optional) defaults to undefined|
| **sdkType** | [**string**] | An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkVersion&#x60;, &#x60;sdkType&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContextsClientsideUsage**
> SeriesListRep getContextsClientsideUsage()

Get a detailed time series of the number of context key usages observed by LaunchDarkly in your account, including non-primary context kinds. Use this for breakdowns that go beyond the primary-only aggregation of MAU endpoints. The counts reflect data reported by client-side SDKs.<br/><br/>The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let contextKind: string; //A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. (optional) (default to undefined)
let sdkName: string; //An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. (optional) (default to undefined)
let anonymous: string; //An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)

const { status, data } = await apiInstance.getContextsClientsideUsage(
    from,
    to,
    projectKey,
    environmentKey,
    contextKind,
    sdkName,
    anonymous,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **contextKind** | [**string**] | A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. | (optional) defaults to undefined|
| **sdkName** | [**string**] | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | (optional) defaults to undefined|
| **anonymous** | [**string**] | An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.&lt;br/&gt;Valid values: &#x60;true&#x60;, &#x60;false&#x60;. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. &#x60;contextKind&#x60; is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkAppId&#x60;, &#x60;anonymousV2&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContextsServersideUsage**
> SeriesListRep getContextsServersideUsage()

Get a detailed time series of the number of context key usages observed by LaunchDarkly in your account, including non-primary context kinds. Use this for breakdowns that go beyond the primary-only aggregation of MAU endpoints. The counts reflect data reported by server-side SDKs.<br/><br/>The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let contextKind: string; //A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. (optional) (default to undefined)
let sdkName: string; //An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. (optional) (default to undefined)
let anonymous: string; //An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)

const { status, data } = await apiInstance.getContextsServersideUsage(
    from,
    to,
    projectKey,
    environmentKey,
    contextKind,
    sdkName,
    anonymous,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **contextKind** | [**string**] | A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. | (optional) defaults to undefined|
| **sdkName** | [**string**] | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | (optional) defaults to undefined|
| **anonymous** | [**string**] | An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.&lt;br/&gt;Valid values: &#x60;true&#x60;, &#x60;false&#x60;. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. &#x60;contextKind&#x60; is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkAppId&#x60;, &#x60;anonymousV2&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContextsTotalUsage**
> SeriesListRep getContextsTotalUsage()

Get a detailed time series of the number of context key usages observed by LaunchDarkly in your account, including non-primary context kinds. Use this for breakdowns that go beyond the primary-only aggregation of MAU endpoints.<br/><br/>The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let contextKind: string; //A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. (optional) (default to undefined)
let sdkName: string; //An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. (optional) (default to undefined)
let sdkType: string; //An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. (optional) (default to undefined)
let anonymous: string; //An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. `contextKind` is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkType`, `sdkAppId`, `anonymousV2`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)

const { status, data } = await apiInstance.getContextsTotalUsage(
    from,
    to,
    projectKey,
    environmentKey,
    contextKind,
    sdkName,
    sdkType,
    anonymous,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **contextKind** | [**string**] | A context kind to filter results by. Can be specified multiple times, one query parameter per context kind. | (optional) defaults to undefined|
| **sdkName** | [**string**] | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | (optional) defaults to undefined|
| **sdkType** | [**string**] | An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. | (optional) defaults to undefined|
| **anonymous** | [**string**] | An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.&lt;br/&gt;Valid values: &#x60;true&#x60;, &#x60;false&#x60;. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. &#x60;contextKind&#x60; is always included as a grouping dimension. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkType&#x60;, &#x60;sdkAppId&#x60;, &#x60;anonymousV2&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDataExportEventsUsage**
> SeriesListRep getDataExportEventsUsage()

Get a time series array showing the number of data export events from your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let eventKind: string; //An event kind to filter results by. Can be specified multiple times, one query parameter per event kind. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `environmentId`, `eventKind`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. (optional) (default to undefined)

const { status, data } = await apiInstance.getDataExportEventsUsage(
    from,
    to,
    projectKey,
    environmentKey,
    eventKind,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **eventKind** | [**string**] | An event kind to filter results by. Can be specified multiple times, one query parameter per event kind. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;environmentId&#x60;, &#x60;eventKind&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEvaluationsUsage**
> SeriesListRep getEvaluationsUsage()

Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let from: string; //The series of data returned starts from this timestamp. Defaults to 30 days ago. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp. Defaults to the current time. (optional) (default to undefined)
let tz: string; //The timezone to use for breaks between days when returning daily data. (optional) (default to undefined)

const { status, data } = await apiInstance.getEvaluationsUsage(
    projectKey,
    environmentKey,
    featureFlagKey,
    from,
    to,
    tz
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **from** | [**string**] | The series of data returned starts from this timestamp. Defaults to 30 days ago. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp. Defaults to the current time. | (optional) defaults to undefined|
| **tz** | [**string**] | The timezone to use for breaks between days when returning daily data. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEventsUsage**
> SeriesListRep getEventsUsage()

Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let type: string; //The type of event to retrieve. Must be either `received` or `published`. (default to undefined)
let from: string; //The series of data returned starts from this timestamp. Defaults to 24 hours ago. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp. Defaults to the current time. (optional) (default to undefined)

const { status, data } = await apiInstance.getEventsUsage(
    type,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | The type of event to retrieve. Must be either &#x60;received&#x60; or &#x60;published&#x60;. | defaults to undefined|
| **from** | [**string**] | The series of data returned starts from this timestamp. Defaults to 24 hours ago. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp. Defaults to the current time. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExperimentationEventsUsage**
> SeriesListRep getExperimentationEventsUsage()

Get a time series array showing the number of experimentation events from your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let eventKey: string; //An event key to filter results by. Can be specified multiple times, one query parameter per event key. (optional) (default to undefined)
let eventKind: string; //An event kind to filter results by. Can be specified multiple times, one query parameter per event kind. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `environmentId`, `eventKey`, `eventKind`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. (optional) (default to undefined)

const { status, data } = await apiInstance.getExperimentationEventsUsage(
    from,
    to,
    projectKey,
    environmentKey,
    eventKey,
    eventKind,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **eventKey** | [**string**] | An event key to filter results by. Can be specified multiple times, one query parameter per event key. | (optional) defaults to undefined|
| **eventKind** | [**string**] | An event kind to filter results by. Can be specified multiple times, one query parameter per event kind. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;environmentId&#x60;, &#x60;eventKey&#x60;, &#x60;eventKind&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExperimentationKeysUsage**
> SeriesListRep getExperimentationKeysUsage()

Get a time series array showing the number of experimentation keys from your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let experimentId: string; //An experiment ID to filter results by. Can be specified multiple times, one query parameter per experiment ID. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `experimentId`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. (optional) (default to undefined)

const { status, data } = await apiInstance.getExperimentationKeysUsage(
    from,
    to,
    projectKey,
    environmentKey,
    experimentId,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **experimentId** | [**string**] | An experiment ID to filter results by. Can be specified multiple times, one query parameter per experiment ID. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;experimentId&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMAUClientsideUsage**
> SeriesListRep getMAUClientsideUsage()

Get a time series of the number of context key usages observed by LaunchDarkly in your account, for the primary context kind only. The counts reflect data reported from client-side SDKs.<br/><br/>For past months, the primary context kind is fixed and reflects the last known primary kind for that month. For the current month, it may vary as new primary context kinds are observed.<br/><br/>The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let sdkName: string; //An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. (optional) (default to undefined)
let anonymous: string; //An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)

const { status, data } = await apiInstance.getMAUClientsideUsage(
    from,
    to,
    projectKey,
    environmentKey,
    sdkName,
    anonymous,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **sdkName** | [**string**] | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | (optional) defaults to undefined|
| **anonymous** | [**string**] | An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.&lt;br/&gt;Valid values: &#x60;true&#x60;, &#x60;false&#x60;. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkAppId&#x60;, &#x60;anonymousV2&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMAUTotalUsage**
> SeriesListRep getMAUTotalUsage()

Get a time series of the number of context key usages observed by LaunchDarkly in your account, for the primary context kind only.<br/><br/>For past months, this reflects the context kind that was most recently marked as primary for that month. For the current month, the context kind may vary as new primary kinds are observed.<br/><br/>The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let sdkName: string; //An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. (optional) (default to undefined)
let sdkType: string; //An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. (optional) (default to undefined)
let anonymous: string; //An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.<br/>Valid values: `true`, `false`. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkType`, `sdkAppId`, `anonymousV2`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)

const { status, data } = await apiInstance.getMAUTotalUsage(
    from,
    to,
    projectKey,
    environmentKey,
    sdkName,
    sdkType,
    anonymous,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **sdkName** | [**string**] | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | (optional) defaults to undefined|
| **sdkType** | [**string**] | An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. | (optional) defaults to undefined|
| **anonymous** | [**string**] | An anonymous value to filter results by. Can be specified multiple times, one query parameter per anonymous value.&lt;br/&gt;Valid values: &#x60;true&#x60;, &#x60;false&#x60;. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;sdkName&#x60;, &#x60;sdkType&#x60;, &#x60;sdkAppId&#x60;, &#x60;anonymousV2&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMauSdksByType**
> SdkListRep getMauSdksByType()

Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in Unix milliseconds, for example, 1656694800000. (optional) (default to undefined)
let to: string; //The data returned ends at this timestamp. Defaults to the current time. The timestamp is in Unix milliseconds, for example, 1657904400000. (optional) (default to undefined)
let sdktype: string; //The type of SDK with monthly active users (MAU) to list. Must be either `client` or `server`. (optional) (default to undefined)

const { status, data } = await apiInstance.getMauSdksByType(
    from,
    to,
    sdktype
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in Unix milliseconds, for example, 1656694800000. | (optional) defaults to undefined|
| **to** | [**string**] | The data returned ends at this timestamp. Defaults to the current time. The timestamp is in Unix milliseconds, for example, 1657904400000. | (optional) defaults to undefined|
| **sdktype** | [**string**] | The type of SDK with monthly active users (MAU) to list. Must be either &#x60;client&#x60; or &#x60;server&#x60;. | (optional) defaults to undefined|


### Return type

**SdkListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | MAU SDKs response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMauUsage**
> SeriesListRep getMauUsage()

Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp. Defaults to 30 days ago. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp. Defaults to the current time. (optional) (default to undefined)
let project: string; //A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects. (optional) (default to undefined)
let environment: string; //An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project. (optional) (default to undefined)
let sdktype: string; //An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server (optional) (default to undefined)
let sdk: string; //An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK. (optional) (default to undefined)
let anonymous: string; //If specified, filters results to either anonymous or nonanonymous users. (optional) (default to undefined)
let groupby: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous, contextKind, sdkAppId (optional) (default to undefined)
let aggregationType: string; //If specified, queries for rolling 30-day, month-to-date, or daily incremental counts. Default is rolling 30-day. Valid values: rolling_30d, month_to_date, daily_incremental (optional) (default to undefined)
let contextKind: string; //Filters results to the specified context kinds. Can be specified multiple times, one query parameter per context kind. If not set, queries for the user context kind. (optional) (default to undefined)

const { status, data } = await apiInstance.getMauUsage(
    from,
    to,
    project,
    environment,
    sdktype,
    sdk,
    anonymous,
    groupby,
    aggregationType,
    contextKind
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp. Defaults to 30 days ago. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp. Defaults to the current time. | (optional) defaults to undefined|
| **project** | [**string**] | A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects. | (optional) defaults to undefined|
| **environment** | [**string**] | An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project. | (optional) defaults to undefined|
| **sdktype** | [**string**] | An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server | (optional) defaults to undefined|
| **sdk** | [**string**] | An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK. | (optional) defaults to undefined|
| **anonymous** | [**string**] | If specified, filters results to either anonymous or nonanonymous users. | (optional) defaults to undefined|
| **groupby** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous, contextKind, sdkAppId | (optional) defaults to undefined|
| **aggregationType** | [**string**] | If specified, queries for rolling 30-day, month-to-date, or daily incremental counts. Default is rolling 30-day. Valid values: rolling_30d, month_to_date, daily_incremental | (optional) defaults to undefined|
| **contextKind** | [**string**] | Filters results to the specified context kinds. Can be specified multiple times, one query parameter per context kind. If not set, queries for the user context kind. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMauUsageByCategory**
> SeriesListRep getMauUsageByCategory()

Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either `browser`, `mobile`, or `backend`.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp. Defaults to 30 days ago. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp. Defaults to the current time. (optional) (default to undefined)

const { status, data } = await apiInstance.getMauUsageByCategory(
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp. Defaults to 30 days ago. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp. Defaults to the current time. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getObservabilityErrorsUsage**
> SeriesListRep getObservabilityErrorsUsage()

Get time-series arrays of the number of observability errors. Supports `daily` and `monthly` granularity.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)

const { status, data } = await apiInstance.getObservabilityErrorsUsage(
    from,
    to,
    projectKey,
    granularity,
    aggregationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getObservabilityLogsUsage**
> SeriesListRep getObservabilityLogsUsage()

Get time-series arrays of the number of observability logs. Supports `daily` and `monthly` granularity.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)

const { status, data } = await apiInstance.getObservabilityLogsUsage(
    from,
    to,
    projectKey,
    granularity,
    aggregationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getObservabilityMetricsUsage**
> SeriesListRep getObservabilityMetricsUsage()

Get time-series arrays of the number of observability metrics. Supports `hourly`, `daily`, and `monthly` granularity.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `hourly`, `daily`, and `monthly`; **average** supports `hourly`, `daily`, and `monthly`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `average`. (optional) (default to undefined)

const { status, data } = await apiInstance.getObservabilityMetricsUsage(
    from,
    to,
    projectKey,
    granularity,
    aggregationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;hourly&#x60;, &#x60;daily&#x60;, and &#x60;monthly&#x60;; **average** supports &#x60;hourly&#x60;, &#x60;daily&#x60;, and &#x60;monthly&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;average&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getObservabilitySessionsUsage**
> SeriesListRep getObservabilitySessionsUsage()

Get time-series arrays of the number of observability sessions. Supports `daily` and `monthly` granularity.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)

const { status, data } = await apiInstance.getObservabilitySessionsUsage(
    from,
    to,
    projectKey,
    granularity,
    aggregationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getObservabilityTracesUsage**
> SeriesListRep getObservabilityTracesUsage()

Get time-series arrays of the number of observability traces. Supports `daily` and `monthly` granularity.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)

const { status, data } = await apiInstance.getObservabilityTracesUsage(
    from,
    to,
    projectKey,
    granularity,
    aggregationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSdkAllVersions**
> Array<SdkVersionDetailsRep> getSdkAllVersions()

Get detailed SDK version usage data for all versions observed in the last 24 hours in your account. Unlike the `/details` endpoint which returns only the max version per SDK, this endpoint returns all SDK versions for the specified filters. This data is refreshed hourly.<br/><br/>All query parameters are optional, allowing you to filter results as broadly or narrowly as needed.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let environmentId: string; //Filter to a specific environment ID. (optional) (default to undefined)
let projectId: string; //Filter to a specific project ID. (optional) (default to undefined)
let sdkName: string; //Filter to a specific SDK name. (optional) (default to undefined)
let sdkType: string; //Filter to a specific SDK type (for example, \'server\', \'browser\', \'mobile\'). (optional) (default to undefined)
let sdkAppId: string; //Filter to a specific SDK application ID. (optional) (default to undefined)
let connectionType: string; //Filter to a specific connection type (for example, \'direct\', \'proxy\'). (optional) (default to undefined)

const { status, data } = await apiInstance.getSdkAllVersions(
    environmentId,
    projectId,
    sdkName,
    sdkType,
    sdkAppId,
    connectionType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environmentId** | [**string**] | Filter to a specific environment ID. | (optional) defaults to undefined|
| **projectId** | [**string**] | Filter to a specific project ID. | (optional) defaults to undefined|
| **sdkName** | [**string**] | Filter to a specific SDK name. | (optional) defaults to undefined|
| **sdkType** | [**string**] | Filter to a specific SDK type (for example, \&#39;server\&#39;, \&#39;browser\&#39;, \&#39;mobile\&#39;). | (optional) defaults to undefined|
| **sdkAppId** | [**string**] | Filter to a specific SDK application ID. | (optional) defaults to undefined|
| **connectionType** | [**string**] | Filter to a specific connection type (for example, \&#39;direct\&#39;, \&#39;proxy\&#39;). | (optional) defaults to undefined|


### Return type

**Array<SdkVersionDetailsRep>**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SDK versions usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSdkVersionsDetails**
> Array<SdkVersionDetailsRep> getSdkVersionsDetails()

Get detailed SDK version usage data for your account, including version information, EOL status, and relay proxy metadata. Refreshed hourly, returns the max version for each SDK observed in the last 24 hours, including those without EOL metadata available.<br/><br/>This endpoint provides comprehensive information about SDK versions in use across your projects and environments.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

const { status, data } = await apiInstance.getSdkVersionsDetails();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SdkVersionDetailsRep>**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SDK versions usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getServiceConnectionsUsage**
> SeriesListRepFloat getServiceConnectionsUsage()

Get a time series array showing the number of service connection minutes from your account. The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let connectionType: string; //A connection type to filter results by. Can be specified multiple times, one query parameter per connection type. (optional) (default to undefined)
let relayVersion: string; //A relay version to filter results by. Can be specified multiple times, one query parameter per relay version. (optional) (default to undefined)
let sdkName: string; //An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. (optional) (default to undefined)
let sdkVersion: string; //An SDK version to filter results by. Can be specified multiple times, one query parameter per SDK version. (optional) (default to undefined)
let sdkType: string; //An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. (optional) (default to undefined)
let sdkAppId: string; //An SDK app ID to filter results by. Can be specified multiple times, one query parameter per SDK app ID. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `connectionType`, `relayVersion`, `sdkName`, `sdkVersion`, `sdkType`, `sdkAppId`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. (optional) (default to undefined)

const { status, data } = await apiInstance.getServiceConnectionsUsage(
    from,
    to,
    projectKey,
    environmentKey,
    connectionType,
    relayVersion,
    sdkName,
    sdkVersion,
    sdkType,
    sdkAppId,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **connectionType** | [**string**] | A connection type to filter results by. Can be specified multiple times, one query parameter per connection type. | (optional) defaults to undefined|
| **relayVersion** | [**string**] | A relay version to filter results by. Can be specified multiple times, one query parameter per relay version. | (optional) defaults to undefined|
| **sdkName** | [**string**] | An SDK name to filter results by. Can be specified multiple times, one query parameter per SDK name. | (optional) defaults to undefined|
| **sdkVersion** | [**string**] | An SDK version to filter results by. Can be specified multiple times, one query parameter per SDK version. | (optional) defaults to undefined|
| **sdkType** | [**string**] | An SDK type to filter results by. Can be specified multiple times, one query parameter per SDK type. | (optional) defaults to undefined|
| **sdkAppId** | [**string**] | An SDK app ID to filter results by. Can be specified multiple times, one query parameter per SDK app ID. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;connectionType&#x60;, &#x60;relayVersion&#x60;, &#x60;sdkName&#x60;, &#x60;sdkVersion&#x60;, &#x60;sdkType&#x60;, &#x60;sdkAppId&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRepFloat**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStreamUsage**
> SeriesListRep getStreamUsage()

Get a time-series array of the number of streaming connections to LaunchDarkly in each time period. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let source: string; //The source of streaming connections to describe. Must be either `client` or `server`. (default to undefined)
let from: string; //The series of data returned starts from this timestamp. Defaults to 30 days ago. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp. Defaults to the current time. (optional) (default to undefined)
let tz: string; //The timezone to use for breaks between days when returning daily data. (optional) (default to undefined)

const { status, data } = await apiInstance.getStreamUsage(
    source,
    from,
    to,
    tz
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**string**] | The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;. | defaults to undefined|
| **from** | [**string**] | The series of data returned starts from this timestamp. Defaults to 30 days ago. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp. Defaults to the current time. | (optional) defaults to undefined|
| **tz** | [**string**] | The timezone to use for breaks between days when returning daily data. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStreamUsageBySdkVersion**
> SeriesListRep getStreamUsageBySdkVersion()

Get multiple series of the number of streaming connections to LaunchDarkly in each time period, separated by SDK type and version. Information about each series is in the metadata array. The granularity of the data depends on the age of the data requested. If the requested range is within the past 2 hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let source: string; //The source of streaming connections to describe. Must be either `client` or `server`. (default to undefined)
let from: string; //The series of data returned starts from this timestamp. Defaults to 24 hours ago. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp. Defaults to the current time. (optional) (default to undefined)
let tz: string; //The timezone to use for breaks between days when returning daily data. (optional) (default to undefined)
let sdk: string; //If included, this filters the returned series to only those that match this SDK name. (optional) (default to undefined)
let version: string; //If included, this filters the returned series to only those that match this SDK version. (optional) (default to undefined)

const { status, data } = await apiInstance.getStreamUsageBySdkVersion(
    source,
    from,
    to,
    tz,
    sdk,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**string**] | The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;. | defaults to undefined|
| **from** | [**string**] | The series of data returned starts from this timestamp. Defaults to 24 hours ago. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp. Defaults to the current time. | (optional) defaults to undefined|
| **tz** | [**string**] | The timezone to use for breaks between days when returning daily data. | (optional) defaults to undefined|
| **sdk** | [**string**] | If included, this filters the returned series to only those that match this SDK name. | (optional) defaults to undefined|
| **version** | [**string**] | If included, this filters the returned series to only those that match this SDK version. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStreamUsageSdkversion**
> SdkVersionListRep getStreamUsageSdkversion()

Get a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let source: string; //The source of streaming connections to describe. Must be either `client` or `server`. (default to undefined)

const { status, data } = await apiInstance.getStreamUsageSdkversion(
    source
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**string**] | The source of streaming connections to describe. Must be either &#x60;client&#x60; or &#x60;server&#x60;. | defaults to undefined|


### Return type

**SdkVersionListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | SDK Versions response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getVegaAIUsage**
> SeriesListRep getVegaAIUsage()

Get time-series arrays of the number of Vega AI usage. Supports `daily` and `monthly` granularity.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. Valid values depend on `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and **rolling_30d** support `daily` only. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`, `rolling_30d`. (optional) (default to undefined)

const { status, data } = await apiInstance.getVegaAIUsage(
    from,
    to,
    projectKey,
    granularity,
    aggregationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. Valid values depend on &#x60;aggregationType&#x60;: **month_to_date** supports &#x60;daily&#x60; and &#x60;monthly&#x60;; **incremental** and **rolling_30d** support &#x60;daily&#x60; only. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;, &#x60;rolling_30d&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWarehouseExportUsage**
> SeriesListRep getWarehouseExportUsage()

Get a time series array showing the number of rows exported to your warehouse Data Export destinations. The supported granularity varies by aggregation type. The maximum time range is 365 days.

### Example

```typescript
import {
    AccountUsageBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AccountUsageBetaApi(configuration);

let from: string; //The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. (optional) (default to undefined)
let to: string; //The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. (optional) (default to undefined)
let projectKey: string; //A project key to filter results by. Can be specified multiple times, one query parameter per project key. (optional) (default to undefined)
let environmentKey: string; //An environment key to filter results by. If specified, exactly one `projectKey` must be provided. Can be specified multiple times, one query parameter per environment key. (optional) (default to undefined)
let destination: string; //A destination kind to filter results by. Can be specified multiple times, one query parameter per destination kind.<br/>Valid values: `snowflake-v2`, `databricks`, `bigquery`, `redshift`, `clickhouse`. (optional) (default to undefined)
let groupBy: string; //If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`, `environmentId`, `destination`. (optional) (default to undefined)
let aggregationType: string; //Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values: `month_to_date`, `incremental`. (optional) (default to undefined)
let granularity: string; //Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`. (optional) (default to undefined)

const { status, data } = await apiInstance.getWarehouseExportUsage(
    from,
    to,
    projectKey,
    environmentKey,
    destination,
    groupBy,
    aggregationType,
    granularity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the beginning of the current month. | (optional) defaults to undefined|
| **to** | [**string**] | The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the current time. | (optional) defaults to undefined|
| **projectKey** | [**string**] | A project key to filter results by. Can be specified multiple times, one query parameter per project key. | (optional) defaults to undefined|
| **environmentKey** | [**string**] | An environment key to filter results by. If specified, exactly one &#x60;projectKey&#x60; must be provided. Can be specified multiple times, one query parameter per environment key. | (optional) defaults to undefined|
| **destination** | [**string**] | A destination kind to filter results by. Can be specified multiple times, one query parameter per destination kind.&lt;br/&gt;Valid values: &#x60;snowflake-v2&#x60;, &#x60;databricks&#x60;, &#x60;bigquery&#x60;, &#x60;redshift&#x60;, &#x60;clickhouse&#x60;. | (optional) defaults to undefined|
| **groupBy** | [**string**] | If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions, one query parameter per dimension.&lt;br/&gt;Valid values: &#x60;projectId&#x60;, &#x60;environmentId&#x60;, &#x60;destination&#x60;. | (optional) defaults to undefined|
| **aggregationType** | [**string**] | Specifies the aggregation method. Defaults to &#x60;month_to_date&#x60;.&lt;br/&gt;Valid values: &#x60;month_to_date&#x60;, &#x60;incremental&#x60;. | (optional) defaults to undefined|
| **granularity** | [**string**] | Specifies the data granularity. Defaults to &#x60;daily&#x60;. &#x60;monthly&#x60; granularity is only supported with the **month_to_date** aggregation type.&lt;br/&gt;Valid values: &#x60;daily&#x60;, &#x60;hourly&#x60;, &#x60;monthly&#x60;. | (optional) defaults to undefined|


### Return type

**SeriesListRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Usage response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |
|**503** | Service unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

