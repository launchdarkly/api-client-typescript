# Release


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**name** | **string** | The release pipeline name | [default to undefined]
**releasePipelineKey** | **string** | The release pipeline key | [default to undefined]
**releasePipelineDescription** | **string** | The release pipeline description | [default to undefined]
**phases** | [**Array&lt;ReleasePhase&gt;**](ReleasePhase.md) | An ordered list of the release pipeline phases | [default to undefined]
**_version** | **number** | The release version | [default to undefined]
**_releaseVariationId** | **string** | The chosen release variation ID to use across all phases of a release | [optional] [default to undefined]
**_canceledAt** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { Release } from 'launchdarkly-api-typescript';

const instance: Release = {
    _links,
    name,
    releasePipelineKey,
    releasePipelineDescription,
    phases,
    _version,
    _releaseVariationId,
    _canceledAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
