# UserSegment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the segment. | [default to undefined]
**description** | **string** | A description of the segment\&#39;s purpose. Defaults to &lt;code&gt;null&lt;/code&gt; and is omitted in the response if not provided. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the segment. Defaults to an empty array. | [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**lastModifiedDate** | **number** |  | [default to undefined]
**key** | **string** | A unique key used to reference the segment | [default to undefined]
**included** | **Array&lt;string&gt;** | An array of keys for included targets. Included individual targets are always segment members, regardless of segment rules. For list-based segments over 15,000 entries, also called big segments, this array is either empty or omitted. | [optional] [default to undefined]
**excluded** | **Array&lt;string&gt;** | An array of keys for excluded targets. Segment rules bypass individual excluded targets, so they will never be included based on rules. Excluded targets may still be included explicitly. This value is omitted for list-based segments over 15,000 entries, also called big segments. | [optional] [default to undefined]
**includedContexts** | [**Array&lt;SegmentTarget&gt;**](SegmentTarget.md) |  | [optional] [default to undefined]
**excludedContexts** | [**Array&lt;SegmentTarget&gt;**](SegmentTarget.md) |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**rules** | [**Array&lt;UserSegmentRule&gt;**](UserSegmentRule.md) | An array of the targeting rules for this segment. | [default to undefined]
**version** | **number** | Version of the segment | [default to undefined]
**deleted** | **boolean** | Whether the segment has been deleted | [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**_flags** | [**Array&lt;FlagListingRep&gt;**](FlagListingRep.md) | A list of flags targeting this segment. Only included when getting a single segment, using the &lt;code&gt;getSegment&lt;/code&gt; endpoint. | [optional] [default to undefined]
**unbounded** | **boolean** | Whether this is a standard segment (&lt;code&gt;false&lt;/code&gt;) or a big segment (&lt;code&gt;true&lt;/code&gt;). Standard segments include rule-based segments and smaller list-based segments. Big segments include larger list-based segments and synced segments. If omitted, the segment is a standard segment. | [optional] [default to undefined]
**unboundedContextKind** | **string** | For big segments, the targeted context kind. | [optional] [default to undefined]
**generation** | **number** | For big segments, how many times this segment has been created. | [default to undefined]
**_unboundedMetadata** | [**SegmentMetadata**](SegmentMetadata.md) |  | [optional] [default to undefined]
**_external** | **string** | The external data store backing this segment. Only applies to synced segments. | [optional] [default to undefined]
**_externalLink** | **string** | The URL for the external data store backing this segment. Only applies to synced segments. | [optional] [default to undefined]
**_importInProgress** | **boolean** | Whether an import is currently in progress for the specified segment. Only applies to big segments. | [optional] [default to undefined]

## Example

```typescript
import { UserSegment } from 'launchdarkly-api-typescript';

const instance: UserSegment = {
    name,
    description,
    tags,
    creationDate,
    lastModifiedDate,
    key,
    included,
    excluded,
    includedContexts,
    excludedContexts,
    _links,
    rules,
    version,
    deleted,
    _access,
    _flags,
    unbounded,
    unboundedContextKind,
    generation,
    _unboundedMetadata,
    _external,
    _externalLink,
    _importInProgress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
