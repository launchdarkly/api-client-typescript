# AITool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The tool key | [default to undefined]
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**_site** | [**CoreLink**](CoreLink.md) |  | [optional] [default to undefined]
**_maintainer** | [**AIConfigMaintainer**](AIConfigMaintainer.md) |  | [optional] [default to undefined]
**description** | **string** | A description of the tool | [optional] [default to undefined]
**schema** | **object** | JSON Schema defining the tool\&#39;s parameters for LLM consumption | [default to undefined]
**customParameters** | **object** | Custom metadata and configuration for application-level use (not sent to LLM) | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the tool. Tags can be used in custom role policies. | [optional] [default to undefined]
**version** | **number** | Version of the tool. Starts at 1, and each update that changes the description, schema, custom parameters, or tags creates a new version. Pass this value with &#x60;key&#x60; in a variation\&#39;s &#x60;tools: [{key, version}]&#x60;. | [default to undefined]
**createdAt** | **number** |  | [default to undefined]

## Example

```typescript
import { AITool } from 'launchdarkly-api-typescript';

const instance: AITool = {
    key,
    _access,
    _links,
    _site,
    _maintainer,
    description,
    schema,
    customParameters,
    tags,
    version,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
