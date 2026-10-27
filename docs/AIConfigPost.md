# AIConfigPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | A description of the AI Config | [optional] [default to '']
**key** | **string** | A unique key for the AI Config | [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this resource | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this resource | [optional] [default to undefined]
**mode** | **string** | The AI Config mode | [optional] [default to ModeEnum_Completion]
**name** | **string** | A human-readable name for the AI Config | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for this resource | [optional] [default to undefined]
**viewKeys** | **Array&lt;string&gt;** | Keys of the views to add the AI Config to | [optional] [default to undefined]
**defaultVariation** | [**AIConfigVariationPost**](AIConfigVariationPost.md) |  | [optional] [default to undefined]
**evaluationMetricKey** | **string** | Evaluation metric key for this config | [optional] [default to undefined]
**isInverted** | **boolean** | The success direction of a judge. Offline evaluations use it to decide whether a score passes.  - &#x60;true&#x60;: A lower score is better. Use this for a judge that scores bad output, such as a toxicity or hallucination judge. - &#x60;false&#x60;: A higher score is better. Use this for a judge that scores good output, such as an accuracy or relevance judge.  **Required for a custom judge.** A custom judge has &#x60;mode&#x60; set to &#x60;judge&#x60; and a &#x60;key&#x60; that is not a built-in judge key. Built-in judge keys are &#x60;ld-ai-judge-accuracy&#x60;, &#x60;ld-ai-judge-relevance&#x60;, and &#x60;ld-ai-judge-toxicity&#x60;, with or without a &#x60;-&lt;timestamp&gt;&#x60; suffix such as &#x60;ld-ai-judge-accuracy-1760000000000&#x60;. For a built-in judge key, this field is optional, and the API always uses the built-in direction.  Do not send this field when &#x60;mode&#x60; is &#x60;agent&#x60; or &#x60;completion&#x60;.  This field is not in the schema\&#39;s &#x60;required&#x60; list, because only custom judges need it.  The API returns a &#x60;400&#x60; error in these cases: - &#x60;isInverted is required for a custom judge: ...&#x60;: You create a custom judge without this field. Send &#x60;true&#x60; or &#x60;false&#x60;. - &#x60;isInverted is only supported for judge mode&#x60;: You send this field and &#x60;mode&#x60; is &#x60;agent&#x60; or &#x60;completion&#x60;. Remove the field, or set &#x60;mode&#x60; to &#x60;judge&#x60;. - &#x60;isInverted is not supported&#x60;: Custom judges are not available for your account. Remove the field from the request.  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigPost } from 'launchdarkly-api-typescript';

const instance: AIConfigPost = {
    description,
    key,
    maintainerId,
    maintainerTeamKey,
    mode,
    name,
    tags,
    viewKeys,
    defaultVariation,
    evaluationMetricKey,
    isInverted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
