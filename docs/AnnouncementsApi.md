# AnnouncementsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAnnouncementPublic**](#createannouncementpublic) | **POST** /api/v2/announcements | Create an announcement|
|[**deleteAnnouncementPublic**](#deleteannouncementpublic) | **DELETE** /api/v2/announcements/{announcementId} | Delete an announcement|
|[**getAnnouncementsPublic**](#getannouncementspublic) | **GET** /api/v2/announcements | Get announcements|
|[**updateAnnouncementPublic**](#updateannouncementpublic) | **PATCH** /api/v2/announcements/{announcementId} | Update an announcement|

# **createAnnouncementPublic**
> AnnouncementResponse createAnnouncementPublic(createAnnouncementBody)

Create an announcement

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration,
    CreateAnnouncementBody
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let createAnnouncementBody: CreateAnnouncementBody; //Announcement request body

const { status, data } = await apiInstance.createAnnouncementPublic(
    createAnnouncementBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAnnouncementBody** | **CreateAnnouncementBody**| Announcement request body | |


### Return type

**AnnouncementResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created announcement |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAnnouncementPublic**
> deleteAnnouncementPublic()

Delete an announcement

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let announcementId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAnnouncementPublic(
    announcementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **announcementId** | [**string**] |  | defaults to undefined|


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
|**204** | No content |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAnnouncementsPublic**
> GetAnnouncementsPublic200Response getAnnouncementsPublic()

Get announcements

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let status: 'active' | 'inactive' | 'scheduled'; //Filter announcements by status. (optional) (default to undefined)
let limit: number; //The number of announcements to return. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getAnnouncementsPublic(
    status,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**&#39;active&#39; | &#39;inactive&#39; | &#39;scheduled&#39;**]**Array<&#39;active&#39; &#124; &#39;inactive&#39; &#124; &#39;scheduled&#39;>** | Filter announcements by status. | (optional) defaults to undefined|
| **limit** | [**number**] | The number of announcements to return. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**GetAnnouncementsPublic200Response**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Announcement response |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAnnouncementPublic**
> AnnouncementResponse updateAnnouncementPublic(announcementPatchOperation)

Update an announcement

### Example

```typescript
import {
    AnnouncementsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AnnouncementsApi(configuration);

let announcementId: string; // (default to undefined)
let announcementPatchOperation: Array<AnnouncementPatchOperation>; //Update announcement request body

const { status, data } = await apiInstance.updateAnnouncementPublic(
    announcementId,
    announcementPatchOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **announcementPatchOperation** | **Array<AnnouncementPatchOperation>**| Update announcement request body | |
| **announcementId** | [**string**] |  | defaults to undefined|


### Return type

**AnnouncementResponse**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated announcement |  -  |
|**400** | Bad request |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

