# DependentMetricGroupRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key to reference the metric group | [default to undefined]
**name** | **string** | A human-friendly name for the metric group | [default to undefined]
**kind** | **string** | The type of the metric group | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { DependentMetricGroupRep } from 'launchdarkly-api-typescript';

const instance: DependentMetricGroupRep = {
    key,
    name,
    kind,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
