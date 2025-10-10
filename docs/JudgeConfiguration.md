# JudgeConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**judges** | [**Array&lt;JudgeAttachment&gt;**](JudgeAttachment.md) | List of judges for this variation. When updating, this replaces all existing judge attachments, and if empty, removes all judge attachments.  | [optional] [default to undefined]

## Example

```typescript
import { JudgeConfiguration } from 'launchdarkly-api-typescript';

const instance: JudgeConfiguration = {
    judges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
