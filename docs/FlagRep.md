# FlagRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetingRule** | **string** | The targeting rule | [optional] [default to undefined]
**targetingRuleDescription** | **string** | The rule description | [optional] [default to undefined]
**targetingRuleClauses** | **Array&lt;any&gt;** | An array of clauses used for individual targeting based on attributes | [optional] [default to undefined]
**flagConfigVersion** | **number** | The flag version | [optional] [default to undefined]
**notInExperimentVariationId** | **string** | The ID of the variation to route traffic not part of the experiment analysis to | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { FlagRep } from 'launchdarkly-api-typescript';

const instance: FlagRep = {
    targetingRule,
    targetingRuleDescription,
    targetingRuleClauses,
    flagConfigVersion,
    notInExperimentVariationId,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
