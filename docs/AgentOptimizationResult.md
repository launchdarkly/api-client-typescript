# AgentOptimizationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**runId** | **string** |  | [default to undefined]
**agentOptimizationId** | **string** |  | [default to undefined]
**agentOptimizationVersion** | **number** |  | [default to undefined]
**status** | [**AgentOptimizationResultStatus**](AgentOptimizationResultStatus.md) |  | [default to undefined]
**activity** | [**AgentOptimizationResultActivity**](AgentOptimizationResultActivity.md) |  | [default to undefined]
**iteration** | **number** |  | [default to undefined]
**instructions** | **string** |  | [default to undefined]
**parameters** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**userInput** | **string** |  | [default to undefined]
**completionResponse** | **string** |  | [optional] [default to undefined]
**variation** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**scores** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**generationTokens** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**evaluationTokens** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**generationLatency** | **number** |  | [optional] [default to undefined]
**evaluationLatencies** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**completedAt** | **number** |  | [optional] [default to undefined]
**createdVariationKey** | **string** |  | [optional] [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**updatedAt** | **number** |  | [default to undefined]

## Example

```typescript
import { AgentOptimizationResult } from 'launchdarkly-api-typescript';

const instance: AgentOptimizationResult = {
    _access,
    _links,
    id,
    runId,
    agentOptimizationId,
    agentOptimizationVersion,
    status,
    activity,
    iteration,
    instructions,
    parameters,
    userInput,
    completionResponse,
    variation,
    scores,
    generationTokens,
    evaluationTokens,
    generationLatency,
    evaluationLatencies,
    completedAt,
    createdVariationKey,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
