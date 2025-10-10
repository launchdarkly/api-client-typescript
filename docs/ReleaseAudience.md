# ReleaseAudience


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The audience ID | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**environment** | [**EnvironmentSummary**](EnvironmentSummary.md) |  | [optional] [default to undefined]
**name** | **string** | The release phase name | [default to undefined]
**configuration** | [**AudienceConfiguration**](AudienceConfiguration.md) |  | [optional] [default to undefined]
**segmentKeys** | **Array&lt;string&gt;** | A list of segment keys | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**_ruleIds** | **Array&lt;string&gt;** | The rules IDs added or updated by this audience | [optional] [default to undefined]

## Example

```typescript
import { ReleaseAudience } from 'launchdarkly-api-typescript';

const instance: ReleaseAudience = {
    _id,
    _links,
    environment,
    name,
    configuration,
    segmentKeys,
    status,
    _ruleIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
