# AgentOptimizationPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxAttempts** | **number** |  | [optional] [default to undefined]
**modelChoices** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**judgeModel** | **string** |  | [optional] [default to undefined]
**variableChoices** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**acceptanceStatements** | [**Array&lt;AgentOptimizationAcceptanceStatement&gt;**](AgentOptimizationAcceptanceStatement.md) |  | [optional] [default to undefined]
**judges** | [**Array&lt;AgentOptimizationJudge&gt;**](AgentOptimizationJudge.md) |  | [optional] [default to undefined]
**userInputOptions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**groundTruthResponses** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**metricKey** | **string** |  | [optional] [default to undefined]
**tokenLimit** | **number** |  | [optional] [default to undefined]
**variationKey** | **string** |  | [optional] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**latencyOptimization** | **boolean** |  | [optional] [default to undefined]
**tokenOptimization** | **boolean** |  | [optional] [default to undefined]
**autoCommit** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { AgentOptimizationPatch } from 'launchdarkly-api-typescript';

const instance: AgentOptimizationPatch = {
    maxAttempts,
    modelChoices,
    judgeModel,
    variableChoices,
    acceptanceStatements,
    judges,
    userInputOptions,
    groundTruthResponses,
    metricKey,
    tokenLimit,
    variationKey,
    label,
    latencyOptimization,
    tokenOptimization,
    autoCommit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
