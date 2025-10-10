# IntegrationSubscriptionStatusRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successCount** | **number** |  | [optional] [default to undefined]
**lastSuccess** | **number** |  | [optional] [default to undefined]
**lastError** | **number** |  | [optional] [default to undefined]
**errorCount** | **number** |  | [optional] [default to undefined]
**errors** | [**Array&lt;IntegrationStatusRep&gt;**](IntegrationStatusRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IntegrationSubscriptionStatusRep } from 'launchdarkly-api-typescript';

const instance: IntegrationSubscriptionStatusRep = {
    successCount,
    lastSuccess,
    lastError,
    errorCount,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
