# FlagFollowersGetRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**items** | [**Array&lt;FollowFlagMember&gt;**](FollowFlagMember.md) | An array of members who are following this flag | [default to undefined]

## Example

```typescript
import { FlagFollowersGetRep } from 'launchdarkly-api-typescript';

const instance: FlagFollowersGetRep = {
    _links,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
