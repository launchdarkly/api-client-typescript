# CreateAnnouncementBody

Create announcement request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isDismissible** | **boolean** | true if the announcement is dismissible | [default to undefined]
**title** | **string** | The title of the announcement | [default to undefined]
**message** | **string** | The message of the announcement | [default to undefined]
**startTime** | **number** | The start time of the announcement. This is a Unix timestamp in milliseconds. | [default to undefined]
**endTime** | **number** | The end time of the announcement. This is a Unix timestamp in milliseconds. | [optional] [default to undefined]
**severity** | **string** | The severity of the announcement | [default to undefined]

## Example

```typescript
import { CreateAnnouncementBody } from 'launchdarkly-api-typescript';

const instance: CreateAnnouncementBody = {
    isDismissible,
    title,
    message,
    startTime,
    endTime,
    severity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
