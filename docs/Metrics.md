# Metrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputTokens** | **number** |  | [optional] [default to undefined]
**outputTokens** | **number** |  | [optional] [default to undefined]
**totalTokens** | **number** |  | [optional] [default to undefined]
**generationCount** | **number** | Number of attempted generations | [optional] [default to undefined]
**generationSuccessCount** | **number** | Number of successful generations | [optional] [default to undefined]
**generationErrorCount** | **number** | Number of generations with errors | [optional] [default to undefined]
**thumbsUp** | **number** |  | [optional] [default to undefined]
**thumbsDown** | **number** |  | [optional] [default to undefined]
**durationMs** | **number** |  | [optional] [default to undefined]
**timeToFirstTokenMs** | **number** |  | [optional] [default to undefined]
**satisfactionRating** | **number** | A value between 0 and 1 representing satisfaction rating | [optional] [default to undefined]
**inputCost** | **number** | Cost of input tokens in USD | [optional] [default to undefined]
**outputCost** | **number** | Cost of output tokens in USD | [optional] [default to undefined]
**judgeAccuracy** | **number** | Average accuracy judge score (0.0-1.0) | [optional] [default to undefined]
**judgeRelevance** | **number** | Average relevance judge score (0.0-1.0) | [optional] [default to undefined]
**judgeToxicity** | **number** | Average toxicity judge score (0.0-1.0) | [optional] [default to undefined]

## Example

```typescript
import { Metrics } from 'launchdarkly-api-typescript';

const instance: Metrics = {
    inputTokens,
    outputTokens,
    totalTokens,
    generationCount,
    generationSuccessCount,
    generationErrorCount,
    thumbsUp,
    thumbsDown,
    durationMs,
    timeToFirstTokenMs,
    satisfactionRating,
    inputCost,
    outputCost,
    judgeAccuracy,
    judgeRelevance,
    judgeToxicity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
