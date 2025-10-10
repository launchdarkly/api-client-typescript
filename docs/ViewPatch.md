# ViewPatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Human-readable name for the view | [optional] [default to undefined]
**description** | **string** | Optional detailed description of the view | [optional] [default to undefined]
**generateSdkKeys** | **boolean** | Whether to generate SDK keys for this view | [optional] [default to undefined]
**maintainerId** | **string** | Member ID of the maintainer for this view. Only one of &#x60;maintainerId&#x60; or &#x60;maintainerTeamKey&#x60; can be specified. | [optional] [default to undefined]
**maintainerTeamKey** | **string** | Key of the maintainer team for this view. Only one of &#x60;maintainerId&#x60; or &#x60;maintainerTeamKey&#x60; can be specified. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with this view | [optional] [default to undefined]
**archived** | **boolean** | Whether or not the view is archived | [optional] [default to undefined]

## Example

```typescript
import { ViewPatch } from 'launchdarkly-api-typescript';

const instance: ViewPatch = {
    name,
    description,
    generateSdkKeys,
    maintainerId,
    maintainerTeamKey,
    tags,
    archived,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
