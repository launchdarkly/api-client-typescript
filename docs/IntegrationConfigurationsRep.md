# IntegrationConfigurationsRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_id** | **string** | The unique identifier for this integration configuration | [default to undefined]
**name** | **string** | A human-friendly name for the integration | [default to undefined]
**_createdAt** | **number** |  | [optional] [default to undefined]
**_integrationKey** | **string** | The type of integration | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | An array of tags for this integration | [optional] [default to undefined]
**enabled** | **boolean** | Whether the integration is currently active | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**configValues** | **{ [key: string]: any; }** | Details on configuration for an integration of this type. Refer to the &lt;code&gt;formVariables&lt;/code&gt; field in the corresponding &lt;code&gt;manifest.json&lt;/code&gt; for a full list of fields for each integration. | [optional] [default to undefined]
**capabilityConfig** | [**CapabilityConfigRep**](CapabilityConfigRep.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IntegrationConfigurationsRep } from 'launchdarkly-api-typescript';

const instance: IntegrationConfigurationsRep = {
    _links,
    _id,
    name,
    _createdAt,
    _integrationKey,
    tags,
    enabled,
    _access,
    configValues,
    capabilityConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
