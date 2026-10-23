# EnvironmentRelease

A flag release in one environment, made up of one or more ordered phases. The top-level status is derived from the phases: it reflects the active phase, reports `waiting` between successfully completed phases, and reports the terminal outcome of the release. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**status** | [**ReleaseStatus**](ReleaseStatus.md) |  | [default to undefined]
**statusReason** | [**ReleaseStatusReason**](ReleaseStatusReason.md) |  | [optional] [default to undefined]
**projectKey** | **string** |  | [default to undefined]
**environmentKey** | **string** |  | [default to undefined]
**flagKey** | **string** |  | [default to undefined]
**originalVariationId** | **string** | ID of the variation the release started from. | [default to undefined]
**originalVariationValue** | **any** | The value of the variation. This may be a string, boolean, number, JSON object, or array. | [default to undefined]
**targetVariationId** | **string** | ID of the variation being released. | [default to undefined]
**targetVariationValue** | **any** | The value of the variation. This may be a string, boolean, number, JSON object, or array. | [default to undefined]
**randomizationUnit** | **string** | Key of the context kind the release randomizes on. | [default to undefined]
**cleanupBehavior** | [**CleanupBehavior**](CleanupBehavior.md) |  | [default to undefined]
**kind** | [**ReleaseType**](ReleaseType.md) |  | [default to undefined]
**metrics** | [**Array&lt;ReleaseMetric&gt;**](ReleaseMetric.md) |  | [default to undefined]
**phases** | [**Array&lt;EnvironmentReleasePhase&gt;**](EnvironmentReleasePhase.md) |  | [default to undefined]
**currentPhaseIndex** | **number** | Zero-based index of the active phase. Null before the first phase, between phases, and after the release reaches a terminal status. | [default to undefined]
**advancementMode** | [**EnvironmentReleaseAdvancementMode**](EnvironmentReleaseAdvancementMode.md) |  | [default to undefined]
**createdAt** | **number** | Creation time in Unix milliseconds. | [default to undefined]
**startedAt** | **number** | Start of the first phase in Unix milliseconds. Absent until a phase has started. | [optional] [readonly] [default to undefined]
**endedAt** | **number** | End of the last started phase in Unix milliseconds. Present only after the release reaches a terminal status of &#x60;completed&#x60; or &#x60;reverted&#x60;. | [optional] [readonly] [default to undefined]
**_links** | [**{ [key: string]: EnvironmentReleaseLink; }**](EnvironmentReleaseLink.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnvironmentRelease } from 'launchdarkly-api-typescript';

const instance: EnvironmentRelease = {
    id,
    status,
    statusReason,
    projectKey,
    environmentKey,
    flagKey,
    originalVariationId,
    originalVariationValue,
    targetVariationId,
    targetVariationValue,
    randomizationUnit,
    cleanupBehavior,
    kind,
    metrics,
    phases,
    currentPhaseIndex,
    advancementMode,
    createdAt,
    startedAt,
    endedAt,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
