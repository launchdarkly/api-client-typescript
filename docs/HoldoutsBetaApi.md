# HoldoutsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllHoldouts**](#getallholdouts) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts | Get all holdouts|
|[**getHoldout**](#getholdout) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey} | Get holdout|
|[**getHoldoutById**](#getholdoutbyid) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/id/{holdoutId} | Get Holdout by Id|
|[**patchHoldout**](#patchholdout) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey} | Patch holdout|
|[**postHoldout**](#postholdout) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts | Create holdout|

# **getAllHoldouts**
> HoldoutsCollectionRep getAllHoldouts()


### Example

```typescript
import {
    HoldoutsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new HoldoutsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let limit: number; //The number of holdouts to return in the response. Defaults to 20 (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an `offset` of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllHoldouts(
    projectKey,
    environmentKey,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **limit** | [**number**] | The number of holdouts to return in the response. Defaults to 20 | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an &#x60;offset&#x60; of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**HoldoutsCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All Holdouts response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHoldout**
> HoldoutDetailRep getHoldout()

Get details about a holdout.  ### Expanding the holdout response  LaunchDarkly supports the following fields for expanding the \"Get holdout\" response. By default, these fields are **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:  - `draftIteration` includes the iteration which has not been started yet, if any, for this holdout. - `previousIterations` includes all iterations prior to the current iteration, for this holdout. By default only the current iteration is included in the response. - `rel-draftIteration` includes the iteration which has not been started yet, if any, for the experiments related to this holdout. - `rel-metrics` includes metrics for experiments related to this holdout. - `rel-previousIterations` includes all iterations prior to the current iteration, for the experiments related to this holdout. - `rel-secondaryMetrics` includes secondary metrics for experiments related to this holdout. - `rel-treatments` includes all treatment and parameter details for experiments related to this holdout. - `secondaryMetrics` includes secondary metrics for this holdout. By default only the primary metric is included in the response. - `treatments` includes all treatment and parameter details for this holdout. By default treatment data is not included in the response.  For example, `expand=draftIteration,rel-draftIteration` includes the `draftIteration` and `rel-draftIteration` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response. 

### Example

```typescript
import {
    HoldoutsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new HoldoutsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let holdoutKey: string; //The holdout experiment key (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. Holdout experiment expansion fields have no prefix. Related experiment expansion fields have `rel-` as a prefix. (optional) (default to undefined)

const { status, data } = await apiInstance.getHoldout(
    projectKey,
    environmentKey,
    holdoutKey,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **holdoutKey** | [**string**] | The holdout experiment key | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. Holdout experiment expansion fields have no prefix. Related experiment expansion fields have &#x60;rel-&#x60; as a prefix. | (optional) defaults to undefined|


### Return type

**HoldoutDetailRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | HoldoutDetail response with full experiments |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHoldoutById**
> HoldoutRep getHoldoutById()


### Example

```typescript
import {
    HoldoutsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new HoldoutsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let holdoutId: string; //The holdout experiment ID (default to undefined)

const { status, data } = await apiInstance.getHoldoutById(
    projectKey,
    environmentKey,
    holdoutId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **holdoutId** | [**string**] | The holdout experiment ID | defaults to undefined|


### Return type

**HoldoutRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Holdout response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchHoldout**
> HoldoutRep patchHoldout(holdoutPatchInput)

Updates an existing holdout, and returns the updated holdout. Updating holdouts uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instructions for updating holdouts.  <details> <summary>Click to expand instructions for <strong>updating holdouts</strong></summary>  #### endHoldout  Ends a holdout.  ##### Parameters  None.  Here\'s an example:  ```json {   \"comment\": \"Optional comment describing why the holdout is ending\",   \"instructions\": [{     \"kind\": \"endHoldout\"   }] } ```  #### removeExperiment  Removes an experiment from a holdout.  ##### Parameters  - `value`: The key of the experiment to remove  Here\'s an example:  ```json {   \"comment\": \"Optional comment describing the change\",   \"instructions\": [{     \"kind\": \"removeExperiment\",     \"value\": \"experiment-key\"   }] } ```  #### updateDescription  Updates the description of the holdout.  ##### Parameters  - `value`: The new description.  Here\'s an example:  ```json {   \"comment\": \"Optional comment describing the update\",   \"instructions\": [{     \"kind\": \"updateDescription\",     \"value\": \"Updated holdout description\"   }] } ```  #### updateName  Updates the name of the holdout.  ##### Parameters  - `value`: The new name.  Here\'s an example:  ```json {   \"comment\": \"Optional comment describing the update\",   \"instructions\": [{     \"kind\": \"updateName\",     \"value\": \"Updated holdout name\"   }] } ```  </details> 

### Example

```typescript
import {
    HoldoutsBetaApi,
    Configuration,
    HoldoutPatchInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new HoldoutsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let holdoutKey: string; //The holdout key (default to undefined)
let holdoutPatchInput: HoldoutPatchInput; //

const { status, data } = await apiInstance.patchHoldout(
    projectKey,
    environmentKey,
    holdoutKey,
    holdoutPatchInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holdoutPatchInput** | **HoldoutPatchInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **holdoutKey** | [**string**] | The holdout key | defaults to undefined|


### Return type

**HoldoutRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Holdout response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postHoldout**
> HoldoutRep postHoldout(holdoutPostRequest)

Create a new holdout in the specified project.

### Example

```typescript
import {
    HoldoutsBetaApi,
    Configuration,
    HoldoutPostRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new HoldoutsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let holdoutPostRequest: HoldoutPostRequest; //

const { status, data } = await apiInstance.postHoldout(
    projectKey,
    environmentKey,
    holdoutPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holdoutPostRequest** | **HoldoutPostRequest**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**HoldoutRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Holdout response |  -  |
|**400** | Invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

