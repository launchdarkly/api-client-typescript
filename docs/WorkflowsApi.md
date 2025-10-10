# WorkflowsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteWorkflow**](#deleteworkflow) | **DELETE** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Delete workflow|
|[**getCustomWorkflow**](#getcustomworkflow) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId} | Get custom workflow|
|[**getWorkflows**](#getworkflows) | **GET** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Get workflows|
|[**postWorkflow**](#postworkflow) | **POST** /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows | Create workflow|

# **deleteWorkflow**
> deleteWorkflow()

Delete a workflow from a feature flag.

### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let workflowId: string; //The workflow id (default to undefined)

const { status, data } = await apiInstance.deleteWorkflow(
    projectKey,
    featureFlagKey,
    environmentKey,
    workflowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **workflowId** | [**string**] | The workflow id | defaults to undefined|


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

# **getCustomWorkflow**
> CustomWorkflowOutput getCustomWorkflow()

Get a specific workflow by ID.

### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let workflowId: string; //The workflow ID (default to undefined)

const { status, data } = await apiInstance.getCustomWorkflow(
    projectKey,
    featureFlagKey,
    environmentKey,
    workflowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **workflowId** | [**string**] | The workflow ID | defaults to undefined|


### Return type

**CustomWorkflowOutput**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflow response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkflows**
> CustomWorkflowsListingOutput getWorkflows()

Display workflows associated with a feature flag.

### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let status: string; //Filter results by workflow status. Valid status filters are `active`, `completed`, and `failed`. (optional) (default to undefined)
let sort: string; //A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by `creationDate` or `stopDate`. (optional) (default to undefined)
let limit: number; //The maximum number of workflows to return. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)

const { status, data } = await apiInstance.getWorkflows(
    projectKey,
    featureFlagKey,
    environmentKey,
    status,
    sort,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **status** | [**string**] | Filter results by workflow status. Valid status filters are &#x60;active&#x60;, &#x60;completed&#x60;, and &#x60;failed&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by &#x60;creationDate&#x60; or &#x60;stopDate&#x60;. | (optional) defaults to undefined|
| **limit** | [**number**] | The maximum number of workflows to return. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|


### Return type

**CustomWorkflowsListingOutput**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workflows collection response |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postWorkflow**
> CustomWorkflowOutput postWorkflow(customWorkflowInput)

> ### Workflows are in maintenance mode > > The workflows feature is in maintenance mode, and is planned for future deprecation at a date not yet specified. We will work with existing customers using workflows to migrate to a replacement solution when deprecation occurs.  Create a workflow for a feature flag. You can create a workflow directly, or you can apply a template to create a new workflow.  ### Creating a workflow  You can use the create workflow endpoint to create a workflow directly by adding a `stages` array to the request body.  For each stage, define the `name`, `conditions` when the stage should be executed, and `action` that describes the stage. For approval stages, only standard LaunchDarkly approvals are permitted. Workflows of `kind` `integration-approval` cannot be used for custom workflows.   <details> <summary>Click to expand example</summary>  _Example request body_ ```json {   \"name\": \"Progressive rollout starting in two days\",   \"description\": \"Turn flag targeting on and increase feature rollout in 10% increments each day\",   \"stages\": [     {       \"name\": \"10% rollout on day 1\",       \"conditions\": [         {           \"kind\": \"schedule\",           \"scheduleKind\": \"relative\", // or \"absolute\"               //  If \"scheduleKind\" is \"absolute\", set \"executionDate\";               // \"waitDuration\" and \"waitDurationUnit\" will be ignored           \"waitDuration\": 2,           \"waitDurationUnit\": \"calendarDay\"         },         {           \"kind\": \"ld-approval\",           \"notifyMemberIds\": [ \"507f1f77bcf86cd799439011\" ],           \"notifyTeamKeys\": [ \"team-key-123abc\" ]         }       ],       \"action\": {         \"instructions\": [           {             \"kind\": \"turnFlagOn\"           },           {             \"kind\": \"updateFallthroughVariationOrRollout\",             \"rolloutWeights\": {               \"452f5fb5-7320-4ba3-81a1-8f4324f79d49\": 90000,               \"fc15f6a4-05d3-4aa4-a997-446be461345d\": 10000             }           }         ]       }     }   ] } ``` </details>  ### Creating a workflow by applying a workflow template  You can also create a workflow by applying a workflow template. If you pass a valid workflow template key as the `templateKey` query parameter with the request, the API will attempt to create a new workflow with the stages defined in the workflow template with the corresponding key.  #### Applicability of stages Templates are created in the context of a particular flag in a particular environment in a particular project. However, because workflows created from a template can be applied to any project, environment, and flag, some steps of the workflow may need to be updated in order to be applicable for the target resource.  You can pass a `dryRun` query parameter to tell the API to return a report of which steps of the workflow template are applicable in the target project/environment/flag, and which will need to be updated. When the `dryRun` query parameter is present the response body includes a `meta` property that holds a list of parameters that could potentially be inapplicable for the target resource. Each of these parameters will include a `valid` field. You will need to update any invalid parameters in order to create the new workflow. You can do this using the `parameters` property, which overrides the workflow template parameters.  #### Overriding template parameters You can use the `parameters` property in the request body to tell the API to override the specified workflow template parameters with new values that are specific to your target project/environment/flag.  <details> <summary>Click to expand example</summary>  _Example request body_ ```json {  \"name\": \"workflow created from my-template\",  \"description\": \"description of my workflow\",  \"parameters\": [   {    \"_id\": \"62cf2bc4cadbeb7697943f3b\",    \"path\": \"/clauses/0/values\",    \"default\": {     \"value\": [\"updated-segment\"]    }   },   {    \"_id\": \"62cf2bc4cadbeb7697943f3d\",    \"path\": \"/variationId\",    \"default\": {     \"value\": \"abcd1234-abcd-1234-abcd-1234abcd12\"    }   }  ] } ``` </details>  If there are any steps in the template that are not applicable to the target resource, the workflow will not be created, and the `meta` property will be included in the response body detailing which parameters need to be updated. 

### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    CustomWorkflowInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let featureFlagKey: string; //The feature flag key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let customWorkflowInput: CustomWorkflowInput; //
let templateKey: string; //The template key to apply as a starting point for the new workflow (optional) (default to undefined)
let dryRun: boolean; //Whether to call the endpoint in dry-run mode (optional) (default to undefined)

const { status, data } = await apiInstance.postWorkflow(
    projectKey,
    featureFlagKey,
    environmentKey,
    customWorkflowInput,
    templateKey,
    dryRun
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customWorkflowInput** | **CustomWorkflowInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **featureFlagKey** | [**string**] | The feature flag key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **templateKey** | [**string**] | The template key to apply as a starting point for the new workflow | (optional) defaults to undefined|
| **dryRun** | [**boolean**] | Whether to call the endpoint in dry-run mode | (optional) defaults to undefined|


### Return type

**CustomWorkflowOutput**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Workflow response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

