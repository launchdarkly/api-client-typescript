# StatisticCollectionRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flags** | **{ [key: string]: Array&lt;StatisticRep&gt;; }** | A map of flag keys to a list of code reference statistics for each code repository in which the flag key appears | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { StatisticCollectionRep } from 'launchdarkly-api-typescript';

const instance: StatisticCollectionRep = {
    flags,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
