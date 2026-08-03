# IpAllowlistResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**IPAllowlistSelfLink**](IPAllowlistSelfLink.md) |  | [optional] [default to undefined]
**sessionAllowlistEnabled** | **boolean** |  | [default to undefined]
**apiTokenAllowlistEnabled** | **boolean** |  | [default to undefined]
**totalCount** | **number** | The total number of entries matching the query, before pagination. | [optional] [default to undefined]
**entries** | [**Array&lt;IpAllowlistEntryResponse&gt;**](IpAllowlistEntryResponse.md) |  | [default to undefined]

## Example

```typescript
import { IpAllowlistResponse } from 'launchdarkly-api-typescript';

const instance: IpAllowlistResponse = {
    _links,
    sessionAllowlistEnabled,
    apiTokenAllowlistEnabled,
    totalCount,
    entries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
