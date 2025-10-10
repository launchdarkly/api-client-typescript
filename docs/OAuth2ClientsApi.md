# OAuth2ClientsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createOAuth2Client**](#createoauth2client) | **POST** /api/v2/oauth/clients | Create a LaunchDarkly OAuth 2.0 client|
|[**deleteOAuthClient**](#deleteoauthclient) | **DELETE** /api/v2/oauth/clients/{clientId} | Delete OAuth 2.0 client|
|[**getOAuthClientById**](#getoauthclientbyid) | **GET** /api/v2/oauth/clients/{clientId} | Get client by ID|
|[**getOAuthClients**](#getoauthclients) | **GET** /api/v2/oauth/clients | Get clients|
|[**patchOAuthClient**](#patchoauthclient) | **PATCH** /api/v2/oauth/clients/{clientId} | Patch client by ID|

# **createOAuth2Client**
> Client createOAuth2Client(oauthClientPost)

Create (register) a LaunchDarkly OAuth2 client. OAuth2 clients allow you to build custom integrations using LaunchDarkly as your identity provider.

### Example

```typescript
import {
    OAuth2ClientsApi,
    Configuration,
    OauthClientPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth2ClientsApi(configuration);

let oauthClientPost: OauthClientPost; //

const { status, data } = await apiInstance.createOAuth2Client(
    oauthClientPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oauthClientPost** | **OauthClientPost**|  | |


### Return type

**Client**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | OAuth 2.0 client response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteOAuthClient**
> deleteOAuthClient()

Delete an existing OAuth 2.0 client by unique client ID.

### Example

```typescript
import {
    OAuth2ClientsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth2ClientsApi(configuration);

let clientId: string; //The client ID (default to undefined)

const { status, data } = await apiInstance.deleteOAuthClient(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client ID | defaults to undefined|


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
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOAuthClientById**
> Client getOAuthClientById()

Get a registered OAuth 2.0 client by unique client ID.

### Example

```typescript
import {
    OAuth2ClientsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth2ClientsApi(configuration);

let clientId: string; //The client ID (default to undefined)

const { status, data } = await apiInstance.getOAuthClientById(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The client ID | defaults to undefined|


### Return type

**Client**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OAuth 2.0 client response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOAuthClients**
> ClientCollection getOAuthClients()

Get all OAuth 2.0 clients registered by your account.

### Example

```typescript
import {
    OAuth2ClientsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth2ClientsApi(configuration);

const { status, data } = await apiInstance.getOAuthClients();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ClientCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OAuth 2.0 client collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchOAuthClient**
> Client patchOAuthClient(patchOperation)

Patch an existing OAuth 2.0 client by client ID. Updating an OAuth2 client uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates). Only `name`, `description`, and `redirectUri` may be patched.

### Example

```typescript
import {
    OAuth2ClientsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new OAuth2ClientsApi(configuration);

let clientId: string; //The client ID (default to undefined)
let patchOperation: Array<PatchOperation>; //

const { status, data } = await apiInstance.patchOAuthClient(
    clientId,
    patchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchOperation** | **Array<PatchOperation>**|  | |
| **clientId** | [**string**] | The client ID | defaults to undefined|


### Return type

**Client**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OAuth 2.0 client response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

