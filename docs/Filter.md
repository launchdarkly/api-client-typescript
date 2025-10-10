# Filter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Filter type. One of [contextAttribute, eventProperty, group] | [default to undefined]
**attribute** | **string** | If not a group node, the context attribute name or event property name to filter on | [optional] [default to undefined]
**op** | **string** |  | [default to undefined]
**values** | **Array&lt;any&gt;** | The context attribute / event property values or group member nodes | [default to undefined]
**contextKind** | **string** | For context attribute filters, the context kind. | [optional] [default to undefined]
**negate** | **boolean** | If set, then take the inverse of the operator. \&#39;in\&#39; becomes \&#39;not in\&#39;. | [default to undefined]

## Example

```typescript
import { Filter } from 'launchdarkly-api-typescript';

const instance: Filter = {
    type,
    attribute,
    op,
    values,
    contextKind,
    negate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
