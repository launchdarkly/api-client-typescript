# EnvironmentReleasesBetaApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEnvironmentRelease**](#getenvironmentrelease) | **GET** /api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/releases/{releaseId} | Get an environment release|
|[**listEnvironmentReleases**](#listenvironmentreleases) | **GET** /api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/releases | List environment releases|
|[**startEnvironmentRelease**](#startenvironmentrelease) | **POST** /api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/releases | Start an environment release|
|[**stopEnvironmentRelease**](#stopenvironmentrelease) | **PUT** /api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/releases/{releaseId}/stop | Stop an environment release|

# **getEnvironmentRelease**
> EnvironmentRelease getEnvironmentRelease()

Returns an environment release and all its phases in phase-index order. The release ID must belong to the flag and environment in the path. Returns `404` for a release that ended more than 90 days ago. Pass `expand=metrics` to attach each metric\'s definition to the top-level `metrics` array. Analysis settings come from the version pinned when the release started (`metricVersionId`); name, description, tags, maintainer, and archive state reflect the current metric and may change afterwards. 

### Example

```typescript
import {
    EnvironmentReleasesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentReleasesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let flagKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let releaseId: string; // (default to undefined)
let expand: Set<'metrics'>; //Optional fields to expand. (optional) (default to undefined)

const { status, data } = await apiInstance.getEnvironmentRelease(
    lDAPIVersion,
    projectKey,
    flagKey,
    environmentKey,
    releaseId,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **flagKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **releaseId** | [**string**] |  | defaults to undefined|
| **expand** | **Array<&#39;metrics&#39;>** | Optional fields to expand. | (optional) defaults to undefined|


### Return type

**EnvironmentRelease**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Environment release. |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listEnvironmentReleases**
> EnvironmentReleaseCollection listEnvironmentReleases()

Returns the environment releases for the flag in the environment, newest first. Each release includes its phases in phase-index order. Metric definitions are not included. To get them, call `getEnvironmentRelease` with `expand=metrics`. Returns an empty `items` array when the flag has no releases in the environment, or when no release matches the `filter`. Releases that ended more than 90 days ago are not returned.  Results are paginated. By default, the first 25 releases are returned. Use `limit` and `offset` to page through the rest, and `totalCount` to learn how many releases match in total. The `_links` object includes `first`, `prev`, `next`, and `last` links where they apply. 

### Example

```typescript
import {
    EnvironmentReleasesBetaApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentReleasesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let flagKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let filter: string; //A queryfilter expression that narrows the list. Supported fields and operators: `kind` (`equals`) with values `progressive` or `guarded`.  (optional) (default to undefined)
let limit: number; //The number of releases to return. Defaults to 25. Maximum is 100. (optional) (default to 25)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten releases and then returns the next releases in the list, up to the query `limit`. (optional) (default to 0)
let snapshot: string; //Pins the read to a moment in time (nanoseconds since the Unix epoch) so pages walked in sequence reflect one consistent snapshot. Follow the pagination links rather than constructing this value. Out-of-range values are ignored. (optional) (default to undefined)

const { status, data } = await apiInstance.listEnvironmentReleases(
    lDAPIVersion,
    projectKey,
    flagKey,
    environmentKey,
    filter,
    limit,
    offset,
    snapshot
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **flagKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **filter** | [**string**] | A queryfilter expression that narrows the list. Supported fields and operators: &#x60;kind&#x60; (&#x60;equals&#x60;) with values &#x60;progressive&#x60; or &#x60;guarded&#x60;.  | (optional) defaults to undefined|
| **limit** | [**number**] | The number of releases to return. Defaults to 25. Maximum is 100. | (optional) defaults to 25|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten releases and then returns the next releases in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to 0|
| **snapshot** | [**string**] | Pins the read to a moment in time (nanoseconds since the Unix epoch) so pages walked in sequence reflect one consistent snapshot. Follow the pagination links rather than constructing this value. Out-of-range values are ignored. | (optional) defaults to undefined|


### Return type

**EnvironmentReleaseCollection**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Environment releases. |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**429** | Rate limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startEnvironmentRelease**
> EnvironmentRelease startEnvironmentRelease(startEnvironmentReleaseRequest)

Creates and starts a release on a flag in an environment, either from inline configuration or from an environment release plan. A release has one or more phases. Each phase is an audience, targeted by one flag rule, and has its own steps: the schedule of allocations at which that rule serves the target variation. After all of a phase\'s steps complete, the phase serves the target variation to 100% of its contexts.  **Inline configuration.** Each entry in `phases` must specify exactly one targeting mode:  - **Existing rule**: set `ruleId`. The rule must be enabled. Only a   single-phase release can use an existing rule. - **New rule**: set `clauses`, with an optional `description`. New   rules are appended to the end of the flag\'s rule list. To insert   them before an existing rule instead, set the top-level   `beforeRuleId`, which applies to every phase.  Every phase\'s rule, including an existing rule passed by `ruleId`, must include `{\"contextKind\": \"<randomizationUnit>\", \"attribute\": \"kind\", \"op\": \"in\", \"values\": [\"<randomizationUnit>\"]}`, not negated and with no other values, so the release only reaches contexts of the `randomizationUnit` kind, or multi-contexts containing the `randomizationUnit` kind. An existing rule needs the clause even if its other clauses only match that context kind. A phase without it returns `400`.  For multiple phases, set `phases` with at least two entries. Each phase creates a rule. The first rule is enabled and starts immediately. Subsequent rules stay disabled until the release advances to them: automatically when `advancementMode` is `automatic`, or by an explicit advance when it is `manual`. `advancementMode` is required for a multi-phase release.  Releases on the flag\'s default rule are not supported. A phase that omits both targeting modes is rejected.  The flag must be on in the environment, or the request returns `409`. The release only reaches contexts that match a phase\'s rule. Other contexts keep getting the flag\'s default rule, which may already serve the target variation.  The release type is inferred from `metrics`: an omitted or empty array creates a progressive release; one or more metrics creates a guarded release. Metrics must be listed individually; metric groups are not accepted.  Every start runs release health checks, described in `ReleaseHealthCheckKind`. A flag that hasn\'t recently been evaluated for contexts of the `randomizationUnit` kind fails `flag_evaluations_with_context`, and one with no recent evaluations at all also fails `flag_evaluations_any`. Guarded releases also check that each metric receives events. A failing check returns `400` with code `health_checks_failed`. To start the release anyway, list the failing kinds in `bypassHealthChecks`.  **From a release plan.** Set `releasePlanKey` to start from a plan in this environment instead of configuring the release inline; a request that also sets fields the plan supplies is rejected. The plan\'s current version runs as stored, with metric groups expanded into their members. Health checks run against the plan\'s randomization unit and metrics. Returns `400` if the plan is missing or incomplete, and `422` until environment release plans are available for the account.  Requires the `updateRules` action on the flag in this environment, plus `updateFallthrough` when `cleanupBehavior` is `remove_rules_and_update_default_rule`. A release started from a plan requires both. The start is recorded in the flag\'s audit log as a targeting change that carries `comment`.  In an environment that requires approvals, this endpoint fails with `405`. Tokens granted the `bypassRequiredApproval` action can still call it to start the release directly.  This operation is not idempotent. Retrying a request that already started a release returns `409` with code `release_already_active`. The earlier request may have succeeded; call `listEnvironmentReleases` to confirm the running release is yours. 

### Example

```typescript
import {
    EnvironmentReleasesBetaApi,
    Configuration,
    StartEnvironmentReleaseRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentReleasesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let flagKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let startEnvironmentReleaseRequest: StartEnvironmentReleaseRequest; //

const { status, data } = await apiInstance.startEnvironmentRelease(
    lDAPIVersion,
    projectKey,
    flagKey,
    environmentKey,
    startEnvironmentReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startEnvironmentReleaseRequest** | **StartEnvironmentReleaseRequest**|  | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **flagKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|


### Return type

**EnvironmentRelease**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Environment release created and started. |  -  |
|**400** | The request is invalid. When &#x60;code&#x60; is &#x60;health_checks_failed&#x60;, &#x60;failingChecks&#x60; describes the release health checks that failed. Fix the failing checks, or list their kinds in &#x60;bypassHealthChecks&#x60; to start the release anyway.  |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**405** | Approval is required to make this change |  -  |
|**409** | The flag\&#39;s current state does not allow the start. &#x60;code&#x60; is &#x60;release_already_active&#x60; when a release is already running on the flag or on the targeted rule; if this is a retry, the first request may have succeeded, so call &#x60;listEnvironmentReleases&#x60; to confirm. Any other conflict returns &#x60;optimistic_locking_error&#x60; with the cause in &#x60;message&#x60;.  |  -  |
|**422** | The request set &#x60;releasePlanKey&#x60; before environment release plans are available for the account. Configure the release inline instead.  |  -  |
|**429** | Rate limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stopEnvironmentRelease**
> EnvironmentRelease stopEnvironmentRelease(stopEnvironmentReleaseRequest)

Stops a release and resolves its phases according to the `resolution` you specify. To learn how each resolution treats completed and pending phases, read the `resolution` schema.  Requires the `updateRules` action on the flag in this environment, or `updateFallthrough` for a historical release that ran on the default rule. The stop is recorded in the flag\'s audit log as a targeting change that names the resolution and carries `comment`.  In an environment that requires approvals, this endpoint fails with `405`. Tokens granted the `bypassRequiredApproval` action can still call it to stop the release directly.  Stopping a release that has already completed or been stopped returns `200` and makes no changes. Returns `404` for a release that ended more than 90 days ago. 

### Example

```typescript
import {
    EnvironmentReleasesBetaApi,
    Configuration,
    StopEnvironmentReleaseRequest
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new EnvironmentReleasesBetaApi(configuration);

let lDAPIVersion: 'beta'; //Version of the endpoint. (default to undefined)
let projectKey: string; // (default to undefined)
let flagKey: string; // (default to undefined)
let environmentKey: string; // (default to undefined)
let releaseId: string; // (default to undefined)
let stopEnvironmentReleaseRequest: StopEnvironmentReleaseRequest; //

const { status, data } = await apiInstance.stopEnvironmentRelease(
    lDAPIVersion,
    projectKey,
    flagKey,
    environmentKey,
    releaseId,
    stopEnvironmentReleaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stopEnvironmentReleaseRequest** | **StopEnvironmentReleaseRequest**|  | |
| **lDAPIVersion** | [**&#39;beta&#39;**]**Array<&#39;beta&#39;>** | Version of the endpoint. | defaults to undefined|
| **projectKey** | [**string**] |  | defaults to undefined|
| **flagKey** | [**string**] |  | defaults to undefined|
| **environmentKey** | [**string**] |  | defaults to undefined|
| **releaseId** | [**string**] |  | defaults to undefined|


### Return type

**EnvironmentRelease**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Environment release stopped, or already in a terminal status. |  -  |
|**400** | Bad request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**405** | Approval is required to make this change |  -  |
|**409** | The flag\&#39;s current state does not allow the stop. The response returns &#x60;optimistic_locking_error&#x60; with the cause in &#x60;message&#x60;. Resolve the cause, then retry.  |  -  |
|**429** | Rate limited |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

