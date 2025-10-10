# LayerPatchInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional comment describing the update | [optional] [default to undefined]
**environmentKey** | **string** | The environment key used for making environment specific updates. For example, updating the reservation of an experiment | [optional] [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]

## Example

```typescript
import { LayerPatchInput } from 'launchdarkly-api-typescript';

const instance: LayerPatchInput = {
    comment,
    environmentKey,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
