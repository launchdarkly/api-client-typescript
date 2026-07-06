# ExperimentsApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createExperiment**](#createexperiment) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Create experiment|
|[**createIteration**](#createiteration) | **POST** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations | Create iteration|
|[**getExperiment**](#getexperiment) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Get experiment|
|[**getExperimentationSettings**](#getexperimentationsettings) | **GET** /api/v2/projects/{projectKey}/experimentation-settings | Get experimentation settings|
|[**getExperiments**](#getexperiments) | **GET** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments | Get experiments|
|[**getExperimentsAnyEnv**](#getexperimentsanyenv) | **GET** /api/v2/projects/{projectKey}/experiments | Get experiments any environment|
|[**patchExperiment**](#patchexperiment) | **PATCH** /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey} | Patch experiment|
|[**putExperimentationSettings**](#putexperimentationsettings) | **PUT** /api/v2/projects/{projectKey}/experimentation-settings | Update experimentation settings|

# **createExperiment**
> Experiment createExperiment(experimentPost)

Create an experiment.  To run this experiment, you\'ll need to [create an iteration](https://launchdarkly.com/docs/api/experiments/create-iteration) and then [update the experiment](https://launchdarkly.com/docs/api/experiments/patch-experiment) with the `startIteration` instruction.  ### Experiment types  Use the `type` field to specify the experiment type: `experiment` (default), `mab` (multi-armed bandit), or `holdout`.  For multi-armed bandit experiments, set `reallocationFrequencyMillis` on the iteration to control how often traffic is reallocated across variations.  ### Results analysis  Use the `methodology` field to specify the results analysis approach: `bayesian` (default) or `frequentist`.  Use the `dataSource` field to specify the source of metric data: `launchdarkly` (default), `snowflake`, or `databricks`.  Use the `analysisConfig` field to customize analysis settings such as the Bayesian threshold, significance threshold, or multiple comparison correction method.  To learn more, read [Creating experiments](https://launchdarkly.com/docs/home/experimentation/create). 

### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let experimentPost: ExperimentPost; //

const { status, data } = await apiInstance.createExperiment(
    projectKey,
    environmentKey,
    experimentPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentPost** | **ExperimentPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|


### Return type

**Experiment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Experiment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createIteration**
> IterationRep createIteration(iterationInput)

> **Deprecated**: This endpoint will be removed in a future version. Use the `updateExperimentFields` and `saveAndStartNewIteration` instructions on [Update experiment](https://launchdarkly.com/docs/api/experiments/patch-experiment) instead.  Create an experiment iteration.  Experiment iterations let you record experiments in individual blocks of time. Initially, iterations are created with a status of `not_started` and appear in the `draftIteration` field of an experiment. To start or stop an iteration, [update the experiment](https://launchdarkly.com/docs/api/experiments/patch-experiment) with the `startIteration` or `stopIteration` instruction.  To learn more, read [Start experiment iterations](https://launchdarkly.com/docs/home/experimentation/create#start-an-experiment-iteration). 

### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    IterationInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let experimentKey: string; //The experiment key (default to undefined)
let iterationInput: IterationInput; //

const { status, data } = await apiInstance.createIteration(
    projectKey,
    environmentKey,
    experimentKey,
    iterationInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **iterationInput** | **IterationInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **experimentKey** | [**string**] | The experiment key | defaults to undefined|


### Return type

**IterationRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Iteration response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExperiment**
> Experiment getExperiment()

Get details about an experiment.  ### Expanding the experiment response  LaunchDarkly supports five fields for expanding the \"Get experiment\" response. By default, these fields are **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:  - `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response. - `draftIteration` includes the iteration which has not been started yet, if any. - `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response. - `treatments` includes all treatment and parameter details. By default treatment data is not included in the response. - `analysisConfig` includes the analysis configuration for the experiment, such as the Bayesian threshold or significance threshold.  For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response. 

### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let experimentKey: string; //The experiment key (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. (optional) (default to undefined)

const { status, data } = await apiInstance.getExperiment(
    projectKey,
    environmentKey,
    experimentKey,
    expand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **experimentKey** | [**string**] | The experiment key | defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. | (optional) defaults to undefined|


### Return type

**Experiment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Experiment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExperimentationSettings**
> RandomizationSettingsRep getExperimentationSettings()

Get current experimentation settings for the given project

### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let projectKey: string; //The project key (default to undefined)

const { status, data } = await apiInstance.getExperimentationSettings(
    projectKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**RandomizationSettingsRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Experimentation settings response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExperiments**
> ExperimentCollectionRep getExperiments()

Get details about all experiments in an environment.  ### Filtering experiments  LaunchDarkly supports the `filter` query param for filtering, with the following fields:  - `flagKey` filters for only experiments that use the flag with the given key. - `metricKey` filters for only experiments that use the metric with the given key. - `status` filters for only experiments with an iteration with the given status. An iteration can have the status `not_started`, `running` or `stopped`.  For example, `filter=flagKey:my-flag,status:running,metricKey:page-load-ms` filters for experiments for the given flag key and the given metric key which have a currently running iteration.  ### Expanding the experiments response  LaunchDarkly supports five fields for expanding the \"Get experiments\" response. By default, these fields are **not** included in the response.  To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:  - `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response. - `draftIteration` includes the iteration which has not been started yet, if any. - `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response. - `treatments` includes all treatment and parameter details. By default treatment data is not included in the response. - `analysisConfig` includes the analysis configuration for the experiment, such as the Bayesian threshold or significance threshold.  For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response. 

### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let limit: number; //The maximum number of experiments to return. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let filter: string; //A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above. (optional) (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. (optional) (default to undefined)
let lifecycleState: string; //A comma-separated list of experiment archived states. Supports `archived`, `active`, or both. Defaults to `active` experiments. (optional) (default to undefined)

const { status, data } = await apiInstance.getExperiments(
    projectKey,
    environmentKey,
    limit,
    offset,
    filter,
    expand,
    lifecycleState
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **limit** | [**number**] | The maximum number of experiments to return. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained above. | (optional) defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. | (optional) defaults to undefined|
| **lifecycleState** | [**string**] | A comma-separated list of experiment archived states. Supports &#x60;archived&#x60;, &#x60;active&#x60;, or both. Defaults to &#x60;active&#x60; experiments. | (optional) defaults to undefined|


### Return type

**ExperimentCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Experiment collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExperimentsAnyEnv**
> ExperimentCollectionRep getExperimentsAnyEnv()

Get a list of experiments from across all environments in the project

### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let limit: number; //The maximum number of experiments to return. Defaults to 20. (optional) (default to undefined)
let offset: number; //Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`. (optional) (default to undefined)
let filter: string; //A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above. (optional) (default to undefined)
let expand: string; //A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. (optional) (default to undefined)
let lifecycleState: string; //A comma-separated list of experiment archived states. Supports `archived`, `active`, or both. Defaults to `active` experiments. (optional) (default to undefined)

const { status, data } = await apiInstance.getExperimentsAnyEnv(
    projectKey,
    limit,
    offset,
    filter,
    expand,
    lifecycleState
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **limit** | [**number**] | The maximum number of experiments to return. Defaults to 20. | (optional) defaults to undefined|
| **offset** | [**number**] | Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query &#x60;limit&#x60;. | (optional) defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. Each filter is of the form &#x60;field:value&#x60;. Supported fields are explained above. | (optional) defaults to undefined|
| **expand** | [**string**] | A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. | (optional) defaults to undefined|
| **lifecycleState** | [**string**] | A comma-separated list of experiment archived states. Supports &#x60;archived&#x60;, &#x60;active&#x60;, or both. Defaults to &#x60;active&#x60; experiments. | (optional) defaults to undefined|


### Return type

**ExperimentCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Experiment collection response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patchExperiment**
> Experiment patchExperiment(experimentPatchInput)

Update an experiment. Updating an experiment uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instructions for updating experiments.  #### updateName  > **Deprecated**: `updateName` will be removed in a future version. Use `updateExperimentFields` instead.  Updates the experiment name.  ##### Parameters  - `value`: The new name.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"updateName\",     \"value\": \"Example updated experiment name\"   }] } ```  #### updateDescription  > **Deprecated**: `updateDescription` will be removed in a future version. Use `updateExperimentFields` instead.  Updates the experiment description.  ##### Parameters  - `value`: The new description.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"updateDescription\",     \"value\": \"Example updated description\"   }] } ```  #### updateExperimentFields  Updates one or more fields on an experiment or its current iteration. Each field update specifies an operation (`add`, `update`, or `remove`) and an optional value.  Which fields are mutable depends on the current iteration status. To discover which fields and operations are allowed, expand `mutableFieldsByStatus` on the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response.  ##### Parameters  - `value`: An object mapping field names to field updates. Each field update has the following properties:   - `operation`: The operation to perform. One of `add`, `update`, or `remove`.   - `value`: The new value for the field. Required for `add` and `update` operations.  To find which fields are supported and which operations are allowed for each iteration status, expand `mutableFieldsByStatus` on the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"updateExperimentFields\",     \"value\": {       \"name\": {         \"operation\": \"update\",         \"value\": \"Updated experiment name\"       },       \"tags\": {         \"operation\": \"add\",         \"value\": [\"tag1\", \"tag2\"]       }     }   }] } ```  #### saveAndStartNewIteration  Stops the current running iteration, creates a new iteration from it, optionally applies field updates, and starts the new iteration. This is a convenience instruction that combines stopping, updating, and starting in a single operation.  ##### Parameters  - `changeJustification`: (Optional) The reason for stopping and starting a new iteration. - `value`: (Optional) An object mapping field names to field updates, using the same format as `updateExperimentFields`. These updates are applied to the new iteration before it is started.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"saveAndStartNewIteration\",     \"changeJustification\": \"Adjusting hypothesis based on early results\",     \"value\": {       \"hypothesis\": {         \"operation\": \"update\",         \"value\": \"Updated hypothesis text\"       }     }   }] } ```  #### startIteration  Starts a new iteration for this experiment. You must [create a new iteration](https://launchdarkly.com/docs/api/experiments/create-iteration) before calling this instruction.  An iteration may not be started until it meets the following criteria:  * Its associated flag is toggled on and is not archived * Its `randomizationUnit` is set * At least one of its `treatments` has a non-zero `allocationPercent`  ##### Parameters  - `changeJustification`: The reason for starting a new iteration. Required when you call `startIteration` on an already running experiment, otherwise optional.  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"startIteration\",     \"changeJustification\": \"It\'s time to start a new iteration\"   }] } ```  #### stopIteration  Stops the current iteration for this experiment.  ##### Parameters  - `winningTreatmentId`: The ID of the winning treatment. Treatment IDs are returned as part of the [Get experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response. They are the `_id` of each element in the `treatments` array. - `winningReason`: The reason for the winner  Here\'s an example:  ```json {   \"instructions\": [{     \"kind\": \"stopIteration\",     \"winningTreatmentId\": \"3a548ec2-72ac-4e59-8518-5c24f5609ccf\",     \"winningReason\": \"Example reason to stop the iteration\"   }] } ```  #### archiveExperiment  Archives this experiment. Archived experiments are hidden by default in the LaunchDarkly user interface. You cannot start new iterations for archived experiments.  Here\'s an example:  ```json {   \"instructions\": [{ \"kind\": \"archiveExperiment\" }] } ```  #### restoreExperiment  Restores an archived experiment. After restoring an experiment, you can start new iterations for it again.  Here\'s an example:  ```json {   \"instructions\": [{ \"kind\": \"restoreExperiment\" }] } ``` 

### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentPatchInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let environmentKey: string; //The environment key (default to undefined)
let experimentKey: string; //The experiment key (default to undefined)
let experimentPatchInput: ExperimentPatchInput; //

const { status, data } = await apiInstance.patchExperiment(
    projectKey,
    environmentKey,
    experimentKey,
    experimentPatchInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentPatchInput** | **ExperimentPatchInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **environmentKey** | [**string**] | The environment key | defaults to undefined|
| **experimentKey** | [**string**] | The experiment key | defaults to undefined|


### Return type

**Experiment**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Experiment response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**409** | Conflict |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putExperimentationSettings**
> RandomizationSettingsRep putExperimentationSettings(randomizationSettingsPut)

Update experimentation settings for the given project

### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    RandomizationSettingsPut
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let projectKey: string; //The project key (default to undefined)
let randomizationSettingsPut: RandomizationSettingsPut; //

const { status, data } = await apiInstance.putExperimentationSettings(
    projectKey,
    randomizationSettingsPut
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **randomizationSettingsPut** | **RandomizationSettingsPut**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**RandomizationSettingsRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Experimentation settings response |  -  |
|**400** | Invalid request |  -  |
|**401** | Invalid access token |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**405** | Method not allowed |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

