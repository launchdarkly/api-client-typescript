# ReleaseProgression


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_createdAt** | **number** |  | [default to undefined]
**_completedAt** | **number** |  | [optional] [default to undefined]
**flagKey** | **string** | The flag key | [default to undefined]
**activePhaseId** | **string** | The ID of the currently active release phase | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { ReleaseProgression } from 'launchdarkly-api-typescript';

const instance: ReleaseProgression = {
    _createdAt,
    _completedAt,
    flagKey,
    activePhaseId,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
