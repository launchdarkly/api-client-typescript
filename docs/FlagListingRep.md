# FlagListingRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The flag name | [default to undefined]
**key** | **string** | The flag key | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [optional] [default to undefined]
**_site** | [**Link**](Link.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlagListingRep } from 'launchdarkly-api-typescript';

const instance: FlagListingRep = {
    name,
    key,
    _links,
    _site,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
