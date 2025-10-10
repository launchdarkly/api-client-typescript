# ReviewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** | The approval request ID | [default to undefined]
**kind** | **string** | The type of review action to take | [default to undefined]
**creationDate** | **number** |  | [optional] [default to undefined]
**comment** | **string** | A comment describing the approval response | [optional] [default to undefined]
**memberId** | **string** | ID of account member that reviewed request | [optional] [default to undefined]
**serviceTokenId** | **string** | ID of account service token that reviewed request | [optional] [default to undefined]

## Example

```typescript
import { ReviewResponse } from 'launchdarkly-api-typescript';

const instance: ReviewResponse = {
    _id,
    kind,
    creationDate,
    comment,
    memberId,
    serviceTokenId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
