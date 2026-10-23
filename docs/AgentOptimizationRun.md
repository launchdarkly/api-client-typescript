# AgentOptimizationRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runId** | **string** | The run ID | [default to undefined]
**optimizationKey** | **string** | The agent optimization key | [default to undefined]
**agentOptimizationId** | **string** | The agent optimization ID | [default to undefined]
**agentOptimizationVersion** | **number** | The version of the agent optimization used | [default to undefined]
**status** | [**AgentOptimizationResultStatus**](AgentOptimizationResultStatus.md) |  | [default to undefined]
**activity** | [**AgentOptimizationResultActivity**](AgentOptimizationResultActivity.md) |  | [default to undefined]
**createdAt** | **number** | When this resource was created, in Unix milliseconds | [default to undefined]
**completedAt** | **number** | When this finished, in Unix milliseconds | [optional] [default to undefined]

## Example

```typescript
import { AgentOptimizationRun } from 'launchdarkly-api-typescript';

const instance: AgentOptimizationRun = {
    runId,
    optimizationKey,
    agentOptimizationId,
    agentOptimizationVersion,
    status,
    activity,
    createdAt,
    completedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
