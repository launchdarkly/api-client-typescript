# CustomWorkflowsListingOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;CustomWorkflowOutput&gt;**](CustomWorkflowOutput.md) | An array of workflows | [default to undefined]
**totalCount** | **number** | Total number of workflows | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]

## Example

```typescript
import { CustomWorkflowsListingOutput } from 'launchdarkly-api-typescript';

const instance: CustomWorkflowsListingOutput = {
    items,
    totalCount,
    _links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
