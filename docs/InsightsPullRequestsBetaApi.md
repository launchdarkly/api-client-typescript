# InsightsPullRequestsBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPullRequests**](#getpullrequests) | **GET** /api/v2/engineering-insights/pull-requests | List pull requests|

# **getPullRequests**
> PullRequestCollectionRep getPullRequests()

Get a list of pull requests  ### Expanding the pull request collection response  LaunchDarkly supports expanding the pull request collection response to include additional fields.  To expand the response, append the `expand` query parameter and include the following:  * `deployments` includes details on all of the deployments associated with each pull request * `flagReferences` includes details on all of the references to flags in each pull request * `leadTime` includes details about the lead time of the pull request for each stage  For example, use `?expand=deployments` to include the `deployments` field in the response. By default, this field is **not** included in the response. 

### Example

```typescript
import {
    InsightsPullRequestsBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new InsightsPullRequestsBetaApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //Required if you are using the <code>sort</code> parameter\'s <code>leadTime</code> option to sort pull requests. (optional) (default to undefined)
let applicationKey: string; //Filter the results to pull requests deployed to a comma separated list of applications (optional) (default to undefined)
let status: string; //Filter results to pull requests with the given status. Options: `open`, `merged`, `closed`, `deployed`. (optional) (default to undefined)
let query: string; //Filter list of pull requests by title or author (optional) (default to undefined)
let limit: number; //The number of pull requests to return. Default is 20. Maximum allowed is 100. (optional) (default to undefined)
let expand: string; //Expand properties in response. Options: `deployments`, `flagReferences`, `leadTime`. (optional) (default to undefined)
let sort: string; //Sort results. Requires the `environmentKey` to be set. Options: `leadTime` (asc) and `-leadTime` (desc). When query option is excluded, default sort is by created or merged date. (optional) (default to undefined)
let from: string; //Unix timestamp in milliseconds. Default value is 7 days ago. (optional) (default to undefined)
let to: string; //Unix timestamp in milliseconds. Default value is now. (optional) (default to undefined)
let after: string; //Identifier used for pagination (optional) (default to undefined)
let before: string; //Identifier used for pagination (optional) (default to undefined)

const { status, data } = await apiInstance.getPullRequests(
    projectKey,
    environmentKey,
    applicationKey,
    status,
    query,
    limit,
    expand,
    sort,
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
| **environmentKey** | [**string**] | Required if you are using the &lt;code&gt;sort&lt;/code&gt; parameter\&#39;s &lt;code&gt;leadTime&lt;/code&gt; option to sort pull requests. | (optional) defaults to undefined|
| **applicationKey** | [**string**] | Filter the results to pull requests deployed to a comma separated list of applications | (optional) defaults to undefined|
| **status** | [**string**] | Filter results to pull requests with the given status. Options: &#x60;open&#x60;, &#x60;merged&#x60;, &#x60;closed&#x60;, &#x60;deployed&#x60;. | (optional) defaults to undefined|
| **query** | [**string**] | Filter list of pull requests by title or author | (optional) defaults to undefined|
| **limit** | [**number**] | The number of pull requests to return. Default is 20. Maximum allowed is 100. | (optional) defaults to undefined|
| **expand** | [**string**] | Expand properties in response. Options: &#x60;deployments&#x60;, &#x60;flagReferences&#x60;, &#x60;leadTime&#x60;. | (optional) defaults to undefined|
| **sort** | [**string**] | Sort results. Requires the &#x60;environmentKey&#x60; to be set. Options: &#x60;leadTime&#x60; (asc) and &#x60;-leadTime&#x60; (desc). When query option is excluded, default sort is by created or merged date. | (optional) defaults to undefined|
| **from** | [**string**] | Unix timestamp in milliseconds. Default value is 7 days ago. | (optional) defaults to undefined|
| **to** | [**string**] | Unix timestamp in milliseconds. Default value is now. | (optional) defaults to undefined|
| **after** | [**string**] | Identifier used for pagination | (optional) defaults to undefined|
| **before** | [**string**] | Identifier used for pagination | (optional) defaults to undefined|


### Return type

**PullRequestCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Pull request collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

