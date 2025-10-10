# MultiEnvironmentDependentFlag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The flag name | [optional] [default to undefined]
**key** | **string** | The flag key | [default to undefined]
**environments** | [**Array&lt;DependentFlagEnvironment&gt;**](DependentFlagEnvironment.md) | A list of environments in which the dependent flag appears | [default to undefined]

## Example

```typescript
import { MultiEnvironmentDependentFlag } from 'launchdarkly-api-typescript';

const instance: MultiEnvironmentDependentFlag = {
    name,
    key,
    environments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
