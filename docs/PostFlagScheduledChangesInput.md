# PostFlagScheduledChangesInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional comment describing the scheduled changes | [optional] [default to undefined]
**executionDate** | **number** |  | [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]

## Example

```typescript
import { PostFlagScheduledChangesInput } from 'launchdarkly-api-typescript';

const instance: PostFlagScheduledChangesInput = {
    comment,
    executionDate,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
