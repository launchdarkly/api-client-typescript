# SegmentScheduledChanges


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: SegmentScheduledChangesLink; }**](SegmentScheduledChangesLink.md) | The location and content type of related resources | [default to undefined]
**items** | [**Array&lt;SegmentScheduledChange&gt;**](SegmentScheduledChange.md) | The segment\&#39;s scheduled changes that have not been applied yet, plus any that failed to apply, soonest first | [default to undefined]

## Example

```typescript
import { SegmentScheduledChanges } from 'launchdarkly-api-typescript';

const instance: SegmentScheduledChanges = {
    _links,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
