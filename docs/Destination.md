# Destination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of this Data Export destination | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**name** | **string** | A human-readable name for your Data Export destination | [optional] [default to undefined]
**kind** | **string** | The type of Data Export destination | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]
**config** | **any** | An object with the configuration parameters required for the destination type | [optional] [default to undefined]
**on** | **boolean** | Whether the export is on, that is, the status of the integration | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Destination } from 'launchdarkly-api-typescript';

const instance: Destination = {
    _id,
    _links,
    name,
    kind,
    version,
    config,
    on,
    _access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
