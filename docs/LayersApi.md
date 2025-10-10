# LayersApi

All URIs are relative to *https://app.launchdarkly.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createLayer**](#createlayer) | **POST** /api/v2/projects/{projectKey}/layers | Create layer|
|[**getLayers**](#getlayers) | **GET** /api/v2/projects/{projectKey}/layers | Get layers|
|[**updateLayer**](#updatelayer) | **PATCH** /api/v2/projects/{projectKey}/layers/{layerKey} | Update layer|

# **createLayer**
> LayerRep createLayer(layerPost)

Create a layer. Experiments running in the same layer are granted mutually-exclusive traffic. 

### Example

```typescript
import {
    LayersApi,
    Configuration,
    LayerPost
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new LayersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let layerPost: LayerPost; //

const { status, data } = await apiInstance.createLayer(
    projectKey,
    layerPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layerPost** | **LayerPost**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|


### Return type

**LayerRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Layer response |  -  |
|**400** | Invalid request |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLayers**
> LayerCollectionRep getLayers()

Get a collection of all layers for a project

### Example

```typescript
import {
    LayersApi,
    Configuration
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new LayersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let filter: string; //A comma-separated list of filters. This endpoint only accepts filtering by `experimentKey`. The filter returns layers which include that experiment for the selected environment(s). For example: `filter=reservations.experimentKey contains expKey`. (optional) (default to undefined)

const { status, data } = await apiInstance.getLayers(
    projectKey,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **filter** | [**string**] | A comma-separated list of filters. This endpoint only accepts filtering by &#x60;experimentKey&#x60;. The filter returns layers which include that experiment for the selected environment(s). For example: &#x60;filter&#x3D;reservations.experimentKey contains expKey&#x60;. | (optional) defaults to undefined|


### Return type

**LayerCollectionRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Layer Collection response |  -  |
|**400** | Invalid request |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateLayer**
> LayerRep updateLayer(layerPatchInput)

Update a layer by adding, changing, or removing traffic reservations for experiments, or by changing layer name or description. Updating a layer uses the semantic patch format.  To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).  ### Instructions  Semantic patch requests support the following `kind` instructions for updating layers.  <details> <summary>Click to expand instructions for <strong>updating layers</strong></summary>  #### updateName  Updates the layer name.  ##### Parameters  - `name`: The new layer name.  Here\'s an example:  ```json {   \"instructions\": [{       \"kind\": \"updateName\",       \"name\": \"New name\"   }] } ```  #### updateDescription  Updates the layer description.  ##### Parameters  - `description`: The new description.  Here\'s an example:  ```json {   \"instructions\": [{       \"kind\": \"updateDescription\",       \"description\": \"New description\"   }] } ```  #### updateExperimentReservation  Adds or updates a traffic reservation for an experiment in a layer.  ##### Parameters  - `experimentKey`: The key of the experiment whose reservation you are adding to or updating in the layer. - `reservationPercent`: The amount of traffic in the layer to reserve. Must be an integer. Zero is allowed until iteration start.  Here\'s an example:  ```json {   \"environmentKey\": \"production\",   \"instructions\": [{       \"kind\": \"updateExperimentReservation\",       \"experimentKey\": \"exp-key\",       \"reservationPercent\": 10   }] } ```  #### removeExperiment  Removes a traffic reservation for an experiment from a layer.  ##### Parameters  - `experimentKey`: The key of the experiment whose reservation you want to remove from the layer.  Here\'s an example:  ```json {   \"environmentKey\": \"production\",   \"instructions\": [{       \"kind\": \"removeExperiment\",       \"experimentKey\": \"exp-key\"   }] } ```  </details> 

### Example

```typescript
import {
    LayersApi,
    Configuration,
    LayerPatchInput
} from 'launchdarkly-api-typescript';

const configuration = new Configuration();
const apiInstance = new LayersApi(configuration);

let projectKey: string; //The project key (default to undefined)
let layerKey: string; //The layer key (default to undefined)
let layerPatchInput: LayerPatchInput; //

const { status, data } = await apiInstance.updateLayer(
    projectKey,
    layerKey,
    layerPatchInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layerPatchInput** | **LayerPatchInput**|  | |
| **projectKey** | [**string**] | The project key | defaults to undefined|
| **layerKey** | [**string**] | The layer key | defaults to undefined|


### Return type

**LayerRep**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Layer response |  -  |
|**400** | Invalid request |  -  |
|**403** | Forbidden |  -  |
|**404** | Invalid resource identifier |  -  |
|**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

