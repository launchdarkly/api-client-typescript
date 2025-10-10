# ExpiringTargetError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instructionIndex** | **number** | The index of the PATCH instruction where the error occurred | [default to undefined]
**message** | **string** | The error message related to a failed PATCH instruction | [default to undefined]

## Example

```typescript
import { ExpiringTargetError } from 'launchdarkly-api-typescript';

const instance: ExpiringTargetError = {
    instructionIndex,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
