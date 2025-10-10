# UserSettingsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getExpiringFlagsForUser**](#getexpiringflagsforuser) | **GET** /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey} | Get expiring dates on flags for user|
|[**getUserFlagSetting**](#getuserflagsetting) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Get flag setting for user|
|[**getUserFlagSettings**](#getuserflagsettings) | **GET** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags | List flag settings for user|
|[**patchExpiringFlagsForUser**](#patchexpiringflagsforuser) | **PATCH** /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey} | Update expiring user target for flags|
|[**putFlagSetting**](#putflagsetting) | **PUT** /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Update flag settings for user|

# **getExpiringFlagsForUser**
> ExpiringUserTargetGetResponse getExpiringFlagsForUser()

Get a list of flags for which the given user is scheduled for removal.

### Example

```typescript
import {
    UserSettingsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UserSettingsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let userKey: string; //The user key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)

const { status, data } = await apiInstance.getExpiringFlagsForUser(
    projectKey,
    userKey,
    environmentKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **userKey** | [**string**] | The user key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**ExpiringUserTargetGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expiring user target response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserFlagSetting**
> UserFlagSetting getUserFlagSetting()

Get a single flag setting for a user by flag key. <br /><br />The `_value` is the flag variation that the user receives. The `setting` indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled.

### Example

```typescript
import {
    UserSettingsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UserSettingsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let userKey: string; //The user key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)

const { status, data } = await apiInstance.getUserFlagSetting(
    projectKey,
    environmentKey,
    userKey,
    featureFlagKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **userKey** | [**string**] | The user key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|


### Return type

**UserFlagSetting**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User flag settings response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserFlagSettings**
> UserFlagSettings getUserFlagSettings()

Get the current flag settings for a given user. <br /><br />The `_value` is the flag variation that the user receives. The `setting` indicates whether you\'ve explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled and the `alternate.page` flag disabled, and that the user has not been explicitly targeted to receive a particular variation.

### Example

```typescript
import {
    UserSettingsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UserSettingsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let userKey: string; //The user key (default to undefined)

const { status, data } = await apiInstance.getUserFlagSettings(
    projectKey,
    environmentKey,
    userKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **userKey** | [**string**] | The user key | defaults to undefined|


### Return type

**UserFlagSettings**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User flag settings collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchExpiringFlagsForUser**
> ExpiringUserTargetPatchResponse patchExpiringFlagsForUser(patchUsersRequest)

Schedule the specified user for removal from individual targeting on one or more flags. The user must already be individually targeted for each flag.  You can add, update, or remove a scheduled removal date. You can only schedule a user for removal on a single variation per flag.  Updating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instructions for updating expiring user targets.  <details> <summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>  #### addExpireUserTargetDate  Adds a date and time that LaunchDarkly will remove the user from the flag\'s individual targeting.  ##### Parameters  * `flagKey`: The flag key * `variationId`: ID of a variation on the flag * `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag.  #### updateExpireUserTargetDate  Updates the date and time that LaunchDarkly will remove the user from the flag\'s individual targeting.  ##### Parameters  * `flagKey`: The flag key * `variationId`: ID of a variation on the flag * `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag. * `version`: The version of the expiring user target to update. If included, update will fail if version doesn\'t match current version of the expiring user target.  #### removeExpireUserTargetDate  Removes the scheduled removal of the user from the flag\'s individual targeting. The user will remain part of the flag\'s individual targeting until explicitly removed, or until another removal is scheduled.  ##### Parameters  * `flagKey`: The flag key * `variationId`: ID of a variation on the flag  </details> 

### Example

```typescript
import {
    UserSettingsApi,
    Configuration,
    PatchUsersRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UserSettingsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let userKey: string; //The user key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let patchUsersRequest: PatchUsersRequest; //

const { status, data } = await apiInstance.patchExpiringFlagsForUser(
    projectKey,
    userKey,
    environmentKey,
    patchUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchUsersRequest** | **PatchUsersRequest**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **userKey** | [**string**] | The user key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**ExpiringUserTargetPatchResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Expiring user target response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putFlagSetting**
> putFlagSetting(valuePut)

Enable or disable a feature flag for a user based on their key.  Omitting the `setting` attribute from the request body, or including a `setting` of `null`, erases the current setting for a user.  If you previously patched the flag, and the patch included the user\'s data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user\'s key before, it calculates the flag values based on the user key alone. 

### Example

```typescript
import {
    UserSettingsApi,
    Configuration,
    ValuePut
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new UserSettingsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let userKey: string; //The user key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let valuePut: ValuePut; //

const { status, data } = await apiInstance.putFlagSetting(
    projectKey,
    environmentKey,
    userKey,
    featureFlagKey,
    valuePut
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **valuePut** | **ValuePut**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **userKey** | [**string**] | The user key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|


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
|**204** | Action succeeded |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

