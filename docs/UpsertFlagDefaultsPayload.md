# UpsertFlagDefaultsPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Array&lt;string&gt;** | A list of default tags for each flag | [default to undefined]
**temporary** | **boolean** | Whether the flag should be temporary by default | [default to undefined]
**booleanDefaults** | [**BooleanFlagDefaults**](BooleanFlagDefaults.md) |  | [default to undefined]
**defaultClientSideAvailability** | [**DefaultClientSideAvailability**](DefaultClientSideAvailability.md) |  | [default to undefined]

## Example

```typescript
import { UpsertFlagDefaultsPayload } from 'launchdarkly-api-typescript';

const instance: UpsertFlagDefaultsPayload = {
    tags,
    temporary,
    booleanDefaults,
    defaultClientSideAvailability,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
