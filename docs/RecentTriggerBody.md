# RecentTriggerBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **number** |  | [optional] [default to undefined]
**jsonBody** | **{ [key: string]: any; }** | The marshalled JSON request body for the incoming trigger webhook. If this is empty or contains invalid JSON, the timestamp is recorded but this field will be empty. | [optional] [default to undefined]

## Example

```typescript
import { RecentTriggerBody } from 'launchdarkly-api-typescript';

const instance: RecentTriggerBody = {
    timestamp,
    jsonBody,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
