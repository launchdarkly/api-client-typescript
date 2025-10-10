# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**_id** | **string** | The ID of this webhook | [default to undefined]
**name** | **string** | A human-readable name for this webhook | [optional] [default to undefined]
**url** | **string** | The URL to which LaunchDarkly sends an HTTP POST payload for this webhook | [default to undefined]
**secret** | **string** | The secret for this webhook | [optional] [default to undefined]
**statements** | [**Array&lt;Statement&gt;**](Statement.md) | Represents a Custom role policy, defining a resource kinds filter the webhook responds to. | [optional] [default to undefined]
**on** | **boolean** | Whether or not this webhook is enabled | [default to undefined]
**tags** | **Array&lt;string&gt;** | List of tags for this webhook | [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Webhook } from 'launchdarkly-api-typescript';

const instance: Webhook = {
    _links,
    _id,
    name,
    url,
    secret,
    statements,
    on,
    tags,
    _access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
