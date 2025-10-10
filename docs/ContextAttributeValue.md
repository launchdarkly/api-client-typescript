# ContextAttributeValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **any** | A value for a context attribute. | [default to undefined]
**weight** | **number** | A relative estimate of the number of contexts seen recently that have a matching value for a given attribute. | [default to undefined]

## Example

```typescript
import { ContextAttributeValue } from 'launchdarkly-api-typescript';

const instance: ContextAttributeValue = {
    name,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
