# ContextsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteContextInstances**](#deletecontextinstances) | **DELETE** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id} | Delete context instances|
|[**evaluateContextInstance**](#evaluatecontextinstance) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate | Evaluate flags for context instance|
|[**getContextAttributeNames**](#getcontextattributenames) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes | Get context attribute names|
|[**getContextAttributeValues**](#getcontextattributevalues) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName} | Get context attribute values|
|[**getContextInstances**](#getcontextinstances) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id} | Get context instances|
|[**getContextKindsByProjectKey**](#getcontextkindsbyprojectkey) | **GET** /api/v2/projects/{projectKey}/context-kinds | Get context kinds|
|[**getContexts**](#getcontexts) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key} | Get contexts|
|[**putContextKind**](#putcontextkind) | **PUT** /api/v2/projects/{projectKey}/context-kinds/{key} | Create or update context kind|
|[**searchContextInstances**](#searchcontextinstances) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search | Search for context instances|
|[**searchContexts**](#searchcontexts) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search | Search for contexts|

# **deleteContextInstances**
> deleteContextInstances()

Delete context instances by ID.

### Example

```typescript
import {
    ContextsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The context instance ID (default to undefined)

const { status, data } = await apiInstance.deleteContextInstances(
    projectKey,
    environmentKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The context instance ID | defaults to undefined|


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

# **evaluateContextInstance**
> ContextInstanceEvaluations evaluateContextInstance(requestBody)

Evaluate flags for a context instance, for example, to determine the expected flag variation. **Do not use this API instead of an SDK.** The LaunchDarkly SDKs are specialized for the tasks of evaluating feature flags in your application at scale and generating analytics events based on those evaluations. This API is not designed for that use case. Any evaluations you perform with this API will not be reflected in features such as flag statuses and flag insights. Context instances evaluated by this API will not appear in the Contexts list. To learn more, read [Comparing LaunchDarkly\'s SDKs and REST API](https://launchdarkly.com/docs/guides/api/comparing-sdk-rest-api).  ### Filtering  LaunchDarkly supports the `filter` query param for filtering, with the following fields:  - `query` filters for a string that matches against the flags\' keys and names. It is not case sensitive. For example: `filter=query equals dark-mode`. - `tags` filters the list to flags that have all of the tags in the list. For example: `filter=tags contains [\"beta\",\"q1\"]`.  You can also apply multiple filters at once. For example, setting `filter=query equals dark-mode, tags contains [\"beta\",\"q1\"]` matches flags which match the key or name `dark-mode` and are tagged `beta` and `q1`. 

### Example

```typescript
import {
    ContextsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let requestBody: { [key: string]: any; }; //
let limit: number; //The number of feature flags to return. Defaults to -1, which returns all flags (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let sort: string; //A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order (optional) (default to undefined)
let filter: string; //A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above. (optional) (default to undefined)

const { status, data } = await apiInstance.evaluateContextInstance(
    projectKey,
    environmentKey,
    requestBody,
    limit,
    offset,
    sort,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **limit** | [**number**] | The number of feature flags to return. Defaults to -1, which returns all flags | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. Each filter is of the form &#x60;field operator value&#x60;. Supported fields are explained above. | (optional) defaults to undefined|


### Return type

**ContextInstanceEvaluations**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag evaluation collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContextAttributeNames**
> ContextAttributeNamesCollection getContextAttributeNames()

Get context attribute names.

### Example

```typescript
import {
    ContextsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let filter: string; //A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `name` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). (optional) (default to undefined)
let limit: number; //Specifies the maximum number of items in the collection to return (max: 100, default: 100) (optional) (default to undefined)

const { status, data } = await apiInstance.getContextAttributeNames(
    projectKey,
    environmentKey,
    filter,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **filter** | [**string**] | A comma-separated list of context filters. This endpoint only accepts &#x60;kind&#x60; filters, with the &#x60;equals&#x60; operator, and &#x60;name&#x60; filters, with the &#x60;startsWith&#x60; operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). | (optional) defaults to undefined|
| **limit** | [**number**] | Specifies the maximum number of items in the collection to return (max: 100, default: 100) | (optional) defaults to undefined|


### Return type

**ContextAttributeNamesCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Context attribute names collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContextAttributeValues**
> ContextAttributeValuesCollection getContextAttributeValues()

Get context attribute values.

### Example

```typescript
import {
    ContextsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let attributeName: string; //The attribute name (default to undefined)
let filter: string; //A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `value` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). (optional) (default to undefined)
let limit: number; //Specifies the maximum number of items in the collection to return (max: 100, default: 50) (optional) (default to undefined)

const { status, data } = await apiInstance.getContextAttributeValues(
    projectKey,
    environmentKey,
    attributeName,
    filter,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **attributeName** | [**string**] | The attribute name | defaults to undefined|
| **filter** | [**string**] | A comma-separated list of context filters. This endpoint only accepts &#x60;kind&#x60; filters, with the &#x60;equals&#x60; operator, and &#x60;value&#x60; filters, with the &#x60;startsWith&#x60; operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). | (optional) defaults to undefined|
| **limit** | [**number**] | Specifies the maximum number of items in the collection to return (max: 100, default: 50) | (optional) defaults to undefined|


### Return type

**ContextAttributeValuesCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Context attribute values collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContextInstances**
> ContextInstances getContextInstances()

Get context instances by ID.

### Example

```typescript
import {
    ContextsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The context instance ID (default to undefined)
let limit: number; //Specifies the maximum number of context instances to return (max: 50, default: 20) (optional) (default to undefined)
let continuationToken: string; //Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead. (optional) (default to undefined)
let sort: string; //Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`. (optional) (default to undefined)
let filter: string; //A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). (optional) (default to undefined)
let includeTotalCount: boolean; //Specifies whether to include or omit the total count of matching context instances. Defaults to true. (optional) (default to undefined)

const { status, data } = await apiInstance.getContextInstances(
    projectKey,
    environmentKey,
    id,
    limit,
    continuationToken,
    sort,
    filter,
    includeTotalCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The context instance ID | defaults to undefined|
| **limit** | [**number**] | Specifies the maximum number of context instances to return (max: 50, default: 20) | (optional) defaults to undefined|
| **continuationToken** | [**string**] | Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the &#x60;next&#x60; link we provide instead. | (optional) defaults to undefined|
| **sort** | [**string**] | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &#x60;ts&#x60; for this value, or descending order by specifying &#x60;-ts&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of context filters. This endpoint only accepts an &#x60;applicationId&#x60; filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). | (optional) defaults to undefined|
| **includeTotalCount** | [**boolean**] | Specifies whether to include or omit the total count of matching context instances. Defaults to true. | (optional) defaults to undefined|


### Return type

**ContextInstances**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Context instances collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContextKindsByProjectKey**
> ContextKindsCollectionRep getContextKindsByProjectKey()

Get all context kinds for a given project.

### Example

```typescript
import {
    ContextsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)

const { status, data } = await apiInstance.getContextKindsByProjectKey(
    projectKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**ContextKindsCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Context kinds collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContexts**
> Contexts getContexts()

Get contexts based on kind and key.

### Example

```typescript
import {
    ContextsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let kind: string; //The context kind (default to undefined)
let key: string; //The context key (default to undefined)
let limit: number; //Specifies the maximum number of items in the collection to return (max: 50, default: 20) (optional) (default to undefined)
let continuationToken: string; //Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead. (optional) (default to undefined)
let sort: string; //Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`. (optional) (default to undefined)
let filter: string; //A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). (optional) (default to undefined)
let includeTotalCount: boolean; //Specifies whether to include or omit the total count of matching contexts. Defaults to true. (optional) (default to undefined)

const { status, data } = await apiInstance.getContexts(
    projectKey,
    environmentKey,
    kind,
    key,
    limit,
    continuationToken,
    sort,
    filter,
    includeTotalCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **kind** | [**string**] | The context kind | defaults to undefined|
| **key** | [**string**] | The context key | defaults to undefined|
| **limit** | [**number**] | Specifies the maximum number of items in the collection to return (max: 50, default: 20) | (optional) defaults to undefined|
| **continuationToken** | [**string**] | Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the &#x60;next&#x60; link we provide instead. | (optional) defaults to undefined|
| **sort** | [**string**] | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &#x60;ts&#x60; for this value, or descending order by specifying &#x60;-ts&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of context filters. This endpoint only accepts an &#x60;applicationId&#x60; filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). | (optional) defaults to undefined|
| **includeTotalCount** | [**boolean**] | Specifies whether to include or omit the total count of matching contexts. Defaults to true. | (optional) defaults to undefined|


### Return type

**Contexts**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Contexts collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putContextKind**
> UpsertResponseRep putContextKind(upsertContextKindPayload)

Create or update a context kind by key. Only the included fields will be updated.

### Example

```typescript
import {
    ContextsApi,
    Configuration,
    UpsertContextKindPayload
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let key: string; //The context kind key (default to undefined)
let upsertContextKindPayload: UpsertContextKindPayload; //

const { status, data } = await apiInstance.putContextKind(
    projectKey,
    key,
    upsertContextKindPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertContextKindPayload** | **UpsertContextKindPayload**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **key** | [**string**] | The context kind key | defaults to undefined|


### Return type

**UpsertResponseRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Context kind upsert response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchContextInstances**
> ContextInstances searchContextInstances(contextInstanceSearch)

 Search for context instances.  You can use either the query parameters or the request body parameters. If both are provided, there is an error.  To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/api/contexts#filtering-contexts-and-context-instances). To learn more about context instances, read [Context instances](https://launchdarkly.com/docs/home/observability/multi-contexts#context-instances). 

### Example

```typescript
import {
    ContextsApi,
    Configuration,
    ContextInstanceSearch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let contextInstanceSearch: ContextInstanceSearch; //
let limit: number; //Specifies the maximum number of items in the collection to return (max: 50, default: 20) (optional) (default to undefined)
let continuationToken: string; //Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead. (optional) (default to undefined)
let sort: string; //Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`. (optional) (default to undefined)
let filter: string; //A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). (optional) (default to undefined)
let includeTotalCount: boolean; //Specifies whether to include or omit the total count of matching context instances. Defaults to true. (optional) (default to undefined)

const { status, data } = await apiInstance.searchContextInstances(
    projectKey,
    environmentKey,
    contextInstanceSearch,
    limit,
    continuationToken,
    sort,
    filter,
    includeTotalCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contextInstanceSearch** | **ContextInstanceSearch**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **limit** | [**number**] | Specifies the maximum number of items in the collection to return (max: 50, default: 20) | (optional) defaults to undefined|
| **continuationToken** | [**string**] | Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the &#x60;next&#x60; link we provide instead. | (optional) defaults to undefined|
| **sort** | [**string**] | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &#x60;ts&#x60; for this value, or descending order by specifying &#x60;-ts&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of context filters. This endpoint only accepts an &#x60;applicationId&#x60; filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). | (optional) defaults to undefined|
| **includeTotalCount** | [**boolean**] | Specifies whether to include or omit the total count of matching context instances. Defaults to true. | (optional) defaults to undefined|


### Return type

**ContextInstances**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Context instances collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchContexts**
> Contexts searchContexts(contextSearch)

 Search for contexts.  You can use either the query parameters or the request body parameters. If both are provided, there is an error.  To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/api/contexts#filtering-contexts-and-context-instances). To learn more about contexts, read [Contexts and context kinds](https://launchdarkly.com/docs/home/observability/contexts#contexts-and-context-kinds). 

### Example

```typescript
import {
    ContextsApi,
    Configuration,
    ContextSearch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let contextSearch: ContextSearch; //
let limit: number; //Specifies the maximum number of items in the collection to return (max: 50, default: 20) (optional) (default to undefined)
let continuationToken: string; //Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead. (optional) (default to undefined)
let sort: string; //Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`. (optional) (default to undefined)
let filter: string; //A comma-separated list of context filters. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). (optional) (default to undefined)
let includeTotalCount: boolean; //Specifies whether to include or omit the total count of matching contexts. Defaults to true. (optional) (default to undefined)

const { status, data } = await apiInstance.searchContexts(
    projectKey,
    environmentKey,
    contextSearch,
    limit,
    continuationToken,
    sort,
    filter,
    includeTotalCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contextSearch** | **ContextSearch**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **limit** | [**number**] | Specifies the maximum number of items in the collection to return (max: 50, default: 20) | (optional) defaults to undefined|
| **continuationToken** | [**string**] | Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the &#x60;next&#x60; link we provide instead. | (optional) defaults to undefined|
| **sort** | [**string**] | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &#x60;ts&#x60; for this value, or descending order by specifying &#x60;-ts&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of context filters. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). | (optional) defaults to undefined|
| **includeTotalCount** | [**boolean**] | Specifies whether to include or omit the total count of matching contexts. Defaults to true. | (optional) defaults to undefined|


### Return type

**Contexts**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Contexts collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

