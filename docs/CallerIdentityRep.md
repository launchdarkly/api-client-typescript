# CallerIdentityRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** |  | [optional] [default to undefined]
**environmentId** | **string** |  | [optional] [default to undefined]
**projectId** | **string** |  | [optional] [default to undefined]
**environmentName** | **string** |  | [optional] [default to undefined]
**projectName** | **string** |  | [optional] [default to undefined]
**authKind** | **string** |  | [optional] [default to undefined]
**tokenKind** | **string** |  | [optional] [default to undefined]
**clientId** | **string** |  | [optional] [default to undefined]
**clientName** | **string** | The registered name of the OAuth client the access token was issued to. Only present for OAuth access tokens, and omitted when the client\&#39;s name can\&#39;t be resolved. | [optional] [default to undefined]
**audience** | **Array&lt;string&gt;** | The resources (RFC 8707) the OAuth access token was issued for. Only present for OAuth access tokens issued for a specific resource. | [optional] [default to undefined]
**expiresAt** | **number** |  | [optional] [default to undefined]
**tokenName** | **string** |  | [optional] [default to undefined]
**tokenId** | **string** |  | [optional] [default to undefined]
**memberId** | **string** |  | [optional] [default to undefined]
**serviceToken** | **boolean** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { CallerIdentityRep } from 'launchdarkly-api-typescript';

const instance: CallerIdentityRep = {
    accountId,
    environmentId,
    projectId,
    environmentName,
    projectName,
    authKind,
    tokenKind,
    clientId,
    clientName,
    audience,
    expiresAt,
    tokenName,
    tokenId,
    memberId,
    serviceToken,
    scopes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
