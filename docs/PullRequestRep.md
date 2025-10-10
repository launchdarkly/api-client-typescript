# PullRequestRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The pull request internal ID | [default to undefined]
**externalId** | **string** | The pull request number | [default to undefined]
**title** | **string** | The pull request title | [default to undefined]
**status** | **string** | The pull request status | [default to undefined]
**author** | **string** | The pull request author | [default to undefined]
**createTime** | **number** |  | [default to undefined]
**mergeTime** | **number** |  | [optional] [default to undefined]
**mergeCommitKey** | **string** | The pull request merge commit key | [optional] [default to undefined]
**baseCommitKey** | **string** | The pull request base commit key | [default to undefined]
**headCommitKey** | **string** | The pull request head commit key | [default to undefined]
**filesChanged** | **number** | The number of files changed | [default to undefined]
**linesAdded** | **number** | The number of lines added | [default to undefined]
**linesDeleted** | **number** | The number of lines deleted | [default to undefined]
**url** | **string** | The pull request URL | [default to undefined]
**deployments** | [**DeploymentCollectionRep**](DeploymentCollectionRep.md) |  | [optional] [default to undefined]
**flagReferences** | [**FlagReferenceCollectionRep**](FlagReferenceCollectionRep.md) |  | [optional] [default to undefined]
**leadTime** | [**PullRequestLeadTimeRep**](PullRequestLeadTimeRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PullRequestRep } from 'launchdarkly-api-typescript';

const instance: PullRequestRep = {
    id,
    externalId,
    title,
    status,
    author,
    createTime,
    mergeTime,
    mergeCommitKey,
    baseCommitKey,
    headCommitKey,
    filesChanged,
    linesAdded,
    linesDeleted,
    url,
    deployments,
    flagReferences,
    leadTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
