# PermissionGrantInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionSet** | **string** | A group of related actions to allow. Specify either &lt;code&gt;actionSet&lt;/code&gt; or &lt;code&gt;actions&lt;/code&gt;. Use &lt;code&gt;maintainTeam&lt;/code&gt; to add team maintainers. | [optional] [default to undefined]
**actions** | **Array&lt;string&gt;** | A list of actions to allow. Specify either &lt;code&gt;actionSet&lt;/code&gt; or &lt;code&gt;actions&lt;/code&gt;. To learn more, read [Role actions](https://launchdarkly.com/docs/ld-docs/home/account/role-actions). | [optional] [default to undefined]
**memberIDs** | **Array&lt;string&gt;** | A list of member IDs who receive the permission grant. | [optional] [default to undefined]

## Example

```typescript
import { PermissionGrantInput } from 'launchdarkly-api-typescript';

const instance: PermissionGrantInput = {
    actionSet,
    actions,
    memberIDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
