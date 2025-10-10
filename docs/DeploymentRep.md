# DeploymentRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The deployment ID | [default to undefined]
**applicationKey** | **string** | The application key | [default to undefined]
**applicationVersion** | **string** | The application version | [default to undefined]
**startedAt** | **number** |  | [default to undefined]
**endedAt** | **number** |  | [optional] [default to undefined]
**durationMs** | **number** | The duration of the deployment in milliseconds | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**kind** | **string** |  | [default to undefined]
**active** | **boolean** | Whether the deployment is active | [default to undefined]
**metadata** | **{ [key: string]: any; }** | The metadata associated with the deployment | [optional] [default to undefined]
**archived** | **boolean** | Whether the deployment is archived | [default to undefined]
**environmentKey** | **string** | The environment key | [default to undefined]
**numberOfContributors** | **number** | The number of contributors | [default to undefined]
**numberOfPullRequests** | **number** | The number of pull requests | [default to undefined]
**linesAdded** | **number** | The number of lines added | [default to undefined]
**linesDeleted** | **number** | The number of lines deleted | [default to undefined]
**leadTime** | **number** | The total lead time from first commit to deployment end in milliseconds | [default to undefined]
**pullRequests** | [**PullRequestCollectionRep**](PullRequestCollectionRep.md) |  | [optional] [default to undefined]
**flagReferences** | [**FlagReferenceCollectionRep**](FlagReferenceCollectionRep.md) |  | [optional] [default to undefined]
**leadTimeStages** | [**LeadTimeStagesRep**](LeadTimeStagesRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeploymentRep } from 'launchdarkly-api-typescript';

const instance: DeploymentRep = {
    id,
    applicationKey,
    applicationVersion,
    startedAt,
    endedAt,
    durationMs,
    status,
    kind,
    active,
    metadata,
    archived,
    environmentKey,
    numberOfContributors,
    numberOfPullRequests,
    linesAdded,
    linesDeleted,
    leadTime,
    pullRequests,
    flagReferences,
    leadTimeStages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
