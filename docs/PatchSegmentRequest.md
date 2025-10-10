# PatchSegmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional description of changes | [optional] [default to undefined]
**instructions** | [**Array&lt;PatchSegmentInstruction&gt;**](PatchSegmentInstruction.md) | Semantic patch instructions for the desired changes to the resource | [default to undefined]

## Example

```typescript
import { PatchSegmentRequest } from 'launchdarkly-api-typescript';

const instance: PatchSegmentRequest = {
    comment,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
