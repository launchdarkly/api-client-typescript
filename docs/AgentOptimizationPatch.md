# AgentOptimizationPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxAttempts** | **number** | The maximum number of attempts | [optional] [default to undefined]
**modelChoices** | **Array&lt;string&gt;** | The models to try | [optional] [default to undefined]
**judgeModel** | **string** | The model used to judge responses | [optional] [default to undefined]
**variableChoices** | **Array&lt;{ [key: string]: any; }&gt;** | Sets of prompt variable values to try | [optional] [default to undefined]
**acceptanceStatements** | [**Array&lt;AgentOptimizationAcceptanceStatement&gt;**](AgentOptimizationAcceptanceStatement.md) | Statements a response must satisfy to pass | [optional] [default to undefined]
**judges** | [**Array&lt;AgentOptimizationJudge&gt;**](AgentOptimizationJudge.md) | Judges that score each response | [optional] [default to undefined]
**userInputOptions** | **Array&lt;string&gt;** | User inputs to test with | [optional] [default to undefined]
**groundTruthResponses** | **Array&lt;string&gt;** | Expected responses to compare against | [optional] [default to undefined]
**metricKey** | **string** | The key of the metric to optimize | [optional] [default to undefined]
**tokenLimit** | **number** | The maximum number of tokens to use | [optional] [default to undefined]
**variationKey** | **string** | The key of the variation to start from | [optional] [default to undefined]
**label** | **string** | A label for the optimization | [optional] [default to undefined]
**latencyOptimization** | **boolean** | Whether to optimize for lower latency | [optional] [default to undefined]
**tokenOptimization** | **boolean** | Whether to optimize for lower token use | [optional] [default to undefined]
**autoCommit** | **boolean** | Whether to save the best result as a new variation automatically | [optional] [default to undefined]

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
