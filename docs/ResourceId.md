# ResourceId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environmentKey** | **string** | The environment key | [optional] [default to undefined]
**flagKey** | **string** | Deprecated, use &lt;code&gt;key&lt;/code&gt; instead | [optional] [default to undefined]
**key** | **string** | The key of the flag or segment | [optional] [default to undefined]
**kind** | **string** |  | [optional] [default to undefined]
**projectKey** | **string** | The project key | [optional] [default to undefined]

## Example

```typescript
import { ResourceId } from 'launchdarkly-api-typescript';

const instance: ResourceId = {
    environmentKey,
    flagKey,
    key,
    kind,
    projectKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
