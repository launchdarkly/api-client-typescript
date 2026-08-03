# StaleFlagData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**readyForCodeRemoval** | **boolean** | Whether the flag is ready for code removal | [optional] [default to undefined]
**readyToArchive** | **boolean** | Whether the flag is ready to be archived | [optional] [default to undefined]
**cleanupId** | **string** | If a third-party system helps clean up the flag, the ID from that system | [optional] [default to undefined]

## Example

```typescript
import { StaleFlagData } from 'launchdarkly-api-typescript';

const instance: StaleFlagData = {
    readyForCodeRemoval,
    readyToArchive,
    cleanupId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
