# Environment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_id** | **string** | The ID for the environment. Use this as the client-side ID for authorization in some client-side SDKs, and to associate LaunchDarkly environments with CDN integrations in edge SDKs. | [default to undefined]
**key** | **string** | A project-unique key for the new environment | [default to undefined]
**name** | **string** | A human-friendly name for the new environment | [default to undefined]
**apiKey** | **string** | The SDK key for the environment. Use this for authorization in server-side SDKs. | [default to undefined]
**mobileKey** | **string** | The mobile key for the environment. Use this for authorization in mobile SDKs. | [default to undefined]
**color** | **string** | The color used to indicate this environment in the UI | [default to undefined]
**defaultTtl** | **number** | The default time (in minutes) that the PHP SDK can cache feature flag rules locally | [default to undefined]
**secureMode** | **boolean** | Ensures that one end user of the client-side SDK cannot inspect the variations for another end user | [default to undefined]
**defaultTrackEvents** | **boolean** | Enables tracking detailed information for new flags by default | [default to undefined]
**requireComments** | **boolean** | Whether members who modify flags and segments through the LaunchDarkly user interface are required to add a comment | [default to undefined]
**confirmChanges** | **boolean** | Whether members who modify flags and segments through the LaunchDarkly user interface are required to confirm those changes | [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of tags for this environment | [default to undefined]
**approvalSettings** | [**ApprovalSettings**](ApprovalSettings.md) |  | [optional] [default to undefined]
**resourceApprovalSettings** | [**{ [key: string]: ApprovalSettings; }**](ApprovalSettings.md) | Details on the approval settings for this environment for each resource kind | [optional] [default to undefined]
**critical** | **boolean** | Whether the environment is critical | [default to undefined]

## Example

```typescript
import { Environment } from 'launchdarkly-api-typescript';

const instance: Environment = {
    _links,
    _id,
    key,
    name,
    apiKey,
    mobileKey,
    color,
    defaultTtl,
    secureMode,
    defaultTrackEvents,
    requireComments,
    confirmChanges,
    tags,
    approvalSettings,
    resourceApprovalSettings,
    critical,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
