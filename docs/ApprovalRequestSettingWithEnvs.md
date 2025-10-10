# ApprovalRequestSettingWithEnvs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | [**{ [key: string]: ApprovalRequestSetting; }**](ApprovalRequestSetting.md) | Environment-specific overrides. | [optional] [default to undefined]
**_default** | [**ApprovalRequestSetting**](ApprovalRequestSetting.md) |  | [optional] [default to undefined]
**_strict** | [**ApprovalRequestSetting**](ApprovalRequestSetting.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApprovalRequestSettingWithEnvs } from 'launchdarkly-api-typescript';

const instance: ApprovalRequestSettingWithEnvs = {
    environments,
    _default,
    _strict,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
