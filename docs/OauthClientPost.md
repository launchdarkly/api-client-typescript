# OauthClientPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of your new LaunchDarkly OAuth 2.0 client. | [optional] [default to undefined]
**redirectUri** | **string** | The redirect URI for your new OAuth 2.0 application. This should be an absolute URL conforming with the standard HTTPS protocol. | [optional] [default to undefined]
**description** | **string** | Description of your OAuth 2.0 client. | [optional] [default to undefined]

## Example

```typescript
import { OauthClientPost } from 'launchdarkly-api-typescript';

const instance: OauthClientPost = {
    name,
    redirectUri,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
