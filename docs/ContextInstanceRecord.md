# ContextInstanceRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastSeen** | **string** | Timestamp of the last time an evaluation occurred for this context instance | [optional] [default to undefined]
**id** | **string** | The context instance ID | [default to undefined]
**applicationId** | **string** | An identifier representing the application where the LaunchDarkly SDK is running | [optional] [default to undefined]
**anonymousKinds** | **Array&lt;string&gt;** | A list of the context kinds this context was associated with that the SDK removed because they were marked as anonymous at flag evaluation | [optional] [default to undefined]
**context** | **any** | The context, including its kind and attributes | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ContextInstanceRecord } from 'launchdarkly-api-typescript';

const instance: ContextInstanceRecord = {
    lastSeen,
    id,
    applicationId,
    anonymousKinds,
    context,
    _links,
    _access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
