# SdkKeyPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | The kind of SDK key. Can be either \&quot;sdk\&quot; (server-side) or \&quot;mobile\&quot; (mobile). Defaults to \&quot;sdk\&quot; when not explicitly defined. | [optional] [default to KindEnum_Sdk]
**key** | **string** | The user-defined key of the SDK key. | [default to undefined]
**name** | **string** | The human-readable name of the SDK key. | [default to undefined]
**description** | **string** | The optional description of the SDK key. | [optional] [default to undefined]
**expiry** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SdkKeyPost } from 'launchdarkly-api-typescript';

const instance: SdkKeyPost = {
    kind,
    key,
    name,
    description,
    expiry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
