# CreateReleasePipelineInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | The release pipeline description | [optional] [default to undefined]
**key** | **string** | The unique identifier of this release pipeline | [default to undefined]
**name** | **string** | The name of the release pipeline | [default to undefined]
**phases** | [**Array&lt;CreatePhaseInput&gt;**](CreatePhaseInput.md) | A logical grouping of one or more environments that share attributes for rolling out changes | [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of tags for this release pipeline | [optional] [default to undefined]
**isProjectDefault** | **boolean** | Whether or not the newly created pipeline should be set as the default pipeline for this project | [optional] [default to undefined]
**isLegacy** | **boolean** | Whether or not the pipeline is enabled for Release Automation. | [optional] [default to undefined]

## Example

```typescript
import { CreateReleasePipelineInput } from 'launchdarkly-api-typescript';

const instance: CreateReleasePipelineInput = {
    description,
    key,
    name,
    phases,
    tags,
    isProjectDefault,
    isLegacy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
