# InsightGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**Environment**](Environment.md) |  | [optional] [default to undefined]
**scores** | [**InsightGroupScores**](InsightGroupScores.md) |  | [optional] [default to undefined]
**scoreMetadata** | [**InsightGroupCollectionScoreMetadata**](InsightGroupCollectionScoreMetadata.md) |  | [optional] [default to undefined]
**key** | **string** | The insight group key | [default to undefined]
**name** | **string** | The insight group name | [default to undefined]
**projectKey** | **string** | The project key | [default to undefined]
**environmentKey** | **string** | The environment key | [default to undefined]
**applicationKeys** | **Array&lt;string&gt;** | The application keys | [optional] [default to undefined]
**createdAt** | **number** |  | [default to undefined]

## Example

```typescript
import { InsightGroup } from 'launchdarkly-api-typescript';

const instance: InsightGroup = {
    environment,
    scores,
    scoreMetadata,
    key,
    name,
    projectKey,
    environmentKey,
    applicationKeys,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
