# DestinationPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-readable name for your Data Export destination | [optional] [default to undefined]
**kind** | **string** | The type of Data Export destination | [optional] [default to undefined]
**config** | **any** | An object with the configuration parameters required for the destination type | [optional] [default to undefined]
**on** | **boolean** | Whether the export is on. Displayed as the integration status in the LaunchDarkly UI. | [optional] [default to undefined]

## Example

```typescript
import { DestinationPost } from 'launchdarkly-api-typescript';

const instance: DestinationPost = {
    name,
    kind,
    config,
    on,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
