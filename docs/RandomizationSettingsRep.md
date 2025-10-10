# RandomizationSettingsRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_projectId** | **string** | The project ID | [optional] [default to undefined]
**_projectKey** | **string** | The project key | [optional] [default to undefined]
**randomizationUnits** | [**Array&lt;RandomizationUnitRep&gt;**](RandomizationUnitRep.md) | An array of the randomization units in this project | [optional] [default to undefined]
**_creationDate** | **number** |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { RandomizationSettingsRep } from 'launchdarkly-api-typescript';

const instance: RandomizationSettingsRep = {
    _projectId,
    _projectKey,
    randomizationUnits,
    _creationDate,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
