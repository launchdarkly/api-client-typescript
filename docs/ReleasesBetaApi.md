# ReleasesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createReleaseForFlag**](#createreleaseforflag) | **PUT** /api/v2/projects/{projectKey}/flags/{flagKey}/release | Create a new release for flag|
|[**deleteReleaseByFlagKey**](#deletereleasebyflagkey) | **DELETE** /api/v2/flags/{projectKey}/{flagKey}/release | Delete a release for flag|
|[**getReleaseByFlagKey**](#getreleasebyflagkey) | **GET** /api/v2/flags/{projectKey}/{flagKey}/release | Get release for flag|
|[**patchReleaseByFlagKey**](#patchreleasebyflagkey) | **PATCH** /api/v2/flags/{projectKey}/{flagKey}/release | Patch release for flag|
|[**updatePhaseStatus**](#updatephasestatus) | **PUT** /api/v2/projects/{projectKey}/flags/{flagKey}/release/phases/{phaseId} | Update phase status for release|

# **createReleaseForFlag**
> Release createReleaseForFlag(createReleaseInput)

Creates a release by adding a flag to a release pipeline

### Example

```typescript
import {
    ReleasesBetaApi,
    Configuration,
    CreateReleaseInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let flagKey: string; //The flag key (default to undefined)
let createReleaseInput: CreateReleaseInput; //

const { status, data } = await apiInstance.createReleaseForFlag(
    projectKey,
    flagKey,
    createReleaseInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReleaseInput** | **CreateReleaseInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **flagKey** | [**string**] | The flag key | defaults to undefined|


### Return type

**Release**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteReleaseByFlagKey**
> deleteReleaseByFlagKey()

Deletes a release from a flag

### Example

```typescript
import {
    ReleasesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let flagKey: string; //The flag key (default to undefined)

const { status, data } = await apiInstance.deleteReleaseByFlagKey(
    projectKey,
    flagKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **flagKey** | [**string**] | The flag key | defaults to undefined|


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
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReleaseByFlagKey**
> Release getReleaseByFlagKey()

Get currently active release for a flag

### Example

```typescript
import {
    ReleasesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let flagKey: string; //The flag key (default to undefined)

const { status, data } = await apiInstance.getReleaseByFlagKey(
    projectKey,
    flagKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **flagKey** | [**string**] | The flag key | defaults to undefined|


### Return type

**Release**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release response |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchReleaseByFlagKey**
> Release patchReleaseByFlagKey(patchOperation)

This endpoint is only available for releases that are part of a legacy release pipeline. Releases for new release pipelines should use the [Update phase status for release](https://launchdarkly.com/docs/api/releases-beta/update-phase-status) endpoint.  Update currently active release for a flag. Updating releases requires the [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) format. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).  You can only use this endpoint to mark a release phase complete or incomplete. To indicate which phase to update, use the array index in the `path`. For example, to mark the first phase of a release as complete, use the following request body:  ```   [     {       \"op\": \"replace\",       \"path\": \"/phase/0/complete\",       \"value\": true     }   ] ``` 

### Example

```typescript
import {
    ReleasesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let flagKey: string; //The flag key (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchReleaseByFlagKey(
    projectKey,
    flagKey,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **flagKey** | [**string**] | The flag key | defaults to undefined|


### Return type

**Release**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePhaseStatus**
> Release updatePhaseStatus(updatePhaseStatusInput)

Updates the execution status of a phase of a release

### Example

```typescript
import {
    ReleasesBetaApi,
    Configuration,
    UpdatePhaseStatusInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasesBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let flagKey: string; //The flag key (default to undefined)
let phaseId: string; //The phase ID (default to undefined)
let updatePhaseStatusInput: UpdatePhaseStatusInput; //

const { status, data } = await apiInstance.updatePhaseStatus(
    projectKey,
    flagKey,
    phaseId,
    updatePhaseStatusInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePhaseStatusInput** | **UpdatePhaseStatusInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **flagKey** | [**string**] | The flag key | defaults to undefined|
| **phaseId** | [**string**] | The phase ID | defaults to undefined|


### Return type

**Release**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Action succeeded |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**404** | release or phase not found |  -  |
|**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

