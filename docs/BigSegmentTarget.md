# BigSegmentTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userKey** | **string** | The target key | [default to undefined]
**included** | **boolean** | Indicates whether the target is included.&lt;br /&gt;Included targets are always segment members, regardless of segment rules. | [default to undefined]
**excluded** | **boolean** | Indicates whether the target is excluded.&lt;br /&gt;Segment rules bypass excluded targets, so they will never be included based on rules. Excluded targets may still be included explicitly. | [default to undefined]

## Example

```typescript
import { BigSegmentTarget } from 'launchdarkly-api-typescript';

const instance: BigSegmentTarget = {
    userKey,
    included,
    excluded,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
