# UnlinkResourceSuccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successCount** | **number** | The number of resources successfully unlinked. | [default to undefined]
**failureCount** | **number** | The number of resources that failed to unlink. | [default to undefined]
**failedResources** | [**Array&lt;FailedResourceLink&gt;**](FailedResourceLink.md) | Details of resources that failed to unlink. | [optional] [default to undefined]

## Example

```typescript
import { UnlinkResourceSuccessResponse } from 'launchdarkly-api-typescript';

const instance: UnlinkResourceSuccessResponse = {
    successCount,
    failureCount,
    failedResources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
