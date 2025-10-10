# Export


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The export ID | [default to undefined]
**segmentKey** | **string** | The segment key | [default to undefined]
**creationTime** | **number** |  | [default to undefined]
**status** | **string** | The export status | [default to undefined]
**sizeBytes** | **number** | The export size, in bytes | [default to undefined]
**size** | **string** | The export size, with units | [default to undefined]
**initiator** | [**InitiatorRep**](InitiatorRep.md) |  | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources, including the location of the exported file | [default to undefined]

## Example

```typescript
import { Export } from 'launchdarkly-api-typescript';

const instance: Export = {
    id,
    segmentKey,
    creationTime,
    status,
    sizeBytes,
    size,
    initiator,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
