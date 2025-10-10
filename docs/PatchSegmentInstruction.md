# PatchSegmentInstruction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | The type of change to make to the user\&#39;s removal date from this segment | [default to undefined]
**userKey** | **string** | A unique key used to represent the user | [default to undefined]
**targetType** | **string** | The segment\&#39;s target type | [default to undefined]
**value** | **number** | The time, in Unix milliseconds, when the user should be removed from this segment. Required if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;addExpireUserTargetDate&lt;/code&gt; or &lt;code&gt;updateExpireUserTargetDate&lt;/code&gt;. | [optional] [default to undefined]
**version** | **number** | The version of the segment to update. Required if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;updateExpireUserTargetDate&lt;/code&gt;. | [optional] [default to undefined]

## Example

```typescript
import { PatchSegmentInstruction } from 'launchdarkly-api-typescript';

const instance: PatchSegmentInstruction = {
    kind,
    userKey,
    targetType,
    value,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
