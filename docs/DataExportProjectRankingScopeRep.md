# DataExportProjectRankingScopeRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **string** | The included usage source. | [default to undefined]
**dimension** | **string** | The ranked dimension. | [default to undefined]
**from** | **number** | Inclusive UTC range start in Unix milliseconds. | [default to undefined]
**to** | **number** | Exclusive UTC range end in Unix milliseconds. | [default to undefined]

## Example

```typescript
import { DataExportProjectRankingScopeRep } from 'launchdarkly-api-typescript';

const instance: DataExportProjectRankingScopeRep = {
    source,
    dimension,
    from,
    to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
