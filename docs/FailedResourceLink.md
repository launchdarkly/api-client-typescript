# FailedResourceLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceKey** | **string** | The key of the resource that failed to link. | [default to undefined]
**environmentId** | **string** | Environment ID of the resource (only present for segments) | [optional] [default to undefined]
**resourceType** | **string** | The type of the resource that failed to link. | [default to undefined]
**errorMessage** | **string** | The reason why linking this resource failed. | [default to undefined]

## Example

```typescript
import { FailedResourceLink } from 'launchdarkly-api-typescript';

const instance: FailedResourceLink = {
    resourceKey,
    environmentId,
    resourceType,
    errorMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
