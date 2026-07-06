# PatchIpAllowlistConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessionAllowlistEnabled** | **boolean** | Enable or disable session allowlist | [optional] [default to undefined]
**apiTokenAllowlistEnabled** | **boolean** | Enable or disable API token allowlist | [optional] [default to undefined]

## Example

```typescript
import { PatchIpAllowlistConfigRequest } from 'launchdarkly-api-typescript';

const instance: PatchIpAllowlistConfigRequest = {
    sessionAllowlistEnabled,
    apiTokenAllowlistEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
