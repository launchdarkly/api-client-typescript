# BulkEditTeamsRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberIDs** | **Array&lt;string&gt;** | A list of member IDs of the members who were added to the teams. | [optional] [default to undefined]
**teamKeys** | **Array&lt;string&gt;** | A list of team keys of the teams that were successfully updated. | [optional] [default to undefined]
**errors** | **Array&lt;{ [key: string]: string; }&gt;** | A list of team keys and errors for the teams whose updates failed. | [optional] [default to undefined]

## Example

```typescript
import { BulkEditTeamsRep } from 'launchdarkly-api-typescript';

const instance: BulkEditTeamsRep = {
    memberIDs,
    teamKeys,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
