# SegmentBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the segment | [default to undefined]
**key** | **string** | A unique key used to reference the segment | [default to undefined]
**description** | **string** | A description of the segment\&#39;s purpose | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the segment | [optional] [default to undefined]
**unbounded** | **boolean** | Whether to create a standard segment (&lt;code&gt;false&lt;/code&gt;) or a big segment (&lt;code&gt;true&lt;/code&gt;). Standard segments include rule-based and smaller list-based segments. Big segments include larger list-based segments and synced segments. Only use a big segment if you need to add more than 15,000 individual targets. | [optional] [default to undefined]
**unboundedContextKind** | **string** | For big segments, the targeted context kind. | [optional] [default to undefined]

## Example

```typescript
import { SegmentBody } from 'launchdarkly-api-typescript';

const instance: SegmentBody = {
    name,
    key,
    description,
    tags,
    unbounded,
    unboundedContextKind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
