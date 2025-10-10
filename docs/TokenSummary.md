# TokenSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [optional] [default to undefined]
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** | The name of the token | [optional] [default to undefined]
**ending** | **string** | The last few characters of the token | [optional] [default to undefined]
**serviceToken** | **boolean** | Whether this is a service token | [optional] [default to undefined]

## Example

```typescript
import { TokenSummary } from 'launchdarkly-api-typescript';

const instance: TokenSummary = {
    _links,
    _id,
    name,
    ending,
    serviceToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
