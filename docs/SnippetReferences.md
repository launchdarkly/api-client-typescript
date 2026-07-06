# SnippetReferences


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**PaginatedLinks**](PaginatedLinks.md) |  | [optional] [default to undefined]
**resourceKey** | **string** | The key of the prompt snippet. | [default to undefined]
**resourceType** | **string** | The type of the resource being referenced. | [default to undefined]
**items** | [**Array&lt;SnippetReference&gt;**](SnippetReference.md) |  | [default to undefined]
**totalCount** | **number** | The total number of references. | [default to undefined]

## Example

```typescript
import { SnippetReferences } from 'launchdarkly-api-typescript';

const instance: SnippetReferences = {
    _links,
    resourceKey,
    resourceType,
    items,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
