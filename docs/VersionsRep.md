# VersionsRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validVersions** | **Array&lt;number&gt;** | A list of all valid API versions. To learn more about our versioning, read [Versioning](https://launchdarkly.com/docs/api#versioning). | [default to undefined]
**latestVersion** | **number** |  | [default to undefined]
**currentVersion** | **number** |  | [default to undefined]
**beta** | **boolean** | Whether the version of the API currently is use is a beta version. This is always &lt;code&gt;true&lt;/code&gt; if you add the &lt;code&gt;LD-API-Version: beta&lt;/code&gt; header to your request. | [optional] [default to undefined]

## Example

```typescript
import { VersionsRep } from 'launchdarkly-api-typescript';

const instance: VersionsRep = {
    validVersions,
    latestVersion,
    currentVersion,
    beta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
