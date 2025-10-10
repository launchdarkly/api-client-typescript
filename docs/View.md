# View


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**ViewsAccessRep**](ViewsAccessRep.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**id** | **string** | Unique ID of this view | [default to undefined]
**accountId** | **string** | ID of the account that owns this view | [default to undefined]
**projectId** | **string** | ID of the project this view belongs to | [default to undefined]
**projectKey** | **string** | Key of the project this view belongs to | [default to undefined]
**key** | **string** | Unique key for the view within the account/project | [default to undefined]
**name** | **string** | Human-readable name for the view | [default to undefined]
**description** | **string** | Optional detailed description of the view | [default to undefined]
**generateSdkKeys** | **boolean** | Whether to generate SDK keys for this view. Defaults to false. | [default to undefined]
**version** | **number** | Version number for tracking changes | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with this view | [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**updatedAt** | **number** |  | [default to undefined]
**archived** | **boolean** | Whether this view is archived | [default to false]
**archivedAt** | **number** |  | [optional] [default to undefined]
**deletedAt** | **number** |  | [optional] [default to undefined]
**deleted** | **boolean** | Whether this view is deleted | [default to false]
**maintainer** | [**Maintainer**](Maintainer.md) |  | [optional] [default to undefined]
**flagsSummary** | [**FlagsSummary**](FlagsSummary.md) |  | [optional] [default to undefined]
**segmentsSummary** | [**SegmentsSummary**](SegmentsSummary.md) |  | [optional] [default to undefined]
**metricsSummary** | [**MetricsSummary**](MetricsSummary.md) |  | [optional] [default to undefined]
**aiConfigsSummary** | [**AIConfigsSummary**](AIConfigsSummary.md) |  | [optional] [default to undefined]
**resourceSummary** | [**ResourceSummary**](ResourceSummary.md) |  | [optional] [default to undefined]
**flagsExpanded** | [**ExpandedLinkedFlags**](ExpandedLinkedFlags.md) |  | [optional] [default to undefined]
**segmentsExpanded** | [**ExpandedLinkedSegments**](ExpandedLinkedSegments.md) |  | [optional] [default to undefined]
**metricsExpanded** | [**ExpandedLinkedMetrics**](ExpandedLinkedMetrics.md) |  | [optional] [default to undefined]
**aiConfigsExpanded** | [**ExpandedLinkedAIConfigs**](ExpandedLinkedAIConfigs.md) |  | [optional] [default to undefined]
**resourcesExpanded** | [**ExpandedLinkedResources**](ExpandedLinkedResources.md) |  | [optional] [default to undefined]

## Example

```typescript
import { View } from 'launchdarkly-api-typescript';

const instance: View = {
    _access,
    _links,
    id,
    accountId,
    projectId,
    projectKey,
    key,
    name,
    description,
    generateSdkKeys,
    version,
    tags,
    createdAt,
    updatedAt,
    archived,
    archivedAt,
    deletedAt,
    deleted,
    maintainer,
    flagsSummary,
    segmentsSummary,
    metricsSummary,
    aiConfigsSummary,
    resourceSummary,
    flagsExpanded,
    segmentsExpanded,
    metricsExpanded,
    aiConfigsExpanded,
    resourcesExpanded,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
