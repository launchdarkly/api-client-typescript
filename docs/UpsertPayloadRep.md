# UpsertPayloadRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of default tags for each flag | [default to undefined]
**temporary** | **boolean** | Whether the flag should be temporary by default | [default to undefined]
**booleanDefaults** | [**BooleanFlagDefaults**](BooleanFlagDefaults.md) |  | [default to undefined]
**defaultClientSideAvailability** | [**DefaultClientSideAvailability**](DefaultClientSideAvailability.md) |  | [default to undefined]

## Example

```typescript
import { UpsertPayloadRep } from 'launchdarkly-api-typescript';

const instance: UpsertPayloadRep = {
    _links,
    tags,
    temporary,
    booleanDefaults,
    defaultClientSideAvailability,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
