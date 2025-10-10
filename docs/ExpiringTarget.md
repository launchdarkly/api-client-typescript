# ExpiringTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of this expiring target | [default to undefined]
**_version** | **number** | The version of this expiring target | [default to undefined]
**expirationDate** | **number** |  | [default to undefined]
**contextKind** | **string** | The context kind of the context to be removed | [default to undefined]
**contextKey** | **string** | A unique key used to represent the context to be removed | [default to undefined]
**targetType** | **string** | A segment\&#39;s target type, &lt;code&gt;included&lt;/code&gt; or &lt;code&gt;excluded&lt;/code&gt;. Included when expiring targets are updated on a segment. | [optional] [default to undefined]
**variationId** | **string** | A unique ID used to represent the flag variation. Included when expiring targets are updated on a feature flag. | [optional] [default to undefined]
**_resourceId** | [**ResourceId**](ResourceId.md) |  | [default to undefined]

## Example

```typescript
import { ExpiringTarget } from 'launchdarkly-api-typescript';

const instance: ExpiringTarget = {
    _id,
    _version,
    expirationDate,
    contextKind,
    contextKey,
    targetType,
    variationId,
    _resourceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
