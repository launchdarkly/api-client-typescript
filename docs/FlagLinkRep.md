# FlagLinkRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_key** | **string** | The flag link key | [optional] [default to undefined]
**_integrationKey** | **string** | The integration key for an integration whose &lt;code&gt;manifest.json&lt;/code&gt; includes the &lt;code&gt;flagLink&lt;/code&gt; capability, if this is a flag link for an existing integration | [optional] [default to undefined]
**_id** | **string** | The ID of this flag link | [default to undefined]
**_deepLink** | **string** | The URL for the external resource the flag is linked to | [default to undefined]
**_timestamp** | [**TimestampRep**](TimestampRep.md) |  | [default to undefined]
**title** | **string** | The title of the flag link | [optional] [default to undefined]
**description** | **string** | The description of the flag link | [optional] [default to undefined]
**_metadata** | **{ [key: string]: string; }** | The metadata required by this integration in order to create a flag link, if this is a flag link for an existing integration. Defined in the integration\&#39;s &lt;code&gt;manifest.json&lt;/code&gt; file under &lt;code&gt;flagLink&lt;/code&gt;. | [optional] [default to undefined]
**_createdAt** | **number** |  | [default to undefined]
**_member** | [**FlagLinkMember**](FlagLinkMember.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlagLinkRep } from 'launchdarkly-api-typescript';

const instance: FlagLinkRep = {
    _links,
    _key,
    _integrationKey,
    _id,
    _deepLink,
    _timestamp,
    title,
    description,
    _metadata,
    _createdAt,
    _member,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
