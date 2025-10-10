# ApprovalsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteApprovalRequest**](#deleteapprovalrequest) | **DELETE** /api/v2/approval-requests/{id} | Delete approval request|
|[**deleteApprovalRequestForFlag**](#deleteapprovalrequestforflag) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Delete approval request for a flag|
|[**getApprovalForFlag**](#getapprovalforflag) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id} | Get approval request for a flag|
|[**getApprovalRequest**](#getapprovalrequest) | **GET** /api/v2/approval-requests/{id} | Get approval request|
|[**getApprovalRequests**](#getapprovalrequests) | **GET** /api/v2/approval-requests | List approval requests|
|[**getApprovalsForFlag**](#getapprovalsforflag) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | List approval requests for a flag|
|[**postApprovalRequest**](#postapprovalrequest) | **POST** /api/v2/approval-requests | Create approval request|
|[**postApprovalRequestApply**](#postapprovalrequestapply) | **POST** /api/v2/approval-requests/{id}/apply | Apply approval request|
|[**postApprovalRequestApplyForFlag**](#postapprovalrequestapplyforflag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply | Apply approval request for a flag|
|[**postApprovalRequestForFlag**](#postapprovalrequestforflag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests | Create approval request for a flag|
|[**postApprovalRequestReview**](#postapprovalrequestreview) | **POST** /api/v2/approval-requests/{id}/reviews | Review approval request|
|[**postApprovalRequestReviewForFlag**](#postapprovalrequestreviewforflag) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews | Review approval request for a flag|
|[**postFlagCopyConfigApprovalRequest**](#postflagcopyconfigapprovalrequest) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy | Create approval request to copy flag configurations across environments|

# **deleteApprovalRequest**
> deleteApprovalRequest()

Delete an approval request.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let id: string; //The approval request ID (default to undefined)

const { status, data } = await apiInstance.deleteApprovalRequest(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The approval request ID | defaults to undefined|


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
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteApprovalRequestForFlag**
> deleteApprovalRequestForFlag()

Delete an approval request for a feature flag.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The feature flag approval request ID (default to undefined)

const { status, data } = await apiInstance.deleteApprovalRequestForFlag(
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
| **id** | [**string**] | The feature flag approval request ID | defaults to undefined|


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
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApprovalForFlag**
> FlagConfigApprovalRequestResponse getApprovalForFlag()

Get a single approval request for a feature flag.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The feature flag approval request ID (default to undefined)

const { status, data } = await apiInstance.getApprovalForFlag(
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
| **id** | [**string**] | The feature flag approval request ID | defaults to undefined|


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

# **getApprovalRequest**
> ExpandableApprovalRequestResponse getApprovalRequest()

Get an approval request by approval request ID.  ### Expanding approval response  LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:  - `environments` includes the environments the approval request relates to - `flag` includes the flag the approval request belongs to - `project` includes the project the approval request belongs to - `resource` includes details on the resource (flag or segment) the approval request relates to  For example, `expand=project,flag` includes the `project` and `flag` fields in the response. 

### Example

```typescript
import {
    ApprovalsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let id: string; //The approval request ID (default to undefined)
let expand: string; //A comma-separated list of fields to expand in the response. Supported fields are explained above. (optional) (default to undefined)

const { status, data } = await apiInstance.getApprovalRequest(
    id,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The approval request ID | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of fields to expand in the response. Supported fields are explained above. | (optional) defaults to undefined|


### Return type

**ExpandableApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request response |  -  |
|**400** | Invalid Request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Unable to find approval request |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApprovalRequests**
> ExpandableApprovalRequestsResponse getApprovalRequests()

Get all approval requests.  ### Filtering approvals  LaunchDarkly supports the `filter` query param for filtering, with the following fields:  - `notifyMemberIds` filters for only approvals that are assigned to a member in the specified list. For example: `filter=notifyMemberIds anyOf [\"memberId1\", \"memberId2\"]`. - `requestorId` filters for only approvals that correspond to the ID of the member who requested the approval. For example: `filter=requestorId equals 457034721476302714390214`. - `resourceId` filters for only approvals that correspond to the the specified resource identifier. For example: `filter=resourceId equals proj/my-project:env/my-environment:flag/my-flag`. - `resourceKind` filters for only approvals that correspond to the specified resource kind. For example: `filter=resourceKind equals flag`. Currently, `flag`, `segment`, and `aiConfig` resource kinds are supported. - `reviewStatus` filters for only approvals which correspond to the review status in the specified list. The possible values are `approved`, `declined`, and `pending`. For example: `filter=reviewStatus anyOf [\"pending\", \"approved\"]`. - `status` filters for only approvals which correspond to the status in the specified list. The possible values are `pending`, `scheduled`, `failed`, and `completed`. For example: `filter=status anyOf [\"pending\", \"scheduled\"]`.  You can also apply multiple filters at once. For example, setting `filter=projectKey equals my-project, reviewStatus anyOf [\"pending\",\"approved\"]` matches approval requests which correspond to the `my-project` project key, and a review status of either `pending` or `approved`.  ### Expanding approval response  LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:  - `flag` includes the flag the approval request belongs to - `project` includes the project the approval request belongs to - `environments` includes the environments the approval request relates to  For example, `expand=project,flag` includes the `project` and `flag` fields in the response. 

### Example

```typescript
import {
    ApprovalsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let filter: string; //A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above. (optional) (default to undefined)
let expand: string; //A comma-separated list of fields to expand in the response. Supported fields are explained above. (optional) (default to undefined)
let limit: number; //The number of approvals to return. Defaults to 20. Maximum limit is 200. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getApprovalRequests(
    filter,
    expand,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] | A comma-separated list of filters. Each filter is of the form &#x60;field operator value&#x60;. Supported fields are explained above. | (optional) defaults to undefined|
| **expand** | [**string**] | A comma-separated list of fields to expand in the response. Supported fields are explained above. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of approvals to return. Defaults to 20. Maximum limit is 200. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**ExpandableApprovalRequestsResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request collection response |  -  |
|**400** | Unsupported filter field. Filter field must be one of: requestorId, projectKey, notifyMemberIds, reviewStatus, or status |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApprovalsForFlag**
> FlagConfigApprovalRequestsResponse getApprovalsForFlag()

Get all approval requests for a feature flag.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.getApprovalsForFlag(
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

**FlagConfigApprovalRequestsResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postApprovalRequest**
> ApprovalRequestResponse postApprovalRequest(createApprovalRequestRequest)

Create an approval request.  This endpoint requires a list of `instructions`, in semantic patch format, that will be applied when the approval request is approved and applied.  ### Flags  If you are creating an approval request for a flag, you can use the following `instructions`:  - `addVariation` - `removeVariation` - `updateVariation` - `updateDefaultVariation`  For details on using these instructions, read [Update feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag).  To create an approval for a flag specific to an environment, use [Create approval request for a flag](https://launchdarkly.com/docs/api/approvals/post-approval-request-for-flag).  ### AI Configs  If you are creating an approval request for an AI Config, you can use the semantic patch instructions listed under [Update AI Config targeting](https://launchdarkly.com/docs/api/ai-configs-beta/patch-ai-config-targeting).  ### Segments  If you are creating an approval request for a segment, you can use the semantic patch instructions listed under [Patch segment](https://launchdarkly.com/docs/api/segments/patch-segment). 

### Example

```typescript
import {
    ApprovalsApi,
    Configuration,
    CreateApprovalRequestRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let createApprovalRequestRequest: CreateApprovalRequestRequest; //

const { status, data } = await apiInstance.postApprovalRequest(
    createApprovalRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createApprovalRequestRequest** | **CreateApprovalRequestRequest**|  | |


### Return type

**ApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Approval request response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postApprovalRequestApply**
> ApprovalRequestResponse postApprovalRequestApply(postApprovalRequestApplyRequest)

Apply an approval request that has been approved. This endpoint works with any approval requests.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration,
    PostApprovalRequestApplyRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let id: string; //The approval request ID (default to undefined)
let postApprovalRequestApplyRequest: PostApprovalRequestApplyRequest; //

const { status, data } = await apiInstance.postApprovalRequestApply(
    id,
    postApprovalRequestApplyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postApprovalRequestApplyRequest** | **PostApprovalRequestApplyRequest**|  | |
| **id** | [**string**] | The approval request ID | defaults to undefined|


### Return type

**ApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request apply response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postApprovalRequestApplyForFlag**
> FlagConfigApprovalRequestResponse postApprovalRequestApplyForFlag(postApprovalRequestApplyRequest)

Apply an approval request that has been approved. This endpoint requires a feature flag key, and can only be used for applying approval requests on flags.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration,
    PostApprovalRequestApplyRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The feature flag approval request ID (default to undefined)
let postApprovalRequestApplyRequest: PostApprovalRequestApplyRequest; //

const { status, data } = await apiInstance.postApprovalRequestApplyForFlag(
    projectKey,
    featureFlagKey,
    environmentKey,
    id,
    postApprovalRequestApplyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postApprovalRequestApplyRequest** | **PostApprovalRequestApplyRequest**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The feature flag approval request ID | defaults to undefined|


### Return type

**FlagConfigApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request apply response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postApprovalRequestForFlag**
> FlagConfigApprovalRequestResponse postApprovalRequestForFlag(createFlagConfigApprovalRequestRequest)

Create an approval request for a feature flag.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration,
    CreateFlagConfigApprovalRequestRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let createFlagConfigApprovalRequestRequest: CreateFlagConfigApprovalRequestRequest; //

const { status, data } = await apiInstance.postApprovalRequestForFlag(
    projectKey,
    featureFlagKey,
    environmentKey,
    createFlagConfigApprovalRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFlagConfigApprovalRequestRequest** | **CreateFlagConfigApprovalRequestRequest**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**FlagConfigApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Approval request response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postApprovalRequestReview**
> ApprovalRequestResponse postApprovalRequestReview(postApprovalRequestReviewRequest)

Review an approval request by approving or denying changes.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration,
    PostApprovalRequestReviewRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let id: string; //The approval request ID (default to undefined)
let postApprovalRequestReviewRequest: PostApprovalRequestReviewRequest; //

const { status, data } = await apiInstance.postApprovalRequestReview(
    id,
    postApprovalRequestReviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postApprovalRequestReviewRequest** | **PostApprovalRequestReviewRequest**|  | |
| **id** | [**string**] | The approval request ID | defaults to undefined|


### Return type

**ApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request review response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postApprovalRequestReviewForFlag**
> FlagConfigApprovalRequestResponse postApprovalRequestReviewForFlag(postApprovalRequestReviewRequest)

Review an approval request by approving or denying changes.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration,
    PostApprovalRequestReviewRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The feature flag approval request ID (default to undefined)
let postApprovalRequestReviewRequest: PostApprovalRequestReviewRequest; //

const { status, data } = await apiInstance.postApprovalRequestReviewForFlag(
    projectKey,
    featureFlagKey,
    environmentKey,
    id,
    postApprovalRequestReviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postApprovalRequestReviewRequest** | **PostApprovalRequestReviewRequest**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The feature flag approval request ID | defaults to undefined|


### Return type

**FlagConfigApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approval request review response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postFlagCopyConfigApprovalRequest**
> FlagConfigApprovalRequestResponse postFlagCopyConfigApprovalRequest(createCopyFlagConfigApprovalRequestRequest)

Create an approval request to copy a feature flag\'s configuration across environments.

### Example

```typescript
import {
    ApprovalsApi,
    Configuration,
    CreateCopyFlagConfigApprovalRequestRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key for the target environment (default to undefined)
let createCopyFlagConfigApprovalRequestRequest: CreateCopyFlagConfigApprovalRequestRequest; //

const { status, data } = await apiInstance.postFlagCopyConfigApprovalRequest(
    projectKey,
    featureFlagKey,
    environmentKey,
    createCopyFlagConfigApprovalRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCopyFlagConfigApprovalRequestRequest** | **CreateCopyFlagConfigApprovalRequestRequest**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key for the target environment | defaults to undefined|


### Return type

**FlagConfigApprovalRequestResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Approval request response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

