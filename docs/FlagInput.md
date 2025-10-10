# FlagInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleId** | **string** | The ID of the variation or rollout of the flag to use. Use \&quot;fallthrough\&quot; for the default targeting behavior when the flag is on. | [default to undefined]
**flagConfigVersion** | **number** | The flag version | [default to undefined]
**notInExperimentVariationId** | **string** | The ID of the variation to route traffic not part of the experiment analysis to. Defaults to variation ID of baseline treatment, if set. | [optional] [default to undefined]

## Example

```typescript
import { FlagInput } from 'launchdarkly-api-typescript';

const instance: FlagInput = {
    ruleId,
    flagConfigVersion,
    notInExperimentVariationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
