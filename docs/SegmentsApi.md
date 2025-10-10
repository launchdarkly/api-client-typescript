# SegmentsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBigSegmentExport**](#createbigsegmentexport) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports | Create big segment export|
|[**createBigSegmentImport**](#createbigsegmentimport) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports | Create big segment import|
|[**deleteSegment**](#deletesegment) | **DELETE** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Delete segment|
|[**getBigSegmentExport**](#getbigsegmentexport) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID} | Get big segment export|
|[**getBigSegmentImport**](#getbigsegmentimport) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID} | Get big segment import|
|[**getContextInstanceSegmentsMembershipByEnv**](#getcontextinstancesegmentsmembershipbyenv) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate | List segment memberships for context instance|
|[**getExpiringTargetsForSegment**](#getexpiringtargetsforsegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey} | Get expiring targets for segment|
|[**getExpiringUserTargetsForSegment**](#getexpiringusertargetsforsegment) | **GET** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Get expiring user targets for segment|
|[**getSegment**](#getsegment) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Get segment|
|[**getSegmentMembershipForContext**](#getsegmentmembershipforcontext) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey} | Get big segment membership for context|
|[**getSegmentMembershipForUser**](#getsegmentmembershipforuser) | **GET** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey} | Get big segment membership for user|
|[**getSegments**](#getsegments) | **GET** /api/v2/segments/{projectKey}/{environmentKey} | List segments|
|[**patchExpiringTargetsForSegment**](#patchexpiringtargetsforsegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey} | Update expiring targets for segment|
|[**patchExpiringUserTargetsForSegment**](#patchexpiringusertargetsforsegment) | **PATCH** /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey} | Update expiring user targets for segment|
|[**patchSegment**](#patchsegment) | **PATCH** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey} | Patch segment|
|[**postSegment**](#postsegment) | **POST** /api/v2/segments/{projectKey}/{environmentKey} | Create segment|
|[**updateBigSegmentContextTargets**](#updatebigsegmentcontexttargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts | Update context targets on a big segment|
|[**updateBigSegmentTargets**](#updatebigsegmenttargets) | **POST** /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users | Update user context targets on a big segment|

# **createBigSegmentExport**
> createBigSegmentExport()

Starts a new export process for a big segment. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)

const { status, data } = await apiInstance.createBigSegmentExport(
    projectKey,
    environmentKey,
    segmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


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
|**200** | Action succeeded |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBigSegmentImport**
> createBigSegmentImport()

Start a new import process for a big segment. This is an import for a list-based segment that can include more than 15,000 entries.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let file: File; //CSV file containing keys (optional) (default to undefined)
let mode: string; //Import mode. Use either `merge` or `replace` (optional) (default to undefined)
let waitOnApprovals: boolean; //Whether to wait for approvals before processing the import (optional) (default to undefined)

const { status, data } = await apiInstance.createBigSegmentImport(
    projectKey,
    environmentKey,
    segmentKey,
    file,
    mode,
    waitOnApprovals
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|
| **file** | [**File**] | CSV file containing keys | (optional) defaults to undefined|
| **mode** | [**string**] | Import mode. Use either &#x60;merge&#x60; or &#x60;replace&#x60; | (optional) defaults to undefined|
| **waitOnApprovals** | [**boolean**] | Whether to wait for approvals before processing the import | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Import request submitted successfully |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Conflicting process |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSegment**
> deleteSegment()

Delete a segment.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)

const { status, data } = await apiInstance.deleteSegment(
    projectKey,
    environmentKey,
    segmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


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
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBigSegmentExport**
> Export getBigSegmentExport()

Returns information about a big segment export process. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let exportID: string; //The export ID (default to undefined)

const { status, data } = await apiInstance.getBigSegmentExport(
    projectKey,
    environmentKey,
    segmentKey,
    exportID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|
| **exportID** | [**string**] | The export ID | defaults to undefined|


### Return type

**Export**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment export response |  -  |
|**400** | Invalid request |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBigSegmentImport**
> Import getBigSegmentImport()

Returns information about a big segment import process. This is the import of a list-based segment that can include more than 15,000 entries.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let importID: string; //The import ID (default to undefined)

const { status, data } = await apiInstance.getBigSegmentImport(
    projectKey,
    environmentKey,
    segmentKey,
    importID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|
| **importID** | [**string**] | The import ID | defaults to undefined|


### Return type

**Import**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment import response |  -  |
|**400** | Invalid request |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getContextInstanceSegmentsMembershipByEnv**
> ContextInstanceSegmentMemberships getContextInstanceSegmentsMembershipByEnv(requestBody)

For a given context instance with attributes, get membership details for all segments. In the request body, pass in the context instance.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.getContextInstanceSegmentsMembershipByEnv(
    projectKey,
    environmentKey,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**ContextInstanceSegmentMemberships**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Context instance segment membership collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExpiringTargetsForSegment**
> ExpiringTargetGetResponse getExpiringTargetsForSegment()

Get a list of a segment\'s context targets that are scheduled for removal.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)

const { status, data } = await apiInstance.getExpiringTargetsForSegment(
    projectKey,
    environmentKey,
    segmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


### Return type

**ExpiringTargetGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expiring context target response |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExpiringUserTargetsForSegment**
> ExpiringUserTargetGetResponse getExpiringUserTargetsForSegment()

> ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).  Get a list of a segment\'s user targets that are scheduled for removal. 

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)

const { status, data } = await apiInstance.getExpiringUserTargetsForSegment(
    projectKey,
    environmentKey,
    segmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


### Return type

**ExpiringUserTargetGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expiring user target response |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSegment**
> UserSegment getSegment()

Get a single segment by key.<br/><br/>Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)

const { status, data } = await apiInstance.getSegment(
    projectKey,
    environmentKey,
    segmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


### Return type

**UserSegment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment response |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSegmentMembershipForContext**
> BigSegmentTarget getSegmentMembershipForContext()

Get the membership status (included/excluded) for a given context in this big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let contextKey: string; //The context key (default to undefined)

const { status, data } = await apiInstance.getSegmentMembershipForContext(
    projectKey,
    environmentKey,
    segmentKey,
    contextKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|
| **contextKey** | [**string**] | The context key | defaults to undefined|


### Return type

**BigSegmentTarget**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment membership for context response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSegmentMembershipForUser**
> BigSegmentTarget getSegmentMembershipForUser()

> ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).  Get the membership status (included/excluded) for a given user in this big segment. This operation does not support standard segments. 

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let userKey: string; //The user key (default to undefined)

const { status, data } = await apiInstance.getSegmentMembershipForUser(
    projectKey,
    environmentKey,
    segmentKey,
    userKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|
| **userKey** | [**string**] | The user key | defaults to undefined|


### Return type

**BigSegmentTarget**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment membership for user response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSegments**
> UserSegments getSegments()

Get a list of all segments in the given project.  Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.  ### Filtering segments  The `filter` parameter supports the following operators: `equals`, `anyOf`, and `exists`.  You can also combine filters in the following ways:  - Use a comma (`,`) as an AND operator - Use a vertical bar (`|`) as an OR operator - Use parentheses (`()`) to group filters  #### Supported fields and operators  You can only filter certain fields in segments when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.  When you search for segments, the `filter` parameter supports the following fields and operators:  |<div style=\"width:120px\">Field</div> |Description |Supported operators | |---|---|---| | `excludedKeys` | The segment keys of segments to exclude from the results. | `anyOf` | | `external` | Whether the segment is a synced segment. | `exists` | | `includedKeys` | The segment keys of segments to include in the results. | `anyOf` | | `query` | A \"fuzzy\" search across segment key, name, and description. Supply a string or list of strings to the operator. | `equals` | | `tags` | The segment tags. | `anyOf` | | `unbounded` | Whether the segment is a standard segment (`false`) or a big segment (`true`). Standard segments include rule-based segments and smaller list-based segments. Big segments include larger list-based segments and synced segments. | `equals` |  Here are a few examples:  * The filter `?filter=tags anyOf [\"enterprise\", \"beta\"],query equals \"toggle\"` matches segments with \"toggle\" in their key, name, or description that also have \"enterprise\" or \"beta\" as a tag. * The filter `?filter=excludedKeys anyOf [\"segmentKey1\", \"segmentKey2\"]` excludes the segments with those keys from the results. * The filter `?filter=unbounded equals true` matches larger list-based segments and synced segments.  The documented values for `filter` query parameters are prior to URL encoding. For example, the `[` in `?filter=tags anyOf [\"enterprise\", \"beta\"]` must be encoded to `%5B`. 

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let limit: number; //The number of segments to return. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let sort: string; //Accepts sorting order and fields. Fields can be comma separated. Possible fields are \'creationDate\', \'name\', \'lastModified\'. Example: `sort=name` sort by names ascending or `sort=-name,creationDate` sort by names descending and creationDate ascending. (optional) (default to undefined)
let filter: string; //Accepts filter by `excludedKeys`, `external`, `includedKeys`, `query`, `tags`, `unbounded`, `view`. To learn more about the filter syntax, read the  \'Filtering segments\' section above. (optional) (default to undefined)

const { status, data } = await apiInstance.getSegments(
    projectKey,
    environmentKey,
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
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **limit** | [**number**] | The number of segments to return. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | Accepts sorting order and fields. Fields can be comma separated. Possible fields are \&#39;creationDate\&#39;, \&#39;name\&#39;, \&#39;lastModified\&#39;. Example: &#x60;sort&#x3D;name&#x60; sort by names ascending or &#x60;sort&#x3D;-name,creationDate&#x60; sort by names descending and creationDate ascending. | (optional) defaults to undefined|
| **filter** | [**string**] | Accepts filter by &#x60;excludedKeys&#x60;, &#x60;external&#x60;, &#x60;includedKeys&#x60;, &#x60;query&#x60;, &#x60;tags&#x60;, &#x60;unbounded&#x60;, &#x60;view&#x60;. To learn more about the filter syntax, read the  \&#39;Filtering segments\&#39; section above. | (optional) defaults to undefined|


### Return type

**UserSegments**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment collection response |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchExpiringTargetsForSegment**
> ExpiringTargetPatchResponse patchExpiringTargetsForSegment(patchSegmentExpiringTargetInputRep)

 Update expiring context targets for a segment. Updating a context target expiration uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.  ### Instructions  Semantic patch requests support the following `kind` instructions for updating expiring context targets.  <details> <summary>Click to expand instructions for <strong>updating expiring context targets</strong></summary>  #### addExpiringTarget  Schedules a date and time when LaunchDarkly will remove a context from segment targeting. The segment must already have the context as an individual target.  ##### Parameters  - `targetType`: The type of individual target for this context. Must be either `included` or `excluded`. - `contextKey`: The context key. - `contextKind`: The kind of context being targeted. - `value`: The date when the context should expire from the segment targeting, in Unix milliseconds.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addExpiringTarget\",     \"targetType\": \"included\",     \"contextKey\": \"user-key-123abc\",     \"contextKind\": \"user\",     \"value\": 1754092860000   }] } ```  #### updateExpiringTarget  Updates the date and time when LaunchDarkly will remove a context from segment targeting.  ##### Parameters  - `targetType`: The type of individual target for this context. Must be either `included` or `excluded`. - `contextKey`: The context key. - `contextKind`: The kind of context being targeted. - `value`: The new date when the context should expire from the segment targeting, in Unix milliseconds. - `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn\'t match current version of the expiring target.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"updateExpiringTarget\",     \"targetType\": \"included\",     \"contextKey\": \"user-key-123abc\",     \"contextKind\": \"user\",     \"value\": 1754179260000   }] } ```  #### removeExpiringTarget  Removes the scheduled expiration for the context in the segment.  ##### Parameters  - `targetType`: The type of individual target for this context. Must be either `included` or `excluded`. - `contextKey`: The context key. - `contextKind`: The kind of context being targeted.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeExpiringTarget\",     \"targetType\": \"included\",     \"contextKey\": \"user-key-123abc\",     \"contextKind\": \"user\",   }] } ```  </details> 

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    PatchSegmentExpiringTargetInputRep
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let patchSegmentExpiringTargetInputRep: PatchSegmentExpiringTargetInputRep; //

const { status, data } = await apiInstance.patchExpiringTargetsForSegment(
    projectKey,
    environmentKey,
    segmentKey,
    patchSegmentExpiringTargetInputRep
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchSegmentExpiringTargetInputRep** | **PatchSegmentExpiringTargetInputRep**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


### Return type

**ExpiringTargetPatchResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expiring  target response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchExpiringUserTargetsForSegment**
> ExpiringUserTargetPatchResponse patchExpiringUserTargetsForSegment(patchSegmentRequest)

 > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring targets for segment](https://launchdarkly.com/docs/api/segments/patch-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).  Update expiring user targets for a segment. Updating a user target expiration uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.  ### Instructions  Semantic patch requests support the following `kind` instructions for updating expiring user targets.  <details> <summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>  #### addExpireUserTargetDate  Schedules a date and time when LaunchDarkly will remove a user from segment targeting.  ##### Parameters  - `targetType`: A segment\'s target type, must be either `included` or `excluded`. - `userKey`: The user key. - `value`: The date when the user should expire from the segment targeting, in Unix milliseconds.  #### updateExpireUserTargetDate  Updates the date and time when LaunchDarkly will remove a user from segment targeting.  ##### Parameters  - `targetType`: A segment\'s target type, must be either `included` or `excluded`. - `userKey`: The user key. - `value`: The new date when the user should expire from the segment targeting, in Unix milliseconds. - `version`: The segment version.  #### removeExpireUserTargetDate  Removes the scheduled expiration for the user in the segment.  ##### Parameters  - `targetType`: A segment\'s target type, must be either `included` or `excluded`. - `userKey`: The user key.  </details> 

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    PatchSegmentRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let patchSegmentRequest: PatchSegmentRequest; //

const { status, data } = await apiInstance.patchExpiringUserTargetsForSegment(
    projectKey,
    environmentKey,
    segmentKey,
    patchSegmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchSegmentRequest** | **PatchSegmentRequest**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


### Return type

**ExpiringUserTargetPatchResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expiring user target response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchSegment**
> UserSegment patchSegment(patchWithComment)

Update a segment. The request body must be a valid semantic patch, JSON patch, or JSON merge patch. To learn more the different formats, read [Updates](https://launchdarkly.com/docs/api#updates).  ### Using semantic patches on a segment  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  The body of a semantic patch request for updating segments requires an `environmentKey` in addition to `instructions` and an optional `comment`. The body of the request takes the following properties:  * `comment` (string): (Optional) A description of the update. * `environmentKey` (string): (Required) The key of the LaunchDarkly environment. * `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object.  ### Instructions  Semantic patch requests support the following `kind` instructions for updating segments.  <details> <summary>Click to expand instructions for <strong>updating segment details and settings</strong></summary>  #### addTags  Adds tags to the segment.  ##### Parameters  - `values`: A list of tags to add.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addTags\",     \"values\": [\"tag1\", \"tag2\"]   }] } ```  #### removeTags  Removes tags from the segment.  ##### Parameters  - `values`: A list of tags to remove.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeTags\",     \"values\": [\"tag1\", \"tag2\"]   }] } ```  #### updateName  Updates the name of the segment.  ##### Parameters  - `value`: Name of the segment.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"updateName\",     \"value\": \"Updated segment name\"   }] } ```  </details>  <details> <summary>Click to expand instructions for <strong>updating segment individual targets</strong></summary>  #### addExcludedTargets  Adds context keys to the individual context targets excluded from the segment for the specified `contextKind`. Returns an error if this causes the same context key to be both included and excluded.  ##### Parameters  - `contextKind`: The context kind the targets should be added to. - `values`: List of keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addExcludedTargets\",     \"contextKind\": \"org\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### addExcludedUsers  Adds user keys to the individual user targets excluded from the segment. Returns an error if this causes the same user key to be both included and excluded. If you are working with contexts, use `addExcludedTargets` instead of this instruction.  ##### Parameters  - `values`: List of user keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addExcludedUsers\",     \"values\": [ \"user-key-123abc\", \"user-key-456def\" ]   }] } ```  #### addIncludedTargets  Adds context keys to the individual context targets included in the segment for the specified `contextKind`. Returns an error if this causes the same context key to be both included and excluded.  ##### Parameters  - `contextKind`: The context kind the targets should be added to. - `values`: List of keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addIncludedTargets\",     \"contextKind\": \"org\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### addIncludedUsers  Adds user keys to the individual user targets included in the segment. Returns an error if this causes the same user key to be both included and excluded. If you are working with contexts, use `addIncludedTargets` instead of this instruction.  ##### Parameters  - `values`: List of user keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addIncludedUsers\",     \"values\": [ \"user-key-123abc\", \"user-key-456def\" ]   }] } ```  #### removeExcludedTargets  Removes context keys from the individual context targets excluded from the segment for the specified `contextKind`.  ##### Parameters  - `contextKind`: The context kind the targets should be removed from. - `values`: List of keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeExcludedTargets\",     \"contextKind\": \"org\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### removeExcludedUsers  Removes user keys from the individual user targets excluded from the segment. If you are working with contexts, use `removeExcludedTargets` instead of this instruction.  ##### Parameters  - `values`: List of user keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeExcludedUsers\",     \"values\": [ \"user-key-123abc\", \"user-key-456def\" ]   }] } ```  #### removeIncludedTargets  Removes context keys from the individual context targets included in the segment for the specified `contextKind`.  ##### Parameters  - `contextKind`: The context kind the targets should be removed from. - `values`: List of keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeIncludedTargets\",     \"contextKind\": \"org\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### removeIncludedUsers  Removes user keys from the individual user targets included in the segment. If you are working with contexts, use `removeIncludedTargets` instead of this instruction.  ##### Parameters  - `values`: List of user keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeIncludedUsers\",     \"values\": [ \"user-key-123abc\", \"user-key-456def\" ]   }] } ```  </details>  <details> <summary>Click to expand instructions for <strong>updating segment targeting rules</strong></summary>  #### addClauses  Adds the given clauses to the rule indicated by `ruleId`.  ##### Parameters  - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case. - `ruleId`: ID of a rule in the segment.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addClauses\",     \"clauses\": [       {         \"attribute\": \"email\",         \"negate\": false,         \"op\": \"contains\",         \"values\": [\"value1\"]       }     ],     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",   }] } ```  #### addRule  Adds a new targeting rule to the segment. The rule may contain `clauses`.  ##### Parameters  - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case. - `description`: A description of the rule.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addRule\",     \"clauses\": [       {         \"attribute\": \"email\",         \"op\": \"contains\",         \"negate\": false,         \"values\": [\"@launchdarkly.com\"]       }     ],     \"description\": \"Targeting rule for LaunchDarkly employees\",   }] } ```  #### addValuesToClause  Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.  ##### Parameters  - `ruleId`: ID of a rule in the segment. - `clauseId`: ID of a clause in that rule. - `values`: Array of strings, case sensitive.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addValuesToClause\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauseId\": \"10a58772-3121-400f-846b-b8a04e8944ed\",     \"values\": [\"beta_testers\"]   }] } ```  #### removeClauses  Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.  ##### Parameters  - `ruleId`: ID of a rule in the segment. - `clauseIds`: Array of IDs of clauses in the rule.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeClauses\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauseIds\": [\"10a58772-3121-400f-846b-b8a04e8944ed\", \"36a461dc-235e-4b08-97b9-73ce9365873e\"]   }] } ```  #### removeRule  Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.  ##### Parameters  - `ruleId`: ID of a rule in the segment.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeRule\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\"   }] } ```  #### removeValuesFromClause  Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.  ##### Parameters  - `ruleId`: ID of a rule in the segment. - `clauseId`: ID of a clause in that rule. - `values`: Array of strings, case sensitive.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeValuesFromClause\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauseId\": \"10a58772-3121-400f-846b-b8a04e8944ed\",     \"values\": [\"beta_testers\"]   }] } ```  #### reorderRules  Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules in the segment.  ##### Parameters  - `ruleIds`: Array of IDs of all targeting rules in the segment.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"reorderRules\",     \"ruleIds\": [\"a902ef4a-2faf-4eaf-88e1-ecc356708a29\", \"63c238d1-835d-435e-8f21-c8d5e40b2a3d\"]   }] } ```  #### updateClause  Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.  ##### Parameters  - `ruleId`: ID of a rule in the segment. - `clauseId`: ID of a clause in that rule. - `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"updateClause\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"clauseId\": \"10c7462a-2062-45ba-a8bb-dfb3de0f8af5\",     \"clause\": {       \"contextKind\": \"user\",       \"attribute\": \"country\",       \"op\": \"in\",       \"negate\": false,       \"values\": [\"Mexico\", \"Canada\"]     }   }] } ```  #### updateRuleDescription  Updates the description of the segment targeting rule.  ##### Parameters  - `description`: The new human-readable description for this rule. - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the segment.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"updateRuleDescription\",     \"description\": \"New rule description\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\"   }] } ```  #### updateRuleRolloutAndContextKind  For a rule that includes a percentage of targets, updates the percentage and the context kind of the targets to include.  ##### Parameters  - `ruleId`: The ID of a targeting rule in the segment that includes a percentage of targets. - `weight`: The weight, in thousandths of a percent (0-100000). - `contextKind`: The context kind.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"reorderRules\",     \"ruleId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\",     \"weight\": \"20000\",     \"contextKind\": \"device\"   }] } ```  </details>  <details> <summary>Click to expand instructions for <strong>working with Big Segments</strong></summary>  A \"big segment\" is a segment that is either a synced segment, or a list-based segment with more than 15,000 entries that includes only one targeted context kind. LaunchDarkly uses different implementations for different types of segments so that all of your segments have good performance.  The following semantic patch instructions apply only to these [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments).  #### addBigSegmentExcludedTargets  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Adds context keys to the context targets excluded from the segment. Returns an error if this causes the same context key to be both included and excluded.  ##### Parameters  - `values`: List of context keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addBigSegmentExcludedTargets\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### addBigSegmentIncludedTargets  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Adds context keys to the context targets included in the segment. Returns an error if this causes the same context key to be both included and excluded.  ##### Parameters  - `values`: List of context keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addBigSegmentIncludedTargets\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### processBigSegmentImport  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Processes a segment import.  ##### Parameters  - `importId`: The ID of the import. The import ID is returned in the `Location` header as part of the [Create big segment import](https://launchdarkly.com/docs/api/segments/create-big-segment-import) request.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"processBigSegmentImport\",     \"importId\": \"a902ef4a-2faf-4eaf-88e1-ecc356708a29\"   }] } ```   #### removeBigSegmentExcludedTargets  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Removes context keys from the context targets excluded from the segment.  ##### Parameters  - `values`: List of context keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeBigSegmentExcludedTargets\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  #### removeBigSegmentIncludedTargets  For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Removes context keys from the context targets included in the segment.  ##### Parameters  - `values`: List of context keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"removeBigSegmentIncludedTargets\",     \"values\": [ \"org-key-123abc\", \"org-key-456def\" ]   }] } ```  </details>  ### Using JSON patches on a segment  If you do not include the header described above, you can use a [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.  For example, to update the description for a segment with a JSON patch, use the following request body:  ```json {   \"patch\": [     {       \"op\": \"replace\",       \"path\": \"/description\",       \"value\": \"new description\"     }   ] } ```  To update fields in the segment that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add the new entry to the beginning of the array. Use `/-` to add the new entry to the end of the array.  For example, to add a rule to a segment, use the following request body:  ```json {   \"patch\":[     {       \"op\": \"add\",       \"path\": \"/rules/0\",       \"value\": {         \"clauses\": [{ \"contextKind\": \"user\", \"attribute\": \"email\", \"op\": \"endsWith\", \"values\": [\".edu\"], \"negate\": false }]       }     }   ] } ```  To add or remove targets from segments, we recommend using semantic patch. Semantic patch for segments includes specific instructions for adding and removing both included and excluded targets. 

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    PatchWithComment
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let patchWithComment: PatchWithComment; //

const { status, data } = await apiInstance.patchSegment(
    projectKey,
    environmentKey,
    segmentKey,
    patchWithComment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchWithComment** | **PatchWithComment**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


### Return type

**UserSegment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSegment**
> UserSegment postSegment(segmentBody)

Create a new segment.

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentBody
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentBody: SegmentBody; //

const { status, data } = await apiInstance.postSegment(
    projectKey,
    environmentKey,
    segmentBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentBody** | **SegmentBody**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**UserSegment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Segment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBigSegmentContextTargets**
> updateBigSegmentContextTargets(segmentUserState)

Update context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentUserState
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let segmentUserState: SegmentUserState; //

const { status, data } = await apiInstance.updateBigSegmentContextTargets(
    projectKey,
    environmentKey,
    segmentKey,
    segmentUserState
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentUserState** | **SegmentUserState**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


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
|**204** | Action succeeded |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBigSegmentTargets**
> updateBigSegmentTargets(segmentUserState)

Update user context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentUserState
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let segmentKey: string; //The segment key (default to undefined)
let segmentUserState: SegmentUserState; //

const { status, data } = await apiInstance.updateBigSegmentTargets(
    projectKey,
    environmentKey,
    segmentKey,
    segmentUserState
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentUserState** | **SegmentUserState**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **segmentKey** | [**string**] | The segment key | defaults to undefined|


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
|**204** | Action succeeded |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

