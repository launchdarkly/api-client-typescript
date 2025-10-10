# AudiencePost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environmentKey** | **string** | A project-unique key for the environment. | [default to undefined]
**name** | **string** | The audience name | [default to undefined]
**segmentKeys** | **Array&lt;string&gt;** | Segments targeted by this audience. | [optional] [default to undefined]
**configuration** | [**AudienceConfiguration**](AudienceConfiguration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AudiencePost } from 'launchdarkly-api-typescript';

const instance: AudiencePost = {
    environmentKey,
    name,
    segmentKeys,
    configuration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
