# BigSegmentStoreIntegration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**BigSegmentStoreIntegrationLinks**](BigSegmentStoreIntegrationLinks.md) |  | [default to undefined]
**_id** | **string** | The integration ID | [default to undefined]
**integrationKey** | **string** | The integration key | [default to undefined]
**projectKey** | **string** | The project key | [default to undefined]
**environmentKey** | **string** | The environment key | [default to undefined]
**config** | **{ [key: string]: any; }** |  | [default to undefined]
**on** | **boolean** | Whether the configuration is turned on | [default to undefined]
**tags** | **Array&lt;string&gt;** | List of tags for this configuration | [default to undefined]
**name** | **string** | Name of the configuration | [default to undefined]
**version** | **number** | Version of the current configuration | [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**_status** | [**BigSegmentStoreStatus**](BigSegmentStoreStatus.md) |  | [default to undefined]

## Example

```typescript
import { BigSegmentStoreIntegration } from 'launchdarkly-api-typescript';

const instance: BigSegmentStoreIntegration = {
    _links,
    _id,
    integrationKey,
    projectKey,
    environmentKey,
    config,
    on,
    tags,
    name,
    version,
    _access,
    _status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
