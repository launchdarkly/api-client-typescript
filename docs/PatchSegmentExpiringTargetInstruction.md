# PatchSegmentExpiringTargetInstruction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | The type of change to make to the context\&#39;s removal date from this segment | [default to undefined]
**contextKey** | **string** | A unique key used to represent the context | [default to undefined]
**contextKind** | **string** | The kind of context | [default to undefined]
**targetType** | **string** | The segment\&#39;s target type | [default to undefined]
**value** | **number** | The time, in Unix milliseconds, when the context should be removed from this segment. Required if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;addExpiringTarget&lt;/code&gt; or &lt;code&gt;updateExpiringTarget&lt;/code&gt;. | [optional] [default to undefined]
**version** | **number** | The version of the expiring target to update. Optional and only used if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;updateExpiringTarget&lt;/code&gt;. If included, update will fail if version doesn\&#39;t match current version of the expiring target. | [optional] [default to undefined]

## Example

```typescript
import { PatchSegmentExpiringTargetInstruction } from 'launchdarkly-api-typescript';

const instance: PatchSegmentExpiringTargetInstruction = {
    kind,
    contextKey,
    contextKind,
    targetType,
    value,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
