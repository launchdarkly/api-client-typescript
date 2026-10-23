# CreatePipelineReleaseInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseVariationId** | **string** | The variation id to release to across all phases | [optional] [default to undefined]
**releasePipelineKey** | **string** | The key of the release pipeline to attach the flag to | [default to undefined]

## Example

```typescript
import { CreatePipelineReleaseInput } from 'launchdarkly-api-typescript';

const instance: CreatePipelineReleaseInput = {
    releaseVariationId,
    releasePipelineKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
