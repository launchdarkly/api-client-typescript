# AnnouncementPatchOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **string** | The type of operation to perform | [default to undefined]
**path** | **string** | A JSON Pointer string specifying the part of the document to operate on | [default to undefined]
**value** | **any** | A JSON value used in \&quot;add\&quot;, \&quot;replace\&quot;, and \&quot;test\&quot; operations | [optional] [default to undefined]

## Example

```typescript
import { AnnouncementPatchOperation } from 'launchdarkly-api-typescript';

const instance: AnnouncementPatchOperation = {
    op,
    path,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
