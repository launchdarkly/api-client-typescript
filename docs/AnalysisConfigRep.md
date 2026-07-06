# AnalysisConfigRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bayesianThreshold** | **string** | The threshold for the Probability to Beat Baseline (PBBL) and Probability to Be Best (PBB) comparisons for the Bayesian results analysis approach.  Value should be between 0-100 inclusive. | [optional] [default to undefined]
**significanceThreshold** | **string** | The significance threshold for the frequentist results analysis approach. Value should be between 0.0-1.0 inclusive. | [optional] [default to undefined]
**testDirection** | **string** | The test sided direction for the frequentist results analysis approach. | [optional] [default to undefined]
**multipleComparisonCorrectionMethod** | **string** | The method for multiple comparison correction. | [optional] [default to undefined]
**multipleComparisonCorrectionScope** | **string** | The scope for multiple comparison correction. | [optional] [default to undefined]
**sequentialTestingEnabled** | **boolean** | Whether sequential testing is enabled for Frequentist analysis | [optional] [default to undefined]

## Example

```typescript
import { AnalysisConfigRep } from 'launchdarkly-api-typescript';

const instance: AnalysisConfigRep = {
    bayesianThreshold,
    significanceThreshold,
    testDirection,
    multipleComparisonCorrectionMethod,
    multipleComparisonCorrectionScope,
    sequentialTestingEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
