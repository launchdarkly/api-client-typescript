# ReleaseProgressionCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeCount** | **number** | The number of active releases | [default to undefined]
**completedCount** | **number** | The number of completed releases | [default to undefined]
**items** | [**Array&lt;ReleaseProgression&gt;**](ReleaseProgression.md) | A list of details for each release, across all flags, for this release pipeline | [default to undefined]
**phases** | [**Array&lt;PhaseInfo&gt;**](PhaseInfo.md) | A list of details for each phase, across all releases, for this release pipeline | [default to undefined]
**totalCount** | **number** | The total number of releases for this release pipeline | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { ReleaseProgressionCollection } from 'launchdarkly-api-typescript';

const instance: ReleaseProgressionCollection = {
    activeCount,
    completedCount,
    items,
    phases,
    totalCount,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
