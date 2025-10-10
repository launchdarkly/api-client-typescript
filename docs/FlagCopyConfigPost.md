# FlagCopyConfigPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**FlagCopyConfigEnvironment**](FlagCopyConfigEnvironment.md) |  | [default to undefined]
**target** | [**FlagCopyConfigEnvironment**](FlagCopyConfigEnvironment.md) |  | [default to undefined]
**comment** | **string** | Optional comment | [optional] [default to undefined]
**includedActions** | **Array&lt;string&gt;** | Optional list of the flag changes to copy from the source environment to the target environment. You may include either &lt;code&gt;includedActions&lt;/code&gt; or &lt;code&gt;excludedActions&lt;/code&gt;, but not both. If you include neither, then all flag changes will be copied. | [optional] [default to undefined]
**excludedActions** | **Array&lt;string&gt;** | Optional list of the flag changes NOT to copy from the source environment to the target environment. You may include either  &lt;code&gt;includedActions&lt;/code&gt; or &lt;code&gt;excludedActions&lt;/code&gt;, but not both. If you include neither, then all flag changes will be copied. | [optional] [default to undefined]

## Example

```typescript
import { FlagCopyConfigPost } from 'launchdarkly-api-typescript';

const instance: FlagCopyConfigPost = {
    source,
    target,
    comment,
    includedActions,
    excludedActions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
