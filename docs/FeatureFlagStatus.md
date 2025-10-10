# FeatureFlagStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Status of the flag | [default to undefined]
**lastRequested** | **string** | Timestamp of last time flag was requested | [optional] [default to undefined]
**_default** | **any** | Default value seen from code | [optional] [default to undefined]

## Example

```typescript
import { FeatureFlagStatus } from 'launchdarkly-api-typescript';

const instance: FeatureFlagStatus = {
    name,
    lastRequested,
    _default,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
