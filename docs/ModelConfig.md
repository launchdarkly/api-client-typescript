# ModelConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_maintainer** | [**AIConfigMaintainer**](AIConfigMaintainer.md) |  | [optional] [default to undefined]
**name** | **string** | Human-readable name of the model | [default to undefined]
**key** | **string** | Unique key for the model config in the project, in the format &#x60;Provider.model-id&#x60;. Use this value as &#x60;modelConfigKey&#x60; on a config variation. | [default to undefined]
**id** | **string** | Model ID that the provider\&#39;s API uses. This is different from &#x60;key&#x60;. Use this value as &#x60;modelName&#x60; on a config variation. | [default to undefined]
**icon** | **string** | Icon for the model | [optional] [default to undefined]
**provider** | **string** | Provider for the model. Matches the provider prefix of &#x60;key&#x60;. | [optional] [default to undefined]
**global** | **boolean** | Whether the model is in the LaunchDarkly global catalog. Global models are read-only. Model configs that you create are always custom, with &#x60;global&#x60; set to &#x60;false&#x60;. | [default to undefined]
**params** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [optional] [default to undefined]
**customParams** | **object** | Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, &#x60;params&#x60; and &#x60;customParams&#x60; hold parameters that the provider\&#39;s API accepts, for example &#x60;{\&quot;temperature\&quot;: 0.7, \&quot;maxTokens\&quot;: 4096}&#x60;. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the model config. Tags can be used in custom role policies. | [default to undefined]
**version** | **number** | Version of the model config. Starts at 1, and each update that changes the model config adds a new version. | [default to undefined]
**costPerInputToken** | **number** | Cost per input token in USD | [optional] [default to undefined]
**costPerOutputToken** | **number** | Cost per output token in USD | [optional] [default to undefined]
**costPerCachedInputToken** | **number** | Cost per cached input token in USD | [optional] [default to undefined]
**isRestricted** | **boolean** | Whether the model is on the project\&#39;s restricted list. Config variations cannot select a restricted model. To change this, use the add or remove restricted models endpoints. | [default to undefined]
**usedInCount** | **number** | Number of distinct AgentControl configs that reference this model | [optional] [default to undefined]

## Example

```typescript
import { ModelConfig } from 'launchdarkly-api-typescript';

const instance: ModelConfig = {
    _access,
    _maintainer,
    name,
    key,
    id,
    icon,
    provider,
    global,
    params,
    customParams,
    tags,
    version,
    costPerInputToken,
    costPerOutputToken,
    costPerCachedInputToken,
    isRestricted,
    usedInCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
