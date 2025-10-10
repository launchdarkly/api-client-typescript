# InsightsRepository


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The repository ID | [default to undefined]
**version** | **number** | The repository version | [default to undefined]
**key** | **string** | The repository key | [default to undefined]
**type** | **string** | The repository type | [default to undefined]
**url** | **string** | The repository URL | [default to undefined]
**mainBranch** | **string** | The repository main branch | [default to undefined]
**projects** | [**ProjectSummaryCollection**](ProjectSummaryCollection.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InsightsRepository } from 'launchdarkly-api-typescript';

const instance: InsightsRepository = {
    _id,
    version,
    key,
    type,
    url,
    mainBranch,
    projects,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
