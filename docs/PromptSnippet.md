# PromptSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**_maintainer** | [**AIConfigMaintainer**](AIConfigMaintainer.md) |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**text** | **string** | The text content of the prompt snippet | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**version** | **number** |  | [default to undefined]
**createdAt** | **number** |  | [default to undefined]

## Example

```typescript
import { PromptSnippet } from 'launchdarkly-api-typescript';

const instance: PromptSnippet = {
    key,
    _access,
    _links,
    _maintainer,
    name,
    description,
    text,
    tags,
    version,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
