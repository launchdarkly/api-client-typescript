# IntegrationConfigurationCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;IntegrationConfigurationsRep&gt;**](IntegrationConfigurationsRep.md) | An array of integration configurations | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { IntegrationConfigurationCollectionRep } from 'launchdarkly-api-typescript';

const instance: IntegrationConfigurationCollectionRep = {
    items,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
