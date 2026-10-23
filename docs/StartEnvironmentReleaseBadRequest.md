# StartEnvironmentReleaseBadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**failingChecks** | [**Array&lt;ReleaseHealthCheckFailure&gt;**](ReleaseHealthCheckFailure.md) | Present when &#x60;code&#x60; is &#x60;health_checks_failed&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { StartEnvironmentReleaseBadRequest } from 'launchdarkly-api-typescript';

const instance: StartEnvironmentReleaseBadRequest = {
    code,
    message,
    failingChecks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
