# ContextInstanceSegmentMembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the segment | [default to undefined]
**key** | **string** | A unique key used to reference the segment | [default to undefined]
**description** | **string** | A description of the segment\&#39;s purpose | [default to undefined]
**unbounded** | **boolean** | Whether this is an unbounded segment. Unbounded segments, also called big segments, may be list-based segments with more than 15,000 entries, or synced segments. | [default to undefined]
**external** | **string** | If the segment is a synced segment, the name of the external source | [default to undefined]
**isMember** | **boolean** | Whether the context is a member of this segment, either by explicit inclusion or by rule matching | [default to undefined]
**isIndividuallyTargeted** | **boolean** | Whether the context is explicitly included in this segment | [default to undefined]
**isRuleTargeted** | **boolean** | Whether the context is captured by this segment\&#39;s rules. The value of this field is undefined if the context is also explicitly included (&lt;code&gt;isIndividuallyTargeted&lt;/code&gt; is &lt;code&gt;true&lt;/code&gt;). | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { ContextInstanceSegmentMembership } from 'launchdarkly-api-typescript';

const instance: ContextInstanceSegmentMembership = {
    name,
    key,
    description,
    unbounded,
    external,
    isMember,
    isIndividuallyTargeted,
    isRuleTargeted,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
