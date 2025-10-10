# PullRequestCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | The total number of pull requests | [default to undefined]
**items** | [**Array&lt;PullRequestRep&gt;**](PullRequestRep.md) | A list of pull requests | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { PullRequestCollectionRep } from 'launchdarkly-api-typescript';

const instance: PullRequestCollectionRep = {
    totalCount,
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
