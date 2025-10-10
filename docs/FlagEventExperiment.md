# FlagEventExperiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The experiment key | [default to undefined]
**name** | **string** | The experiment name | [default to undefined]
**iteration** | [**FlagEventExperimentIteration**](FlagEventExperimentIteration.md) |  | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { FlagEventExperiment } from 'launchdarkly-api-typescript';

const instance: FlagEventExperiment = {
    key,
    name,
    iteration,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
