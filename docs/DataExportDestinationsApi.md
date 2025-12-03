# DataExportDestinationsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteDestination**](#deletedestination) | **DELETE** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Delete Data Export destination|
|[**getDestination**](#getdestination) | **GET** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Get destination|
|[**getDestinations**](#getdestinations) | **GET** /api/v2/destinations | List destinations|
|[**patchDestination**](#patchdestination) | **PATCH** /api/v2/destinations/{projectKey}/{environmentKey}/{id} | Update Data Export destination|
|[**postDestination**](#postdestination) | **POST** /api/v2/destinations/{projectKey}/{environmentKey} | Create Data Export destination|
|[**postGenerateTrustPolicy**](#postgeneratetrustpolicy) | **POST** /api/v2/destinations/projects/{projKey}/environments/{envKey}/generate-trust-policy | Generate trust policy|
|[**postGenerateWarehouseDestinationKeyPair**](#postgeneratewarehousedestinationkeypair) | **POST** /api/v2/destinations/generate-warehouse-destination-key-pair | Generate Snowflake destination key pair|

# **deleteDestination**
> deleteDestination()

Delete a Data Export destination by ID.

### Example

```typescript
import {
    DataExportDestinationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new DataExportDestinationsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The Data Export destination ID (default to undefined)

const { status, data } = await apiInstance.deleteDestination(
    projectKey,
    environmentKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The Data Export destination ID | defaults to undefined|


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
|**204** | Destination response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDestination**
> Destination getDestination()

Get a single Data Export destination by ID.

### Example

```typescript
import {
    DataExportDestinationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new DataExportDestinationsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The Data Export destination ID (default to undefined)

const { status, data } = await apiInstance.getDestination(
    projectKey,
    environmentKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The Data Export destination ID | defaults to undefined|


### Return type

**Destination**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Destination response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDestinations**
> Destinations getDestinations()

Get a list of Data Export destinations configured across all projects and environments.

### Example

```typescript
import {
    DataExportDestinationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new DataExportDestinationsApi(configuration);

const { status, data } = await apiInstance.getDestinations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Destinations**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Destination collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchDestination**
> Destination patchDestination(patchOperation)

Update a Data Export destination. Updating a destination uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    DataExportDestinationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new DataExportDestinationsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let id: string; //The Data Export destination ID (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchDestination(
    projectKey,
    environmentKey,
    id,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **id** | [**string**] | The Data Export destination ID | defaults to undefined|


### Return type

**Destination**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Destination response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postDestination**
> Destination postDestination(destinationPost)

 Create a new Data Export destination.  In the `config` request body parameter, the fields required depend on the type of Data Export destination.  <details> <summary>Click to expand <code>config</code> parameter details</summary>  #### Azure Event Hubs  To create a Data Export destination with a `kind` of `azure-event-hubs`, the `config` object requires the following fields:  * `namespace`: The Event Hub Namespace name * `name`: The Event Hub name * `policyName`: The shared access signature policy name. You can find your policy name in the settings of your Azure Event Hubs Namespace. * `policyKey`: The shared access signature key. You can find your policy key in the settings of your Azure Event Hubs Namespace.  #### Google Cloud Pub/Sub  To create a Data Export destination with a `kind` of `google-pubsub`, the `config` object requires the following fields:  * `project`: The Google PubSub project ID for the project to publish to * `topic`: The Google PubSub topic ID for the topic to publish to  #### Amazon Kinesis  To create a Data Export destination with a `kind` of `kinesis`, the `config` object requires the following fields:  * `region`: The Kinesis stream\'s AWS region key * `roleArn`: The Amazon Resource Name (ARN) of the AWS role that will be writing to Kinesis * `streamName`: The name of the Kinesis stream that LaunchDarkly is sending events to. This is not the ARN of the stream.  #### mParticle  To create a Data Export destination with a `kind` of `mparticle`, the `config` object requires the following fields:  * `apiKey`: The mParticle API key * `secret`: The mParticle API secret * `userIdentity`: The type of identifier you use to identify your end users in mParticle * `anonymousUserIdentity`: The type of identifier you use to identify your anonymous end users in mParticle  #### Segment  To create a Data Export destination with a `kind` of `segment`, the `config` object requires the following fields:  * `writeKey`: The Segment write key. This is used to authenticate LaunchDarkly\'s calls to Segment.  #### Snowflake  To create a Data Export destination with a `kind` of `snowflake-v2`, the `config` object requires the following fields:  * `publicKey`: The `publicKey` is returned as part of the [Generate Snowflake destination key pair](https://launchdarkly.com/docs/api/data-export-destinations/post-generate-warehouse-destination-key-pair) response. It is the `public_key` field. * `snowflakeHostAddress`: Your Snowflake account URL.  </details> 

### Example

```typescript
import {
    DataExportDestinationsApi,
    Configuration,
    DestinationPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new DataExportDestinationsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let destinationPost: DestinationPost; //

const { status, data } = await apiInstance.postDestination(
    projectKey,
    environmentKey,
    destinationPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **destinationPost** | **DestinationPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**Destination**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Destination response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postGenerateTrustPolicy**
> GenerateTrustPolicyPostRep postGenerateTrustPolicy()

Trust policy to allow Data Export to assume the role and perform operations on AWS resources

### Example

```typescript
import {
    DataExportDestinationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new DataExportDestinationsApi(configuration);

let projKey: string; //The project key (default to undefined)
let envKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.postGenerateTrustPolicy(
    projKey,
    envKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projKey** | [**string**] | The project key | defaults to undefined|
| **envKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**GenerateTrustPolicyPostRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Generate trust policy response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postGenerateWarehouseDestinationKeyPair**
> GenerateWarehouseDestinationKeyPairPostRep postGenerateWarehouseDestinationKeyPair()

Generate key pair to allow Data Export to authenticate into a Snowflake warehouse destination

### Example

```typescript
import {
    DataExportDestinationsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new DataExportDestinationsApi(configuration);

const { status, data } = await apiInstance.postGenerateWarehouseDestinationKeyPair();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GenerateWarehouseDestinationKeyPairPostRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Generate warehouse destination key pair response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

