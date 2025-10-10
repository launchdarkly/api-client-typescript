# InsightsScoresBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInsightGroup**](#createinsightgroup) | **POST** /api/v2/engineering-insights/insights/group | Create insight group|
|[**deleteInsightGroup**](#deleteinsightgroup) | **DELETE** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Delete insight group|
|[**getInsightGroup**](#getinsightgroup) | **GET** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Get insight group|
|[**getInsightGroups**](#getinsightgroups) | **GET** /api/v2/engineering-insights/insights/groups | List insight groups|
|[**getInsightsScores**](#getinsightsscores) | **GET** /api/v2/engineering-insights/insights/scores | Get insight scores|
|[**patchInsightGroup**](#patchinsightgroup) | **PATCH** /api/v2/engineering-insights/insights/groups/{insightGroupKey} | Patch insight group|

# **createInsightGroup**
> InsightGroup createInsightGroup(postInsightGroupParams)

Create insight group

### Example

```typescript
import {
    InsightsScoresBetaApi,
    Configuration,
    PostInsightGroupParams
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsScoresBetaApi(configuration);

let postInsightGroupParams: PostInsightGroupParams; //

const { status, data } = await apiInstance.createInsightGroup(
    postInsightGroupParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postInsightGroupParams** | **PostInsightGroupParams**|  | |


### Return type

**InsightGroup**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInsightGroup**
> deleteInsightGroup()

Delete insight group

### Example

```typescript
import {
    InsightsScoresBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsScoresBetaApi(configuration);

let insightGroupKey: string; //The insight group key (default to undefined)

const { status, data } = await apiInstance.deleteInsightGroup(
    insightGroupKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **insightGroupKey** | [**string**] | The insight group key | defaults to undefined|


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

# **getInsightGroup**
> InsightGroup getInsightGroup()

Get insight group  ### Expanding the insight group response  LaunchDarkly supports expanding the insight group response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `scores` includes details on all of the scores used in the engineering insights metrics views for this group * `environment` includes details on each environment associated with this group  For example, use `?expand=scores` to include the `scores` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsScoresBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsScoresBetaApi(configuration);

let insightGroupKey: string; //The insight group key (default to undefined)
let expand: string; //Options: `scores`, `environment` (optional) (default to undefined)

const { status, data } = await apiInstance.getInsightGroup(
    insightGroupKey,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **insightGroupKey** | [**string**] | The insight group key | defaults to undefined|
| **expand** | [**string**] | Options: &#x60;scores&#x60;, &#x60;environment&#x60; | (optional) defaults to undefined|


### Return type

**InsightGroup**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Insight group response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInsightGroups**
> InsightGroupCollection getInsightGroups()

List groups for which you are collecting insights  ### Expanding the insight groups collection response  LaunchDarkly supports expanding the insight groups collection response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `scores` includes details on all of the scores used in the engineering insights metrics views for each group * `environment` includes details on each environment associated with each group * `metadata` includes counts of the number of insight groups with particular indicators, such as \"excellent,\" \"good,\" \"fair,\" and so on.  For example, use `?expand=scores` to include the `scores` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsScoresBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsScoresBetaApi(configuration);

let limit: number; //The number of insight groups to return. Default is 20. Must be between 1 and 20 inclusive. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let sort: string; //Sort flag list by field. Prefix field with <code>-</code> to sort in descending order. Allowed fields: name (optional) (default to undefined)
let query: string; //Filter list of insights groups by name. (optional) (default to undefined)
let expand: string; //Options: `scores`, `environment`, `metadata` (optional) (default to undefined)

const { status, data } = await apiInstance.getInsightGroups(
    limit,
    offset,
    sort,
    query,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | The number of insight groups to return. Default is 20. Must be between 1 and 20 inclusive. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | Sort flag list by field. Prefix field with &lt;code&gt;-&lt;/code&gt; to sort in descending order. Allowed fields: name | (optional) defaults to undefined|
| **query** | [**string**] | Filter list of insights groups by name. | (optional) defaults to undefined|
| **expand** | [**string**] | Options: &#x60;scores&#x60;, &#x60;environment&#x60;, &#x60;metadata&#x60; | (optional) defaults to undefined|


### Return type

**InsightGroupCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Insight groups collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInsightsScores**
> InsightScores getInsightsScores()

Return insights scores, based on the given parameters. This data is also used in engineering insights metrics views.

### Example

```typescript
import {
    InsightsScoresBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsScoresBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let applicationKey: string; //Comma separated list of application keys (optional) (default to undefined)

const { status, data } = await apiInstance.getInsightsScores(
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

**InsightScores**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Insight score response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchInsightGroup**
> InsightGroup patchInsightGroup(patchOperation)

Update an insight group. Updating an insight group uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    InsightsScoresBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsScoresBetaApi(configuration);

let insightGroupKey: string; //The insight group key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchInsightGroup(
    insightGroupKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **insightGroupKey** | [**string**] | The insight group key | defaults to undefined|


### Return type

**InsightGroup**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Insight group response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**422** | Invalid patch content |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

