# FlagTriggersApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTriggerWorkflow**](#createtriggerworkflow) | **POST** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | Create flag trigger|
|[**deleteTriggerWorkflow**](#deletetriggerworkflow) | **DELETE** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Delete flag trigger|
|[**getTriggerWorkflowById**](#gettriggerworkflowbyid) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Get flag trigger by ID|
|[**getTriggerWorkflows**](#gettriggerworkflows) | **GET** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey} | List flag triggers|
|[**patchTriggerWorkflow**](#patchtriggerworkflow) | **PATCH** /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id} | Update flag trigger|

# **createTriggerWorkflow**
> TriggerWorkflowRep createTriggerWorkflow(triggerPost)

Create a new flag trigger.

### Example

```typescript
import {
    FlagTriggersApi,
    Configuration,
    TriggerPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagTriggersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let triggerPost: TriggerPost; //

const { status, data } = await apiInstance.createTriggerWorkflow(
    projectKey,
    environmentKey,
    featureFlagKey,
    triggerPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **triggerPost** | **TriggerPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|


### Return type

**TriggerWorkflowRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Flag trigger response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTriggerWorkflow**
> deleteTriggerWorkflow()

Delete a flag trigger by ID.

### Example

```typescript
import {
    FlagTriggersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagTriggersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let id: string; //The flag trigger ID (default to undefined)

const { status, data } = await apiInstance.deleteTriggerWorkflow(
    projectKey,
    environmentKey,
    featureFlagKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **id** | [**string**] | The flag trigger ID | defaults to undefined|


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

# **getTriggerWorkflowById**
> TriggerWorkflowRep getTriggerWorkflowById()

Get a flag trigger by ID.

### Example

```typescript
import {
    FlagTriggersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagTriggersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The flag trigger ID (default to undefined)

const { status, data } = await apiInstance.getTriggerWorkflowById(
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
| **id** | [**string**] | The flag trigger ID | defaults to undefined|


### Return type

**TriggerWorkflowRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag trigger response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTriggerWorkflows**
> TriggerWorkflowCollectionRep getTriggerWorkflows()

Get a list of all flag triggers.

### Example

```typescript
import {
    FlagTriggersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagTriggersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)

const { status, data } = await apiInstance.getTriggerWorkflows(
    projectKey,
    environmentKey,
    featureFlagKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|


### Return type

**TriggerWorkflowCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag trigger collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchTriggerWorkflow**
> TriggerWorkflowRep patchTriggerWorkflow(flagTriggerInput)

Update a flag trigger. Updating a flag trigger uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instructions for updating flag triggers.  <details> <summary>Click to expand instructions for <strong>updating flag triggers</strong></summary>  #### replaceTriggerActionInstructions  Removes the existing trigger action and replaces it with the new instructions.  ##### Parameters  - `value`: An array of the new `kind`s of actions to perform when triggering. Supported flag actions are `turnFlagOn` and `turnFlagOff`.  Here\'s an example that replaces the existing action with new instructions to turn flag targeting off:  ```json {   \"instructions\": [     {       \"kind\": \"replaceTriggerActionInstructions\",       \"value\": [ {\"kind\": \"turnFlagOff\"} ]     }   ] } ```  #### cycleTriggerUrl  Generates a new URL for this trigger. You must update any clients using the trigger to use this new URL.  Here\'s an example:  ```json {   \"instructions\": [{ \"kind\": \"cycleTriggerUrl\" }] } ```  #### disableTrigger  Disables the trigger. This saves the trigger configuration, but the trigger stops running. To re-enable, use `enableTrigger`.  Here\'s an example:  ```json {   \"instructions\": [{ \"kind\": \"disableTrigger\" }] } ```  #### enableTrigger  Enables the trigger. If you previously disabled the trigger, it begins running again.  Here\'s an example:  ```json {   \"instructions\": [{ \"kind\": \"enableTrigger\" }] } ```  </details> 

### Example

```typescript
import {
    FlagTriggersApi,
    Configuration,
    FlagTriggerInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new FlagTriggersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let id: string; //The flag trigger ID (default to undefined)
let flagTriggerInput: FlagTriggerInput; //

const { status, data } = await apiInstance.patchTriggerWorkflow(
    projectKey,
    environmentKey,
    featureFlagKey,
    id,
    flagTriggerInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flagTriggerInput** | **FlagTriggerInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **id** | [**string**] | The flag trigger ID | defaults to undefined|


### Return type

**TriggerWorkflowRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag trigger response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

