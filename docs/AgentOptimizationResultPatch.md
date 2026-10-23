# AgentOptimizationResultPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**AgentOptimizationResultStatus**](AgentOptimizationResultStatus.md) |  | [optional] [default to undefined]
**activity** | [**AgentOptimizationResultActivity**](AgentOptimizationResultActivity.md) |  | [optional] [default to undefined]
**completionResponse** | **string** | The model response | [optional] [default to undefined]
**variation** | **{ [key: string]: any; }** | The variation that was tested | [optional] [default to undefined]
**scores** | **{ [key: string]: any; }** | The scores for the response | [optional] [default to undefined]
**generationTokens** | **{ [key: string]: any; }** | Token usage for generating the response | [optional] [default to undefined]
**evaluationTokens** | **{ [key: string]: any; }** | Token usage for judging the response | [optional] [default to undefined]
**generationLatency** | **number** | How long the response took to generate | [optional] [default to undefined]
**evaluationLatencies** | **{ [key: string]: any; }** | How long each evaluation took | [optional] [default to undefined]
**createdVariationKey** | **string** | The key of the variation created from this result | [optional] [default to undefined]

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
