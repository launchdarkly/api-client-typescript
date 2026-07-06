# AnalysisConfigInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bayesianThreshold** | **string** | The threshold for the Probability to Beat Baseline (PBBL) and Probability to Be Best (PBB) comparisons for the Bayesian results analysis approach. | [optional] [default to undefined]
**significanceThreshold** | **string** | The significance threshold for the frequentist results analysis approach. | [optional] [default to undefined]
**testDirection** | **string** | The test sided direction for the frequentist results analysis approach. | [optional] [default to undefined]
**multipleComparisonCorrectionMethod** | **string** | The method to use for multiple comparison correction. | [optional] [default to undefined]
**multipleComparisonCorrectionScope** | **string** | The scope of the multiple comparison correction. | [optional] [default to undefined]
**sequentialTestingEnabled** | **boolean** | Whether sequential testing is enabled for Frequentist analysis | [optional] [default to undefined]

## Example

```typescript
import { AnalysisConfigInput } from 'launchdarkly-api-typescript';

const instance: AnalysisConfigInput = {
    bayesianThreshold,
    significanceThreshold,
    testDirection,
    multipleComparisonCorrectionMethod,
    multipleComparisonCorrectionScope,
    sequentialTestingEnabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
