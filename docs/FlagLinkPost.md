# FlagLinkPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The flag link key | [optional] [default to undefined]
**integrationKey** | **string** | The integration key for an integration whose &lt;code&gt;manifest.json&lt;/code&gt; includes the &lt;code&gt;flagLink&lt;/code&gt; capability, if this is a flag link for an existing integration. Do not include for URL flag links. | [optional] [default to undefined]
**timestamp** | **number** |  | [optional] [default to undefined]
**deepLink** | **string** | The URL for the external resource you are linking the flag to | [optional] [default to undefined]
**title** | **string** | The title of the flag link | [optional] [default to undefined]
**description** | **string** | The description of the flag link | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | The metadata required by this integration in order to create a flag link, if this is a flag link for an existing integration. Defined in the integration\&#39;s &lt;code&gt;manifest.json&lt;/code&gt; file under &lt;code&gt;flagLink&lt;/code&gt;. | [optional] [default to undefined]

## Example

```typescript
import { FlagLinkPost } from 'launchdarkly-api-typescript';

const instance: FlagLinkPost = {
    key,
    integrationKey,
    timestamp,
    deepLink,
    title,
    description,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
