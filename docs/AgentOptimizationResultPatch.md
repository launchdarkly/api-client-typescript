# AgentOptimizationResultPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**AgentOptimizationResultStatus**](AgentOptimizationResultStatus.md) |  | [optional] [default to undefined]
**activity** | [**AgentOptimizationResultActivity**](AgentOptimizationResultActivity.md) |  | [optional] [default to undefined]
**completionResponse** | **string** |  | [optional] [default to undefined]
**variation** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**scores** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**generationTokens** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**evaluationTokens** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**generationLatency** | **number** |  | [optional] [default to undefined]
**evaluationLatencies** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**createdVariationKey** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AgentOptimizationResultPatch } from 'launchdarkly-api-typescript';

const instance: AgentOptimizationResultPatch = {
    status,
    activity,
    completionResponse,
    variation,
    scores,
    generationTokens,
    evaluationTokens,
    generationLatency,
    evaluationLatencies,
    createdVariationKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
