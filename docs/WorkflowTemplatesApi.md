# WorkflowTemplatesApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWorkflowTemplate**](#createworkflowtemplate) | **POST** /api/v2/templates | Create workflow template|
|[**deleteWorkflowTemplate**](#deleteworkflowtemplate) | **DELETE** /api/v2/templates/{templateKey} | Delete workflow template|
|[**getWorkflowTemplates**](#getworkflowtemplates) | **GET** /api/v2/templates | Get workflow templates|

# **createWorkflowTemplate**
> WorkflowTemplateOutput createWorkflowTemplate(createWorkflowTemplateInput)

> ### Workflows are in maintenance mode > > The workflows feature is in maintenance mode, and is planned for future deprecation at a date not yet specified. We will work with existing customers using workflows to migrate to a replacement solution when deprecation occurs.  Create a template for a feature flag workflow. 

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration,
    CreateWorkflowTemplateInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let createWorkflowTemplateInput: CreateWorkflowTemplateInput; //

const { status, data } = await apiInstance.createWorkflowTemplate(
    createWorkflowTemplateInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWorkflowTemplateInput** | **CreateWorkflowTemplateInput**|  | |


### Return type

**WorkflowTemplateOutput**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Workflow template response JSON |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWorkflowTemplate**
> deleteWorkflowTemplate()

Delete a workflow template

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let templateKey: string; //The template key (default to undefined)

const { status, data } = await apiInstance.deleteWorkflowTemplate(
    templateKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateKey** | [**string**] | The template key | defaults to undefined|


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
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkflowTemplates**
> WorkflowTemplatesListingOutputRep getWorkflowTemplates()

Get workflow templates belonging to an account, or can optionally return templates_endpoints.workflowTemplateSummariesListingOutputRep when summary query param is true

### Example

```typescript
import {
    WorkflowTemplatesApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WorkflowTemplatesApi(configuration);

let summary: boolean; //Whether the entire template object or just a summary should be returned (optional) (default to undefined)
let search: string; //The substring in either the name or description of a template (optional) (default to undefined)

const { status, data } = await apiInstance.getWorkflowTemplates(
    summary,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **summary** | [**boolean**] | Whether the entire template object or just a summary should be returned | (optional) defaults to undefined|
| **search** | [**string**] | The substring in either the name or description of a template | (optional) defaults to undefined|


### Return type

**WorkflowTemplatesListingOutputRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow templates list response JSON |  -  |
|**401** | Invalid access token |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

