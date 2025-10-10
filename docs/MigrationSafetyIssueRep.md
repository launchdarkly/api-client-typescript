# MigrationSafetyIssueRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**causingRuleId** | **string** | The ID of the rule which caused this issue | [optional] [default to undefined]
**affectedRuleIds** | **Array&lt;string&gt;** | A list of the IDs of the rules which are affected by this issue. &lt;code&gt;fallthrough&lt;/code&gt; is a sentinel value for the default rule. | [optional] [default to undefined]
**issue** | **string** | A description of the issue that &lt;code&gt;causingRuleId&lt;/code&gt; has caused for &lt;code&gt;affectedRuleIds&lt;/code&gt;. | [optional] [default to undefined]
**oldSystemAffected** | **boolean** | Whether the changes caused by &lt;code&gt;causingRuleId&lt;/code&gt; bring inconsistency to the old system | [optional] [default to undefined]

## Example

```typescript
import { MigrationSafetyIssueRep } from 'launchdarkly-api-typescript';

const instance: MigrationSafetyIssueRep = {
    causingRuleId,
    affectedRuleIds,
    issue,
    oldSystemAffected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
