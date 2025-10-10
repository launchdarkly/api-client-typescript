# MetricEventDefaultRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **boolean** | Whether to disable defaulting missing unit events when calculating results. Defaults to false | [optional] [default to undefined]
**value** | **number** | The default value applied to missing unit events. Set to 0 when &lt;code&gt;disabled&lt;/code&gt; is false. No other values are currently supported. | [optional] [default to undefined]

## Example

```typescript
import { MetricEventDefaultRep } from 'launchdarkly-api-typescript';

const instance: MetricEventDefaultRep = {
    disabled,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
