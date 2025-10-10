# ContextSettingsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**putContextFlagSetting**](#putcontextflagsetting) | **PUT** /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey} | Update flag settings for context|

# **putContextFlagSetting**
> putContextFlagSetting(valuePut)

 Enable or disable a feature flag for a context based on its context kind and key.  In the request body, the `setting` should be the variation value to set for the context. It must match the flag\'s variation type. For example, for a boolean flag you can use `\"setting\": true` or `\"setting\": false` in the request body. For a string flag, you can use `\"setting\": \"existing_variation_value_to_use\"`.  Omitting the `setting` attribute from the request body, or including a `setting` of `null`, erases the current setting for a context.  If you previously patched the flag, and the patch included the context\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the combination of the context\'s key and kind before, it calculates the flag values based on the context kind and key. 

### Example

```typescript
import {
    ContextSettingsApi,
    Configuration,
    ValuePut
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ContextSettingsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let contextKind: string; //The context kind (default to undefined)
let contextKey: string; //The context key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let valuePut: ValuePut; //

const { status, data } = await apiInstance.putContextFlagSetting(
    projectKey,
    environmentKey,
    contextKind,
    contextKey,
    featureFlagKey,
    valuePut
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **valuePut** | **ValuePut**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **contextKind** | [**string**] | The context kind | defaults to undefined|
| **contextKey** | [**string**] | The context key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|


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
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

