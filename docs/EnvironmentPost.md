# EnvironmentPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the new environment | [default to undefined]
**key** | **string** | A project-unique key for the new environment | [default to undefined]
**color** | **string** | A color to indicate this environment in the UI | [default to undefined]
**defaultTtl** | **number** | The default time (in minutes) that the PHP SDK can cache feature flag rules locally | [optional] [default to undefined]
**secureMode** | **boolean** | Ensures that one end user of the client-side SDK cannot inspect the variations for another end user | [optional] [default to undefined]
**defaultTrackEvents** | **boolean** | Enables tracking detailed information for new flags by default | [optional] [default to undefined]
**confirmChanges** | **boolean** | Requires confirmation for all flag and segment changes via the UI in this environment | [optional] [default to undefined]
**requireComments** | **boolean** | Requires comments for all flag and segment changes via the UI in this environment | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags to apply to the new environment | [optional] [default to undefined]
**source** | [**SourceEnv**](SourceEnv.md) |  | [optional] [default to undefined]
**critical** | **boolean** | Whether the environment is critical | [optional] [default to undefined]

## Example

```typescript
import { EnvironmentPost } from 'launchdarkly-api-typescript';

const instance: EnvironmentPost = {
    name,
    key,
    color,
    defaultTtl,
    secureMode,
    defaultTrackEvents,
    confirmChanges,
    requireComments,
    tags,
    source,
    critical,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
