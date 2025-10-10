# ReleasePoliciesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteReleasePolicy**](#deletereleasepolicy) | **DELETE** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Delete a release policy|
|[**getReleasePolicies**](#getreleasepolicies) | **GET** /api/v2/projects/{projectKey}/release-policies | List release policies|
|[**getReleasePolicy**](#getreleasepolicy) | **GET** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Get a release policy by key|
|[**postReleasePoliciesOrder**](#postreleasepoliciesorder) | **POST** /api/v2/projects/{projectKey}/release-policies/order | Update the order of existing release policies|
|[**postReleasePolicy**](#postreleasepolicy) | **POST** /api/v2/projects/{projectKey}/release-policies | Create a release policy|
|[**putReleasePolicy**](#putreleasepolicy) | **PUT** /api/v2/projects/{projectKey}/release-policies/{policyKey} | Update a release policy|

# **deleteReleasePolicy**
> deleteReleasePolicy()

Delete an existing release policy for the specified project.

### Example

```typescript
import {
    ReleasePoliciesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePoliciesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; //The project key (default to undefined)
let policyKey: string; //The human-readable key of the release policy (default to undefined)

const { status, data } = await apiInstance.deleteReleasePolicy(
    lDAPIVersion,
    projectKey,
    policyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **policyKey** | [**string**] | The human-readable key of the release policy | defaults to undefined|


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
|**204** | Release policy deleted successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReleasePolicies**
> ReleasePoliciesResponse getReleasePolicies()

Get a list of release policies for the specified project with optional filtering.

### Example

```typescript
import {
    ReleasePoliciesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePoliciesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; //The project key (default to undefined)
let excludeDefault: boolean; //When true, exclude the default release policy from the response. When false or omitted, include the default policy if an environment filter is present. (optional) (default to false)

const { status, data } = await apiInstance.getReleasePolicies(
    lDAPIVersion,
    projectKey,
    excludeDefault
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **excludeDefault** | [**boolean**] | When true, exclude the default release policy from the response. When false or omitted, include the default policy if an environment filter is present. | (optional) defaults to false|


### Return type

**ReleasePoliciesResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of release policies |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReleasePolicy**
> ReleasePolicy getReleasePolicy()

Retrieve a single release policy by its key for the specified project.

### Example

```typescript
import {
    ReleasePoliciesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePoliciesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; //The project key (default to undefined)
let policyKey: string; //The release policy key (default to undefined)

const { status, data } = await apiInstance.getReleasePolicy(
    lDAPIVersion,
    projectKey,
    policyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **policyKey** | [**string**] | The release policy key | defaults to undefined|


### Return type

**ReleasePolicy**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release policy found |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postReleasePoliciesOrder**
> Array<ReleasePolicy> postReleasePoliciesOrder(requestBody)

Update the order of existing release policies for the specified project.

### Example

```typescript
import {
    ReleasePoliciesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePoliciesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; //The project key (default to undefined)
let requestBody: Array<string>; //Array of release policy keys in the desired rank order (scoped policies only). These keys must include _all_ of the scoped release policies for the project.

const { status, data } = await apiInstance.postReleasePoliciesOrder(
    lDAPIVersion,
    projectKey,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**| Array of release policy keys in the desired rank order (scoped policies only). These keys must include _all_ of the scoped release policies for the project. | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**Array<ReleasePolicy>**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release policies updated successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postReleasePolicy**
> ReleasePolicy postReleasePolicy(postReleasePolicyRequest)

Create a new release policy for the specified project.

### Example

```typescript
import {
    ReleasePoliciesBetaApi,
    Configuration,
    PostReleasePolicyRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePoliciesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; //The project key (default to undefined)
let postReleasePolicyRequest: PostReleasePolicyRequest; //Release policy to create

const { status, data } = await apiInstance.postReleasePolicy(
    lDAPIVersion,
    projectKey,
    postReleasePolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postReleasePolicyRequest** | **PostReleasePolicyRequest**| Release policy to create | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**ReleasePolicy**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Release policy created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putReleasePolicy**
> ReleasePolicy putReleasePolicy(putReleasePolicyRequest)

Update an existing release policy for the specified project.

### Example

```typescript
import {
    ReleasePoliciesBetaApi,
    Configuration,
    PutReleasePolicyRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ReleasePoliciesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; //The project key (default to undefined)
let policyKey: string; //The human-readable key of the release policy (default to undefined)
let putReleasePolicyRequest: PutReleasePolicyRequest; //Release policy data to update

const { status, data } = await apiInstance.putReleasePolicy(
    lDAPIVersion,
    projectKey,
    policyKey,
    putReleasePolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putReleasePolicyRequest** | **PutReleasePolicyRequest**| Release policy data to update | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **policyKey** | [**string**] | The human-readable key of the release policy | defaults to undefined|


### Return type

**ReleasePolicy**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release policy updated successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

