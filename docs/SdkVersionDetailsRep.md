# SdkVersionDetailsRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**projectId** | **string** |  | [optional] [default to undefined]
**projectKey** | **string** |  | [optional] [default to undefined]
**projectName** | **string** |  | [optional] [default to undefined]
**environmentId** | **string** |  | [optional] [default to undefined]
**environmentKey** | **string** |  | [optional] [default to undefined]
**environmentName** | **string** |  | [optional] [default to undefined]
**applicationId** | **string** |  | [optional] [default to undefined]
**ldLatestVersion** | **string** |  | [optional] [default to undefined]
**eolStatus** | **string** | The end of life (EOL) status of the SDK version. Possible values are: &lt;br/&gt;- &lt;code&gt;EolAllClear&lt;/code&gt;: the SDK version is current&lt;br/&gt;- &lt;code&gt;EolNear&lt;/code&gt;: the SDK version is approaching EOL&lt;br/&gt;- &lt;code&gt;EolPast&lt;/code&gt;: the SDK version is past EOL&lt;br/&gt;- &lt;code&gt;MajorVersionAvailable&lt;/code&gt;: a new major version is available but the current version is not near EOL&lt;br/&gt;- &lt;code&gt;EolUnknown&lt;/code&gt;: the EOL status cannot be determined. | [optional] [default to undefined]
**latestReleaseUrl** | **string** |  | [optional] [default to undefined]
**connectionType** | **string** |  | [optional] [default to undefined]
**relayVersion** | **string** |  | [optional] [default to undefined]
**relayEolStatus** | **string** | The end of life status of the Relay Proxy version. Only present when the SDK connects through a Relay Proxy. Uses the same values as &lt;code&gt;eolStatus&lt;/code&gt;. | [optional] [default to undefined]
**relayLatestVersion** | **string** |  | [optional] [default to undefined]
**relayLatestReleaseUrl** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SdkVersionDetailsRep } from 'launchdarkly-api-typescript';

const instance: SdkVersionDetailsRep = {
    name,
    version,
    type,
    projectId,
    projectKey,
    projectName,
    environmentId,
    environmentKey,
    environmentName,
    applicationId,
    ldLatestVersion,
    eolStatus,
    latestReleaseUrl,
    connectionType,
    relayVersion,
    relayEolStatus,
    relayLatestVersion,
    relayLatestReleaseUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
