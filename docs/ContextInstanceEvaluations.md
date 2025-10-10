# ContextInstanceEvaluations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;ContextInstanceEvaluation&gt;**](ContextInstanceEvaluation.md) | Details on the flag evaluations for this context instance | [default to undefined]
**totalCount** | **number** | The number of flags | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { ContextInstanceEvaluations } from 'launchdarkly-api-typescript';

const instance: ContextInstanceEvaluations = {
    items,
    totalCount,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
