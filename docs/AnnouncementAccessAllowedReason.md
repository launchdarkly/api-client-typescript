# AnnouncementAccessAllowedReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | **Array&lt;string&gt;** | Resource specifier strings | [optional] [default to undefined]
**notResources** | **Array&lt;string&gt;** | Targeted resources are the resources NOT in this list. The &lt;code&gt;resources&lt;/code&gt; and &lt;code&gt;notActions&lt;/code&gt; fields must be empty to use this field. | [optional] [default to undefined]
**actions** | **Array&lt;string&gt;** | Actions to perform on a resource | [optional] [default to undefined]
**notActions** | **Array&lt;string&gt;** | Targeted actions are the actions NOT in this list. The &lt;code&gt;actions&lt;/code&gt; and &lt;code&gt;notResources&lt;/code&gt; fields must be empty to use this field. | [optional] [default to undefined]
**effect** | **string** | Whether this statement should allow or deny actions on the resources. | [default to undefined]
**role_name** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AnnouncementAccessAllowedReason } from 'launchdarkly-api-typescript';

const instance: AnnouncementAccessAllowedReason = {
    resources,
    notResources,
    actions,
    notActions,
    effect,
    role_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
