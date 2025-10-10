# PostInsightGroupParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the insight group | [default to undefined]
**key** | **string** | The key of the insight group | [default to undefined]
**projectKey** | **string** | The projectKey to be associated with the insight group | [default to undefined]
**environmentKey** | **string** | The environmentKey to be associated with the insight group | [default to undefined]
**applicationKeys** | **Array&lt;string&gt;** | The application keys to associate with the insight group. If not provided, the insight group will include data from all applications. | [optional] [default to undefined]

## Example

```typescript
import { PostInsightGroupParams } from 'launchdarkly-api-typescript';

const instance: PostInsightGroupParams = {
    name,
    key,
    projectKey,
    environmentKey,
    applicationKeys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
