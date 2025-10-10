# AuthorizedAppDataRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [optional] [default to undefined]
**_id** | **string** | The ID of the authorized application | [optional] [default to undefined]
**isScim** | **boolean** | Whether the application is authorized through SCIM | [optional] [default to undefined]
**name** | **string** | The authorized application name | [optional] [default to undefined]
**maintainerName** | **string** | The name of the maintainer for this authorized application | [optional] [default to undefined]

## Example

```typescript
import { AuthorizedAppDataRep } from 'launchdarkly-api-typescript';

const instance: AuthorizedAppDataRep = {
    _links,
    _id,
    isScim,
    name,
    maintainerName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
