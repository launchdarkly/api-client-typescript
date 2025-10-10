# ReleasePipeline


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | Timestamp of when the release pipeline was created | [default to undefined]
**description** | **string** | The release pipeline description | [optional] [default to undefined]
**key** | **string** | The release pipeline key | [default to undefined]
**name** | **string** | The release pipeline name | [default to undefined]
**phases** | [**Array&lt;Phase&gt;**](Phase.md) | An ordered list of the release pipeline phases. Each phase is a logical grouping of one or more environments that share attributes for rolling out changes. | [default to undefined]
**tags** | **Array&lt;string&gt;** | A list of the release pipeline\&#39;s tags | [optional] [default to undefined]
**_version** | **number** | The release pipeline version | [optional] [default to undefined]
**_access** | [**Access**](Access.md) |  | [optional] [default to undefined]
**isProjectDefault** | **boolean** | Whether this release pipeline is the default pipeline for the project | [optional] [default to undefined]
**_isLegacy** | **boolean** | Whether this release pipeline is a legacy pipeline | [optional] [default to undefined]

## Example

```typescript
import { ReleasePipeline } from 'launchdarkly-api-typescript';

const instance: ReleasePipeline = {
    createdAt,
    description,
    key,
    name,
    phases,
    tags,
    _version,
    _access,
    isProjectDefault,
    _isLegacy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
