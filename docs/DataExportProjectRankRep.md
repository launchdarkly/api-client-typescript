# DataExportProjectRankRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectKey** | **string** | The canonical project key. | [default to undefined]
**projectName** | **string** | The current project name. | [default to undefined]
**rank** | **number** | The one-based rank within all matching projects. | [default to undefined]
**usage** | **number** | Successful Streaming transfers in the requested range. | [default to undefined]
**components** | [**DataExportProjectRankComponentsRep**](DataExportProjectRankComponentsRep.md) |  | [default to undefined]

## Example

```typescript
import { DataExportProjectRankRep } from 'launchdarkly-api-typescript';

const instance: DataExportProjectRankRep = {
    projectKey,
    projectName,
    rank,
    usage,
    components,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
