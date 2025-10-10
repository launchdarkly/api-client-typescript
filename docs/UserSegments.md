# UserSegments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;UserSegment&gt;**](UserSegment.md) | An array of segments | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**totalCount** | **number** | The total number of segments | [optional] [default to undefined]

## Example

```typescript
import { UserSegments } from 'launchdarkly-api-typescript';

const instance: UserSegments = {
    items,
    _links,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
