# ExperimentCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;Experiment&gt;**](Experiment.md) | An array of experiments | [default to undefined]
**total_count** | **number** | The total number of experiments in this project and environment. Does not include legacy experiments. | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { ExperimentCollectionRep } from 'launchdarkly-api-typescript';

const instance: ExperimentCollectionRep = {
    items,
    total_count,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
