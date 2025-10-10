# TriggerPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional comment describing the trigger | [optional] [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** | The action to perform when triggering. This should be an array with a single object that looks like &lt;code&gt;{\&quot;kind\&quot;: \&quot;flag_action\&quot;}&lt;/code&gt;. Supported flag actions are &lt;code&gt;turnFlagOn&lt;/code&gt; and &lt;code&gt;turnFlagOff&lt;/code&gt;. | [optional] [default to undefined]
**integrationKey** | **string** | The unique identifier of the integration for your trigger. Use &lt;code&gt;generic-trigger&lt;/code&gt; for integrations not explicitly supported. | [default to undefined]

## Example

```typescript
import { TriggerPost } from 'launchdarkly-api-typescript';

const instance: TriggerPost = {
    comment,
    instructions,
    integrationKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
