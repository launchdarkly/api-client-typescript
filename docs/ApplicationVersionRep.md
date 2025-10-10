# ApplicationVersionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**_version** | **number** | Version of the application version | [optional] [default to undefined]
**autoAdded** | **boolean** | Whether the application version was automatically created, because it was included in a context when a LaunchDarkly SDK evaluated a feature flag, or if the application version was created through the LaunchDarkly UI or REST API.  | [default to undefined]
**creationDate** | **number** |  | [optional] [default to undefined]
**key** | **string** | The unique identifier of this application version | [default to undefined]
**name** | **string** | The name of this version | [default to undefined]
**supported** | **boolean** | Whether this version is supported. Only applicable if the application &lt;code&gt;kind&lt;/code&gt; is &lt;code&gt;mobile&lt;/code&gt;. | [optional] [default to undefined]

## Example

```typescript
import { ApplicationVersionRep } from 'launchdarkly-api-typescript';

const instance: ApplicationVersionRep = {
    _access,
    _links,
    _version,
    autoAdded,
    creationDate,
    key,
    name,
    supported,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
