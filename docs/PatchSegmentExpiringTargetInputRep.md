# PatchSegmentExpiringTargetInputRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional description of changes | [optional] [default to undefined]
**instructions** | [**Array&lt;PatchSegmentExpiringTargetInstruction&gt;**](PatchSegmentExpiringTargetInstruction.md) | Semantic patch instructions for the desired changes to the resource | [default to undefined]

## Example

```typescript
import { PatchSegmentExpiringTargetInputRep } from 'launchdarkly-api-typescript';

const instance: PatchSegmentExpiringTargetInputRep = {
    comment,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
