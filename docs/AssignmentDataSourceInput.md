# AssignmentDataSourceInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The key of the assignment data source to use for this iteration | [default to undefined]
**experimentId** | **string** | The experiment identifier in the assignment data source. You can omit this while the experiment is a draft, but it must be set before you start the experiment. | [optional] [default to undefined]
**startTime** | **number** |  | [optional] [default to undefined]
**endTime** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { AssignmentDataSourceInput } from 'launchdarkly-api-typescript';

const instance: AssignmentDataSourceInput = {
    key,
    experimentId,
    startTime,
    endTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
