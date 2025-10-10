# ExpandedSegment

Segment representation for Views API - contains only fields actually used by the Views service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key used to reference the segment | [default to undefined]
**name** | **string** | A human-friendly name for the segment | [default to undefined]
**environmentId** | **string** | Environment ID of the segment | [optional] [default to undefined]
**environmentKey** | **string** | Environment key of the segment | [optional] [default to undefined]
**description** | **string** | Description of the segment | [optional] [default to undefined]
**creationDate** | **number** | Creation date in milliseconds | [optional] [default to undefined]
**lastModifiedDate** | **number** | Last modification date in milliseconds | [optional] [default to undefined]
**deleted** | **boolean** | Whether the segment is deleted | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the segment | [optional] [default to undefined]
**unbounded** | **boolean** | Whether the segment is unbounded | [optional] [default to undefined]
**version** | **number** | Version of the segment | [optional] [default to undefined]
**generation** | **number** | Generation of the segment | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpandedSegment } from 'launchdarkly-api-typescript';

const instance: ExpandedSegment = {
    key,
    name,
    environmentId,
    environmentKey,
    description,
    creationDate,
    lastModifiedDate,
    deleted,
    tags,
    unbounded,
    version,
    generation,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
