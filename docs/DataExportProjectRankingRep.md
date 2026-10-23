# DataExportProjectRankingRep

A bounded Streaming project ranking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;DataExportProjectRankRep&gt;**](DataExportProjectRankRep.md) | Projects in deterministic rank order. | [default to undefined]
**page** | [**DataExportProjectRankingPageRep**](DataExportProjectRankingPageRep.md) |  | [default to undefined]
**scope** | [**DataExportProjectRankingScopeRep**](DataExportProjectRankingScopeRep.md) |  | [default to undefined]

## Example

```typescript
import { DataExportProjectRankingRep } from 'launchdarkly-api-typescript';

const instance: DataExportProjectRankingRep = {
    items,
    page,
    scope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
