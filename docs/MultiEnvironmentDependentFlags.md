# MultiEnvironmentDependentFlags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;MultiEnvironmentDependentFlag&gt;**](MultiEnvironmentDependentFlag.md) | An array of dependent flags with their environment information | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_site** | [**Link**](Link.md) |  | [default to undefined]

## Example

```typescript
import { MultiEnvironmentDependentFlags } from 'launchdarkly-api-typescript';

const instance: MultiEnvironmentDependentFlags = {
    items,
    _links,
    _site,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
