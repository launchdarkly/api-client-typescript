# FlagImportStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | The current status of the import integrations related import job | [optional] [default to undefined]
**lastImport** | **number** |  | [optional] [default to undefined]
**lastError** | **number** |  | [optional] [default to undefined]
**errors** | [**Array&lt;StatusResponse&gt;**](StatusResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FlagImportStatus } from 'launchdarkly-api-typescript';

const instance: FlagImportStatus = {
    status,
    lastImport,
    lastError,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
