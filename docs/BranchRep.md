# BranchRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The branch name | [default to undefined]
**head** | **string** | An ID representing the branch HEAD. For example, a commit SHA. | [default to undefined]
**updateSequenceId** | **number** | An optional ID used to prevent older data from overwriting newer data | [optional] [default to undefined]
**syncTime** | **number** |  | [default to undefined]
**references** | [**Array&lt;ReferenceRep&gt;**](ReferenceRep.md) | An array of flag references found on the branch | [optional] [default to undefined]
**_links** | **{ [key: string]: any; }** | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { BranchRep } from 'launchdarkly-api-typescript';

const instance: BranchRep = {
    name,
    head,
    updateSequenceId,
    syncTime,
    references,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
