# Target


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **Array&lt;string&gt;** | A list of the keys for targets that will receive this variation because of individual targeting | [default to undefined]
**variation** | **number** | The index, from the array of variations for this flag, of the variation to serve this list of targets | [default to undefined]
**contextKind** | **string** | The context kind of the individual target | [optional] [default to undefined]

## Example

```typescript
import { Target } from 'launchdarkly-api-typescript';

const instance: Target = {
    values,
    variation,
    contextKind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
