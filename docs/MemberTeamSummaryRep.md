# MemberTeamSummaryRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customRoleKeys** | **Array&lt;string&gt;** | A list of keys of the custom roles this team has access to | [default to undefined]
**key** | **string** | The team key | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [optional] [default to undefined]
**name** | **string** | The team name | [default to undefined]

## Example

```typescript
import { MemberTeamSummaryRep } from 'launchdarkly-api-typescript';

const instance: MemberTeamSummaryRep = {
    customRoleKeys,
    key,
    _links,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
