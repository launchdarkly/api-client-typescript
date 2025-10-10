# InsightGroupCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | The total number of insight groups | [default to undefined]
**items** | [**Array&lt;InsightGroup&gt;**](InsightGroup.md) | A list of insight groups | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**metadata** | [**InsightGroupCollectionMetadata**](InsightGroupCollectionMetadata.md) |  | [optional] [default to undefined]
**scoreMetadata** | [**InsightGroupCollectionScoreMetadata**](InsightGroupCollectionScoreMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InsightGroupCollection } from 'launchdarkly-api-typescript';

const instance: InsightGroupCollection = {
    totalCount,
    items,
    _links,
    metadata,
    scoreMetadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
