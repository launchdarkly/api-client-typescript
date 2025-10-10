# Endpoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**Array&lt;HeaderItems&gt;**](HeaderItems.md) |  | [optional] [default to undefined]
**hmacSignature** | [**HMACSignature**](HMACSignature.md) |  | [optional] [default to undefined]
**method** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Endpoint } from 'launchdarkly-api-typescript';

const instance: Endpoint = {
    headers,
    hmacSignature,
    method,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
