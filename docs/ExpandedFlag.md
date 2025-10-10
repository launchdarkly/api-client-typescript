# ExpandedFlag

Flag representation for Views API - contains only fields actually used by the Views service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key used to reference the flag | [default to undefined]
**name** | **string** | A human-friendly name for the flag | [default to undefined]
**description** | **string** | Description of the flag | [optional] [default to undefined]
**creationDate** | **number** | Creation date in milliseconds | [optional] [default to undefined]
**version** | **number** | Version of the flag | [optional] [default to undefined]
**archived** | **boolean** | Whether the flag is archived | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the flag | [optional] [default to undefined]
**temporary** | **boolean** | Whether the flag is temporary | [optional] [default to undefined]
**includeInSnippet** | **boolean** | Whether to include in snippet | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpandedFlag } from 'launchdarkly-api-typescript';

const instance: ExpandedFlag = {
    key,
    name,
    description,
    creationDate,
    version,
    archived,
    tags,
    temporary,
    includeInSnippet,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
