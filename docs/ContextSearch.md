# ContextSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **string** | A collection of context filters | [optional] [default to undefined]
**sort** | **string** | Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying &lt;code&gt;ts&lt;/code&gt; for this value, or descending order by specifying &lt;code&gt;-ts&lt;/code&gt;. | [optional] [default to undefined]
**limit** | **number** | Specifies the maximum number of items in the collection to return (max: 50, default: 20) | [optional] [default to undefined]
**continuationToken** | **string** | Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the &lt;code&gt;next&lt;/code&gt; link instead, because this value is an obfuscated string. | [optional] [default to undefined]

## Example

```typescript
import { ContextSearch } from 'launchdarkly-api-typescript';

const instance: ContextSearch = {
    filter,
    sort,
    limit,
    continuationToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
