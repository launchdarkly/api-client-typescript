# MetricCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;MetricListingRep&gt;**](MetricListingRep.md) | An array of metrics | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**totalCount** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { MetricCollectionRep } from 'launchdarkly-api-typescript';

const instance: MetricCollectionRep = {
    items,
    _links,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
