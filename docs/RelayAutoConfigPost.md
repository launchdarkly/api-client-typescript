# RelayAutoConfigPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the Relay Proxy configuration | [default to undefined]
**policy** | [**Array&lt;Statement&gt;**](Statement.md) | A description of what environments and projects the Relay Proxy should include or exclude. To learn more, read [Write an inline policy](https://launchdarkly.com/docs/sdk/relay-proxy/automatic-configuration#write-an-inline-policy). | [default to undefined]

## Example

```typescript
import { RelayAutoConfigPost } from 'launchdarkly-api-typescript';

const instance: RelayAutoConfigPost = {
    name,
    policy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
