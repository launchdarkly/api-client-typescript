# AiConfigsLegacyExperimentRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metricKey** | **string** |  | [optional] [default to undefined]
**_metric** | [**AiConfigsMetricListingRep**](AiConfigsMetricListingRep.md) |  | [optional] [default to undefined]
**environments** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**_environmentSettings** | [**{ [key: string]: AiConfigsExperimentEnvironmentSettingRep; }**](AiConfigsExperimentEnvironmentSettingRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AiConfigsLegacyExperimentRep } from 'launchdarkly-api-typescript';

const instance: AiConfigsLegacyExperimentRep = {
    metricKey,
    _metric,
    environments,
    _environmentSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
