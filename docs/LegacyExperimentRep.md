# LegacyExperimentRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metricKey** | **string** |  | [optional] [default to undefined]
**_metric** | [**MetricListingRep**](MetricListingRep.md) |  | [optional] [default to undefined]
**environments** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**_environmentSettings** | [**{ [key: string]: ExperimentEnvironmentSettingRep; }**](ExperimentEnvironmentSettingRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LegacyExperimentRep } from 'launchdarkly-api-typescript';

const instance: LegacyExperimentRep = {
    metricKey,
    _metric,
    environments,
    _environmentSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
