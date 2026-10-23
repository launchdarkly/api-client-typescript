# Classifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**instructions** | **string** |  | [default to undefined]
**criteria** | **any** | Type-specific criteria. An enum classifier uses a map of option keys to descriptions. A float classifier uses an ordered list of level labels. A bool classifier uses optional true and false descriptions.  | [optional] [default to undefined]

## Example

```typescript
import { Classifier } from 'launchdarkly-api-typescript';

const instance: Classifier = {
    key,
    type,
    instructions,
    criteria,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
