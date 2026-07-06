# AgentOptimizationRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runId** | **string** |  | [default to undefined]
**optimizationKey** | **string** |  | [default to undefined]
**agentOptimizationId** | **string** |  | [default to undefined]
**agentOptimizationVersion** | **number** |  | [default to undefined]
**status** | [**AgentOptimizationResultStatus**](AgentOptimizationResultStatus.md) |  | [default to undefined]
**activity** | [**AgentOptimizationResultActivity**](AgentOptimizationResultActivity.md) |  | [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**completedAt** | **number** |  | [optional] [default to undefined]

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
