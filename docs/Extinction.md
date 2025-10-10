# Extinction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revision** | **string** | The identifier for the revision where flag became extinct. For example, a commit SHA. | [default to undefined]
**message** | **string** | Description of the extinction. For example, the commit message for the revision. | [default to undefined]
**time** | **number** |  | [default to undefined]
**flagKey** | **string** | The feature flag key | [default to undefined]
**projKey** | **string** | The project key | [default to undefined]

## Example

```typescript
import { Extinction } from 'launchdarkly-api-typescript';

const instance: Extinction = {
    revision,
    message,
    time,
    flagKey,
    projKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
