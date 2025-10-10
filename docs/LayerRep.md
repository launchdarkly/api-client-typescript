# LayerRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The key of the layer | [default to undefined]
**name** | **string** | The name of the layer | [default to undefined]
**description** | **string** | The description of the layer | [default to undefined]
**createdAt** | **number** |  | [default to undefined]
**randomizationUnit** | **string** | The unit of randomization for the layer | [optional] [default to undefined]
**environments** | [**{ [key: string]: LayerConfigurationRep; }**](LayerConfigurationRep.md) | The layer configurations for each requested environment | [optional] [default to undefined]

## Example

```typescript
import { LayerRep } from 'launchdarkly-api-typescript';

const instance: LayerRep = {
    key,
    name,
    description,
    createdAt,
    randomizationUnit,
    environments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
