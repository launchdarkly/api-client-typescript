# AgentOptimizationResultPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runId** | **string** | The ID of the run this result belongs to | [default to undefined]
**agentOptimizationVersion** | **number** | The version of the agent optimization used | [default to undefined]
**iteration** | **number** | The iteration number within the run | [default to undefined]
**instructions** | **string** | The instructions used for this attempt | [default to undefined]
**userInput** | **string** | The user input used for this attempt | [default to undefined]
**parameters** | **{ [key: string]: any; }** | The model parameters used for this attempt | [optional] [default to undefined]

## Example

```typescript
import { AgentOptimizationResultPost } from 'launchdarkly-api-typescript';

const instance: AgentOptimizationResultPost = {
    runId,
    agentOptimizationVersion,
    iteration,
    instructions,
    userInput,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
