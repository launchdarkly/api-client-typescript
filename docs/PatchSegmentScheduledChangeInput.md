# PatchSegmentScheduledChangeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executionDate** | **number** |  | [optional] [default to undefined]
**comment** | **string** | The new comment describing the scheduled change. Leave out to keep the current comment, or send an empty string to clear it. | [optional] [default to undefined]

## Example

```typescript
import { PatchSegmentScheduledChangeInput } from 'launchdarkly-api-typescript';

const instance: PatchSegmentScheduledChangeInput = {
    executionDate,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
