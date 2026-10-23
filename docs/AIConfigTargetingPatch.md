# AIConfigTargetingPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | A comment describing the change | [optional] [default to undefined]
**environmentKey** | **string** | The environment key | [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** | The semantic patch instructions to apply | [default to undefined]

## Example

```typescript
import { AIConfigTargetingPatch } from 'launchdarkly-api-typescript';

const instance: AIConfigTargetingPatch = {
    comment,
    environmentKey,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
