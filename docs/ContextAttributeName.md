# ContextAttributeName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A context attribute\&#39;s name. | [default to undefined]
**weight** | **number** | A relative estimate of the number of contexts seen recently that have an attribute with the associated name. | [default to undefined]
**redacted** | **boolean** | Whether or not the attribute has one or more redacted values. | [optional] [default to undefined]

## Example

```typescript
import { ContextAttributeName } from 'launchdarkly-api-typescript';

const instance: ContextAttributeName = {
    name,
    weight,
    redacted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
