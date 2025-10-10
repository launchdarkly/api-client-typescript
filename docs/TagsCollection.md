# TagsCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **Array&lt;string&gt;** | List of tags | [default to undefined]
**_links** | [**{ [key: string]: TagsLink; }**](TagsLink.md) |  | [default to undefined]
**totalCount** | **number** | The total number of tags | [optional] [default to undefined]

## Example

```typescript
import { TagsCollection } from 'launchdarkly-api-typescript';

const instance: TagsCollection = {
    items,
    _links,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
