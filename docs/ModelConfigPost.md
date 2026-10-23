# ModelConfigPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Human readable name of the model | [default to undefined]
**key** | **string** | Unique key for the model config in the project, in the format &#x60;Provider.model-id&#x60;. Config variations reject other formats. Keys of global catalog models are reserved. | [default to undefined]
**id** | **string** | Model ID that the provider\&#39;s API uses. Cannot be changed after creation. | [default to undefined]
**maintainerId** | **string** | The member ID of the maintainer. Not applied on create. To set the maintainer, update the model config after you create it. | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains the model config. Not applied on create. To set the maintainer, update the model config after you create it. | [optional] [default to undefined]
**icon** | **string** | Icon for the model | [optional] [default to undefined]
**provider** | **string** | Provider for the model. Use the provider prefix of &#x60;key&#x60;. Cannot be changed after creation. | [optional] [default to undefined]
**params** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [optional] [default to undefined]
**customParams** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the model config | [optional] [default to undefined]
**costPerInputToken** | **number** | Cost per input token in USD | [optional] [default to undefined]
**costPerOutputToken** | **number** | Cost per output token in USD | [optional] [default to undefined]
**costPerCachedInputToken** | **number** | Cost per cached input token in USD | [optional] [default to undefined]

## Example

```typescript
import { ModelConfigPost } from 'launchdarkly-api-typescript';

const instance: ModelConfigPost = {
    name,
    key,
    id,
    maintainerId,
    maintainerTeamKey,
    icon,
    provider,
    params,
    customParams,
    tags,
    costPerInputToken,
    costPerOutputToken,
    costPerCachedInputToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
