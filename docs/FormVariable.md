# FormVariable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**placeholder** | **string** |  | [optional] [default to undefined]
**isOptional** | **boolean** |  | [optional] [default to undefined]
**defaultValue** | **any** |  | [optional] [default to undefined]
**allowedValues** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**dynamicOptions** | [**DynamicOptions**](DynamicOptions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FormVariable } from 'launchdarkly-api-typescript';

const instance: FormVariable = {
    key,
    name,
    type,
    description,
    placeholder,
    isOptional,
    defaultValue,
    allowedValues,
    dynamicOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
