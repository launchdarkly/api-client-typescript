# FlagSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variations** | [**{ [key: string]: VariationSummary; }**](VariationSummary.md) |  | [default to undefined]
**prerequisites** | **number** | The number of prerequisites for this flag | [default to undefined]

## Example

```typescript
import { FlagSummary } from 'launchdarkly-api-typescript';

const instance: FlagSummary = {
    variations,
    prerequisites,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
