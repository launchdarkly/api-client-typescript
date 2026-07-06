# RedshiftDataExportCompletedArtifactsRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sqlSetupScript** | **string** | The SQL setup script originally run against the Redshift cluster, rehydrated from the destination\&#39;s persisted custom names. | [optional] [default to undefined]
**s3BucketName** | **string** | The auto-generated S3 staging bucket name. | [optional] [default to undefined]

## Example

```typescript
import { RedshiftDataExportCompletedArtifactsRep } from 'launchdarkly-api-typescript';

const instance: RedshiftDataExportCompletedArtifactsRep = {
    sqlSetupScript,
    s3BucketName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
