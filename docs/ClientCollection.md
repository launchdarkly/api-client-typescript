# ClientCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**items** | [**Array&lt;Client&gt;**](Client.md) | List of client objects | [default to undefined]

## Example

```typescript
import { ClientCollection } from 'launchdarkly-api-typescript';

const instance: ClientCollection = {
    _links,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
