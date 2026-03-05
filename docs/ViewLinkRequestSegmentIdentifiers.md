# ViewLinkRequestSegmentIdentifiers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segmentIdentifiers** | [**Array&lt;ViewLinkRequestSegmentIdentifier&gt;**](ViewLinkRequestSegmentIdentifier.md) | Identifiers of the segments to link/unlink (environmentId and segmentKey) | [default to undefined]
**filter** | **string** | Optional filter string to determine which resources should be linked. Resources only need to match either the filter or explicitly-listed keys to be linked (union). Uses the same queryfilter syntax as the segments list endpoint.  Supported filters for segments: query, tags, keys, excludedKeys, unbounded, external, view, type  | [optional] [default to undefined]
**environmentId** | **string** | Required when using filter for segment resources. Specifies which environment to query for segments matching the filter. Ignored when only using explicit segmentIdentifiers (since each identifier contains its own environmentId).  | [optional] [default to undefined]
**comment** | **string** | Optional comment for the link/unlink operation | [optional] [default to '']

## Example

```typescript
import { ViewLinkRequestSegmentIdentifiers } from 'launchdarkly-api-typescript';

const instance: ViewLinkRequestSegmentIdentifiers = {
    segmentIdentifiers,
    filter,
    environmentId,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
