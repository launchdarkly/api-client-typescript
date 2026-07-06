# WarehouseSetupScriptPostBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**snowflakeHostAddress** | **string** |  | [optional] [default to undefined]
**databaseName** | **string** |  | [optional] [default to undefined]
**warehouseName** | **string** |  | [optional] [default to undefined]
**roleName** | **string** |  | [optional] [default to undefined]
**schemaName** | **string** |  | [optional] [default to undefined]
**userName** | **string** |  | [optional] [default to undefined]
**includeNetworkPolicy** | **boolean** |  | [optional] [default to undefined]
**clusterIdentifier** | **string** |  | [optional] [default to undefined]
**clusterRegion** | **string** |  | [optional] [default to undefined]
**clusterAwsAccountId** | **string** |  | [optional] [default to undefined]
**endpoint** | **string** |  | [optional] [default to undefined]
**clickHouseDatabaseName** | **string** |  | [optional] [default to undefined]
**clickHouseUserName** | **string** |  | [optional] [default to undefined]
**clickHouseS3BucketName** | **string** |  | [optional] [default to undefined]
**clickHouseIncludeHostRestriction** | **boolean** |  | [optional] [default to undefined]
**clickHouseServiceRoleArn** | **string** |  | [optional] [default to undefined]
**clickHousePassword** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WarehouseSetupScriptPostBody } from 'launchdarkly-api-typescript';

const instance: WarehouseSetupScriptPostBody = {
    name,
    snowflakeHostAddress,
    databaseName,
    warehouseName,
    roleName,
    schemaName,
    userName,
    includeNetworkPolicy,
    clusterIdentifier,
    clusterRegion,
    clusterAwsAccountId,
    endpoint,
    clickHouseDatabaseName,
    clickHouseUserName,
    clickHouseS3BucketName,
    clickHouseIncludeHostRestriction,
    clickHouseServiceRoleArn,
    clickHousePassword,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
