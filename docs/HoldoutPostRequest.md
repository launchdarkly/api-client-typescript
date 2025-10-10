# HoldoutPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the holdout | [optional] [default to undefined]
**key** | **string** | A key that identifies the holdout | [optional] [default to undefined]
**description** | **string** | Description of the holdout | [optional] [default to undefined]
**randomizationunit** | **string** | The chosen randomization unit for the holdout base experiment | [optional] [default to undefined]
**attributes** | **Array&lt;string&gt;** | The attributes that the holdout iteration\&#39;s results can be sliced by | [optional] [default to undefined]
**holdoutamount** | **string** | Audience allocation for the holdout | [optional] [default to undefined]
**primarymetrickey** | **string** | The key of the primary metric for this holdout | [optional] [default to undefined]
**metrics** | [**Array&lt;MetricInput&gt;**](MetricInput.md) | Details on the metrics for this experiment | [optional] [default to undefined]
**prerequisiteflagkey** | **string** | The key of the flag that the holdout is dependent on | [optional] [default to undefined]
**maintainerId** | **string** | Maintainer id | [optional] [default to undefined]

## Example

```typescript
import { HoldoutPostRequest } from 'launchdarkly-api-typescript';

const instance: HoldoutPostRequest = {
    name,
    key,
    description,
    randomizationunit,
    attributes,
    holdoutamount,
    primarymetrickey,
    metrics,
    prerequisiteflagkey,
    maintainerId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
