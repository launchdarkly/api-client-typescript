# ModelConfigPatch

Fields to update. Omitted fields keep their current values. `params`, `customParams`, and `tags` replace the current values. Global model configs cannot be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Immutable provider model identifier. To use a different model identifier, create a new model config. | [optional] [default to undefined]
**provider** | **string** | Immutable model provider. To use a different provider, create a new model config. | [optional] [default to undefined]
**name** | **string** | Human-readable name of the model | [optional] [default to undefined]
**costPerInputToken** | **number** | Cost per input token in USD | [optional] [default to undefined]
**costPerOutputToken** | **number** | Cost per output token in USD | [optional] [default to undefined]
**costPerCachedInputToken** | **number** | Cost per cached input token in USD | [optional] [default to undefined]
**params** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [optional] [default to undefined]
**customParams** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the model config. Replaces the current tags. | [optional] [default to undefined]
**maintainerId** | **string** | The member ID of the new maintainer. Set &#x60;maintainerId&#x60; or &#x60;maintainerTeamKey&#x60;, not both. An empty string removes the maintainer. | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team to set as the new maintainer. Set &#x60;maintainerId&#x60; or &#x60;maintainerTeamKey&#x60;, not both. | [optional] [default to undefined]

## Example

```typescript
import { ModelConfigPatch } from 'launchdarkly-api-typescript';

const instance: ModelConfigPatch = {
    id,
    provider,
    name,
    costPerInputToken,
    costPerOutputToken,
    costPerCachedInputToken,
    params,
    customParams,
    tags,
    maintainerId,
    maintainerTeamKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
