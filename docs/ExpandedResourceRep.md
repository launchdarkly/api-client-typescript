# ExpandedResourceRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | The type of resource | [default to undefined]
**aiConfig** | [**AIConfigRep**](AIConfigRep.md) |  | [optional] [default to undefined]
**flag** | [**ExpandedFlagRep**](ExpandedFlagRep.md) |  | [optional] [default to undefined]
**segment** | [**UserSegment**](UserSegment.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpandedResourceRep } from 'launchdarkly-api-typescript';

const instance: ExpandedResourceRep = {
    kind,
    aiConfig,
    flag,
    segment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
