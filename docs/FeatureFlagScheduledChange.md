# FeatureFlagScheduledChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**_creationDate** | **number** |  | [default to undefined]
**_maintainerId** | **string** | The ID of the scheduled change maintainer | [default to undefined]
**_version** | **number** | Version of the scheduled change | [default to undefined]
**executionDate** | **number** |  | [default to undefined]
**instructions** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]
**conflicts** | **any** | Details on any conflicting scheduled changes | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { FeatureFlagScheduledChange } from 'launchdarkly-api-typescript';

const instance: FeatureFlagScheduledChange = {
    _id,
    _creationDate,
    _maintainerId,
    _version,
    executionDate,
    instructions,
    conflicts,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
