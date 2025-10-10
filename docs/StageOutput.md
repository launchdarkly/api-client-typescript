# StageOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of this stage | [default to undefined]
**name** | **string** | The stage name | [optional] [default to undefined]
**conditions** | [**Array&lt;ConditionOutput&gt;**](ConditionOutput.md) | An array of conditions for the stage | [default to undefined]
**action** | [**ActionOutput**](ActionOutput.md) |  | [default to undefined]
**_execution** | [**ExecutionOutput**](ExecutionOutput.md) |  | [default to undefined]

## Example

```typescript
import { StageOutput } from 'launchdarkly-api-typescript';

const instance: StageOutput = {
    _id,
    name,
    conditions,
    action,
    _execution,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
