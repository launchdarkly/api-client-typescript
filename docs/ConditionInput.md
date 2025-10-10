# ConditionInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduleKind** | **string** |  | [optional] [default to undefined]
**executionDate** | **number** |  | [optional] [default to undefined]
**waitDuration** | **number** | For workflow stages whose scheduled execution is relative, how far in the future the stage should start. | [optional] [default to undefined]
**waitDurationUnit** | **string** |  | [optional] [default to undefined]
**executeNow** | **boolean** | Whether the workflow stage should be executed immediately | [optional] [default to undefined]
**description** | **string** | A description of the approval required for this stage | [optional] [default to undefined]
**notifyMemberIds** | **Array&lt;string&gt;** | A list of member IDs for the members to request approval from for this stage | [optional] [default to undefined]
**notifyTeamKeys** | **Array&lt;string&gt;** | A list of team keys for the teams to request approval from for this stage | [optional] [default to undefined]
**integrationConfig** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**kind** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ConditionInput } from 'launchdarkly-api-typescript';

const instance: ConditionInput = {
    scheduleKind,
    executionDate,
    waitDuration,
    waitDurationUnit,
    executeNow,
    description,
    notifyMemberIds,
    notifyTeamKeys,
    integrationConfig,
    kind,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
