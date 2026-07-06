# AgentOptimization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**key** | **string** |  | [default to undefined]
**aiConfigKey** | **string** |  | [default to undefined]
**maxAttempts** | **number** |  | [default to undefined]
**modelChoices** | **Array&lt;string&gt;** |  | [default to undefined]
**judgeModel** | **string** |  | [default to undefined]
**variableChoices** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]
**acceptanceStatements** | [**Array&lt;AgentOptimizationAcceptanceStatement&gt;**](AgentOptimizationAcceptanceStatement.md) |  | [default to undefined]
**judges** | [**Array&lt;AgentOptimizationJudge&gt;**](AgentOptimizationJudge.md) |  | [default to undefined]
**userInputOptions** | **Array&lt;string&gt;** |  | [default to undefined]
**groundTruthResponses** | **Array&lt;string&gt;** |  | [default to undefined]
**metricKey** | **string** |  | [optional] [default to undefined]
**tokenLimit** | **number** |  | [optional] [default to undefined]
**variationKey** | **string** |  | [optional] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**latencyOptimization** | **boolean** |  | [optional] [default to undefined]
**tokenOptimization** | **boolean** |  | [optional] [default to undefined]
**autoCommit** | **boolean** |  | [optional] [default to undefined]
**version** | **number** |  | [default to undefined]
**createdAt** | **number** |  | [default to undefined]

## Example

```typescript
import { AgentOptimization } from 'launchdarkly-api-typescript';

const instance: AgentOptimization = {
    _access,
    _links,
    id,
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
    version,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
