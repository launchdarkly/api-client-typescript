# RepositoryRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The repository name | [default to undefined]
**sourceLink** | **string** | A URL to access the repository | [optional] [default to undefined]
**commitUrlTemplate** | **string** | A template for constructing a valid URL to view the commit | [optional] [default to undefined]
**hunkUrlTemplate** | **string** | A template for constructing a valid URL to view the hunk | [optional] [default to undefined]
**type** | **string** | The type of repository | [default to undefined]
**defaultBranch** | **string** | The repository\&#39;s default branch | [default to undefined]
**enabled** | **boolean** | Whether or not a repository is enabled for code reference scanning | [default to undefined]
**version** | **number** | The version of the repository\&#39;s saved information | [default to undefined]
**branches** | [**Array&lt;BranchRep&gt;**](BranchRep.md) | An array of the repository\&#39;s branches that have been scanned for code references | [optional] [default to undefined]
**_links** | **{ [key: string]: any; }** |  | [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RepositoryRep } from 'launchdarkly-api-typescript';

const instance: RepositoryRep = {
    name,
    sourceLink,
    commitUrlTemplate,
    hunkUrlTemplate,
    type,
    defaultBranch,
    enabled,
    version,
    branches,
    _links,
    _access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
