# Users


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**totalCount** | **number** | The total number of users in the environment | [default to undefined]
**items** | [**Array&lt;UserRecord&gt;**](UserRecord.md) | Details on the users | [default to undefined]

## Example

```typescript
import { Users } from 'launchdarkly-api-typescript';

const instance: Users = {
    _links,
    totalCount,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
