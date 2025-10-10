# ConditionOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**kind** | **string** |  | [optional] [default to undefined]
**_execution** | [**ExecutionOutput**](ExecutionOutput.md) |  | [default to undefined]
**scheduleKind** | **string** |  | [optional] [default to undefined]
**executionDate** | **number** |  | [optional] [default to undefined]
**waitDuration** | **number** |  | [optional] [default to undefined]
**waitDurationUnit** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [default to undefined]
**notifyMemberIds** | **Array&lt;string&gt;** |  | [default to undefined]
**allReviews** | [**Array&lt;ReviewOutput&gt;**](ReviewOutput.md) |  | [default to undefined]
**reviewStatus** | **string** |  | [default to undefined]
**appliedDate** | **number** |  | [optional] [default to undefined]
**creationConfig** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { ConditionOutput } from 'launchdarkly-api-typescript';

const instance: ConditionOutput = {
    _id,
    kind,
    _execution,
    scheduleKind,
    executionDate,
    waitDuration,
    waitDurationUnit,
    description,
    notifyMemberIds,
    allReviews,
    reviewStatus,
    appliedDate,
    creationConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
