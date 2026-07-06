# WarehouseDestinationSetupScriptRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **string** | The SQL setup script to run in your data warehouse | [optional] [default to undefined]
**publicKey** | **string** | The RSA public key (Snowflake only) to store as the destination public_key | [optional] [default to undefined]
**publicKeyPkcs8** | **string** | The PKCS8 RSA public key (Snowflake only) | [optional] [default to undefined]
**redshiftIAMPermissionsPolicy** | **string** | For Redshift, present only when clusterIdentifier, clusterRegion, and clusterAwsAccountId are supplied in the request body. | [optional] [default to undefined]
**redshiftIAMTrustPolicy** | **string** | For Redshift, present only when clusterIdentifier, clusterRegion, and clusterAwsAccountId are supplied in the request body. | [optional] [default to undefined]
**s3BucketName** | **string** | The auto-generated S3 staging bucket name (ClickHouse and Redshift) | [optional] [default to undefined]

## Example

```typescript
import { WarehouseDestinationSetupScriptRep } from 'launchdarkly-api-typescript';

const instance: WarehouseDestinationSetupScriptRep = {
    script,
    publicKey,
    publicKeyPkcs8,
    redshiftIAMPermissionsPolicy,
    redshiftIAMTrustPolicy,
    s3BucketName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
