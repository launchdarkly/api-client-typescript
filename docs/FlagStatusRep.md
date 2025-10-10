# FlagStatusRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Status of the flag | [default to undefined]
**lastRequested** | **string** | Timestamp of last time flag was requested | [optional] [default to undefined]
**_default** | **any** | Default value seen from code | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) |  | [default to undefined]

## Example

```typescript
import { FlagStatusRep } from 'launchdarkly-api-typescript';

const instance: FlagStatusRep = {
    name,
    lastRequested,
    _default,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
