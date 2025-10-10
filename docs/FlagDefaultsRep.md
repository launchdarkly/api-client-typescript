# FlagDefaultsRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**key** | **string** | A unique key for the flag default | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of default tags for each flag | [optional] [default to undefined]
**temporary** | **boolean** | Whether the flag should be temporary by default | [optional] [default to undefined]
**defaultClientSideAvailability** | [**ClientSideAvailability**](ClientSideAvailability.md) |  | [optional] [default to undefined]
**booleanDefaults** | [**BooleanDefaults**](BooleanDefaults.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlagDefaultsRep } from 'launchdarkly-api-typescript';

const instance: FlagDefaultsRep = {
    _links,
    key,
    tags,
    temporary,
    defaultClientSideAvailability,
    booleanDefaults,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
