# IntegrationAuditLogSubscriptionsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSubscription**](#createsubscription) | **POST** /api/v2/integrations/{integrationKey} | Create audit log subscription|
|[**deleteSubscription**](#deletesubscription) | **DELETE** /api/v2/integrations/{integrationKey}/{id} | Delete audit log subscription|
|[**getSubscriptionByID**](#getsubscriptionbyid) | **GET** /api/v2/integrations/{integrationKey}/{id} | Get audit log subscription by ID|
|[**getSubscriptions**](#getsubscriptions) | **GET** /api/v2/integrations/{integrationKey} | Get audit log subscriptions by integration|
|[**updateSubscription**](#updatesubscription) | **PATCH** /api/v2/integrations/{integrationKey}/{id} | Update audit log subscription|

# **createSubscription**
> Integration createSubscription(subscriptionPost)

Create an audit log subscription.<br /><br />For each subscription, you must specify the set of resources you wish to subscribe to audit log notifications for. You can describe these resources using a custom role policy. To learn more, read [Custom role concepts](https://launchdarkly.com/docs/home/account/role-concepts).

### Example

```typescript
import {
    IntegrationAuditLogSubscriptionsApi,
    Configuration,
    SubscriptionPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationAuditLogSubscriptionsApi(configuration);

let integrationKey: string; //The integration key (default to undefined)
let subscriptionPost: SubscriptionPost; //

const { status, data } = await apiInstance.createSubscription(
    integrationKey,
    subscriptionPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscriptionPost** | **SubscriptionPost**|  | |
| **integrationKey** | [**string**] | The integration key | defaults to undefined|


### Return type

**Integration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Integration response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSubscription**
> deleteSubscription()

Delete an audit log subscription.

### Example

```typescript
import {
    IntegrationAuditLogSubscriptionsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationAuditLogSubscriptionsApi(configuration);

let integrationKey: string; //The integration key (default to undefined)
let id: string; //The subscription ID (default to undefined)

const { status, data } = await apiInstance.deleteSubscription(
    integrationKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **id** | [**string**] | The subscription ID | defaults to undefined|


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

# **getSubscriptionByID**
> Integration getSubscriptionByID()

Get an audit log subscription by ID.

### Example

```typescript
import {
    IntegrationAuditLogSubscriptionsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationAuditLogSubscriptionsApi(configuration);

let integrationKey: string; //The integration key (default to undefined)
let id: string; //The subscription ID (default to undefined)

const { status, data } = await apiInstance.getSubscriptionByID(
    integrationKey,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **id** | [**string**] | The subscription ID | defaults to undefined|


### Return type

**Integration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSubscriptions**
> Integrations getSubscriptions()

Get all audit log subscriptions associated with a given integration.

### Example

```typescript
import {
    IntegrationAuditLogSubscriptionsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationAuditLogSubscriptionsApi(configuration);

let integrationKey: string; //The integration key (default to undefined)

const { status, data } = await apiInstance.getSubscriptions(
    integrationKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **integrationKey** | [**string**] | The integration key | defaults to undefined|


### Return type

**Integrations**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integrations collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSubscription**
> Integration updateSubscription(patchOperation)

Update an audit log subscription configuration. Updating an audit log subscription uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    IntegrationAuditLogSubscriptionsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new IntegrationAuditLogSubscriptionsApi(configuration);

let integrationKey: string; //The integration key (default to undefined)
let id: string; //The ID of the audit log subscription (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.updateSubscription(
    integrationKey,
    id,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **integrationKey** | [**string**] | The integration key | defaults to undefined|
| **id** | [**string**] | The ID of the audit log subscription | defaults to undefined|


### Return type

**Integration**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Integration response |  -  |
|**400** | Invalid request |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Status conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

