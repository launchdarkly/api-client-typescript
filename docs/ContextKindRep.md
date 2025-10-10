# ContextKindRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The context kind key | [default to undefined]
**name** | **string** | The context kind name | [default to undefined]
**description** | **string** | The context kind description | [default to undefined]
**version** | **number** | The context kind version | [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**lastModified** | **number** |  | [default to undefined]
**lastSeen** | **number** |  | [optional] [default to undefined]
**createdFrom** | **string** |  | [default to undefined]
**hideInTargeting** | **boolean** | Alias for archived. | [optional] [default to undefined]
**archived** | **boolean** | Whether the context kind is archived. Archived context kinds are unavailable for targeting. | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { ContextKindRep } from 'launchdarkly-api-typescript';

const instance: ContextKindRep = {
    key,
    name,
    description,
    version,
    creationDate,
    lastModified,
    lastSeen,
    createdFrom,
    hideInTargeting,
    archived,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
