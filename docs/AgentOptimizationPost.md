# AgentOptimizationPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**aiConfigKey** | **string** |  | [default to undefined]
**maxAttempts** | **number** |  | [default to undefined]
**modelChoices** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**judgeModel** | **string** |  | [default to undefined]
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
import { AgentOptimizationPost } from 'launchdarkly-api-typescript';

const instance: AgentOptimizationPost = {
    key,
    aiConfigKey,
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
