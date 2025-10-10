# Client


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**name** | **string** | Client name | [default to undefined]
**description** | **string** | Client description | [optional] [default to undefined]
**_accountId** | **string** | The account ID the client is registered under | [default to undefined]
**_clientId** | **string** | The client\&#39;s unique ID | [default to undefined]
**_clientSecret** | **string** | The client secret. This will only be shown upon creation. | [optional] [default to undefined]
**redirectUri** | **string** | The client\&#39;s redirect URI | [default to undefined]
**_creationDate** | **number** |  | [default to undefined]

## Example

```typescript
import { Client } from 'launchdarkly-api-typescript';

const instance: Client = {
    _links,
    name,
    description,
    _accountId,
    _clientId,
    _clientSecret,
    redirectUri,
    _creationDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
