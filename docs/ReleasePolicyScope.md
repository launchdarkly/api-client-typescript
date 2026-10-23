# ReleasePolicyScope


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environmentKeys** | **Array&lt;string&gt;** | List of environment keys this policy applies to | [optional] [default to undefined]
**flagTagKeys** | **Array&lt;string&gt;** | List of flag tag keys this policy applies to. At most 1000 keys. Each key must only contain letters, numbers, \&#39;-\&#39;, \&#39;_\&#39;, or \&#39;.\&#39;, and be at most 64 characters. | [optional] [default to undefined]

## Example

```typescript
import { ReleasePolicyScope } from 'launchdarkly-api-typescript';

const instance: ReleasePolicyScope = {
    environmentKeys,
    flagTagKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
