# SnippetReference

A usage of a prompt snippet in a specific config variation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aiConfigKey** | **string** | The key of the config with a variation that references this snippet. | [default to undefined]
**aiConfigName** | **string** | The name of the config with a variation that references this snippet. | [default to undefined]
**variationId** | **string** | The ID of the variation that references this snippet. | [default to undefined]
**variationKey** | **string** | The key of the config variation that references this snippet. | [default to undefined]
**variationName** | **string** | The name of the variation that references this snippet. | [default to undefined]
**resourceVersion** | **number** | The version of the snippet being referenced. | [default to undefined]

## Example

```typescript
import { SnippetReference } from 'launchdarkly-api-typescript';

const instance: SnippetReference = {
    aiConfigKey,
    aiConfigName,
    variationId,
    variationKey,
    variationName,
    resourceVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
