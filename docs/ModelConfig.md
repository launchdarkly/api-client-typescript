# ModelConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**name** | **string** | Human readable name of the model | [default to undefined]
**key** | **string** | Unique key for the model | [default to undefined]
**id** | **string** | Identifier for the model, for use with third party providers | [default to undefined]
**icon** | **string** | Icon for the model | [optional] [default to undefined]
**provider** | **string** | Provider for the model | [optional] [default to undefined]
**global** | **boolean** | Whether the model is global | [default to undefined]
**params** | **object** |  | [optional] [default to undefined]
**customParams** | **object** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**version** | **number** |  | [default to undefined]
**costPerInputToken** | **number** | Cost per input token in USD | [optional] [default to undefined]
**costPerOutputToken** | **number** | Cost per output token in USD | [optional] [default to undefined]
**isRestricted** | **boolean** | Whether the model is restricted | [default to undefined]

## Example

```typescript
import { ModelConfig } from 'launchdarkly-api-typescript';

const instance: ModelConfig = {
    _access,
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
    isRestricted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
