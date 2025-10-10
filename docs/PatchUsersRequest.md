# PatchUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional comment describing the change | [optional] [default to undefined]
**instructions** | [**Array&lt;InstructionUserRequest&gt;**](InstructionUserRequest.md) | The instructions to perform when updating | [default to undefined]

## Example

```typescript
import { PatchUsersRequest } from 'launchdarkly-api-typescript';

const instance: PatchUsersRequest = {
    comment,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
