# ExpandableApprovalRequestsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;ExpandableApprovalRequestResponse&gt;**](ExpandableApprovalRequestResponse.md) | An array of approval requests | [default to undefined]
**totalCount** | **number** | Total number of approval requests | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { ExpandableApprovalRequestsResponse } from 'launchdarkly-api-typescript';

const instance: ExpandableApprovalRequestsResponse = {
    items,
    totalCount,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
