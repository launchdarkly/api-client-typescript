# ScheduledChangesApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteFlagConfigScheduledChanges**](#deleteflagconfigscheduledchanges) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Delete scheduled changes workflow|
|[**getFeatureFlagScheduledChange**](#getfeatureflagscheduledchange) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Get a scheduled change|
|[**getFlagConfigScheduledChanges**](#getflagconfigscheduledchanges) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | List scheduled changes|
|[**patchFlagConfigScheduledChange**](#patchflagconfigscheduledchange) | **PATCH** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id} | Update scheduled changes workflow|
|[**postFlagConfigScheduledChanges**](#postflagconfigscheduledchanges) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes | Create scheduled changes workflow|

# **deleteFlagConfigScheduledChanges**
> deleteFlagConfigScheduledChanges()

Delete a scheduled changes workflow.

### Example

```typescript
import {
    ScheduledChangesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ScheduledChangesApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The scheduled change id (default to undefined)

const { status, data } = await apiInstance.deleteFlagConfigScheduledChanges(
    projectKey,
    featureFlagKey,
    environmentKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The scheduled change id | defaults to undefined|


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
|**405** | Method not allowed |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFeatureFlagScheduledChange**
> FeatureFlagScheduledChange getFeatureFlagScheduledChange()

Get a scheduled change that will be applied to the feature flag by ID.

### Example

```typescript
import {
    ScheduledChangesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ScheduledChangesApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The scheduled change id (default to undefined)

const { status, data } = await apiInstance.getFeatureFlagScheduledChange(
    projectKey,
    featureFlagKey,
    environmentKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The scheduled change id | defaults to undefined|


### Return type

**FeatureFlagScheduledChange**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scheduled changes response |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFlagConfigScheduledChanges**
> FeatureFlagScheduledChanges getFlagConfigScheduledChanges()

Get a list of scheduled changes that will be applied to the feature flag.

### Example

```typescript
import {
    ScheduledChangesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ScheduledChangesApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.getFlagConfigScheduledChanges(
    projectKey,
    featureFlagKey,
    environmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**FeatureFlagScheduledChanges**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scheduled changes collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchFlagConfigScheduledChange**
> FeatureFlagScheduledChange patchFlagConfigScheduledChange(flagScheduledChangesInput)

 Update a scheduled change, overriding existing instructions with the new ones. Updating a scheduled change uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instructions for updating scheduled changes.  <details> <summary>Click to expand instructions for <strong>updating scheduled changes</strong></summary>  #### deleteScheduledChange  Removes the scheduled change.  Here\'s an example:  ```json {   \"instructions\": [{ \"kind\": \"deleteScheduledChange\" }] } ```  #### replaceScheduledChangesInstructions  Removes the existing scheduled changes and replaces them with the new instructions.  ##### Parameters  - `value`: An array of the new actions to perform when the execution date for these scheduled changes arrives. Supported scheduled actions are `turnFlagOn` and `turnFlagOff`.  Here\'s an example that replaces the scheduled changes with new instructions to turn flag targeting off:  ```json {   \"instructions\": [     {       \"kind\": \"replaceScheduledChangesInstructions\",       \"value\": [ {\"kind\": \"turnFlagOff\"} ]     }   ] } ```  #### updateScheduledChangesExecutionDate  Updates the execution date for the scheduled changes.  ##### Parameters  - `value`: the new execution date, in Unix milliseconds.  Here\'s an example:  ```json {   \"instructions\": [     {       \"kind\": \"updateScheduledChangesExecutionDate\",       \"value\": 1754092860000     }   ] } ```  </details> 

### Example

```typescript
import {
    ScheduledChangesApi,
    Configuration,
    FlagScheduledChangesInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ScheduledChangesApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The scheduled change ID (default to undefined)
let flagScheduledChangesInput: FlagScheduledChangesInput; //
let ignoreConflicts: boolean; //Whether to succeed (`true`) or fail (`false`) when these new instructions conflict with existing scheduled changes (optional) (default to undefined)

const { status, data } = await apiInstance.patchFlagConfigScheduledChange(
    projectKey,
    featureFlagKey,
    environmentKey,
    id,
    flagScheduledChangesInput,
    ignoreConflicts
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flagScheduledChangesInput** | **FlagScheduledChangesInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The scheduled change ID | defaults to undefined|
| **ignoreConflicts** | [**boolean**] | Whether to succeed (&#x60;true&#x60;) or fail (&#x60;false&#x60;) when these new instructions conflict with existing scheduled changes | (optional) defaults to undefined|


### Return type

**FeatureFlagScheduledChange**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scheduled changes response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFlagConfigScheduledChanges**
> FeatureFlagScheduledChange postFlagConfigScheduledChanges(postFlagScheduledChangesInput)

Create scheduled changes for a feature flag. The changes you schedule may include any semantic patch instructions available when [updating a feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag#using-semantic-patches-on-a-feature-flag). If the `ignoreConflicts` query parameter is false and there are conflicts between these instructions and existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed.

### Example

```typescript
import {
    ScheduledChangesApi,
    Configuration,
    PostFlagScheduledChangesInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ScheduledChangesApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let postFlagScheduledChangesInput: PostFlagScheduledChangesInput; //
let ignoreConflicts: boolean; //Whether to succeed (`true`) or fail (`false`) when these instructions conflict with existing scheduled changes (optional) (default to undefined)

const { status, data } = await apiInstance.postFlagConfigScheduledChanges(
    projectKey,
    featureFlagKey,
    environmentKey,
    postFlagScheduledChangesInput,
    ignoreConflicts
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postFlagScheduledChangesInput** | **PostFlagScheduledChangesInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **ignoreConflicts** | [**boolean**] | Whether to succeed (&#x60;true&#x60;) or fail (&#x60;false&#x60;) when these instructions conflict with existing scheduled changes | (optional) defaults to undefined|


### Return type

**FeatureFlagScheduledChange**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Scheduled changes response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

