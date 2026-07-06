# IpList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **Array&lt;string&gt;** | A list of IP addresses used by the LaunchDarkly service | [default to undefined]
**outboundAddresses** | **Array&lt;string&gt;** | A list of the IP addresses outgoing webhook notifications use | [default to undefined]

## Example

```typescript
import { IpList } from 'launchdarkly-api-typescript';

const instance: IpList = {
    addresses,
    outboundAddresses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
