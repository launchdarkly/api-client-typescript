# TargetResourceRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [optional] [default to undefined]
**name** | **string** | The name of the resource | [optional] [default to undefined]
**resources** | **Array&lt;string&gt;** | The resource specifier | [optional] [default to undefined]

## Example

```typescript
import { TargetResourceRep } from 'launchdarkly-api-typescript';

const instance: TargetResourceRep = {
    _links,
    name,
    resources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
