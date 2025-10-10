# PutBranch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The branch name | [default to undefined]
**head** | **string** | An ID representing the branch HEAD. For example, a commit SHA. | [default to undefined]
**updateSequenceId** | **number** | An optional ID used to prevent older data from overwriting newer data. If no sequence ID is included, the newly submitted data will always be saved. | [optional] [default to undefined]
**syncTime** | **number** |  | [default to undefined]
**references** | [**Array&lt;ReferenceRep&gt;**](ReferenceRep.md) | An array of flag references found on the branch | [optional] [default to undefined]
**commitTime** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { PutBranch } from 'launchdarkly-api-typescript';

const instance: PutBranch = {
    name,
    head,
    updateSequenceId,
    syncTime,
    references,
    commitTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
