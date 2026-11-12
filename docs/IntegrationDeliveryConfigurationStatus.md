# IntegrationDeliveryConfigurationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **boolean** | Whether the latest sync succeeded | [default to undefined]
**potentiallyStale** | **boolean** | Whether the feature store may be missing flag data from a failed or in-progress sync | [default to undefined]
**lastSync** | **number** |  | [optional] [default to undefined]
**lastError** | **number** |  | [optional] [default to undefined]
**errors** | [**Array&lt;StoreIntegrationError&gt;**](StoreIntegrationError.md) | Recent failed sync responses. Successful (200) and in-progress (202) responses are omitted. Included only when fetching a single configuration by ID. | [optional] [default to undefined]

## Example

```typescript
import { IntegrationDeliveryConfigurationStatus } from 'launchdarkly-api-typescript';

const instance: IntegrationDeliveryConfigurationStatus = {
    available,
    potentiallyStale,
    lastSync,
    lastError,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
