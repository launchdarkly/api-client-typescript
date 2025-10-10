# EnvironmentSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**key** | **string** | A project-unique key for the environment | [default to undefined]
**name** | **string** | A human-friendly name for the environment | [default to undefined]
**color** | **string** | The color used to indicate this environment in the UI | [default to undefined]

## Example

```typescript
import { EnvironmentSummary } from 'launchdarkly-api-typescript';

const instance: EnvironmentSummary = {
    _links,
    key,
    name,
    color,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
