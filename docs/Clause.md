# Clause


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**attribute** | **string** |  | [default to undefined]
**op** | **string** |  | [default to undefined]
**values** | **Array&lt;any&gt;** |  | [default to undefined]
**contextKind** | **string** |  | [optional] [default to undefined]
**negate** | **boolean** |  | [default to undefined]

## Example

```typescript
import { Clause } from 'launchdarkly-api-typescript';

const instance: Clause = {
    _id,
    attribute,
    op,
    values,
    contextKind,
    negate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
