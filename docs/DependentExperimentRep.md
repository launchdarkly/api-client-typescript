# DependentExperimentRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The experiment key | [default to undefined]
**name** | **string** | The experiment name | [default to undefined]
**environmentId** | **string** | The environment ID | [default to undefined]
**environmentKey** | **string** | The environment key | [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**archivedDate** | **number** |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { DependentExperimentRep } from 'launchdarkly-api-typescript';

const instance: DependentExperimentRep = {
    key,
    name,
    environmentId,
    environmentKey,
    creationDate,
    archivedDate,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
