# AuditLogApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuditLogEntries**](#getauditlogentries) | **GET** /api/v2/auditlog | List audit log entries|
|[**getAuditLogEntry**](#getauditlogentry) | **GET** /api/v2/auditlog/{id} | Get audit log entry|
|[**postAuditLogEntries**](#postauditlogentries) | **POST** /api/v2/auditlog | Search audit log entries|

# **getAuditLogEntries**
> AuditLogEntryListingRepCollection getAuditLogEntries()

Get a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.  LaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To learn more, read [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax). 

### Example

```typescript
import {
    AuditLogApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuditLogApi(configuration);

let before: number; //A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp. (optional) (default to undefined)
let after: number; //A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp. (optional) (default to undefined)
let q: string; //Text to search for. You can search for the full or partial name of the resource. (optional) (default to undefined)
let limit: number; //A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10. (optional) (default to undefined)
let spec: string; //A resource specifier that lets you filter audit log listings by resource (optional) (default to undefined)

const { status, data } = await apiInstance.getAuditLogEntries(
    before,
    after,
    q,
    limit,
    spec
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **before** | [**number**] | A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp. | (optional) defaults to undefined|
| **after** | [**number**] | A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp. | (optional) defaults to undefined|
| **q** | [**string**] | Text to search for. You can search for the full or partial name of the resource. | (optional) defaults to undefined|
| **limit** | [**number**] | A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10. | (optional) defaults to undefined|
| **spec** | [**string**] | A resource specifier that lets you filter audit log listings by resource | (optional) defaults to undefined|


### Return type

**AuditLogEntryListingRepCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit log entries response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditLogEntry**
> AuditLogEntryRep getAuditLogEntry()

Fetch a detailed audit log entry representation. The detailed representation includes several fields that are not present in the summary representation, including:  - `previousVersion`: a JSON representation of the previous version of the entity. - `currentVersion`: a JSON representation of the current version of the entity. - `delta`: the JSON patch body that was used in the request to update the entity. This is only included if the update was made through a [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch). It is null when the update was made using [semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch). Because most [flag updates](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag) are made using semantic patch, this field is rarely returned. 

### Example

```typescript
import {
    AuditLogApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuditLogApi(configuration);

let id: string; //The ID of the audit log entry (default to undefined)

const { status, data } = await apiInstance.getAuditLogEntry(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The ID of the audit log entry | defaults to undefined|


### Return type

**AuditLogEntryRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit log entry response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postAuditLogEntries**
> AuditLogEntryListingRepCollection postAuditLogEntries()

Search your audit log entries. The query parameters let you restrict the results that return by date ranges, or a full-text search query. The request body lets you restrict the results that return by resource specifiers.  LaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To learn more, read [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax). 

### Example

```typescript
import {
    AuditLogApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new AuditLogApi(configuration);

let before: number; //A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries returned occurred before the timestamp. (optional) (default to undefined)
let after: number; //A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned occurred after the timestamp. (optional) (default to undefined)
let q: string; //Text to search for. You can search for the full or partial name of the resource. (optional) (default to undefined)
let limit: number; //A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10. (optional) (default to undefined)
let statementPost: Array<StatementPost>; // (optional)

const { status, data } = await apiInstance.postAuditLogEntries(
    before,
    after,
    q,
    limit,
    statementPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementPost** | **Array<StatementPost>**|  | |
| **before** | [**number**] | A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries returned occurred before the timestamp. | (optional) defaults to undefined|
| **after** | [**number**] | A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned occurred after the timestamp. | (optional) defaults to undefined|
| **q** | [**string**] | Text to search for. You can search for the full or partial name of the resource. | (optional) defaults to undefined|
| **limit** | [**number**] | A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10. | (optional) defaults to undefined|


### Return type

**AuditLogEntryListingRepCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Audit log entries response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

