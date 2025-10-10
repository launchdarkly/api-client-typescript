# Tokens


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;Token&gt;**](Token.md) | An array of access tokens | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [optional] [default to undefined]
**totalCount** | **number** | The number of access tokens returned | [optional] [default to undefined]

## Example

```typescript
import { Tokens } from 'launchdarkly-api-typescript';

const instance: Tokens = {
    items,
    _links,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
