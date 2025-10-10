# ViewLinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | **Array&lt;string&gt;** | Keys of the resources (flags, segments, AI configs) to link/unlink | [default to undefined]
**comment** | **string** | Optional comment for the link/unlink operation | [optional] [default to '']
**segmentIdentifiers** | [**Array&lt;ViewLinkRequestSegmentIdentifier&gt;**](ViewLinkRequestSegmentIdentifier.md) | Identifiers of the segments to link/unlink (environmentId and segmentKey) | [default to undefined]

## Example

```typescript
import { ViewLinkRequest } from 'launchdarkly-api-typescript';

const instance: ViewLinkRequest = {
    keys,
    comment,
    segmentIdentifiers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
