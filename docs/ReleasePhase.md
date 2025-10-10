# ReleasePhase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The phase ID | [default to undefined]
**_name** | **string** | The release phase name | [default to undefined]
**complete** | **boolean** | Whether this phase is complete | [default to undefined]
**_creationDate** | **number** |  | [default to undefined]
**_completionDate** | **number** |  | [optional] [default to undefined]
**_completedBy** | [**CompletedBy**](CompletedBy.md) |  | [optional] [default to undefined]
**_audiences** | [**Array&lt;ReleaseAudience&gt;**](ReleaseAudience.md) | A logical grouping of one or more environments that share attributes for rolling out changes | [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**started** | **boolean** | Whether or not this phase has started | [optional] [default to undefined]
**_startedDate** | **number** |  | [optional] [default to undefined]
**configuration** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { ReleasePhase } from 'launchdarkly-api-typescript';

const instance: ReleasePhase = {
    _id,
    _name,
    complete,
    _creationDate,
    _completionDate,
    _completedBy,
    _audiences,
    status,
    started,
    _startedDate,
    configuration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
