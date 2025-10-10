# FlagTriggerInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional comment describing the update | [optional] [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** | The instructions to perform when updating. This should be an array with objects that look like &lt;code&gt;{\&quot;kind\&quot;: \&quot;trigger_action\&quot;}&lt;/code&gt;. | [optional] [default to undefined]

## Example

```typescript
import { FlagTriggerInput } from 'launchdarkly-api-typescript';

const instance: FlagTriggerInput = {
    comment,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
