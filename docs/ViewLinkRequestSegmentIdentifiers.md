# ViewLinkRequestSegmentIdentifiers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segmentIdentifiers** | [**Array&lt;ViewLinkRequestSegmentIdentifier&gt;**](ViewLinkRequestSegmentIdentifier.md) | Identifiers of the segments to link/unlink (environmentId and segmentKey) | [default to undefined]
**comment** | **string** | Optional comment for the link/unlink operation | [optional] [default to '']

## Example

```typescript
import { ViewLinkRequestSegmentIdentifiers } from 'launchdarkly-api-typescript';

const instance: ViewLinkRequestSegmentIdentifiers = {
    segmentIdentifiers,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
