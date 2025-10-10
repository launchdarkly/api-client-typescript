# RepositoryPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The repository name | [default to undefined]
**sourceLink** | **string** | A URL to access the repository | [optional] [default to undefined]
**commitUrlTemplate** | **string** | A template for constructing a valid URL to view the commit | [optional] [default to undefined]
**hunkUrlTemplate** | **string** | A template for constructing a valid URL to view the hunk | [optional] [default to undefined]
**type** | **string** | The type of repository. If not specified, the default value is &lt;code&gt;custom&lt;/code&gt;. | [optional] [default to undefined]
**defaultBranch** | **string** | The repository\&#39;s default branch. If not specified, the default value is &lt;code&gt;main&lt;/code&gt;. | [optional] [default to undefined]

## Example

```typescript
import { RepositoryPost } from 'launchdarkly-api-typescript';

const instance: RepositoryPost = {
    name,
    sourceLink,
    commitUrlTemplate,
    hunkUrlTemplate,
    type,
    defaultBranch,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
