# ValidationFailedErrorRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Specific error code encountered | [default to undefined]
**message** | **string** | Description of the error | [default to undefined]
**errors** | [**Array&lt;FailureReasonRep&gt;**](FailureReasonRep.md) | List of validation errors | [default to undefined]

## Example

```typescript
import { ValidationFailedErrorRep } from 'launchdarkly-api-typescript';

const instance: ValidationFailedErrorRep = {
    code,
    message,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
