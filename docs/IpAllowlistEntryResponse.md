# IpAllowlistEntryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | Unique identifier for the allowlist entry | [default to undefined]
**ipAddress** | **string** | IP address or CIDR block | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**_createdByMemberId** | **string** |  | [optional] [default to undefined]
**_createdAt** | **number** |  | [default to undefined]
**_updatedAt** | **number** |  | [default to undefined]

## Example

```typescript
import { IpAllowlistEntryResponse } from 'launchdarkly-api-typescript';

const instance: IpAllowlistEntryResponse = {
    _id,
    ipAddress,
    description,
    _createdByMemberId,
    _createdAt,
    _updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
