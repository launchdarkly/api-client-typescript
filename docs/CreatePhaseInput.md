# CreatePhaseInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audiences** | [**Array&lt;AudiencePost&gt;**](AudiencePost.md) | An ordered list of the audiences for this release phase. Each audience corresponds to a LaunchDarkly environment. | [default to undefined]
**name** | **string** | The release phase name | [default to undefined]
**configuration** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { CreatePhaseInput } from 'launchdarkly-api-typescript';

const instance: CreatePhaseInput = {
    audiences,
    name,
    configuration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
