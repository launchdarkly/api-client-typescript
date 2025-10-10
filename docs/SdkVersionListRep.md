# SdkVersionListRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_links** | **{ [key: string]: any; }** | The location and content type of related resources | [default to undefined]
**sdkVersions** | [**Array&lt;SdkVersionRep&gt;**](SdkVersionRep.md) | The list of SDK names and versions | [default to undefined]

## Example

```typescript
import { SdkVersionListRep } from 'launchdarkly-api-typescript';

const instance: SdkVersionListRep = {
    _links,
    sdkVersions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
