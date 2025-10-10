# HoldoutsCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;SimpleHoldoutRep&gt;**](SimpleHoldoutRep.md) |  | [optional] [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**total_count** | **number** | The total number of holdouts in this project and environment. | [optional] [default to undefined]

## Example

```typescript
import { HoldoutsCollectionRep } from 'launchdarkly-api-typescript';

const instance: HoldoutsCollectionRep = {
    items,
    _links,
    total_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
