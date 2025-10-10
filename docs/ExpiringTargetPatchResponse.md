# ExpiringTargetPatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;ExpiringTarget&gt;**](ExpiringTarget.md) | A list of the results from each instruction | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [optional] [default to undefined]
**totalInstructions** | **number** |  | [optional] [default to undefined]
**successfulInstructions** | **number** |  | [optional] [default to undefined]
**failedInstructions** | **number** |  | [optional] [default to undefined]
**errors** | [**Array&lt;ExpiringTargetError&gt;**](ExpiringTargetError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpiringTargetPatchResponse } from 'launchdarkly-api-typescript';

const instance: ExpiringTargetPatchResponse = {
    items,
    _links,
    totalInstructions,
    successfulInstructions,
    failedInstructions,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
