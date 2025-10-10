# UpdatePhaseStatusInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to undefined]
**audiences** | [**Array&lt;ReleaserAudienceConfigInput&gt;**](ReleaserAudienceConfigInput.md) | Extra configuration for audiences required upon phase initialization. | [optional] [default to undefined]

## Example

```typescript
import { UpdatePhaseStatusInput } from 'launchdarkly-api-typescript';

const instance: UpdatePhaseStatusInput = {
    status,
    audiences,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
