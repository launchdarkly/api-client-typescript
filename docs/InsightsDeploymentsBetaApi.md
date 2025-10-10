# InsightsDeploymentsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDeploymentEvent**](#createdeploymentevent) | **POST** /api/v2/engineering-insights/deployment-events | Create deployment event|
|[**getDeployment**](#getdeployment) | **GET** /api/v2/engineering-insights/deployments/{deploymentID} | Get deployment|
|[**getDeployments**](#getdeployments) | **GET** /api/v2/engineering-insights/deployments | List deployments|
|[**updateDeployment**](#updatedeployment) | **PATCH** /api/v2/engineering-insights/deployments/{deploymentID} | Update deployment|

# **createDeploymentEvent**
> createDeploymentEvent(postDeploymentEventInput)

Create deployment event

### Example

```typescript
import {
    InsightsDeploymentsBetaApi,
    Configuration,
    PostDeploymentEventInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsDeploymentsBetaApi(configuration);

let postDeploymentEventInput: PostDeploymentEventInput; //

const { status, data } = await apiInstance.createDeploymentEvent(
    postDeploymentEventInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postDeploymentEventInput** | **PostDeploymentEventInput**|  | |


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
|**201** | Created |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDeployment**
> DeploymentRep getDeployment()

Get a deployment by ID.  The deployment ID is returned as part of the [List deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments) response. It is the `id` field of each element in the `items` array.  ### Expanding the deployment response  LaunchDarkly supports expanding the deployment response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `pullRequests` includes details on all of the pull requests associated with each deployment * `flagReferences` includes details on all of the references to flags in each deployment  For example, use `?expand=pullRequests` to include the `pullRequests` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsDeploymentsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsDeploymentsBetaApi(configuration);

let deploymentID: string; //The deployment ID (default to undefined)
let expand: string; //Expand properties in response. Options: `pullRequests`, `flagReferences` (optional) (default to undefined)

const { status, data } = await apiInstance.getDeployment(
    deploymentID,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deploymentID** | [**string**] | The deployment ID | defaults to undefined|
| **expand** | [**string**] | Expand properties in response. Options: &#x60;pullRequests&#x60;, &#x60;flagReferences&#x60; | (optional) defaults to undefined|


### Return type

**DeploymentRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deployment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDeployments**
> DeploymentCollectionRep getDeployments()

Get a list of deployments  ### Expanding the deployment collection response  LaunchDarkly supports expanding the deployment collection response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `pullRequests` includes details on all of the pull requests associated with each deployment * `flagReferences` includes details on all of the references to flags in each deployment  For example, use `?expand=pullRequests` to include the `pullRequests` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsDeploymentsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsDeploymentsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let applicationKey: string; //Comma separated list of application keys (optional) (default to undefined)
let limit: number; //The number of deployments to return. Default is 20. Maximum allowed is 100. (optional) (default to undefined)
let expand: string; //Expand properties in response. Options: `pullRequests`, `flagReferences` (optional) (default to undefined)
let from: number; //Unix timestamp in milliseconds. Default value is 7 days ago. (optional) (default to undefined)
let to: number; //Unix timestamp in milliseconds. Default value is now. (optional) (default to undefined)
let after: string; //Identifier used for pagination (optional) (default to undefined)
let before: string; //Identifier used for pagination (optional) (default to undefined)
let kind: string; //The deployment kind (optional) (default to undefined)
let status: string; //The deployment status (optional) (default to undefined)

const { status, data } = await apiInstance.getDeployments(
    projectKey,
    environmentKey,
    applicationKey,
    limit,
    expand,
    from,
    to,
    after,
    before,
    kind,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **applicationKey** | [**string**] | Comma separated list of application keys | (optional) defaults to undefined|
| **limit** | [**number**] | The number of deployments to return. Default is 20. Maximum allowed is 100. | (optional) defaults to undefined|
| **expand** | [**string**] | Expand properties in response. Options: &#x60;pullRequests&#x60;, &#x60;flagReferences&#x60; | (optional) defaults to undefined|
| **from** | [**number**] | Unix timestamp in milliseconds. Default value is 7 days ago. | (optional) defaults to undefined|
| **to** | [**number**] | Unix timestamp in milliseconds. Default value is now. | (optional) defaults to undefined|
| **after** | [**string**] | Identifier used for pagination | (optional) defaults to undefined|
| **before** | [**string**] | Identifier used for pagination | (optional) defaults to undefined|
| **kind** | [**string**] | The deployment kind | (optional) defaults to undefined|
| **status** | [**string**] | The deployment status | (optional) defaults to undefined|


### Return type

**DeploymentCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deployment collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDeployment**
> DeploymentRep updateDeployment(patchOperation)

Update a deployment by ID. Updating a deployment uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>The deployment ID is returned as part of the [List deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments) response. It is the `id` field of each element in the `items` array.

### Example

```typescript
import {
    InsightsDeploymentsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsDeploymentsBetaApi(configuration);

let deploymentID: string; //The deployment ID (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.updateDeployment(
    deploymentID,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **deploymentID** | [**string**] | The deployment ID | defaults to undefined|


### Return type

**DeploymentRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Deployment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

