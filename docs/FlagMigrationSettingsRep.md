# FlagMigrationSettingsRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contextKind** | **string** | The context kind targeted by this migration flag. Only applicable for six-stage migrations. | [optional] [default to undefined]
**stageCount** | **number** | The number of stages for this migration flag | [optional] [default to undefined]

## Example

```typescript
import { FlagMigrationSettingsRep } from 'launchdarkly-api-typescript';

const instance: FlagMigrationSettingsRep = {
    contextKind,
    stageCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
