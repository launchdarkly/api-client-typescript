# FeatureFlagConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on** | **boolean** | Whether the flag is on | [default to undefined]
**archived** | **boolean** | Boolean indicating if the feature flag is archived | [default to undefined]
**salt** | **string** |  | [default to undefined]
**sel** | **string** |  | [default to undefined]
**lastModified** | **number** |  | [default to undefined]
**version** | **number** | Version of the feature flag | [default to undefined]
**targets** | [**Array&lt;Target&gt;**](Target.md) | An array of the individual targets that will receive a specific variation based on their key. Individual targets with a context kind of \&#39;user\&#39; are included here. | [optional] [default to undefined]
**contextTargets** | [**Array&lt;Target&gt;**](Target.md) | An array of the individual targets that will receive a specific variation based on their key. Individual targets with context kinds other than \&#39;user\&#39; are included here. | [optional] [default to undefined]
**rules** | [**Array&lt;Rule&gt;**](Rule.md) | An array of the rules for how to serve a variation to specific targets based on their attributes | [optional] [default to undefined]
**fallthrough** | [**VariationOrRolloutRep**](VariationOrRolloutRep.md) |  | [optional] [default to undefined]
**offVariation** | **number** | The ID of the variation to serve when the flag is off | [optional] [default to undefined]
**prerequisites** | [**Array&lt;Prerequisite&gt;**](Prerequisite.md) | An array of the prerequisite flags and their variations that are required before this flag takes effect | [optional] [default to undefined]
**_site** | [**Link**](Link.md) |  | [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**_environmentName** | **string** | The environment name | [default to undefined]
**trackEvents** | **boolean** | Whether LaunchDarkly tracks events for the feature flag, for all rules | [default to undefined]
**trackEventsFallthrough** | **boolean** | Whether LaunchDarkly tracks events for the feature flag, for the default rule | [default to undefined]
**_debugEventsUntilDate** | **number** |  | [optional] [default to undefined]
**_summary** | [**FlagSummary**](FlagSummary.md) |  | [optional] [default to undefined]
**evaluation** | [**FlagConfigEvaluation**](FlagConfigEvaluation.md) |  | [optional] [default to undefined]
**migrationSettings** | [**FlagConfigMigrationSettingsRep**](FlagConfigMigrationSettingsRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FeatureFlagConfig } from 'launchdarkly-api-typescript';

const instance: FeatureFlagConfig = {
    on,
    archived,
    salt,
    sel,
    lastModified,
    version,
    targets,
    contextTargets,
    rules,
    fallthrough,
    offVariation,
    prerequisites,
    _site,
    _access,
    _environmentName,
    trackEvents,
    trackEventsFallthrough,
    _debugEventsUntilDate,
    _summary,
    evaluation,
    migrationSettings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
