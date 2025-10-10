# BigSegmentStoreStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **boolean** | Whether the persistent store integration is fully synchronized with the LaunchDarkly environment, and the &lt;code&gt;lastSync&lt;/code&gt; occurred within a few minutes | [optional] [default to undefined]
**potentiallyStale** | **boolean** | Whether the persistent store integration may not be fully synchronized with the LaunchDarkly environment. &lt;code&gt;true&lt;/code&gt; if the integration could be stale. | [optional] [default to undefined]
**lastSync** | **number** |  | [optional] [default to undefined]
**lastError** | **number** |  | [optional] [default to undefined]
**errors** | [**Array&lt;StoreIntegrationError&gt;**](StoreIntegrationError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BigSegmentStoreStatus } from 'launchdarkly-api-typescript';

const instance: BigSegmentStoreStatus = {
    available,
    potentiallyStale,
    lastSync,
    lastError,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
