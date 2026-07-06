# SdkKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | [**ParentAndSelfLinks**](ParentAndSelfLinks.md) |  | [optional] [default to undefined]
**kind** | [**SdkKeyKind**](SdkKeyKind.md) |  | [default to undefined]
**key** | **string** | The user-defined identifying key of the SDK key. This is used solely to identify an SDK key and is distinct from the value field, which is the actual SDK key value. | [default to undefined]
**name** | **string** | The human-readable name of the SDK key. | [default to undefined]
**description** | **string** | The optional description of the SDK key. | [optional] [default to undefined]
**expiry** | **number** |  | [optional] [default to undefined]
**value** | **string** | The string value of the SDK key. Use this when configuring your SDK. | [default to undefined]
**isDefault** | **boolean** | Indicates if this SDK key is the system-defined default for the environment. There may also be an expiring default SDK key for the environment (not possible with mobile keys). | [default to undefined]
**_createdByMemberId** | **string** | The ID of the member who created the SDK key. This field is immutable. | [optional] [default to undefined]
**_createdAt** | **number** |  | [default to undefined]
**_updatedAt** | **number** |  | [default to undefined]
**_version** | **number** | The auto-incremented version number of the SDK key. | [default to undefined]
**viewSummaries** | [**Array&lt;ViewSummary&gt;**](ViewSummary.md) | Summaries of views associated with the SDK key. | [optional] [default to undefined]

## Example

```typescript
import { SdkKey } from 'launchdarkly-api-typescript';

const instance: SdkKey = {
    _links,
    kind,
    key,
    name,
    description,
    expiry,
    value,
    isDefault,
    _createdByMemberId,
    _createdAt,
    _updatedAt,
    _version,
    viewSummaries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
