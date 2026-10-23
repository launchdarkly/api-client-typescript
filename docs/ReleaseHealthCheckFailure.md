# ReleaseHealthCheckFailure


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**ReleaseHealthCheckKind**](ReleaseHealthCheckKind.md) |  | [default to undefined]
**metricKey** | **string** | The metric key associated with a metric event check. | [optional] [default to undefined]
**message** | **string** | A description of the failed health check. | [default to undefined]

## Example

```typescript
import { ReleaseHealthCheckFailure } from 'launchdarkly-api-typescript';

const instance: ReleaseHealthCheckFailure = {
    kind,
    metricKey,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
