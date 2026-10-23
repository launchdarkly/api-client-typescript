# CreateAdaptiveTriggerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**resourceKind** | [**AdaptiveTriggerResourceKind**](AdaptiveTriggerResourceKind.md) |  | [default to undefined]
**resourceKey** | **string** |  | [default to undefined]
**triggerSource** | [**ObservabilityAlertSource**](ObservabilityAlertSource.md) |  | [default to undefined]
**task** | [**AdaptiveTriggerTask**](AdaptiveTriggerTask.md) |  | [default to undefined]

## Example

```typescript
import { CreateAdaptiveTriggerRequest } from 'launchdarkly-api-typescript';

const instance: CreateAdaptiveTriggerRequest = {
    name,
    resourceKind,
    resourceKey,
    triggerSource,
    task,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
