# StatisticRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The repository name | [default to undefined]
**type** | **string** | The type of repository | [default to undefined]
**sourceLink** | **string** | A URL to access the repository | [default to undefined]
**defaultBranch** | **string** | The repository\&#39;s default branch | [default to undefined]
**enabled** | **boolean** | Whether or not a repository is enabled for code reference scanning | [default to undefined]
**version** | **number** | The version of the repository\&#39;s saved information | [default to undefined]
**hunkCount** | **number** | The number of code reference hunks in which the flag appears in this repository | [default to undefined]
**fileCount** | **number** | The number of files in which the flag appears in this repository | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**latestCommitTime** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { StatisticRep } from 'launchdarkly-api-typescript';

const instance: StatisticRep = {
    name,
    type,
    sourceLink,
    defaultBranch,
    enabled,
    version,
    hunkCount,
    fileCount,
    _links,
    latestCommitTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
