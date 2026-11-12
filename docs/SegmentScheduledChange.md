# SegmentScheduledChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: SegmentScheduledChangesLink; }**](SegmentScheduledChangesLink.md) | The location and content type of related resources | [default to undefined]
**status** | [**SegmentScheduledChangeStatus**](SegmentScheduledChangeStatus.md) |  | [default to undefined]
**_id** | **string** | The ID of this scheduled change | [default to undefined]
**_creationDate** | **number** |  | [default to undefined]
**_maintainerId** | **string** | The ID of the member who scheduled the change | [optional] [default to undefined]
**_maintainerServiceTokenId** | **string** | The ID of the service token that scheduled the change | [optional] [default to undefined]
**executionDate** | **number** |  | [default to undefined]
**comment** | **string** | The comment describing the scheduled change | [optional] [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** | The segment semantic patch instructions to apply on the execution date | [default to undefined]

## Example

```typescript
import { SegmentScheduledChange } from 'launchdarkly-api-typescript';

const instance: SegmentScheduledChange = {
    _links,
    status,
    _id,
    _creationDate,
    _maintainerId,
    _maintainerServiceTokenId,
    executionDate,
    comment,
    instructions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
