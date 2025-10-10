# IntegrationConfigurationPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the integration configuration | [default to undefined]
**enabled** | **boolean** | Whether the integration configuration is enabled. If omitted, defaults to true | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the integration | [optional] [default to undefined]
**configValues** | **{ [key: string]: any; }** | The unique set of fields required to configure the integration. Refer to the &lt;code&gt;formVariables&lt;/code&gt; field in the corresponding &lt;code&gt;manifest.json&lt;/code&gt; at https://github.com/launchdarkly/integration-framework/tree/main/integrations for a full list of fields for the integration you wish to configure. | [default to undefined]
**capabilityConfig** | [**CapabilityConfigPost**](CapabilityConfigPost.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IntegrationConfigurationPost } from 'launchdarkly-api-typescript';

const instance: IntegrationConfigurationPost = {
    name,
    enabled,
    tags,
    configValues,
    capabilityConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
