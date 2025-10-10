# Import


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The import ID | [default to undefined]
**segmentKey** | **string** | The segment key | [default to undefined]
**creationTime** | **number** |  | [default to undefined]
**mode** | **string** | The import mode used, either &lt;code&gt;merge&lt;/code&gt; or &lt;code&gt;replace&lt;/code&gt; | [default to undefined]
**status** | **string** | The import status | [default to undefined]
**files** | [**Array&lt;FileRep&gt;**](FileRep.md) | The imported files and their status | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { Import } from 'launchdarkly-api-typescript';

const instance: Import = {
    id,
    segmentKey,
    creationTime,
    mode,
    status,
    files,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
