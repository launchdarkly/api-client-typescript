# DataExportProjectRankingPageRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | The bounded page size requested. | [default to undefined]
**count** | **number** | The number of items on this page. | [default to undefined]
**totalCount** | **number** | The number of matching projects with usage. | [default to undefined]
**nextCursor** | **string** | An opaque cursor for the next page. | [optional] [default to undefined]

## Example

```typescript
import { DataExportProjectRankingPageRep } from 'launchdarkly-api-typescript';

const instance: DataExportProjectRankingPageRep = {
    limit,
    count,
    totalCount,
    nextCursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
