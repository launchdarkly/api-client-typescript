# AgentSkill


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The agent skill key | [default to undefined]
**_access** | [**AiConfigsAccess**](AiConfigsAccess.md) |  | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**_maintainer** | [**AIConfigMaintainer**](AIConfigMaintainer.md) |  | [optional] [default to undefined]
**name** | **string** | Human-readable name of the agent skill. | [default to undefined]
**description** | **string** | Human-readable description of what the agent skill does. | [optional] [default to undefined]
**markdown** | **string** | The verbatim SKILL.md content of the agent skill | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the agent skill. Tags can be used in custom role policies. | [default to undefined]
**version** | **number** | Version of the agent skill. Starts at 1, and each update that changes the name, description, or markdown creates a new version. Pass this value with &#x60;key&#x60; in a variation\&#39;s &#x60;skills: [{key, version}]&#x60;. | [default to undefined]
**createdAt** | **number** |  | [default to undefined]

## Example

```typescript
import { AgentSkill } from 'launchdarkly-api-typescript';

const instance: AgentSkill = {
    key,
    _access,
    _links,
    _maintainer,
    name,
    description,
    markdown,
    tags,
    version,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
