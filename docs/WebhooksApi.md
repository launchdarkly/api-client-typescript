# WebhooksApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /api/v2/webhooks/{id} | Delete webhook|
|[**getAllWebhooks**](#getallwebhooks) | **GET** /api/v2/webhooks | List webhooks|
|[**getWebhook**](#getwebhook) | **GET** /api/v2/webhooks/{id} | Get webhook|
|[**patchWebhook**](#patchwebhook) | **PATCH** /api/v2/webhooks/{id} | Update webhook|
|[**postWebhook**](#postwebhook) | **POST** /api/v2/webhooks | Creates a webhook|

# **deleteWebhook**
> deleteWebhook()

Delete a webhook by ID.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let id: string; //The ID of the webhook to delete (default to undefined)

const { status, data } = await apiInstance.deleteWebhook(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the webhook to delete | defaults to undefined|


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

# **getAllWebhooks**
> Webhooks getAllWebhooks()

Fetch a list of all webhooks.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

const { status, data } = await apiInstance.getAllWebhooks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Webhooks**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhooks response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhook**
> Webhook getWebhook()

Get a single webhook by ID.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let id: string; //The ID of the webhook (default to undefined)

const { status, data } = await apiInstance.getWebhook(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the webhook | defaults to undefined|


### Return type

**Webhook**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchWebhook**
> Webhook patchWebhook(patchOperation)

Update a webhook\'s settings. Updating webhook settings uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let id: string; //The ID of the webhook to update (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchWebhook(
    id,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **id** | [**string**] | The ID of the webhook to update | defaults to undefined|


### Return type

**Webhook**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWebhook**
> Webhook postWebhook(webhookPost)

Create a new webhook.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebhookPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookPost: WebhookPost; //

const { status, data } = await apiInstance.postWebhook(
    webhookPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookPost** | **WebhookPost**|  | |


### Return type

**Webhook**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

