# Integration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**_id** | **string** | The ID for this integration audit log subscription | [optional] [default to undefined]
**kind** | **string** | The type of integration | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the integration | [optional] [default to undefined]
**config** | **{ [key: string]: any; }** | Details on configuration for an integration of this type. Refer to the &lt;code&gt;formVariables&lt;/code&gt; field in the corresponding &lt;code&gt;manifest.json&lt;/code&gt; for a full list of fields for each integration. | [optional] [default to undefined]
**statements** | [**Array&lt;Statement&gt;**](Statement.md) | Represents a Custom role policy, defining a resource kinds filter the integration audit log subscription responds to. | [optional] [default to undefined]
**on** | **boolean** | Whether the integration is currently active | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | An array of tags for this integration | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**_status** | [**IntegrationSubscriptionStatusRep**](IntegrationSubscriptionStatusRep.md) |  | [optional] [default to undefined]
**url** | **string** | Slack webhook receiver URL. Only used for legacy Slack webhook integrations. | [optional] [default to undefined]
**apiKey** | **string** | Datadog API key. Only used for legacy Datadog webhook integrations. | [optional] [default to undefined]

## Example

```typescript
import { Integration } from 'launchdarkly-api-typescript';

const instance: Integration = {
    _links,
    _id,
    kind,
    name,
    config,
    statements,
    on,
    tags,
    _access,
    _status,
    url,
    apiKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
