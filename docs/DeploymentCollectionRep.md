# DeploymentCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | The total number of deployments | [default to undefined]
**items** | [**Array&lt;DeploymentRep&gt;**](DeploymentRep.md) | A list of deployments | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]

## Example

```typescript
import { DeploymentCollectionRep } from 'launchdarkly-api-typescript';

const instance: DeploymentCollectionRep = {
    totalCount,
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
