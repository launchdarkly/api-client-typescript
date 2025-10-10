# ContextInstanceEvaluation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the flag. | [default to undefined]
**key** | **string** | Key of the flag. | [default to undefined]
**_value** | **any** | The value of the flag variation that the context receives. If there is no defined default rule, this is null. | [default to undefined]
**reason** | [**ContextInstanceEvaluationReason**](ContextInstanceEvaluationReason.md) |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { ContextInstanceEvaluation } from 'launchdarkly-api-typescript';

const instance: ContextInstanceEvaluation = {
    name,
    key,
    _value,
    reason,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
