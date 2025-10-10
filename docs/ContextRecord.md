# ContextRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastSeen** | **string** | Timestamp of the last time an evaluation occurred for this context | [optional] [default to undefined]
**applicationId** | **string** | An identifier representing the application where the LaunchDarkly SDK is running | [optional] [default to undefined]
**context** | **any** | The context, including its kind and attributes | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**associatedContexts** | **number** | The total number of associated contexts. Associated contexts are contexts that have appeared in the same context instance, that is, they were part of the same flag evaluation. | [optional] [default to undefined]

## Example

```typescript
import { ContextRecord } from 'launchdarkly-api-typescript';

const instance: ContextRecord = {
    lastSeen,
    applicationId,
    context,
    _links,
    _access,
    associatedContexts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
