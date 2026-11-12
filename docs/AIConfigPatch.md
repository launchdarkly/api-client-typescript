# AIConfigPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultVariationKey** | **string** | Key of the variation this config serves by default | [optional] [default to undefined]
**description** | **string** | A description of the AI Config | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this resource | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this resource | [optional] [default to undefined]
**name** | **string** | A human-readable name for the AI Config | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for this resource | [optional] [default to undefined]
**evaluationMetricKey** | **string** | Evaluation metric key for this config | [optional] [default to undefined]
**isInverted** | **boolean** | The success direction of a judge. Offline evaluations use it to decide whether a score passes.  - &#x60;true&#x60;: A lower score is better. Use this for a judge that scores bad output, such as a toxicity or hallucination judge. - &#x60;false&#x60;: A higher score is better. Use this for a judge that scores good output, such as an accuracy or relevance judge.  Send this field only when the AI Config\&#39;s &#x60;mode&#x60; is &#x60;judge&#x60;. If you omit it, the current direction does not change. For a built-in judge key, the API always returns the built-in direction. Built-in judge keys are &#x60;ld-ai-judge-accuracy&#x60;, &#x60;ld-ai-judge-relevance&#x60;, and &#x60;ld-ai-judge-toxicity&#x60;, with or without a &#x60;-&lt;timestamp&gt;&#x60; suffix such as &#x60;ld-ai-judge-accuracy-1760000000000&#x60;.  The API returns a &#x60;400&#x60; error in these cases: - &#x60;isInverted is only supported for judge mode&#x60;: You send this field and the AI Config\&#39;s &#x60;mode&#x60; is &#x60;agent&#x60; or &#x60;completion&#x60;. Remove the field. - &#x60;isInverted is not supported&#x60;: Custom judges are not available for your account. Remove the field from the request.  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigPatch } from 'launchdarkly-api-typescript';

const instance: AIConfigPatch = {
    defaultVariationKey,
    description,
    maintainerId,
    maintainerTeamKey,
    name,
    tags,
    evaluationMetricKey,
    isInverted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
