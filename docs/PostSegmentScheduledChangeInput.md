# PostSegmentScheduledChangeInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executionDate** | **number** |  | [default to undefined]
**comment** | **string** | Optional comment describing the scheduled change | [optional] [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** | The segment semantic patch instructions to apply on the execution date | [default to undefined]

## Example

```typescript
import { PostSegmentScheduledChangeInput } from 'launchdarkly-api-typescript';

const instance: PostSegmentScheduledChangeInput = {
    executionDate,
    comment,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
