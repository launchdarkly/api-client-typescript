# FeatureFlagBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the feature flag | [default to undefined]
**key** | **string** | A unique key used to reference the flag in your code | [default to undefined]
**description** | **string** | Description of the feature flag. Defaults to an empty string. | [optional] [default to undefined]
**includeInSnippet** | **boolean** | Deprecated, use &lt;code&gt;clientSideAvailability&lt;/code&gt;. Whether this flag should be made available to the client-side JavaScript SDK. Defaults to &lt;code&gt;false&lt;/code&gt;. | [optional] [default to undefined]
**clientSideAvailability** | [**ClientSideAvailabilityPost**](ClientSideAvailabilityPost.md) |  | [optional] [default to undefined]
**variations** | [**Array&lt;Variation&gt;**](Variation.md) | An array of possible variations for the flag. The variation values must be unique. If omitted, two boolean variations of &lt;code&gt;true&lt;/code&gt; and &lt;code&gt;false&lt;/code&gt; will be used. | [optional] [default to undefined]
**temporary** | **boolean** | Whether the flag is a temporary flag. Defaults to &lt;code&gt;true&lt;/code&gt;. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the feature flag. Defaults to an empty array. | [optional] [default to undefined]
**customProperties** | [**{ [key: string]: CustomProperty; }**](CustomProperty.md) |  | [optional] [default to undefined]
**defaults** | [**Defaults**](Defaults.md) |  | [optional] [default to undefined]
**purpose** | **string** | Purpose of the flag | [optional] [default to undefined]
**migrationSettings** | [**MigrationSettingsPost**](MigrationSettingsPost.md) |  | [optional] [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains this feature flag | [optional] [default to undefined]
**maintainerTeamKey** | **string** | The key of the team that maintains this feature flag | [optional] [default to undefined]
**initialPrerequisites** | [**Array&lt;FlagPrerequisitePost&gt;**](FlagPrerequisitePost.md) | Initial set of prerequisite flags for all environments | [optional] [default to undefined]
**isFlagOn** | **boolean** | Whether to automatically turn the flag on across all environments at creation. Defaults to &lt;code&gt;false&lt;/code&gt;. | [optional] [default to undefined]

## Example

```typescript
import { FeatureFlagBody } from 'launchdarkly-api-typescript';

const instance: FeatureFlagBody = {
    name,
    key,
    description,
    includeInSnippet,
    clientSideAvailability,
    variations,
    temporary,
    tags,
    customProperties,
    defaults,
    purpose,
    migrationSettings,
    maintainerId,
    maintainerTeamKey,
    initialPrerequisites,
    isFlagOn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
