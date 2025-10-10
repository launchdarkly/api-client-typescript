# FlagFollowersByProjEnvGetRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**items** | [**Array&lt;FollowersPerFlag&gt;**](FollowersPerFlag.md) | An array of flags and their followers | [optional] [default to undefined]

## Example

```typescript
import { FlagFollowersByProjEnvGetRep } from 'launchdarkly-api-typescript';

const instance: FlagFollowersByProjEnvGetRep = {
    _links,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
