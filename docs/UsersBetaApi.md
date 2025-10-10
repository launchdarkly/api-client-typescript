# UsersBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserAttributeNames**](#getuserattributenames) | **GET** /api/v2/user-attributes/{projectKey}/{environmentKey} | Get user attribute names|

# **getUserAttributeNames**
> UserAttributeNamesRep getUserAttributeNames()

> ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get context attribute names ](https://launchdarkly.com/docs/api/contexts/get-context-attribute-names) instead of this endpoint.  Get all in-use user attributes in the specified environment. The set of in-use attributes typically consists of all attributes seen within the past 30 days. 

### Example

```typescript
import {
    UsersBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UsersBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.getUserAttributeNames(
    projectKey,
    environmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**UserAttributeNamesRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User attribute names response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

