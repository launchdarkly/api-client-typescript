# FlagEventExperimentIteration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The experiment iteration ID | [default to undefined]
**status** | **string** |  | [default to undefined]
**startedAt** | **number** |  | [default to undefined]
**endedAt** | **number** |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { FlagEventExperimentIteration } from 'launchdarkly-api-typescript';

const instance: FlagEventExperimentIteration = {
    id,
    status,
    startedAt,
    endedAt,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
