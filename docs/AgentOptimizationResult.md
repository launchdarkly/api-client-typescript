# AgentOptimizationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**id** | **string** | The result ID | [default to undefined]
**runId** | **string** | The ID of the run this result belongs to | [default to undefined]
**agentOptimizationId** | **string** | The agent optimization ID | [default to undefined]
**agentOptimizationVersion** | **number** | The version of the agent optimization used | [default to undefined]
**status** | [**AgentOptimizationResultStatus**](AgentOptimizationResultStatus.md) |  | [default to undefined]
**activity** | [**AgentOptimizationResultActivity**](AgentOptimizationResultActivity.md) |  | [default to undefined]
**iteration** | **number** | The iteration number within the run | [default to undefined]
**instructions** | **string** | The instructions used for this attempt | [default to undefined]
**parameters** | **{ [key: string]: any; }** | The model parameters used for this attempt | [optional] [default to undefined]
**userInput** | **string** | The user input used for this attempt | [default to undefined]
**completionResponse** | **string** | The model response | [optional] [default to undefined]
**variation** | **{ [key: string]: any; }** | The variation that was tested | [optional] [default to undefined]
**scores** | **{ [key: string]: any; }** | The scores for the response | [optional] [default to undefined]
**generationTokens** | **{ [key: string]: any; }** | Token usage for generating the response | [optional] [default to undefined]
**evaluationTokens** | **{ [key: string]: any; }** | Token usage for judging the response | [optional] [default to undefined]
**generationLatency** | **number** | How long the response took to generate | [optional] [default to undefined]
**evaluationLatencies** | **{ [key: string]: any; }** | How long each evaluation took | [optional] [default to undefined]
**completedAt** | **number** | When this finished, in Unix milliseconds | [optional] [default to undefined]
**createdVariationKey** | **string** | The key of the variation created from this result | [optional] [default to undefined]
**createdAt** | **number** | When this resource was created, in Unix milliseconds | [default to undefined]
**updatedAt** | **number** | When this resource was last updated, in Unix milliseconds | [default to undefined]

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
