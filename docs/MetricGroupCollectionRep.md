# MetricGroupCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;MetricGroupRep&gt;**](MetricGroupRep.md) | An array of metric groups | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**totalCount** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { MetricGroupCollectionRep } from 'launchdarkly-api-typescript';

const instance: MetricGroupCollectionRep = {
    items,
    _links,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
