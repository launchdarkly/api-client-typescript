# Defaults


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onVariation** | **number** | The index, from the array of variations for this flag, of the variation to serve by default when targeting is on. | [default to undefined]
**offVariation** | **number** | The index, from the array of variations for this flag, of the variation to serve by default when targeting is off. | [default to undefined]

## Example

```typescript
import { Defaults } from 'launchdarkly-api-typescript';

const instance: Defaults = {
    onVariation,
    offVariation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
