# UserSegmentRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**clauses** | [**Array&lt;Clause&gt;**](Clause.md) |  | [default to undefined]
**weight** | **number** |  | [optional] [default to undefined]
**rolloutContextKind** | **string** |  | [optional] [default to undefined]
**bucketBy** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UserSegmentRule } from 'launchdarkly-api-typescript';

const instance: UserSegmentRule = {
    _id,
    clauses,
    weight,
    rolloutContextKind,
    bucketBy,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
