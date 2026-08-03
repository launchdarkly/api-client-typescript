# ModelConfigPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Immutable provider model identifier. To use a different model identifier, create a new model config. | [optional] [default to undefined]
**provider** | **string** | Immutable model provider. To use a different provider, create a new model config. | [optional] [default to undefined]
**name** | **string** | Human-readable name of the model | [optional] [default to undefined]
**costPerInputToken** | **number** | Cost per input token in USD | [optional] [default to undefined]
**costPerOutputToken** | **number** | Cost per output token in USD | [optional] [default to undefined]
**costPerCachedInputToken** | **number** | Cost per cached input token in USD | [optional] [default to undefined]
**params** | **object** |  | [optional] [default to undefined]
**customParams** | **object** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**maintainerId** | **string** |  | [optional] [default to undefined]
**maintainerTeamKey** | **string** |  | [optional] [default to undefined]

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
