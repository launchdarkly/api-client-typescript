# ReleaseMetric

A metric shared by every phase of a guarded release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metricKey** | **string** |  | [default to undefined]
**metricVersionId** | **string** |  | [optional] [readonly] [default to undefined]
**autoRollback** | **boolean** | Whether a regression automatically reverts the release. | [default to undefined]
**definition** | [**EnvironmentReleasesMetricListingRep**](EnvironmentReleasesMetricListingRep.md) | Present only when the caller requests &#x60;expand&#x3D;metrics&#x60; and the pinned metric version still exists. A metric whose pinned version has been deleted keeps its &#x60;metricKey&#x60; and &#x60;metricVersionId&#x60; but has no definition.  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { ReleaseMetric } from 'launchdarkly-api-typescript';

const instance: ReleaseMetric = {
    metricKey,
    metricVersionId,
    autoRollback,
    definition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
