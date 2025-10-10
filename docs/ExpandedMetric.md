# ExpandedMetric

Metric representation for Views API - contains only fields actually used by the Views service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key used to reference the metric | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the metric | [optional] [default to undefined]
**creationDate** | **number** | Creation date in milliseconds | [optional] [default to undefined]
**lastModified** | **number** | Last modification date in milliseconds | [optional] [default to undefined]
**isActive** | **boolean** | Whether the metric is active | [optional] [default to undefined]
**eventKey** | **string** | Event key for the metric | [optional] [default to undefined]
**_id** | **string** | ID of the metric | [optional] [default to undefined]
**_versionId** | **string** | Version ID of the metric | [optional] [default to undefined]
**kind** | **string** | Kind of the Metric | [optional] [default to undefined]
**category** | **string** | Category of the Metric | [optional] [default to undefined]
**description** | **string** | Description of the Metric | [optional] [default to undefined]
**isNumeric** | **boolean** |  | [optional] [default to undefined]
**lastSeen** | **number** | Last seen date in milliseconds | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpandedMetric } from 'launchdarkly-api-typescript';

const instance: ExpandedMetric = {
    key,
    name,
    creationDate,
    lastModified,
    isActive,
    eventKey,
    _id,
    _versionId,
    kind,
    category,
    description,
    isNumeric,
    lastSeen,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
