# IntegrationDeliveryConfigurationPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on** | **boolean** | Whether the integration configuration is active. Default value is false. | [optional] [default to undefined]
**config** | **{ [key: string]: any; }** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags to associate with the integration | [optional] [default to undefined]
**name** | **string** | Name to identify the integration | [optional] [default to undefined]

## Example

```typescript
import { IntegrationDeliveryConfigurationPost } from 'launchdarkly-api-typescript';

const instance: IntegrationDeliveryConfigurationPost = {
    on,
    config,
    tags,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
