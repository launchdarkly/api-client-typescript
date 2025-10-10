# ExpiringUserTargetItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of this expiring user target | [default to undefined]
**_version** | **number** | The version of this expiring user target | [default to undefined]
**expirationDate** | **number** |  | [default to undefined]
**userKey** | **string** | A unique key used to represent the user | [default to undefined]
**targetType** | **string** | A segment\&#39;s target type. Included when expiring user targets are updated on a segment. | [optional] [default to undefined]
**variationId** | **string** | A unique key used to represent the flag variation. Included when expiring user targets are updated on a feature flag. | [optional] [default to undefined]
**_resourceId** | [**ResourceIDResponse**](ResourceIDResponse.md) |  | [default to undefined]

## Example

```typescript
import { ExpiringUserTargetItem } from 'launchdarkly-api-typescript';

const instance: ExpiringUserTargetItem = {
    _id,
    _version,
    expirationDate,
    userKey,
    targetType,
    variationId,
    _resourceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
