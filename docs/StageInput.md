# StageInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The stage name | [optional] [default to undefined]
**executeConditionsInSequence** | **boolean** | Whether to execute the conditions in sequence for the given stage | [optional] [default to undefined]
**conditions** | [**Array&lt;ConditionInput&gt;**](ConditionInput.md) | An array of conditions for the stage | [optional] [default to undefined]
**action** | [**ActionInput**](ActionInput.md) |  | [optional] [default to undefined]

## Example

```typescript
import { StageInput } from 'launchdarkly-api-typescript';

const instance: StageInput = {
    name,
    executeConditionsInSequence,
    conditions,
    action,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
