# UserFlagSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources. | [default to undefined]
**_value** | **any** | The value of the flag variation that the user receives. If there is no defined default rule, this is null. | [default to undefined]
**setting** | **any** | Whether the user is explicitly targeted to receive a particular variation. The setting is false if you have turned off a feature flag for a user. It is null if you haven\&#39;t assigned that user to a specific variation. | [default to undefined]
**reason** | [**EvaluationReason**](EvaluationReason.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserFlagSetting } from 'launchdarkly-api-typescript';

const instance: UserFlagSetting = {
    _links,
    _value,
    setting,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
