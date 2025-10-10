# ProjectPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the project. | [default to undefined]
**key** | **string** | A unique key used to reference the project in your code. | [default to undefined]
**includeInSnippetByDefault** | **boolean** | Whether or not flags created in this project are made available to the client-side JavaScript SDK by default. | [optional] [default to undefined]
**defaultClientSideAvailability** | [**DefaultClientSideAvailabilityPost**](DefaultClientSideAvailabilityPost.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the project | [optional] [default to undefined]
**environments** | [**Array&lt;EnvironmentPost&gt;**](EnvironmentPost.md) | Creates the provided environments for this project. If omitted default environments will be created instead. | [optional] [default to undefined]
**namingConvention** | [**NamingConvention**](NamingConvention.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProjectPost } from 'launchdarkly-api-typescript';

const instance: ProjectPost = {
    name,
    key,
    includeInSnippetByDefault,
    defaultClientSideAvailability,
    tags,
    environments,
    namingConvention,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
