# LinkResourceSuccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successCount** | **number** | The number of resources successfully linked. | [default to undefined]
**failureCount** | **number** | The number of resources that failed to link. | [default to undefined]
**linkedResources** | [**ViewLinkedResources**](ViewLinkedResources.md) |  | [optional] [default to undefined]
**failedResources** | [**Array&lt;FailedResourceLink&gt;**](FailedResourceLink.md) | Details of resources that failed to link. | [optional] [default to undefined]

## Example

```typescript
import { LinkResourceSuccessResponse } from 'launchdarkly-api-typescript';

const instance: LinkResourceSuccessResponse = {
    successCount,
    failureCount,
    linkedResources,
    failedResources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
