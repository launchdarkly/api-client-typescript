# UpdateReleasePipelineInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | The release pipeline description | [optional] [default to undefined]
**name** | **string** | The name of the release pipeline | [default to undefined]
**phases** | [**Array&lt;CreatePhaseInput&gt;**](CreatePhaseInput.md) | A logical grouping of one or more environments that share attributes for rolling out changes | [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of tags for this release pipeline | [optional] [default to undefined]

## Example

```typescript
import { UpdateReleasePipelineInput } from 'launchdarkly-api-typescript';

const instance: UpdateReleasePipelineInput = {
    description,
    name,
    phases,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
