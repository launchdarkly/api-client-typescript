# CustomRoles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**items** | [**Array&lt;CustomRole&gt;**](CustomRole.md) | An array of custom roles | [default to undefined]
**totalCount** | **number** | The total number of custom roles | [optional] [default to undefined]

## Example

```typescript
import { CustomRoles } from 'launchdarkly-api-typescript';

const instance: CustomRoles = {
    _links,
    items,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
