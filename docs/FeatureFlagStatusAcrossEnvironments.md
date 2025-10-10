# FeatureFlagStatusAcrossEnvironments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | [**{ [key: string]: FeatureFlagStatus; }**](FeatureFlagStatus.md) | Flag status for environment. | [default to undefined]
**key** | **string** | feature flag key | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [default to undefined]

## Example

```typescript
import { FeatureFlagStatusAcrossEnvironments } from 'launchdarkly-api-typescript';

const instance: FeatureFlagStatusAcrossEnvironments = {
    environments,
    key,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
