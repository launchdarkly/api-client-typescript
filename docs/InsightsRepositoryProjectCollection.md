# InsightsRepositoryProjectCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | Total number of repository project associations | [default to undefined]
**items** | [**Array&lt;InsightsRepositoryProject&gt;**](InsightsRepositoryProject.md) | List of repository project associations | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { InsightsRepositoryProjectCollection } from 'launchdarkly-api-typescript';

const instance: InsightsRepositoryProjectCollection = {
    totalCount,
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
