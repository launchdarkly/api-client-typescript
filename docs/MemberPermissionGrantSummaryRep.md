# MemberPermissionGrantSummaryRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionSet** | **string** | The name of the group of related actions to allow. A permission grant may have either an &lt;code&gt;actionSet&lt;/code&gt; or a list of &lt;code&gt;actions&lt;/code&gt; but not both at the same time. | [optional] [default to undefined]
**actions** | **Array&lt;string&gt;** | A list of actions to allow. A permission grant may have either an &lt;code&gt;actionSet&lt;/code&gt; or a list of &lt;code&gt;actions&lt;/code&gt; but not both at the same time. | [optional] [default to undefined]
**resource** | **string** | The resource for which the actions are allowed | [default to undefined]

## Example

```typescript
import { MemberPermissionGrantSummaryRep } from 'launchdarkly-api-typescript';

const instance: MemberPermissionGrantSummaryRep = {
    actionSet,
    actions,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
