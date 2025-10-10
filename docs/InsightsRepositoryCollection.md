# InsightsRepositoryCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | Total number of repositories | [default to undefined]
**items** | [**Array&lt;InsightsRepository&gt;**](InsightsRepository.md) | List of repositories | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { InsightsRepositoryCollection } from 'launchdarkly-api-typescript';

const instance: InsightsRepositoryCollection = {
    totalCount,
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
