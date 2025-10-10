# TeamMaintainers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | The number of maintainers of the team | [optional] [default to undefined]
**items** | [**Array&lt;MemberSummary&gt;**](MemberSummary.md) | Details on the members that have been assigned as maintainers of the team | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { TeamMaintainers } from 'launchdarkly-api-typescript';

const instance: TeamMaintainers = {
    totalCount,
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
