# BulkEditMembersRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | **Array&lt;string&gt;** | A list of members IDs of the members who were successfully updated. | [optional] [default to undefined]
**errors** | **Array&lt;{ [key: string]: string; }&gt;** | A list of member IDs and errors for the members whose updates failed. | [optional] [default to undefined]

## Example

```typescript
import { BulkEditMembersRep } from 'launchdarkly-api-typescript';

const instance: BulkEditMembersRep = {
    members,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
