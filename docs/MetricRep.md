# MetricRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**experimentCount** | **number** | The number of experiments using this metric | [optional] [default to undefined]
**metricGroupCount** | **number** | The number of metric groups using this metric | [optional] [default to undefined]
**activeExperimentCount** | **number** | The number of active experiments using this metric | [optional] [default to undefined]
**activeGuardedRolloutCount** | **number** | The number of active guarded rollouts using this metric | [optional] [default to undefined]
**_id** | **string** | The ID of this metric | [default to undefined]
**_versionId** | **string** | The version ID of the metric | [default to undefined]
**_version** | **number** | Version of the metric | [optional] [default to undefined]
**key** | **string** | A unique key to reference the metric | [default to undefined]
**name** | **string** | A human-friendly name for the metric | [default to undefined]
**kind** | **string** | The kind of event the metric tracks | [default to undefined]
**_attachedFlagCount** | **number** | The number of feature flags currently attached to this metric | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_site** | [**Link**](Link.md) |  | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the metric | [default to undefined]
**_creationDate** | **number** |  | [default to undefined]
**lastModified** | [**Modification**](Modification.md) |  | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this metric | [optional] [default to undefined]
**_maintainer** | [**MemberSummary**](MemberSummary.md) |  | [optional] [default to undefined]
**description** | **string** | Description of the metric | [optional] [default to undefined]
**category** | **string** | The category of the metric | [optional] [default to undefined]
**isNumeric** | **boolean** | For custom metrics, whether to track numeric changes in value against a baseline (&lt;code&gt;true&lt;/code&gt;) or to track a conversion when an end user takes an action (&lt;code&gt;false&lt;/code&gt;). | [optional] [default to undefined]
**successCriteria** | **string** | For custom metrics, the success criteria | [optional] [default to undefined]
**unit** | **string** | For numeric custom metrics, the unit of measure | [optional] [default to undefined]
**eventKey** | **string** | For custom metrics, the event key to use in your code | [optional] [default to undefined]
**randomizationUnits** | **Array&lt;string&gt;** | An array of randomization units allowed for this metric | [optional] [default to undefined]
**filters** | [**Filter**](Filter.md) |  | [optional] [default to undefined]
**unitAggregationType** | **string** | The method by which multiple unit event values are aggregated | [optional] [default to undefined]
**analysisType** | **string** | The method for analyzing metric events | [optional] [default to undefined]
**percentileValue** | **number** | The percentile for the analysis method. An integer denoting the target percentile between 0 and 100. Required when &lt;code&gt;analysisType&lt;/code&gt; is &lt;code&gt;percentile&lt;/code&gt;. | [optional] [default to undefined]
**eventDefault** | [**MetricEventDefaultRep**](MetricEventDefaultRep.md) |  | [optional] [default to undefined]
**dataSource** | [**MetricDataSourceRefRep**](MetricDataSourceRefRep.md) |  | [default to undefined]
**archived** | **boolean** | Whether the metric version is archived | [optional] [default to undefined]
**archivedAt** | **number** |  | [optional] [default to undefined]
**selector** | **string** | For click metrics, the CSS selectors | [optional] [default to undefined]
**urls** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**experiments** | [**Array&lt;DependentExperimentRep&gt;**](DependentExperimentRep.md) |  | [optional] [default to undefined]
**metricGroups** | [**Array&lt;DependentMetricGroupRep&gt;**](DependentMetricGroupRep.md) | Metric groups that use this metric | [optional] [default to undefined]
**lastUsedInExperiment** | [**DependentExperimentRep**](DependentExperimentRep.md) |  | [optional] [default to undefined]
**lastUsedInGuardedRollout** | [**DependentMeasuredRolloutRep**](DependentMeasuredRolloutRep.md) |  | [optional] [default to undefined]
**isActive** | **boolean** | Whether the metric is active | [optional] [default to undefined]
**_attachedFeatures** | [**Array&lt;FlagListingRep&gt;**](FlagListingRep.md) | Details on the flags attached to this metric | [optional] [default to undefined]

## Example

```typescript
import { MetricRep } from 'launchdarkly-api-typescript';

const instance: MetricRep = {
    experimentCount,
    metricGroupCount,
    activeExperimentCount,
    activeGuardedRolloutCount,
    _id,
    _versionId,
    _version,
    key,
    name,
    kind,
    _attachedFlagCount,
    _links,
    _site,
    _access,
    tags,
    _creationDate,
    lastModified,
    maintainerId,
    _maintainer,
    description,
    category,
    isNumeric,
    successCriteria,
    unit,
    eventKey,
    randomizationUnits,
    filters,
    unitAggregationType,
    analysisType,
    percentileValue,
    eventDefault,
    dataSource,
    archived,
    archivedAt,
    selector,
    urls,
    experiments,
    metricGroups,
    lastUsedInExperiment,
    lastUsedInGuardedRollout,
    isActive,
    _attachedFeatures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
