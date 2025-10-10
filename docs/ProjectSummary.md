# ProjectSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of this project | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**key** | **string** | The project key | [default to undefined]
**name** | **string** | The project name | [default to undefined]

## Example

```typescript
import { ProjectSummary } from 'launchdarkly-api-typescript';

const instance: ProjectSummary = {
    _id,
    _links,
    key,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
