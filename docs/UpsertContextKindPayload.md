# UpsertContextKindPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The context kind name | [default to undefined]
**description** | **string** | The context kind description | [optional] [default to undefined]
**hideInTargeting** | **boolean** | Alias for archived. | [optional] [default to undefined]
**archived** | **boolean** | Whether the context kind is archived. Archived context kinds are unavailable for targeting. | [optional] [default to undefined]
**version** | **number** | The context kind version. If not specified when the context kind is created, defaults to 1. | [optional] [default to undefined]

## Example

```typescript
import { UpsertContextKindPayload } from 'launchdarkly-api-typescript';

const instance: UpsertContextKindPayload = {
    name,
    description,
    hideInTargeting,
    archived,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
