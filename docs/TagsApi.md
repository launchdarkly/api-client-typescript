# TagsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTags**](#gettags) | **GET** /api/v2/tags | List tags|

# **getTags**
> TagsCollection getTags()

Get a list of tags.

### Example

```typescript
import {
    TagsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new TagsApi(configuration);

let kind: Array<string>; //Fetch tags associated with the specified resource type. Options are `flag`, `project`, `environment`, `segment`, `metric`, `aiconfig`, and `view`. Returns all types by default. (optional) (default to undefined)
let pre: string; //Return tags with the specified prefix (optional) (default to undefined)
let archived: boolean; //Whether or not to return archived flags (optional) (default to undefined)
let limit: number; //The number of tags to return. Maximum is 1000. (optional) (default to undefined)
let offset: number; //The index of the first tag to return. Default is 0. (optional) (default to undefined)
let asOf: string; //The time to retrieve tags as of. Default is the current time. (optional) (default to undefined)

const { status, data } = await apiInstance.getTags(
    kind,
    pre,
    archived,
    limit,
    offset,
    asOf
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **kind** | **Array&lt;string&gt;** | Fetch tags associated with the specified resource type. Options are &#x60;flag&#x60;, &#x60;project&#x60;, &#x60;environment&#x60;, &#x60;segment&#x60;, &#x60;metric&#x60;, &#x60;aiconfig&#x60;, and &#x60;view&#x60;. Returns all types by default. | (optional) defaults to undefined|
| **pre** | [**string**] | Return tags with the specified prefix | (optional) defaults to undefined|
| **archived** | [**boolean**] | Whether or not to return archived flags | (optional) defaults to undefined|
| **limit** | [**number**] | The number of tags to return. Maximum is 1000. | (optional) defaults to undefined|
| **offset** | [**number**] | The index of the first tag to return. Default is 0. | (optional) defaults to undefined|
| **asOf** | [**string**] | The time to retrieve tags as of. Default is the current time. | (optional) defaults to undefined|


### Return type

**TagsCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tag collection response |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate Limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

