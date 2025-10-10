# InsightsFlagEventsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFlagEvents**](#getflagevents) | **GET** /api/v2/engineering-insights/flag-events | List flag events|

# **getFlagEvents**
> FlagEventCollectionRep getFlagEvents()

Get a list of flag events  ### Expanding the flag event collection response  LaunchDarkly supports expanding the flag event collection response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `experiments` includes details on all of the experiments run on each flag  For example, use `?expand=experiments` to include the `experiments` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsFlagEventsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsFlagEventsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let applicationKey: string; //Comma separated list of application keys (optional) (default to undefined)
let query: string; //Filter events by flag key (optional) (default to undefined)
let impactSize: string; //Filter events by impact size. A small impact created a less than 20% change in the proportion of end users receiving one or more flag variations. A medium impact created between a 20%-80% change. A large impact created a more than 80% change. Options: `none`, `small`, `medium`, `large` (optional) (default to undefined)
let hasExperiments: boolean; //Filter events to those associated with an experiment (`true`) or without an experiment (`false`) (optional) (default to undefined)
let global: string; //Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude` (optional) (default to undefined)
let expand: string; //Expand properties in response. Options: `experiments` (optional) (default to undefined)
let limit: number; //The number of deployments to return. Default is 20. Maximum allowed is 100. (optional) (default to undefined)
let from: number; //Unix timestamp in milliseconds. Default value is 7 days ago. (optional) (default to undefined)
let to: number; //Unix timestamp in milliseconds. Default value is now. (optional) (default to undefined)
let after: string; //Identifier used for pagination (optional) (default to undefined)
let before: string; //Identifier used for pagination (optional) (default to undefined)

const { status, data } = await apiInstance.getFlagEvents(
    projectKey,
    environmentKey,
    applicationKey,
    query,
    impactSize,
    hasExperiments,
    global,
    expand,
    limit,
    from,
    to,
    after,
    before
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **applicationKey** | [**string**] | Comma separated list of application keys | (optional) defaults to undefined|
| **query** | [**string**] | Filter events by flag key | (optional) defaults to undefined|
| **impactSize** | [**string**] | Filter events by impact size. A small impact created a less than 20% change in the proportion of end users receiving one or more flag variations. A medium impact created between a 20%-80% change. A large impact created a more than 80% change. Options: &#x60;none&#x60;, &#x60;small&#x60;, &#x60;medium&#x60;, &#x60;large&#x60; | (optional) defaults to undefined|
| **hasExperiments** | [**boolean**] | Filter events to those associated with an experiment (&#x60;true&#x60;) or without an experiment (&#x60;false&#x60;) | (optional) defaults to undefined|
| **global** | [**string**] | Filter to include or exclude global events. Default value is &#x60;include&#x60;. Options: &#x60;include&#x60;, &#x60;exclude&#x60; | (optional) defaults to undefined|
| **expand** | [**string**] | Expand properties in response. Options: &#x60;experiments&#x60; | (optional) defaults to undefined|
| **limit** | [**number**] | The number of deployments to return. Default is 20. Maximum allowed is 100. | (optional) defaults to undefined|
| **from** | [**number**] | Unix timestamp in milliseconds. Default value is 7 days ago. | (optional) defaults to undefined|
| **to** | [**number**] | Unix timestamp in milliseconds. Default value is now. | (optional) defaults to undefined|
| **after** | [**string**] | Identifier used for pagination | (optional) defaults to undefined|
| **before** | [**string**] | Identifier used for pagination | (optional) defaults to undefined|


### Return type

**FlagEventCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Flag event collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

