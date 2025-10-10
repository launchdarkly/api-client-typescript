# Variation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The ID of the variation. Leave empty when you are creating a flag. | [optional] [default to undefined]
**value** | **any** | The value of the variation. For boolean flags, this must be &lt;code&gt;true&lt;/code&gt; or &lt;code&gt;false&lt;/code&gt;. For multivariate flags, this may be a string, number, or JSON object. | [default to undefined]
**description** | **string** | Description of the variation. Defaults to an empty string, but is omitted from the response if not set. | [optional] [default to undefined]
**name** | **string** | A human-friendly name for the variation. Defaults to an empty string, but is omitted from the response if not set. | [optional] [default to undefined]

## Example

```typescript
import { Variation } from 'launchdarkly-api-typescript';

const instance: Variation = {
    _id,
    value,
    description,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
