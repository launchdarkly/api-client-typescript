# PersistentStoreIntegrationsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBigSegmentStoreIntegration**](#createbigsegmentstoreintegration) | **POST** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey} | Create big segment store integration|
|[**deleteBigSegmentStoreIntegration**](#deletebigsegmentstoreintegration) | **DELETE** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Delete big segment store integration|
|[**getBigSegmentStoreIntegration**](#getbigsegmentstoreintegration) | **GET** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Get big segment store integration by ID|
|[**getBigSegmentStoreIntegrations**](#getbigsegmentstoreintegrations) | **GET** /api/v2/integration-capabilities/big-segment-store | List all big segment store integrations|
|[**patchBigSegmentStoreIntegration**](#patchbigsegmentstoreintegration) | **PATCH** /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId} | Update big segment store integration|

# **createBigSegmentStoreIntegration**
> BigSegmentStoreIntegration createBigSegmentStoreIntegration(integrationDeliveryConfigurationPost)

 Create a persistent store integration.  If you are using server-side SDKs, segments synced from external tools and larger list-based segments require a persistent store within your infrastructure. LaunchDarkly keeps the persistent store up to date and consults it during flag evaluation.  You can use either Redis or DynamoDB as your persistent store. When you create a persistent store integration, the fields in the `config` object in the request vary depending on which persistent store you use.  If you are using Redis to create your persistent store integration, you will need to know:  * Your Redis host * Your Redis port * Your Redis username * Your Redis password * Whether or not LaunchDarkly should connect using TLS  If you are using DynamoDB to create your persistent store integration, you will need to know:  * Your DynamoDB table name. The table must have the following schema:   * Partition key: `namespace` (string)   * Sort key: `key` (string) * Your DynamoDB Amazon Web Services (AWS) region. * Your AWS role Amazon Resource Name (ARN). This is the role that LaunchDarkly will assume to manage your DynamoDB table. * The External ID you specified when creating your Amazon Resource Name (ARN).  To learn more, read [Segment configuration](https://launchdarkly.com/docs/home/flags/segment-config). 

### Example

```typescript
import {
    PersistentStoreIntegrationsBetaApi,
    Configuration,
    IntegrationDeliveryConfigurationPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new PersistentStoreIntegrationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key, either `redis` or `dynamodb` (default to undefined)
let integrationDeliveryConfigurationPost: IntegrationDeliveryConfigurationPost; //

const { status, data } = await apiInstance.createBigSegmentStoreIntegration(
    projectKey,
    environmentKey,
    integrationKey,
    integrationDeliveryConfigurationPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationDeliveryConfigurationPost** | **IntegrationDeliveryConfigurationPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key, either &#x60;redis&#x60; or &#x60;dynamodb&#x60; | defaults to undefined|


### Return type

**BigSegmentStoreIntegration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Big segment store response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Environment or project not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteBigSegmentStoreIntegration**
> deleteBigSegmentStoreIntegration()

Delete a persistent store integration. Each integration uses either Redis or DynamoDB.

### Example

```typescript
import {
    PersistentStoreIntegrationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new PersistentStoreIntegrationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key, either `redis` or `dynamodb` (default to undefined)
let integrationId: string; //The integration ID (default to undefined)

const { status, data } = await apiInstance.deleteBigSegmentStoreIntegration(
    projectKey,
    environmentKey,
    integrationKey,
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key, either &#x60;redis&#x60; or &#x60;dynamodb&#x60; | defaults to undefined|
| **integrationId** | [**string**] | The integration ID | defaults to undefined|


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
|**204** | Action completed successfully |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Environment or project not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBigSegmentStoreIntegration**
> BigSegmentStoreIntegration getBigSegmentStoreIntegration()

Get a big segment store integration by ID.

### Example

```typescript
import {
    PersistentStoreIntegrationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new PersistentStoreIntegrationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key, either `redis` or `dynamodb` (default to undefined)
let integrationId: string; //The integration ID (default to undefined)

const { status, data } = await apiInstance.getBigSegmentStoreIntegration(
    projectKey,
    environmentKey,
    integrationKey,
    integrationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key, either &#x60;redis&#x60; or &#x60;dynamodb&#x60; | defaults to undefined|
| **integrationId** | [**string**] | The integration ID | defaults to undefined|


### Return type

**BigSegmentStoreIntegration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Big segment store response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Environment or project not found |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBigSegmentStoreIntegrations**
> BigSegmentStoreIntegrationCollection getBigSegmentStoreIntegrations()

List all big segment store integrations.

### Example

```typescript
import {
    PersistentStoreIntegrationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new PersistentStoreIntegrationsBetaApi(configuration);

const { status, data } = await apiInstance.getBigSegmentStoreIntegrations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BigSegmentStoreIntegrationCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Big segment store collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Environment or project not found |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchBigSegmentStoreIntegration**
> BigSegmentStoreIntegration patchBigSegmentStoreIntegration(patchOperation)

Update a big segment store integration. Updating a big segment store requires a [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    PersistentStoreIntegrationsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new PersistentStoreIntegrationsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let integrationKey: string; //The integration key, either `redis` or `dynamodb` (default to undefined)
let integrationId: string; //The integration ID (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchBigSegmentStoreIntegration(
    projectKey,
    environmentKey,
    integrationKey,
    integrationId,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **integrationKey** | [**string**] | The integration key, either &#x60;redis&#x60; or &#x60;dynamodb&#x60; | defaults to undefined|
| **integrationId** | [**string**] | The integration ID | defaults to undefined|


### Return type

**BigSegmentStoreIntegration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Big segment store response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Environment or project not found |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

