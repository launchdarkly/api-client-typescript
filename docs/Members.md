# Members


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;Member&gt;**](Member.md) | An array of members | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**totalCount** | **number** | The number of members returned | [optional] [default to undefined]

## Example

```typescript
import { Members } from 'launchdarkly-api-typescript';

const instance: Members = {
    items,
    _links,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
