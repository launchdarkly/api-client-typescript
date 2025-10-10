# Audience


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**EnvironmentSummary**](EnvironmentSummary.md) |  | [optional] [default to undefined]
**name** | **string** | The release phase name | [default to undefined]
**configuration** | [**AudienceConfiguration**](AudienceConfiguration.md) |  | [optional] [default to undefined]
**segmentKeys** | **Array&lt;string&gt;** | A list of segment keys | [optional] [default to undefined]

## Example

```typescript
import { Audience } from 'launchdarkly-api-typescript';

const instance: Audience = {
    environment,
    name,
    configuration,
    segmentKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
