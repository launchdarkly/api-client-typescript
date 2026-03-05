# ExpandedFlagMaintainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The ID of the maintainer member, or the key of the maintainer team | [default to undefined]
**kind** | **string** | The type of the maintainer | [default to undefined]
**_member** | [**ViewsMemberSummary**](ViewsMemberSummary.md) |  | [optional] [default to undefined]
**_team** | [**ViewsMemberTeamSummaryRep**](ViewsMemberTeamSummaryRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpandedFlagMaintainer } from 'launchdarkly-api-typescript';

const instance: ExpandedFlagMaintainer = {
    key,
    kind,
    _member,
    _team,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
