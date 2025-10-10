# ApprovalsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getApprovalRequestSettings**](#getapprovalrequestsettings) | **GET** /api/v2/approval-requests/projects/{projectKey}/settings | Get approval request settings|
|[**patchApprovalRequest**](#patchapprovalrequest) | **PATCH** /api/v2/approval-requests/{id} | Update approval request|
|[**patchApprovalRequestSettings**](#patchapprovalrequestsettings) | **PATCH** /api/v2/approval-requests/projects/{projectKey}/settings | Update approval request settings|
|[**patchFlagConfigApprovalRequest**](#patchflagconfigapprovalrequest) | **PATCH** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Update flag approval request|

# **getApprovalRequestSettings**
> { [key: string]: ApprovalRequestSettingWithEnvs; } getApprovalRequestSettings()

Get the approval request settings for the given project, optionally filtered by environment and resource kind.

### Example

```typescript
import {
    ApprovalsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let environmentKey: string; //An environment key filter to apply to the approval request settings. (optional) (default to undefined)
let resourceKind: string; //A resource kind filter to apply to the approval request settings. (optional) (default to undefined)
let expand: string; //A comma-separated list of fields to expand in the response. Options include \'default\' and \'strict\'. (optional) (default to undefined)

const { status, data } = await apiInstance.getApprovalRequestSettings(
    lDAPIVersion,
    projectKey,
    environmentKey,
    resourceKind,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] | An environment key filter to apply to the approval request settings. | (optional) defaults to undefined|
| **resourceKind** | [**string**] | A resource kind filter to apply to the approval request settings. | (optional) defaults to undefined|
| **expand** | [**string**] | A comma-separated list of fields to expand in the response. Options include \&#39;default\&#39; and \&#39;strict\&#39;. | (optional) defaults to undefined|


### Return type

**{ [key: string]: ApprovalRequestSettingWithEnvs; }**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchApprovalRequest**
> FlagConfigApprovalRequestResponse patchApprovalRequest()

Perform a partial update to an approval request. Updating an approval request uses the semantic patch format. This endpoint works with any approval requests.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instruction for updating an approval request.  #### addReviewers  Adds the specified members and teams to the existing list of reviewers. You must include at least one of `notifyMemberIds` and `notifyTeamKeys`.  ##### Parameters  - `notifyMemberIds`: (Optional) List of member IDs. - `notifyTeamKeys`: (Optional) List of team keys.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"addReviewers\",     \"notifyMemberIds\": [ \"user-key-123abc\", \"user-key-456def\" ],     \"notifyTeamKeys\": [ \"team-key-789abc\"]   }] } ``` 

### Example

```typescript
import {
    ApprovalsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsBetaApi(configuration);

let id: string; //The approval ID (default to undefined)

const { status, data } = await apiInstance.patchApprovalRequest(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The approval ID | defaults to undefined|


### Return type

**FlagConfigApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchApprovalRequestSettings**
> { [key: string]: ApprovalRequestSettingWithEnvs; } patchApprovalRequestSettings()

Perform a partial update to approval request settings

### Example

```typescript
import {
    ApprovalsBetaApi,
    Configuration,
    ApprovalRequestSettingsPatch
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let approvalRequestSettingsPatch: ApprovalRequestSettingsPatch; //Approval request settings to update (optional)

const { status, data } = await apiInstance.patchApprovalRequestSettings(
    lDAPIVersion,
    projectKey,
    approvalRequestSettingsPatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **approvalRequestSettingsPatch** | **ApprovalRequestSettingsPatch**| Approval request settings to update | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: ApprovalRequestSettingWithEnvs; }**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchFlagConfigApprovalRequest**
> FlagConfigApprovalRequestResponse patchFlagConfigApprovalRequest()

Perform a partial update to an approval request. Updating an approval request uses the semantic patch format. This endpoint requires a feature flag key, and can only be used for updating approval requests for flags.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instruction for updating an approval request.  #### addReviewers  Adds the specified members and teams to the existing list of reviewers. You must include at least one of `notifyMemberIds` and `notifyTeamKeys`.  ##### Parameters  - `notifyMemberIds`: (Optional) List of member IDs. - `notifyTeamKeys`: (Optional) List of team keys. 

### Example

```typescript
import {
    ApprovalsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The approval ID (default to undefined)

const { status, data } = await apiInstance.patchFlagConfigApprovalRequest(
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
| **id** | [**string**] | The approval ID | defaults to undefined|


### Return type

**FlagConfigApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

