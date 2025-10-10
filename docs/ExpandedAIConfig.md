# ExpandedAIConfig

AI Config representation for Views API - contains only fields actually used by the Views service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | A unique key used to reference the AI config | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the AI config | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the AI config | [optional] [default to undefined]
**description** | **string** | Description of the AI config | [optional] [default to undefined]
**version** | **number** | Version of the AI config | [optional] [default to undefined]
**createdAt** | **number** | Creation date in milliseconds | [optional] [default to undefined]
**updatedAt** | **number** | Last modification date in milliseconds | [optional] [default to undefined]
**flagKey** | **string** | Key of the flag that this AI config is attached to | [optional] [default to undefined]
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpandedAIConfig } from 'launchdarkly-api-typescript';

const instance: ExpandedAIConfig = {
    key,
    name,
    tags,
    description,
    version,
    createdAt,
    updatedAt,
    flagKey,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
