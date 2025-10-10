# ReferenceRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **string** | File path of the reference | [default to undefined]
**hint** | **string** | Programming language used in the file | [optional] [default to undefined]
**hunks** | [**Array&lt;HunkRep&gt;**](HunkRep.md) |  | [default to undefined]

## Example

```typescript
import { ReferenceRep } from 'launchdarkly-api-typescript';

const instance: ReferenceRep = {
    path,
    hint,
    hunks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
