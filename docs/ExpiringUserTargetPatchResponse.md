# ExpiringUserTargetPatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;ExpiringUserTargetItem&gt;**](ExpiringUserTargetItem.md) | An array of expiring user targets | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**totalInstructions** | **number** | The total count of instructions sent in the PATCH request | [optional] [default to undefined]
**successfulInstructions** | **number** | The total count of successful instructions sent in the PATCH request | [optional] [default to undefined]
**failedInstructions** | **number** | The total count of the failed instructions sent in the PATCH request | [optional] [default to undefined]
**errors** | [**Array&lt;ExpiringTargetError&gt;**](ExpiringTargetError.md) | An array of error messages for the failed instructions | [optional] [default to undefined]

## Example

```typescript
import { ExpiringUserTargetPatchResponse } from 'launchdarkly-api-typescript';

const instance: ExpiringUserTargetPatchResponse = {
    items,
    _links,
    totalInstructions,
    successfulInstructions,
    failedInstructions,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
