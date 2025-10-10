# FeatureFlags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;FeatureFlag&gt;**](FeatureFlag.md) | An array of feature flags | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**totalCount** | **number** | The total number of flags | [optional] [default to undefined]
**totalCountWithDifferences** | **number** | The number of flags that have differences between environments. Only shown when query parameter &lt;code&gt;compare&lt;/code&gt; is &lt;code&gt;true&lt;/code&gt;. | [optional] [default to undefined]

## Example

```typescript
import { FeatureFlags } from 'launchdarkly-api-typescript';

const instance: FeatureFlags = {
    items,
    _links,
    totalCount,
    totalCountWithDifferences,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
