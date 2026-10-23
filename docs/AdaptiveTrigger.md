# AdaptiveTrigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**resourceKind** | [**AdaptiveTriggerResourceKind**](AdaptiveTriggerResourceKind.md) |  | [default to undefined]
**resourceKey** | **string** |  | [default to undefined]
**enabled** | **boolean** |  | [default to undefined]
**triggerSource** | [**ObservabilityAlertSource**](ObservabilityAlertSource.md) |  | [default to undefined]
**task** | [**AdaptiveTriggerTask**](AdaptiveTriggerTask.md) |  | [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**updatedAt** | **number** |  | [default to undefined]

## Example

```typescript
import { AdaptiveTrigger } from 'launchdarkly-api-typescript';

const instance: AdaptiveTrigger = {
    id,
    name,
    resourceKind,
    resourceKey,
    enabled,
    triggerSource,
    task,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
