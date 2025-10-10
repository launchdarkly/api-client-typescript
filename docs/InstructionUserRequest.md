# InstructionUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | The type of change to make to the removal date for this user from individual targeting for this flag. | [default to undefined]
**flagKey** | **string** | The flag key | [default to undefined]
**variationId** | **string** | ID of a variation on the flag | [default to undefined]
**value** | **number** | The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag. Required if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;addExpireUserTargetDate&lt;/code&gt; or &lt;code&gt;updateExpireUserTargetDate&lt;/code&gt;. | [optional] [default to undefined]
**version** | **number** | The version of the expiring user target to update. Optional and only used if &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;updateExpireUserTargetDate&lt;/code&gt;. If included, update will fail if version doesn\&#39;t match current version of the expiring user target. | [optional] [default to undefined]

## Example

```typescript
import { InstructionUserRequest } from 'launchdarkly-api-typescript';

const instance: InstructionUserRequest = {
    kind,
    flagKey,
    variationId,
    value,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
