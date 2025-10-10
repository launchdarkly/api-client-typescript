# ExpandedFlagRep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | A human-friendly name for the feature flag | [default to undefined]
**kind** | **string** | Kind of feature flag | [default to undefined]
**description** | **string** | Description of the feature flag | [optional] [default to undefined]
**key** | **string** | A unique key used to reference the flag in your code | [default to undefined]
**_version** | **number** | Version of the feature flag | [default to undefined]
**creationDate** | **number** |  | [default to undefined]
**includeInSnippet** | **boolean** | Deprecated, use &lt;code&gt;clientSideAvailability&lt;/code&gt;. Whether this flag should be made available to the client-side JavaScript SDK | [optional] [default to undefined]
**clientSideAvailability** | [**ClientSideAvailability**](ClientSideAvailability.md) |  | [optional] [default to undefined]
**variations** | [**Array&lt;Variation&gt;**](Variation.md) | An array of possible variations for the flag | [default to undefined]
**temporary** | **boolean** | Whether the flag is a temporary flag | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for the feature flag | [default to undefined]
**_links** | [**{ [key: string]: Link; }**](Link.md) | The location and content type of related resources | [default to undefined]
**maintainerId** | **string** | The ID of the member who maintains the flag | [optional] [default to undefined]
**_maintainer** | [**MemberSummary**](MemberSummary.md) |  | [optional] [default to undefined]
**customProperties** | [**{ [key: string]: CustomProperty; }**](CustomProperty.md) |  | [default to undefined]
**archived** | **boolean** | Boolean indicating if the feature flag is archived | [default to undefined]
**archivedDate** | **number** |  | [optional] [default to undefined]
**defaults** | [**Defaults**](Defaults.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExpandedFlagRep } from 'launchdarkly-api-typescript';

const instance: ExpandedFlagRep = {
    name,
    kind,
    description,
    key,
    _version,
    creationDate,
    includeInSnippet,
    clientSideAvailability,
    variations,
    temporary,
    tags,
    _links,
    maintainerId,
    _maintainer,
    customProperties,
    archived,
    archivedDate,
    defaults,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
