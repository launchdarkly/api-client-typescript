# PromptSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The prompt snippet key | [default to undefined]
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**_site** | [**CoreLink**](CoreLink.md) |  | [optional] [default to undefined]
**_maintainer** | [**AIConfigMaintainer**](AIConfigMaintainer.md) |  | [optional] [default to undefined]
**name** | **string** | The prompt snippet name | [default to undefined]
**description** | **string** | A description of the prompt snippet | [optional] [default to undefined]
**text** | **string** | The text content of the prompt snippet | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for this resource | [default to undefined]
**version** | **number** | The version number of this resource | [default to undefined]
**createdAt** | **number** |  | [default to undefined]

## Example

```typescript
import { PromptSnippet } from 'launchdarkly-api-typescript';

const instance: PromptSnippet = {
    key,
    _access,
    _links,
    _site,
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
